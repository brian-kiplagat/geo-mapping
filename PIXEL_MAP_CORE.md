# Pixel Map Hover Tooltip - Core Functionality

How the pixel map system encodes data, detects hover, converts pixel values, and displays tooltips.

## 1. Data Encoding

### RGB Channel Mapping
Scientific data is encoded into separate "texture" image files using RGB channels:

```javascript
{
  "Bastnasite wt%": {
    "channel": 0,        // Red channel stores this metric
    "texture": "bastnasite-2422x1458_tex0",
    "min": 0,
    "max": 12.4
  },
  "Barite wt%": {
    "channel": 1,        // Green channel stores this metric
    "texture": "bastnasite-2422x1458_tex0",
    "min": 0,
    "max": 40
  },
  "Calcite wt%": {
    "channel": 2,        // Blue channel stores this metric
    "texture": "bastnasite-2422x1458_tex0",
    "min": 0,
    "max": 20
  }
}
```

**Key Points:**
- **Red Channel (0)**: Stores first metric
- **Green Channel (1)**: Stores second metric  
- **Blue Channel (2)**: Stores third metric
- Each texture image can store 3 metrics (one per RGB channel)
- Multiple texture files can be used for more metrics

### Texture Images vs Visible Image
- **Visible image** (`bastnasite-2422x1458-1.jpg`): What you see, just for display
- **Texture images** (`bastnasite-2422x1458_tex0.png`): Hidden images containing the actual data

## 2. Hover Detection

### Coordinate Conversion
The system converts mouse coordinates to pixel coordinates:

```javascript
processMouseMove(event) {
    const rect = this.imageElement.getBoundingClientRect();
    const displayedWidth = rect.width;
    const displayedHeight = rect.height;
    const naturalWidth = this.imageElement.naturalWidth;
    const naturalHeight = this.imageElement.naturalHeight;
    
    // Calculate mouse position relative to image
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    let imageX, imageY;
    const imageAspect = naturalWidth / naturalHeight;
    const displayedAspect = displayedWidth / displayedHeight;
    
    // Handle image scaling/letterboxing
    if (imageAspect > displayedAspect) {
        // Image is wider - letterboxed on top/bottom
        const scaledWidth = naturalWidth * (displayedHeight / naturalHeight);
        const offsetX = (scaledWidth - displayedWidth) / 2;
        imageX = Math.floor(((mouseX + offsetX) / scaledWidth) * naturalWidth);
        imageY = Math.floor((mouseY / displayedHeight) * naturalHeight);
    } else {
        // Image is taller - letterboxed on left/right
        const scaledHeight = naturalHeight * (displayedWidth / naturalWidth);
        const offsetY = (scaledHeight - displayedHeight) / 2;
        imageX = Math.floor((mouseX / displayedWidth) * naturalWidth);
        imageY = Math.floor(((mouseY + offsetY) / scaledHeight) * naturalHeight);
    }
    
    // Clamp to image bounds
    imageX = Math.max(0, Math.min(naturalWidth - 1, imageX));
    imageY = Math.max(0, Math.min(naturalHeight - 1, imageY));
    
    return { x: imageX, y: imageY };
}
```

### Reading Pixel Data
Uses HTML5 Canvas to read pixel data from texture images:

```javascript
getPixelMetadata(x, y) {
    const metadata = {};
    let currentTexture = null;
    let imageData = null;
    
    Object.keys(this.keyMap).forEach(metricName => {
        const config = this.keyMap[metricName];
        const { channel, texture, min, max, dp, uniqueValues } = config;
        
        const textureImage = this.images[texture];
        
        // Switch texture if needed
        if (textureImage !== currentTexture) {
            // Reset and resize canvas
            this.context.resetTransform();
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.canvas.width = textureImage.naturalWidth;
            this.canvas.height = textureImage.naturalHeight;
            this.context.imageSmoothingEnabled = false;
            
            // Draw texture to canvas
            this.context.drawImage(textureImage, 0, 0);
            
            // Read pixel data at (x, y) - returns RGBA array [R, G, B, A]
            imageData = this.context.getImageData(x, y, 1, 1).data;
            
            currentTexture = textureImage;
        }
        
        // Extract value from specified channel
        const pixelValue = imageData[channel]; // 0=R, 1=G, 2=B
        
        // Skip if no data (pixel value is 0)
        if (pixelValue === 0) return;
        
        // Store metadata for this metric
        if (uniqueValues) {
            // Categorical data (e.g., "Yes"/"No")
            metadata[metricName] = uniqueValues[pixelValue];
        } else {
            // Numeric data - will convert next
            metadata[metricName] = { pixelValue, min, max, dp };
        }
    });
    
    return metadata;
}
```

## 3. Value Conversion

### Numeric Data Conversion
Converts pixel values (0-255) to real-world values:

```javascript
function convertPixelToRealValue(pixelValue, min, max, decimalPlaces = 2) {
    // Linear mapping: 0-255 → min-max range
    const realValue = (pixelValue / 255) * (max - min) + min;
    return realValue.toFixed(decimalPlaces);
}
```

**Formula:**
```
Real Value = (Pixel Value / 255) × (Max - Min) + Min
```

**Example:**
```javascript
// Configuration
"Bastnasite wt%": { channel: 0, min: 0, max: 12.4 }

// Pixel value read from texture: 150
const realValue = (150 / 255) × (12.4 - 0) + 0
                 = 0.588 × 12.4
                 = 7.29

// Result: "7.29"
```

### Categorical Data
For categorical values, pixel value is used as array index:

```javascript
// Configuration
"Occupied": {
    "channel": 0,
    "texture": "home_labeled_tex1",
    "uniqueValues": ["Not Defined", "Yes", "No"]
}

// Pixel value: 1 → "Yes"
// Pixel value: 2 → "No"
```

## 4. Tooltip Display

### HTML Structure
```html
<div class="pixel-map__tooltip" style="display: none;">
    <ul class="pixel-map__tooltip-list">
        <li class="pixel-map__tooltip-item">
            <p class="pixel-map__tooltip-label">Bastnasite wt%</p>
            <p class="pixel-map__tooltip-text">7.39</p>
        </li>
        <li class="pixel-map__tooltip-item">
            <p class="pixel-map__tooltip-label">Barite wt%</p>
            <p class="pixel-map__tooltip-text">12.08</p>
        </li>
    </ul>
</div>
```

### Display Function
```javascript
displayTooltip(metadata, { x, y }) {
    // Check if there's data to show
    if (Object.keys(metadata).length === 0) {
        this.hideTooltip();
        return;
    }
    
    // Build HTML
    let html = '<ul class="pixel-map__tooltip-list">';
    
    Object.keys(metadata).forEach(metricName => {
        const value = metadata[metricName];
        if (value !== undefined) {
            html += `
                <li class="pixel-map__tooltip-item">
                    <p class="pixel-map__tooltip-label">${this.escapeHtml(metricName)}</p>
                    <p class="pixel-map__tooltip-text">${this.escapeHtml(value)}</p>
                </li>
            `;
        }
    });
    
    html += '</ul>';
    
    // Update and show tooltip
    this.tooltipElement.innerHTML = html;
    this.tooltipElement.style.display = 'block';
}
```

### Position Calculation
```javascript
updateTooltipPosition(event) {
    const rect = this.imageElement.getBoundingClientRect();
    const tooltipWidth = this.tooltipElement.offsetWidth;
    const tooltipHeight = this.tooltipElement.offsetHeight;
    
    // Start near cursor
    let left = event.clientX - rect.left + 10;
    let top = event.clientY - rect.top + 10;
    
    // Adjust if would go off right edge
    if (left + tooltipWidth > this.imageElement.width) {
        left = event.clientX - rect.left - tooltipWidth - 10;
    }
    
    // Adjust if would go off bottom edge
    if (top + tooltipHeight > this.imageElement.height) {
        top = this.imageElement.height - tooltipHeight - 10;
    }
    
    // Apply position
    this.tooltipElement.style.left = `${left}px`;
    this.tooltipElement.style.top = `${top}px`;
}
```

## Complete Flow

```
1. Mouse moves over image
   ↓
2. Convert mouse (screen) coordinates → image (pixel) coordinates
   ↓
3. Load appropriate texture image
   ↓
4. Draw texture to canvas at coordinates (x, y)
   ↓
5. Read pixel data: getImageData(x, y, 1, 1) → [R, G, B, A]
   ↓
6. Extract channel value: pixelValue = imageData[channel]
   ↓
7. Convert pixel (0-255) → real value using formula
   ↓
8. Build tooltip HTML with metrics
   ↓
9. Position tooltip near cursor (avoid edges)
   ↓
10. Display tooltip
```

## Key Implementation Notes

**Canvas Setup:**
```javascript
this.canvas = document.createElement('canvas');
this.context = this.canvas.getContext('2d', {
    willReadFrequently: true,      // Optimize for frequent reads
    imageSmoothingEnabled: false   // Prevent interpolation
});
```

**Image Loading (CORS):**
```javascript
const img = new Image();
img.crossOrigin = 'anonymous';  // CRITICAL for cross-origin images
img.src = textureUrl;
```

**Event Handling:**
```javascript
// Debounced mousemove (max once per 100ms)
let lastTime = 0;
imageElement.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime >= 100) {
        processMouseMove(e);
        lastTime = now;
    }
});

imageElement.addEventListener('mouseout', () => {
    hideTooltip();
});
```


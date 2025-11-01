// Pixel Map Data - Extracted from all sections
const PIXEL_MAP_DATA = {
    "mining": {
        keyMap: {
            "Bastnasite wt%": {
                "channel": 0,
                "texture": "bastnasite-2422x1458_tex0",
                "min": 0,
                "max": 12.4
            },
            "Barite wt%": {
                "channel": 1,
                "texture": "bastnasite-2422x1458_tex0",
                "min": 0,
                "max": 40
            },
            "Calcite wt%": {
                "channel": 2,
                "texture": "bastnasite-2422x1458_tex0",
                "min": 0,
                "max": 20
            }
        },
        textures: {
            "bastnasite-2422x1458_tex0.png": "https://matter.com/wp-content/uploads/2024/12/bastnasite-2422x1458_tex0.png"
        }
    },
    "agriculture": {
        keyMap: {
            "Leaf greenness": {
                "channel": 0,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex0",
                "min": 0,
                "max": 100
            },
            "Canopy Nitrogen Content (%)": {
                "channel": 1,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex0",
                "min": 0.8,
                "max": 4.9
            },
            "Relative soil moisture score": {
                "channel": 2,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex0",
                "min": 0,
                "max": 100
            },
            "Soil Organic Carbon (g/kg)": {
                "channel": 0,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex1",
                "min": 2.2,
                "max": 47.5
            },
            "Relative Biomass": {
                "channel": 1,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex1",
                "min": 0,
                "max": 100
            },
            "Drought Risk": {
                "channel": 2,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex1",
                "min": 0,
                "max": 100
            },
            "Relative Leaf Area": {
                "channel": 0,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex2",
                "min": 0,
                "max": 100
            },
            "Yield relative to previous season (%)": {
                "channel": 1,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex2",
                "min": 88,
                "max": 117
            },
            "Pests Detected": {
                "channel": 2,
                "texture": "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex2",
                "min": null,
                "max": null,
                "uniqueValues": ["No"]
            }
        },
        textures: {
            "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex2.png": "https://matter.com/wp-content/uploads/2024/12/output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex2.png",
            "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex1.png": "https://matter.com/wp-content/uploads/2024/12/output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex1.png",
            "output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex0.png": "https://matter.com/wp-content/uploads/2024/12/output_labels_rgb_8class_weighted2_cropped_stretched-rot_tex0.png"
        }
    },
    "emissions": {
        keyMap: {
            "NO2 Column Abundance (mol/m²)": {
                "channel": 0,
                "texture": "gas_overlay_color_tex0",
                "min": 0,
                "max": 0.004306,
                "dp": 6
            },
            "Uncertainty (mol/m²)": {
                "channel": 1,
                "texture": "gas_overlay_color_tex0",
                "min": -0.00001,
                "max": 0.000436,
                "dp": 6
            }
        },
        textures: {
            "gas_overlay_color_tex0.png": "https://matter.com/wp-content/uploads/2024/12/gas_overlay_color_tex0.png"
        }
    },
    "insurance": {
        keyMap: {
            "Roof Material": {
                "channel": 0,
                "texture": "home_labeled_tex0",
                "min": null,
                "max": null,
                "uniqueValues": ["Not Defined", "gray composite shingles", "orange composite shingles", "red clay tile"]
            },
            "Roof Quality Score": {
                "channel": 1,
                "texture": "home_labeled_tex0",
                "min": 51,
                "max": 99
            },
            "Roof Quality Score 3-month Change (%)": {
                "channel": 2,
                "texture": "home_labeled_tex0",
                "min": -5,
                "max": -0.1
            },
            "Occupied": {
                "channel": 0,
                "texture": "home_labeled_tex1",
                "min": null,
                "max": null,
                "uniqueValues": ["Not Defined", "Yes", "No"]
            },
            "Overhanging Vegetation": {
                "channel": 1,
                "texture": "home_labeled_tex1",
                "min": null,
                "max": null,
                "uniqueValues": ["Not Defined", "No", "Yes"]
            },
            "Vegetation Drought Risk": {
                "channel": 2,
                "texture": "home_labeled_tex1",
                "min": null,
                "max": null,
                "uniqueValues": ["Not Defined", "Low"]
            },
            "Pool Quality Score": {
                "channel": 0,
                "texture": "home_labeled_tex2",
                "min": 84,
                "max": 100
            },
            "Pool Quality Score 3-month Change (%)": {
                "channel": 1,
                "texture": "home_labeled_tex2",
                "min": -8.9,
                "max": 9.1
            },
            "Solar Panels": {
                "channel": 2,
                "texture": "home_labeled_tex2",
                "min": null,
                "max": null,
                "uniqueValues": ["Not Defined", "No", "Yes"]
            },
            "Average AQI PM2.5 (µg/m³)": {
                "channel": 0,
                "texture": "home_labeled_tex3",
                "min": 24.2,
                "max": 24.5
            },
            "Average AQI PM10 (µg/m³)": {
                "channel": 1,
                "texture": "home_labeled_tex3",
                "min": 60.1,
                "max": 61
            },
            "Above Ground Biomass (kg)": {
                "channel": 2,
                "texture": "home_labeled_tex3",
                "min": 2852,
                "max": 6265
            },
            "Annual Parcel CO2 Sequestration Estimate (kg/yr)": {
                "channel": 0,
                "texture": "home_labeled_tex4",
                "min": 68,
                "max": 337
            },
            "Relative Thermal Efficiency": {
                "channel": 1,
                "texture": "home_labeled_tex4",
                "min": 84,
                "max": 97
            },
            "Temperature (°C)": {
                "channel": 2,
                "texture": "home_labeled_tex4",
                "min": 23.8,
                "max": 27.2
            },
            "Solar Panel Cleanliness Score": {
                "channel": 0,
                "texture": "home_labeled_tex5",
                "min": 79,
                "max": 94
            }
        },
        textures: {
            "home_labeled_tex5.png": "https://matter.com/wp-content/uploads/2024/12/home_labeled_tex5.png",
            "home_labeled_tex4.png": "https://matter.com/wp-content/uploads/2024/12/home_labeled_tex4.png",
            "home_labeled_tex3.png": "https://matter.com/wp-content/uploads/2024/12/home_labeled_tex3.png",
            "home_labeled_tex2.png": "https://matter.com/wp-content/uploads/2024/12/home_labeled_tex2.png",
            "home_labeled_tex1.png": "https://matter.com/wp-content/uploads/2024/12/home_labeled_tex1.png",
            "home_labeled_tex0.png": "https://matter.com/wp-content/uploads/2024/12/home_labeled_tex0.png"
        }
    },
    "defense": {
        keyMap: {},
        textures: {}
    },
    "emerging-capabilities": {
        keyMap: {},
        textures: {}
    }
};

// Pixel Map Hover Tooltip - Vanilla JavaScript Implementation
class PixelMap {
    constructor(element) {
        this.element = element;
        this.imageElement = element.querySelector('.pixel-map__image');
        this.tooltipElement = element.querySelector('.pixel-map__tooltip');

        // Get section ID to lookup data
        const sectionId = element.id;
        const sectionData = PIXEL_MAP_DATA[sectionId];

        if (!sectionData || !sectionData.keyMap || Object.keys(sectionData.keyMap).length === 0) {
            // No data for this section, skip initialization
            return false;
        }

        this.keyMap = sectionData.keyMap;
        this.textures = sectionData.textures;

        this.images = {};
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d', {
            willReadFrequently: true,
            imageSmoothingEnabled: false
        });

        // Initialize images
        this.initializeImages();
    }

    initializeImages() {
        if (!this.textures || Object.keys(this.textures).length === 0) return;

        // Create promises for all texture image loads
        const loadPromises = Object.keys(this.keyMap).map(key => {
            const config = this.keyMap[key];
            const textureName = config.texture;
            const textureUrl = this.textures[textureName + '.png'];

            if (!textureUrl) return Promise.resolve();

            if (!this.images[textureName]) {
                const img = new Image();
                img.crossOrigin = 'anonymous'; // CRITICAL for CORS
                img.src = textureUrl;
                this.images[textureName] = img;

                return new Promise(resolve => {
                    img.onload = resolve;
                    img.onerror = () => {
                        console.warn('Failed to load texture:', textureUrl);
                        resolve();
                    };
                });
            }

            return Promise.resolve();
        });

        // Once all textures are loaded, setup event listeners
        Promise.all(loadPromises).then(() => {
            this.setupEventListeners();
        });
    }

    setupEventListeners() {
        // Debounced mousemove (max once per 100ms)
        let lastTime = 0;
        const handleMove = (e) => {
            const now = Date.now();
            if (now - lastTime >= 100) {
                this.processMouseMove(e);
                lastTime = now;
            }
        };

        this.imageElement.addEventListener('mousemove', handleMove);
        this.imageElement.addEventListener('mouseout', () => this.hideTooltip());
    }

    processMouseMove(event) {
        const rect = this.imageElement.getBoundingClientRect();
        const displayedWidth = rect.width;
        const displayedHeight = rect.height;
        const naturalWidth = this.imageElement.naturalWidth;
        const naturalHeight = this.imageElement.naturalHeight;

        // Convert displayed coordinates to image coordinates
        let imageX, imageY;
        const imageAspect = naturalWidth / naturalHeight;
        const displayedAspect = displayedWidth / displayedHeight;

        if (imageAspect > displayedAspect) {
            // Image is wider - letterboxed on top/bottom
            const scaledWidth = naturalWidth * (displayedHeight / naturalHeight);
            const offsetX = (scaledWidth - displayedWidth) / 2;
            imageX = Math.floor(((event.clientX - rect.left + offsetX) / scaledWidth) * naturalWidth);
            imageY = Math.floor(((event.clientY - rect.top) / displayedHeight) * naturalHeight);
        } else {
            // Image is taller - letterboxed on left/right
            const scaledHeight = naturalHeight * (displayedWidth / naturalWidth);
            const offsetY = (scaledHeight - displayedHeight) / 2;
            imageX = Math.floor(((event.clientX - rect.left) / displayedWidth) * naturalWidth);
            imageY = Math.floor(((event.clientY - rect.top + offsetY) / scaledHeight) * naturalHeight);
        }

        // Clamp to image bounds
        imageX = Math.max(0, Math.min(naturalWidth - 1, imageX));
        imageY = Math.max(0, Math.min(naturalHeight - 1, imageY));

        const metadata = this.getPixelMetadata(imageX, imageY);
        this.displayTooltip(metadata, { x: imageX, y: imageY });
        this.updateTooltipPosition(event);
    }

    getPixelMetadata(x, y) {
        const metadata = {};
        let currentTexture = null;
        let imageData = null;

        Object.keys(this.keyMap).forEach(metricName => {
            if (metadata[metricName] !== undefined) return; // Already set

            const config = this.keyMap[metricName];
            const { channel, texture, min, max, dp, uniqueValues } = config;

            if (!texture || texture === 'HSI_ortho_tex1') return;

            const textureImage = this.images[texture];
            if (!textureImage) return;

            // If texture changed, redraw canvas
            if (textureImage !== currentTexture) {
                this.context.resetTransform();
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.canvas.width = textureImage.naturalWidth;
                this.canvas.height = textureImage.naturalHeight;
                this.context.imageSmoothingEnabled = false;
                this.context.drawImage(textureImage, 0, 0);
                currentTexture = textureImage;
            }

            // Get image data if not already cached
            if (!imageData) {
                imageData = this.context.getImageData(x, y, 1, 1).data;
            }

            const pixelValue = imageData[channel];

            if (pixelValue === 0) return; // No data

            if (uniqueValues) {
                // Categorical data
                metadata[metricName] = uniqueValues[pixelValue] || '';
            } else {
                // Numeric data - convert pixel value to real value
                const realValue = (pixelValue / 255) * (max - min) + min;
                metadata[metricName] = realValue.toFixed(dp || 2);
            }
        });

        return metadata;
    }

    displayTooltip(metadata, { x, y }) {
        // Check if there's data to show
        if (Object.keys(metadata).length === 0) {
            this.hideTooltip();
            return;
        }

        let hasData = false;
        Object.keys(metadata).forEach(key => {
            if (metadata[key] !== undefined) hasData = true;
        });

        if (!hasData) {
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

    hideTooltip() {
        this.tooltipElement.style.display = 'none';
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize all pixel maps when DOM is ready
function initPixelMaps() {
    document.querySelectorAll('.pixel-map').forEach(element => {
        new PixelMap(element);
    });
}

// Initialize on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPixelMaps);
} else {
    initPixelMaps();
}
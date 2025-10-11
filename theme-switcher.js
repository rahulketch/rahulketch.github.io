// Theme Switcher for Wedding Website

const themes = {
    default: {
        name: 'Elegant Taupe',
        colors: {
            '--primary-color': '#8B7355',
            '--secondary-color': '#5C4033',
            '--accent-color': '#B08968',
            '--burgundy': '#6B2C3E',
            '--text-dark': '#2C2C2C',
            '--text-light': '#F5F5F5',
            '--bg-light': '#FAF8F6',
            '--bg-cream': '#F5F1ED'
        }
    },
    deepRose: {
        name: 'Deep Rose',
        colors: {
            '--primary-color': '#D4145A',
            '--secondary-color': '#990033',
            '--accent-color': '#FF6B9D',
            '--burgundy': '#8B1A3D',
            '--text-dark': '#1A0A0F',
            '--text-light': '#FFFFFF',
            '--bg-light': '#FFF0F5',
            '--bg-cream': '#FFD6E6'
        }
    },
    emerald: {
        name: 'Emerald Garden',
        colors: {
            '--primary-color': '#047857',
            '--secondary-color': '#065F46',
            '--accent-color': '#10B981',
            '--burgundy': '#064E3B',
            '--text-dark': '#0A2815',
            '--text-light': '#F0FDF4',
            '--bg-light': '#ECFDF5',
            '--bg-cream': '#D1FAE5'
        }
    },
    royal: {
        name: 'Royal Purple',
        colors: {
            '--primary-color': '#7C3AED',
            '--secondary-color': '#5B21B6',
            '--accent-color': '#A78BFA',
            '--burgundy': '#6B21A8',
            '--text-dark': '#2E1065',
            '--text-light': '#FAF5FF',
            '--bg-light': '#F5F3FF',
            '--bg-cream': '#EDE9FE'
        }
    },
    sunset: {
        name: 'Bold Sunset',
        colors: {
            '--primary-color': '#EA580C',
            '--secondary-color': '#C2410C',
            '--accent-color': '#FB923C',
            '--burgundy': '#9A3412',
            '--text-dark': '#431407',
            '--text-light': '#FFF7ED',
            '--bg-light': '#FFF7ED',
            '--bg-cream': '#FFEDD5'
        }
    },
    midnight: {
        name: 'Midnight Blue',
        colors: {
            '--primary-color': '#1E3A8A',
            '--secondary-color': '#1E293B',
            '--accent-color': '#3B82F6',
            '--burgundy': '#0F172A',
            '--text-dark': '#0F172A',
            '--text-light': '#F1F5F9',
            '--bg-light': '#F8FAFC',
            '--bg-cream': '#E2E8F0'
        }
    },
    crimson: {
        name: 'Crimson & Gold',
        colors: {
            '--primary-color': '#B91C1C',
            '--secondary-color': '#7F1D1D',
            '--accent-color': '#F59E0B',
            '--burgundy': '#991B1B',
            '--text-dark': '#450A0A',
            '--text-light': '#FEF2F2',
            '--bg-light': '#FEF2F2',
            '--bg-cream': '#FEE2E2'
        }
    },
    teal: {
        name: 'Teal Elegance',
        colors: {
            '--primary-color': '#0D9488',
            '--secondary-color': '#115E59',
            '--accent-color': '#2DD4BF',
            '--burgundy': '#134E4A',
            '--text-dark': '#042F2E',
            '--text-light': '#F0FDFA',
            '--bg-light': '#F0FDFA',
            '--bg-cream': '#CCFBF1'
        }
    }
};

// Apply theme with full design changes
function applyTheme(themeName) {
    const theme = themes[themeName];
    if (!theme) return;
    
    const root = document.documentElement;
    
    // Apply colors
    Object.entries(theme.colors).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });
    
    // Apply design system changes
    const designConfig = getDesignConfig(themeName);
    Object.entries(designConfig).forEach(([property, value]) => {
        root.style.setProperty(property, value);
    });
    
    // Save theme preference
    localStorage.setItem('wedding-theme', themeName);
    
    // Update active button
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeBtn = document.querySelector(`[data-theme="${themeName}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

// Design configurations for each theme
function getDesignConfig(themeName) {
    const designs = {
        default: {
            '--heading-font': "'Playfair Display', serif",
            '--body-font': "'Poppins', sans-serif",
            '--border-radius': '30px',
            '--border-radius-sm': '15px',
            '--card-shadow': '0 20px 80px rgba(92, 64, 51, 0.15)',
            '--card-padding': '4rem 3rem',
            '--letter-spacing': '0.5px'
        },
        deepRose: {
            '--heading-font': "'Cormorant Garamond', serif",
            '--body-font': "'Montserrat', sans-serif",
            '--border-radius': '0px',
            '--border-radius-sm': '0px',
            '--card-shadow': '0 10px 40px rgba(212, 20, 90, 0.25)',
            '--card-padding': '3rem 2.5rem',
            '--letter-spacing': '2px'
        },
        emerald: {
            '--heading-font': "'Merriweather', serif",
            '--body-font': "'Lato', sans-serif",
            '--border-radius': '20px',
            '--border-radius-sm': '10px',
            '--card-shadow': '0 15px 50px rgba(4, 120, 87, 0.2)',
            '--card-padding': '3.5rem 3rem',
            '--letter-spacing': '1px'
        },
        royal: {
            '--heading-font': "'Cinzel', serif",
            '--body-font': "'Raleway', sans-serif",
            '--border-radius': '40px',
            '--border-radius-sm': '20px',
            '--card-shadow': '0 25px 90px rgba(124, 58, 237, 0.3)',
            '--card-padding': '4.5rem 3.5rem',
            '--letter-spacing': '3px'
        },
        sunset: {
            '--heading-font': "'Bebas Neue', sans-serif",
            '--body-font': "'Open Sans', sans-serif",
            '--border-radius': '5px',
            '--border-radius-sm': '3px',
            '--card-shadow': '8px 8px 0px rgba(234, 88, 12, 0.3)',
            '--card-padding': '3rem 2.5rem',
            '--letter-spacing': '1.5px'
        },
        midnight: {
            '--heading-font': "'Oswald', sans-serif",
            '--body-font': "'Roboto', sans-serif",
            '--border-radius': '0px',
            '--border-radius-sm': '0px',
            '--card-shadow': '0 8px 30px rgba(30, 58, 138, 0.25)',
            '--card-padding': '3.5rem 3rem',
            '--letter-spacing': '0.5px'
        },
        crimson: {
            '--heading-font': "'Abril Fatface', serif",
            '--body-font': "'Karla', sans-serif",
            '--border-radius': '50px',
            '--border-radius-sm': '25px',
            '--card-shadow': '0 30px 100px rgba(185, 28, 28, 0.35)',
            '--card-padding': '4rem 3.5rem',
            '--letter-spacing': '1px'
        },
        teal: {
            '--heading-font': "'Dancing Script', cursive",
            '--body-font': "'Quicksand', sans-serif",
            '--border-radius': '15px',
            '--border-radius-sm': '8px',
            '--card-shadow': '0 20px 60px rgba(13, 148, 136, 0.25)',
            '--card-padding': '3.5rem 3rem',
            '--letter-spacing': '0.5px'
        }
    };
    
    return designs[themeName] || designs.default;
}

// Create theme switcher UI
function createThemeSwitcher() {
    const switcherHTML = `
    <div class="theme-switcher">
        <button class="theme-toggle" id="themeToggle">
            <span>🎨</span>
        </button>
        <div class="theme-panel" id="themePanel">
            <h4>Choose Theme Style</h4>
            <div class="theme-options">
                ${Object.entries(themes).map(([key, theme]) => `
                    <button class="theme-btn" data-theme="${key}">
                        <span class="theme-preview" style="background: ${theme.colors['--primary-color']}"></span>
                        <span class="theme-name">${theme.name}</span>
                    </button>
                `).join('')}
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', switcherHTML);
    
    // Add event listeners
    const toggle = document.getElementById('themeToggle');
    const panel = document.getElementById('themePanel');
    
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.classList.toggle('open');
    });
    
    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.theme-switcher')) {
            panel.classList.remove('open');
        }
    });
    
    // Theme button clicks
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const themeName = btn.dataset.theme;
            applyTheme(themeName);
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createThemeSwitcher();
    
    // Load saved theme or use default
    const savedTheme = localStorage.getItem('wedding-theme') || 'default';
    applyTheme(savedTheme);
});


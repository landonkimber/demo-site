/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundSize: {
                'half': '50% 50%',
            },
            keyframes: {
                typing: {
                    "0%": {
                        width: "0%",
                        visibility: "hidden"
                    },
                    "100%": {
                        width: "100%"
                    }
                },
                blink: {
                    "50%": {
                        borderColor: "transparent"
                    },
                    "100%": {
                        borderColor: "white"
                    }
                },
                'slide-in-left': {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
            },
            backgroundImage: {
                'reverse-vignette':
                    'radial-gradient(circle at center, rgba(255, 0, 0, 1) 0%, rgba(0, 4, 255, 1) 100%)',
            },
            skew: {
                '15': '15deg',
                '21': '21deg',
            },

            fontFamily: {
                oswald: ["Oswald", "serif"],
                fugaz: ["Fugaz One", "sans-serif"],
                zain: ["Zain", "sans-serif"],
                limelight: ["Limelight", "sans-serif"],
                audiowide: ["Audiowide", "sans-serif"],
                domine: ["Domine", "sans-serif"],
                ranchers: ["Ranchers", "serif"],
            },
            animation: {
                typing: "typing 4s steps(25) alternate, blink .8s infinite",
                'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
            }
        },
    },
};

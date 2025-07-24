/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
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
                }

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
                fugaz: ["Fugaz One", "sans-serif"],
                zain: ["Zain", "sans-serif"],
                limelight: ["Limelight", "sans-serif"],
                audiowide: ["Audiowide", "sans-serif"],
                domine: ["Domine", "sans-serif"],
            },
            animation: {
                typing: "typing 4s steps(25) alternate, blink .8s infinite"
            }
        },
    },
    plugins: [require('tailwindcss-filters')],
};

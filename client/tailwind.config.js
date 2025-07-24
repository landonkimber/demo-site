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
            skew: {
                '15': '15deg',
                '21': '21deg',
            },
            fontFamily: {
                fugaz: ["Fugaz One", "sans-serif"],
                zain: ["Zain", "sans-serif"],
                limelight: ["Limelight", "sans-serif"],
                audiowide: ["Audiowide", "sans-serif"],
            },
            animation: {
                typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
            }
        },
    },
    plugins: [],
};

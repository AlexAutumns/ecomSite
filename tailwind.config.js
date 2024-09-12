/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                first_color: "#222831",
                second_color: "#393E46",
                third_color: "#00ADB5",
                fourth_color: "#EEEEEE",

                // transitions

                // third color
                fifth_color: "#00959c",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                },
            },
            fontFamily: {
                ubuntu: ["Ubuntu", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};

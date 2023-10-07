/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            padding: {
                "3vw": "3vw",
                "5vw": "5vw",
                "10vw": "10vw",
                "md:5vw": "5vw", // medium screens
                "lg:10vw": "10vw", // large screens
                
            },
        },
    },
    plugins: [],
};

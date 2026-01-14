/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            sm: '640px',
            md: '768px',
            lg: { 'raw': '(min-width: 1024px) and (min-height: 900px)' },
            xl: '1280px',
        }
    },
    plugins: [],
}


// Mobile
//360 × 640(klassisches Android)
//
//390 × 844(iPhone 12 / 13 / 14)
//
//375 × 667(älteres iPhone)
//
//Tablet
//
//768 × 1024(iPad hochkant)
//
//820 × 1180(neue iPads)
//
//Desktop(nur zur Kontrolle)
//
//1280 × 800
//
//1440 × 900
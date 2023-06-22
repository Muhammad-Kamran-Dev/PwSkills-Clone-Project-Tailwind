/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-blue": {
          "50": "#eff2fe",
          "100": "#e2e7fd",
          "200": "#cad2fb",
          "300": "#aab4f7",
          "400": "#888df1",
          "500": "#6f6ce8",
          "600": "#5a4bda",
          "700": "#5141c1",
          "800": "#42379c",
          "900": "#3a337c",
          "950": "#231e48"
        }
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#EC9641",
          "100": "#EB9035",
          "200": "#EA8929",
          "300": "#E9831D",
          "400": "#E27C16",
          "500": "#D67615",
          "600": "#CA6F14",
          "700": "#BE6913",
          "800": "#B36212",
          "900": "#A75C10"
        },
        secondary: {
          "50": "#f0fefe",
          "100": "#9EF5F5",
          "200": "#70F1F1",
          "300": "#42ECEC",
          "400": "#17E5E5",
          "500": "#12B8B8",
          "600": "#0E8A8A",
          "700": "#095C5C",
          "800": "#052E2E",
          "900": "#000000"
        },
        accent: {
          "50": "#1c82e9",
          "100": "#1678DA",
          "200": "#1572D0",
          "300": "#146DC6",
          "400": "#1367BC",
          "500": "#1262B2",
          "600": "#115CA8",
          "700": "#10579E",
          "800": "#0F5194",
          "900": "#0E4C8A"
        },
      },
    },

  }
};


module.exports = config;
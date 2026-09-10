/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background: Warm Medium-Dark Roasted Mocha
        background: "#241D18",
        surface: "#2D241E",
        "on-background": "#F7EFE6",
        "on-surface": "#F7EFE6",
        "on-surface-variant": "#DACABB",
        secondary: "#C4B1A0",
        "on-secondary": "#1C1510",

        // Containers & Cards: Warm Layered Mocha Surfaces
        "surface-container": "#362B24",
        "surface-container-low": "#2A211B",
        "surface-container-high": "#40332B",
        "surface-container-highest": "#4A3C32",
        "surface-container-lowest": "#1D1713",
        "surface-variant": "#3C2F27",
        "surface-bright": "#47382E",
        "surface-dim": "#201915",

        // Primary: Glowing Roasted Caramel & Crema
        primary: "#D48950",
        "primary-hover": "#E29A62",
        "on-primary": "#1C1510",
        "primary-container": "#523620",
        "on-primary-container": "#FBE0C8",
        "primary-fixed": "#E8CEBA",
        "primary-fixed-dim": "#D48950",
        "on-primary-fixed": "#1C1510",
        "primary-tint": "#D48950",
        "surface-tint": "#D48950",
        "inverse-primary": "#523620",
        "inverse-surface": "#F7EFE6",

        // Tertiary: Honey Amber & Toasted Golden Roast
        tertiary: "#E0A670",
        "tertiary-dark": "#C48A54",
        "tertiary-container": "#4B3422",
        "on-tertiary": "#1C1510",
        "on-tertiary-container": "#FDEBDD",
        "tertiary-fixed": "#FCE5D4",
        "tertiary-fixed-dim": "#E0A670",
        "on-tertiary-fixed": "#1C1510",

        // Outlines & Hairlines in Warm Mocha
        outline: "#5E4B3E",
        "outline-variant": "#48392F",
        hairline: "#3D3027",
        "hairline-dark": "#30251E",

        // Secondary containers
        "secondary-container": "#3D3027",
        "on-secondary-container": "#F7EFE6",
        "secondary-fixed": "#4A3C32",
        "secondary-fixed-dim": "#362B24",

        // Status
        error: "#E56350",
        "on-error": "#FFFFFF",
      },
      fontFamily: {
        headline: ["Literata", "Georgia", "serif"],
        display: ["Literata", "Georgia", "serif"],
        body: ["Nunito Sans", "sans-serif"],
        label: ["Nunito Sans", "sans-serif"],
        serif: ["Literata", "Georgia", "serif"],
        sans: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        "terra-card":
          "0 4px 20px rgba(0, 0, 0, 0.32), 0 1px 3px rgba(0, 0, 0, 0.22)",
        "terra-hover":
          "0 10px 30px rgba(0, 0, 0, 0.48), 0 3px 10px rgba(212, 137, 80, 0.22)",
      },
    },
  },
  plugins: [],
};

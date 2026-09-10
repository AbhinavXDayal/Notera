/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background: Rich Darkish Mocha Coffee
        background: "#181310",
        surface: "#211A16",
        "on-background": "#F3EBE1",
        "on-surface": "#F3EBE1",
        "on-surface-variant": "#D4C4B5",
        secondary: "#BFAAA0",
        "on-secondary": "#181310",

        // Containers & Cards: Layered Dark Mocha Surfaces
        "surface-container": "#28201B",
        "surface-container-low": "#1F1814",
        "surface-container-high": "#322722",
        "surface-container-highest": "#3D302A",
        "surface-container-lowest": "#130F0D",
        "surface-variant": "#2F241F",
        "surface-bright": "#382B24",
        "surface-dim": "#16110E",

        // Primary: Glowing Roasted Caramel & Amber Crema
        primary: "#C9824C",
        "primary-hover": "#DB935D",
        "on-primary": "#181310",
        "primary-container": "#42291A",
        "on-primary-container": "#F8D8C0",
        "primary-fixed": "#DDBFA8",
        "primary-fixed-dim": "#C9824C",
        "on-primary-fixed": "#181310",
        "primary-tint": "#C9824C",
        "surface-tint": "#C9824C",
        "inverse-primary": "#42291A",
        "inverse-surface": "#F3EBE1",

        // Tertiary: Honey Amber & Toasted Gold
        tertiary: "#D99C66",
        "tertiary-dark": "#B87B47",
        "tertiary-container": "#3B281B",
        "on-tertiary": "#181310",
        "on-tertiary-container": "#FCE5D2",
        "tertiary-fixed": "#F5E6D8",
        "tertiary-fixed-dim": "#D99C66",
        "on-tertiary-fixed": "#181310",

        // Outlines & Hairlines in Warm Roasted Mocha
        outline: "#524035",
        "outline-variant": "#3E3027",
        hairline: "#342720",
        "hairline-dark": "#271C17",

        // Secondary containers
        "secondary-container": "#30251F",
        "on-secondary-container": "#F3EBE1",
        "secondary-fixed": "#3D302A",
        "secondary-fixed-dim": "#28201B",

        // Status
        error: "#E05A47",
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
          "0 4px 20px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)",
        "terra-hover":
          "0 10px 30px rgba(0, 0, 0, 0.6), 0 3px 10px rgba(201, 130, 76, 0.2)",
      },
    },
  },
  plugins: [],
};

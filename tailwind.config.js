/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep Espresso & Dark Roasted Coffee Base
        background: "#140f0c",
        surface: "#1c1511",
        "on-background": "#f7efe4",
        "on-surface": "#f7efe4",
        "on-surface-variant": "#c4b29e",
        secondary: "#b3a08c",
        "on-secondary": "#1c1511",

        // Mocha & Dark Chocolate Containers
        "surface-container": "#241b16",
        "surface-container-low": "#1d1612",
        "surface-container-high": "#2e221b",
        "surface-container-highest": "#3a2b22",
        "surface-container-lowest": "#120d0a",
        "surface-variant": "#2a1f19",
        "surface-bright": "#3c2c23",
        "surface-dim": "#110c09",

        // Rich Caramel & Roasted Amber Accents
        primary: "#c68a4c",
        "primary-hover": "#d89956",
        "on-primary": "#16100b",
        "primary-container": "#3d2815",
        "on-primary-container": "#f8d8b4",
        "primary-fixed": "#f0ceaa",
        "primary-fixed-dim": "#d89956",
        "on-primary-fixed": "#241304",
        "primary-tint": "#c68a4c",
        "surface-tint": "#c68a4c",
        "inverse-primary": "#d89956",
        "inverse-surface": "#f7efe4",

        // Muted Gold & Honey Amber
        tertiary: "#cfa164",
        "tertiary-dark": "#b08145",
        "tertiary-container": "#3a2b17",
        "on-tertiary": "#16100b",
        "on-tertiary-container": "#f4dfb8",
        "tertiary-fixed": "#fae5be",
        "tertiary-fixed-dim": "#cfa164",
        "on-tertiary-fixed": "#251804",

        // Outlines & Hairlines in Warm Mocha
        outline: "#5e4839",
        "outline-variant": "#382920",
        hairline: "#34261e",
        "hairline-dark": "#251b15",

        // Secondary containers
        "secondary-container": "#2d221b",
        "on-secondary-container": "#e6d7c5",
        "secondary-fixed": "#e6d7c5",
        "secondary-fixed-dim": "#c4b29e",

        // Status
        error: "#cf4945",
        "on-error": "#ffffff",
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
        "terra-card": "0 8px 32px rgba(10, 7, 5, 0.55), 0 2px 6px rgba(10, 7, 5, 0.4)",
        "terra-hover": "0 12px 40px rgba(198, 138, 76, 0.16), 0 4px 16px rgba(10, 7, 5, 0.65)",
      },
    },
  },
  plugins: [],
};

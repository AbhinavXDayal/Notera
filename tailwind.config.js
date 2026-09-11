/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background: Sleek Deep Obsidian Mineral
        background: "#0F0E0D",
        surface: "#161514",
        "on-background": "#F5EFE6",
        "on-surface": "#F5EFE6",
        "on-surface-variant": "#DDD2C4",
        secondary: "#C2B29F",
        "on-secondary": "#161514",

        // Containers & Cards: Layered Obsidian Mineral Surfaces
        "surface-container": "#1B1A18",
        "surface-container-low": "#131211",
        "surface-container-high": "#242220",
        "surface-container-highest": "#2D2B28",
        "surface-container-lowest": "#0B0A09",
        "surface-variant": "#201E1C",
        "surface-bright": "#2A2825",
        "surface-dim": "#11100F",

        // Primary: Refined Warm Beige & Light Oat (Zero Orange)
        primary: "#D8C3A5",
        "primary-hover": "#E6D6C2",
        "on-primary": "#161514",
        "primary-container": "#262320",
        "on-primary-container": "#FAF5EE",
        "primary-fixed": "#EAE0D3",
        "primary-fixed-dim": "#D8C3A5",
        "on-primary-fixed": "#161514",
        "primary-tint": "#D8C3A5",
        "surface-tint": "#D8C3A5",
        "inverse-primary": "#262320",
        "inverse-surface": "#FAF5EE",

        // Tertiary: Soft Almond Beige & Creamy Latte Crema
        tertiary: "#C9B7A1",
        "tertiary-dark": "#A89681",
        "tertiary-container": "#23201D",
        "on-tertiary": "#161514",
        "on-tertiary-container": "#FAF5EE",
        "tertiary-fixed": "#EFE6DB",
        "tertiary-fixed-dim": "#C9B7A1",
        "on-tertiary-fixed": "#161514",

        // Outlines & Hairlines in Sleek Obsidian
        outline: "#433E39",
        "outline-variant": "#302C28",
        hairline: "#282522",
        "hairline-dark": "#1C1A18",

        // Secondary containers
        "secondary-container": "#22201E",
        "on-secondary-container": "#FAF5EE",
        "secondary-fixed": "#2E2B27",
        "secondary-fixed-dim": "#22201D",

        // Status
        error: "#E06D5E",
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
          "0 4px 24px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.4)",
        "terra-hover":
          "0 12px 36px rgba(0, 0, 0, 0.75), 0 3px 12px rgba(216, 195, 165, 0.14)",
      },
    },
  },
  plugins: [],
};

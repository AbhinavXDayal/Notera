/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background: Warm Latte Beige & Cream
        background: "#EDE3D3",
        surface: "#F7F1E8",
        "on-background": "#3B2A22",
        "on-surface": "#3B2A22",
        "on-surface-variant": "#5C4033",
        secondary: "#6B5042",
        "on-secondary": "#FCF8F2",

        // Containers & Cards: Warm Cream & Soft Mocha
        "surface-container": "#F0E5D6",
        "surface-container-low": "#F7F1E8",
        "surface-container-high": "#E5D7C4",
        "surface-container-highest": "#DBC7B0",
        "surface-container-lowest": "#FAF6EE",
        "surface-variant": "#E8D9C6",
        "surface-bright": "#FAF6EE",
        "surface-dim": "#E2D3BE",

        // Primary: Warm Caramel & Rich Roasted Coffee
        primary: "#9E643B",
        "primary-hover": "#87532E",
        "on-primary": "#FCF8F2",
        "primary-container": "#EAD5C3",
        "on-primary-container": "#3B2A22",
        "primary-fixed": "#DDBFA8",
        "primary-fixed-dim": "#9E643B",
        "on-primary-fixed": "#241304",
        "primary-tint": "#9E643B",
        "surface-tint": "#9E643B",
        "inverse-primary": "#EAD5C3",
        "inverse-surface": "#3B2A22",

        // Tertiary: Honey Amber & Muted Gold
        tertiary: "#B8835A",
        "tertiary-dark": "#9A6842",
        "tertiary-container": "#F0DFCE",
        "on-tertiary": "#FCF8F2",
        "on-tertiary-container": "#3B2A22",
        "tertiary-fixed": "#F5E6D8",
        "tertiary-fixed-dim": "#B8835A",
        "on-tertiary-fixed": "#251804",

        // Outlines & Hairlines in Soft Mocha Latte
        outline: "#B8A38D",
        "outline-variant": "#D4C2AC",
        hairline: "#DCCBB7",
        "hairline-dark": "#CBB79E",

        // Secondary containers
        "secondary-container": "#EADECF",
        "on-secondary-container": "#3B2A22",
        "secondary-fixed": "#E5D7C4",
        "secondary-fixed-dim": "#DBC7B0",

        // Status
        error: "#B53834",
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
        "terra-card": "0 4px 20px rgba(59, 42, 34, 0.07), 0 1px 3px rgba(59, 42, 34, 0.05)",
        "terra-hover": "0 10px 30px rgba(158, 100, 59, 0.14), 0 3px 10px rgba(59, 42, 34, 0.08)",
      },
    },
  },
  plugins: [],
};

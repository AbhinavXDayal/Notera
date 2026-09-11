/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background & Canvas: Calming Pale Sage Linen
        background: "#E5EAE3",
        surface: "#EEF2EC",
        "on-background": "#1F2420",
        "on-surface": "#1F2420",
        "on-surface-variant": "#4A4E4A",
        secondary: "#6B6358",
        "on-secondary": "#FFFFFF",

        // Neutral
        neutral: "#4A4E4A",

        // Containers & Cards: Crisp Layered Sage-Cream Surfaces
        "surface-container": "#F5F8F4",
        "surface-container-low": "#E9EFE7",
        "surface-container-high": "#FAFCF9",
        "surface-container-highest": "#FFFFFF",
        "surface-container-lowest": "#DFE5DD",
        "surface-variant": "#E2E8E0",
        "surface-bright": "#FFFFFF",
        "surface-dim": "#D8DFD5",

        // Primary: Forest Sage Green (#4A7C59)
        primary: "#4A7C59",
        "primary-hover": "#3B6748",
        "on-primary": "#FFFFFF",
        "primary-container": "#D7E6DB",
        "on-primary-container": "#12331D",
        "primary-fixed": "#D7E6DB",
        "primary-fixed-dim": "#4A7C59",
        "on-primary-fixed": "#12331D",
        "primary-tint": "#4A7C59",
        "surface-tint": "#4A7C59",
        "inverse-primary": "#A3CFB0",
        "inverse-surface": "#1F2420",

        // Secondary: Warm Taupe Earth (#6B6358)
        "secondary-hover": "#585147",
        "secondary-container": "#EAE5DF",
        "on-secondary-container": "#26221C",
        "secondary-fixed": "#EAE5DF",
        "secondary-fixed-dim": "#6B6358",

        // Tertiary: Warm Ochre & Antique Gold (#C4A66A)
        tertiary: "#C4A66A",
        "tertiary-dark": "#A4854B",
        "tertiary-container": "#F6EDDC",
        "on-tertiary": "#2B200A",
        "on-tertiary-container": "#3D2E12",
        "tertiary-fixed": "#F6EDDC",
        "tertiary-fixed-dim": "#C4A66A",
        "on-tertiary-fixed": "#2B200A",

        // Outlines & Hairlines in Soft Sage Slate
        outline: "#CBD3C8",
        "outline-variant": "#DCE3DA",
        hairline: "#E2E8E0",
        "hairline-dark": "#CBD3C8",

        // Status
        error: "#B83A3A",
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
          "0 2px 12px rgba(44, 56, 46, 0.06), 0 1px 3px rgba(44, 56, 46, 0.04)",
        "terra-hover":
          "0 8px 24px rgba(74, 124, 89, 0.14), 0 2px 8px rgba(44, 56, 46, 0.06)",
      },
    },
  },
  plugins: [],
};

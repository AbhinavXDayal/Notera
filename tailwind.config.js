/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background & Canvas: Soft Warm Dark Charcoal-Sage (Not Pitch Black)
        background: "#181A19",
        surface: "#212422",
        "on-background": "#E6EBE4",
        "on-surface": "#E6EBE4",
        "on-surface-variant": "#A7B0A5",
        secondary: "#A89F91",
        "on-secondary": "#181A19",

        // Neutral
        neutral: "#8A9188",

        // Containers & Cards: Layered Matte Slate-Sage Surfaces
        "surface-container": "#272B28",
        "surface-container-low": "#1E201E",
        "surface-container-high": "#303531",
        "surface-container-highest": "#3A403A",
        "surface-container-lowest": "#151715",
        "surface-variant": "#2D322E",
        "surface-bright": "#383E38",
        "surface-dim": "#1C1E1C",

        // Primary: Soft Luminous Forest Sage Green (#5EA876)
        primary: "#5EA876",
        "primary-hover": "#72B989",
        "on-primary": "#0E1A12",
        "primary-container": "#243B2B",
        "on-primary-container": "#D2ECD9",
        "primary-fixed": "#243B2B",
        "primary-fixed-dim": "#5EA876",
        "on-primary-fixed": "#D2ECD9",
        "primary-tint": "#5EA876",
        "surface-tint": "#5EA876",
        "inverse-primary": "#4A7C59",
        "inverse-surface": "#E6EBE4",

        // Secondary: Warm Taupe Earth (#A89F91)
        "secondary-hover": "#BFB6A8",
        "secondary-container": "#38342F",
        "on-secondary-container": "#EAE5DF",
        "secondary-fixed": "#38342F",
        "secondary-fixed-dim": "#A89F91",

        // Tertiary: Warm Ochre & Amber Gold (#D6B265)
        tertiary: "#D6B265",
        "tertiary-dark": "#E5C884",
        "tertiary-container": "#3E3523",
        "on-tertiary": "#1C1608",
        "on-tertiary-container": "#F6EDDC",
        "tertiary-fixed": "#3E3523",
        "tertiary-fixed-dim": "#D6B265",
        "on-tertiary-fixed": "#F6EDDC",

        // Outlines & Hairlines in Soft Slate Dark Border
        outline: "#3A4039",
        "outline-variant": "#2D332C",
        hairline: "#333932",
        "hairline-dark": "#282D27",

        // Status
        error: "#E05A5A",
        "on-error": "#1A0808",
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
          "0 2px 12px rgba(0, 0, 0, 0.35), 0 1px 3px rgba(0, 0, 0, 0.2)",
        "terra-hover":
          "0 8px 24px rgba(94, 168, 118, 0.18), 0 2px 8px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};

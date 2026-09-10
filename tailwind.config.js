/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base Background: Warm Medium-Dark Roasted Mocha & Velvety Cocoa
        background: "#322720",
        surface: "#3D3027",
        "on-background": "#FAF3EC",
        "on-surface": "#FAF3EC",
        "on-surface-variant": "#E2D5C8",
        secondary: "#CEBEAF",
        "on-secondary": "#241A14",

        // Containers & Cards: Warm Layered Mocha Surfaces
        "surface-container": "#46382F",
        "surface-container-low": "#372B23",
        "surface-container-high": "#514137",
        "surface-container-highest": "#5C4B40",
        "surface-container-lowest": "#2A201A",
        "surface-variant": "#4B3D34",
        "surface-bright": "#57473D",
        "surface-dim": "#2E231D",

        // Primary: Refined Warm Beige & Light Oat (Zero Orange)
        primary: "#D8C3A5",
        "primary-hover": "#E5D5C0",
        "on-primary": "#2A2018",
        "primary-container": "#45382E",
        "on-primary-container": "#F7F2EB",
        "primary-fixed": "#E8DDD0",
        "primary-fixed-dim": "#D8C3A5",
        "on-primary-fixed": "#2A2018",
        "primary-tint": "#D8C3A5",
        "surface-tint": "#D8C3A5",
        "inverse-primary": "#45382E",
        "inverse-surface": "#FAF3EC",

        // Tertiary: Soft Almond Beige & Creamy Latte Crema
        tertiary: "#CDBCA8",
        "tertiary-dark": "#B5A28E",
        "tertiary-container": "#42352B",
        "on-tertiary": "#2A2018",
        "on-tertiary-container": "#FAF5EE",
        "tertiary-fixed": "#EFE6DB",
        "tertiary-fixed-dim": "#CDBCA8",
        "on-tertiary-fixed": "#2A2018",

        // Outlines & Hairlines in Warm Mocha
        outline: "#6B5647",
        "outline-variant": "#544236",
        hairline: "#48372C",
        "hairline-dark": "#382A21",

        // Secondary containers
        "secondary-container": "#44352C",
        "on-secondary-container": "#FAF3EC",
        "secondary-fixed": "#524136",
        "secondary-fixed-dim": "#3F3027",

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
          "0 4px 20px rgba(0, 0, 0, 0.28), 0 1px 3px rgba(0, 0, 0, 0.18)",
        "terra-hover":
          "0 10px 30px rgba(0, 0, 0, 0.42), 0 3px 10px rgba(216, 195, 165, 0.22)",
      },
    },
  },
  plugins: [],
};

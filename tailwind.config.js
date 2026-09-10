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

        // Primary: Glowing Roasted Caramel & Crema
        primary: "#DE935A",
        "primary-hover": "#EBAD7C",
        "on-primary": "#20150D",
        "primary-container": "#5E3E26",
        "on-primary-container": "#FCE8D5",
        "primary-fixed": "#ECD5C2",
        "primary-fixed-dim": "#DE935A",
        "on-primary-fixed": "#20150D",
        "primary-tint": "#DE935A",
        "surface-tint": "#DE935A",
        "inverse-primary": "#5E3E26",
        "inverse-surface": "#FAF3EC",

        // Tertiary: Honey Amber & Toasted Golden Roast
        tertiary: "#E5AD7A",
        "tertiary-dark": "#C98D54",
        "tertiary-container": "#543C28",
        "on-tertiary": "#20150D",
        "on-tertiary-container": "#FDF0E3",
        "tertiary-fixed": "#FDEBDD",
        "tertiary-fixed-dim": "#E5AD7A",
        "on-tertiary-fixed": "#20150D",

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
          "0 10px 30px rgba(0, 0, 0, 0.42), 0 3px 10px rgba(222, 147, 90, 0.22)",
      },
    },
  },
  plugins: [],
};

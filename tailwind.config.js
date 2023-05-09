/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: {
        1: "#060606",
        2: "#FFF",
        3: "#020202",
        4: "#14141b",
        5: "#000000",
      },
      body: "#6A7185",
      secondary: {
        1: "#f4b060",
        2: "#232a31",
        3: "#2E3235",
        4: "#141418",
        5: "#A4A4A4",
        6: "#F8FDF8",
        7: "#0e0f10",
        8: "#f4b06014",
      },
    },
    extend: {
      mi: {
        "3/5": "600px",
      },
    },
  },
  plugins: [],
};

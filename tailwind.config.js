/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },

    colors: {
      gray:"#f9fafb",
      blue: "#6b21a8" ,
      white: "#fafafa",
      slate: "#334155",
      dark: "#ede9fe",
      cyan: "#d8b4fe",
      purple: "#581c87",
      red: "#831843",
      green: "#134e4a",
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

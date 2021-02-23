module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        300: "300px",
        400: "400px",
        45: "45%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

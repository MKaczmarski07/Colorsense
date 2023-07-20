/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {
      screens: {
        md: "900px",
      },
    },
  },
  plugins: [],
};

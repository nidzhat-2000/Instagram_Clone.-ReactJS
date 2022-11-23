/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        login: "#b2dffc",
      },
      backgroundImage: {
        "home-img":
          "url('https://static.cdninstagram.com/rsrc.php/v3/y4/r/ItTndlZM2n2.png')",
      },
    },
  },
  plugins: [],
};

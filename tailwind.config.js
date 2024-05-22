/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: "#628B58",
        secondary: "#999999",
        bg: "#F5F5F5",
        dark: "#4F4F4F",
        abu: "#D9D9D9",
      },
      backgroundImage: {
        heroBg: "url('assets/img/bgHero.jpg')",
      },
      fontFamily: {
        robotoMono: "Roboto Mono",
      },
    },
  },
  plugins: [],
};

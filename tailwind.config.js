module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accusoft-black": "#121212",
        "accusoft-yellow": "#FDE68A",
        "accusoft-red": "#DC2626",
        "accusoft-blue": "#3B82F6",
        "accusoft-grey": "#6B7280z",
        "accusoft-white": "#F9FAFB",
        "accusoft-purple": "#A78BFA"
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

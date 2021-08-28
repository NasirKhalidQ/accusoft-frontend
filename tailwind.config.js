module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "accusoft-black": "#18181B",
        "accusoft-elevation": "#27272A",
        "accusoft-yellow": "#FDE68A",
        "accusoft-red": "#DC2626",
        "accusoft-border": "#EB5757",
        "accusoft-blue": "#3B82F6",
        "accusoft-grey": "#6B7280z",
        "accusoft-white": "#F9FAFB",
        "accusoft-purple": "#5267DF",
        "accusoft-bg-green": "#64ffda1a",
        "accusoft-green": "#66ffdb",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        "vw-1": "1vw",
        "vw-2": "2vw",
        "vw-3.5": "3.5vw",
        "vw-4": "4vw",
        "vw-9": "9vw",
      },
      width: {
        "vw-1": "1vw",
        "vw-2": "2vw",
      },
      height: {
        "vh-1": "1vh",
        "vh-4": "4vh",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "custom-VeryDarkGrayishBlue": "hsl(217, 19%, 35%)",
        "custom-DesaturatedDarkBlue": "hsl(214, 17%, 51%)",
        "custom-GrayishBlue": "hsl(212, 23%, 69%)",
        "custom-LightGrayishBlue": "hsl(210, 46%, 95%)",
      },
      fontFamily: {
        custom: ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}


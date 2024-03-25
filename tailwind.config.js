import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/font-family"

module.exports = {
  content: ["./App.{js, jsx, ts,tsx}", "./src/**/*.{js, jsx, ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}


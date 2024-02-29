import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { screens } from 'tailwindcss/defaultTheme'


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(120% 160% at 70% 20%, rgba(252, 253, 255, 0) 0%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 70% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        primary: "#0F38B4",
        secondary: "#FE5F00",
      },
      fontFamily: {
        "fk-grotesk-neue-trial": ["var(--fk-grotesk-neue-trial"],
      },
      screens: {
        xs: "375px",
        ...screens,
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
import { screens } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(120% 160% at 70% 20%, rgba(252, 253, 255, 0) 0%, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 70% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        "angel-blue": {
          DEFAULT: "#0f38b4",
          "50": "#edf6ff",
          "100": "#d8ebff",
          "200": "#b9dbff",
          "300": "#89c6ff",
          "400": "#51a5ff",
          "500": "#2981ff",
          "600": "#125ffe",
          "700": "#0b48ea",
          "800": "#0f38b4",
          "900": "#133795",
          "950": "#11235a",
        },
        "angel-orange": {
          DEFAULT: "#fe5f00",
          "50": "#fff8ec",
          "100": "#ffeed3",
          "200": "#ffdaa5",
          "300": "#ffbf6d",
          "400": "#ff9732",
          "500": "#ff790a",
          "600": "#fe5f00",
          "700": "#cc4302",
          "800": "#a1350b",
          "900": "#822e0c",
          "950": "#461404",
        },
      },
      padding: {},
      screens: {
        xs: "375px",
        "3xl": "1440px",
        "4xl": "1600px",
        "5xl": "1760px",
        "6xl": "1920px",
        ...screens,
      },
    },
  },
  plugins: [],
};
export default config;

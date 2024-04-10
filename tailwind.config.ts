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
      container: {
        center: true,
        padding: {
          "xs": "1rem",
          "sm": "1rem",
          "md": "2rem",
          "lg": "3rem",
          "xl": "3rem",
          "2xl": "8rem",
          "3xl": "13rem",
          "4xl": "18rem",
          "5xl": "23rem",
          "6xl": "43rem",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
        "solid-blue": "#1B45C2",
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
        spray: {
          DEFAULT: "#6fe9ff",
          "50": "#ebfeff",
          "100": "#cdfaff",
          "200": "#a1f3ff",
          "300": "#6fe9ff",
          "400": "#1ad1f6",
          "500": "#00b4dc",
          "600": "#018eb9",
          "700": "#097295",
          "800": "#115c79",
          "900": "#134c66",
          "950": "#063246",
        },
      },
      dropShadow: {
        "4xl": [
          "0 10px 35px rgba(0, 0, 0, 0.35)",
          "0 30px 25px rgba(0, 0, 0, 0.25)",
        ],
      },
      screens: {
        xs: "375px",
        ...screens,
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1760px",
        "5xl": "1920px",
        "6xl": "2560px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      xxl: "1536px",
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        blazingRed: "#FF4E50",
        lightAlmond: "#F7F3F2",
        blazingYellow: "#F9D423",
      },
    },
  },
  plugins: [],
};
export default config;

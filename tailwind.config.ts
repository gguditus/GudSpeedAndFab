import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        /**rgb(224, 224, 224) hsl(0, 0%, 88%)*/
        plat: "#E0E0E0",
        /**rgb(153, 153, 153) hsl( 0, 0%, 60%)*/
        bsg: "#999999",
        /**rgb(245, 124, 51) hsl(23, 91%, 58%)*/
        hugger: "#F57C33",
        /**rgb(71, 71, 71) hsl(0, 0%, 28%)*/
        space: "#474747",
        /**rgb(31, 31, 31) hsl(0, 0%, 12%)*/
        eerie: "#1F1F1F",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        stencil: ["var(--font-stencil)"],
        display: ["var(--font-display)"],
      },
    },
  },
  plugins: [],
};
export default config;

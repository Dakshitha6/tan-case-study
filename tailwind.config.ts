import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "9xl": [
          "9.875rem",
          {
            lineHeight: "9.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "300",
          },
        ],
      },
      colors: {
        customBlue: "#07055F8F",
        customPurple: "#4827928F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",

        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        montreal: ["var(--font-montreal)"],
      },
    },
  },
  plugins: [],
};
export default config;

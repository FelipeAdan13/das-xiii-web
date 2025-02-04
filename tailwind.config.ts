import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "das-xiii-purple": "#2f0247",
      },
      backgroundImage: {
        "world-background": "url('/background.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;

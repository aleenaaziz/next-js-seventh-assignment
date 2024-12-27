import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'br-300': '250px', // Custom bottom-right corner radius
      },
      colors: {
        
        custompur: "#6F42C1",
        custombg: "#F0ECF9",
      },
    },
  },
  plugins: [],
} satisfies Config;

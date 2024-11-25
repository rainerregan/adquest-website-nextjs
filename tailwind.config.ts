import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-green": "#1FB661",
        "main-green-background": "#38C676",
        "main-black": "#2B332E",
        "main-gray": "#585858",
        "rating-yellow": "#FFB200",
        "rating-yellow-light": "#FFE74D",
      },
    },
    fontFamily: {
      montserrat: ['var(--font-montserrat)'],
      inter: ['var(--font-inter)'],
    },
  },
  plugins: [],
} satisfies Config;

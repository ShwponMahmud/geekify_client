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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primary_color)",
        darkColor: "var(--dark_color)",
        grayColor: "var(--dark_gray)",
        deepGrayColor: "var(--deep_dark_gray)",
        borderColor: "var(--borderColor)",
        sectionBackgroundColor: "var(--background_color)"
      },
      width: {
        '120': '60%',
      },
      boxShadow: {
        boxShadow: " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        hoverBoxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      },
      zIndex: {
        zIndex: "100"
      }
      
    },
  },
  plugins: [],
} satisfies Config;

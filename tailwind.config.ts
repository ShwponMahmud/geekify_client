import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xsm: "380px",
      sm: "576px", 
      md: "768px",
      lg: "992px",
      xl: "1280px",
      sxl: "1300px",
      xxl: "1440px",
      xxlDW: "1400px", 
    },
    container: {
			center: true,
			padding: {
				DEFAULT: "15px",
				xxl: "3rem",
				xl: "3rem",
				lg: "3rem",
				md: "30px",
				sm: "18px",
				xs: "15px",
			},
		},
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
        shadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
        boxShadow: " rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        hoverBoxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
      },
      zIndex: {
        zIndex: "100"
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
} satisfies Config;

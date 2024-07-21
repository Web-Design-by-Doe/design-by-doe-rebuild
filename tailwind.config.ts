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
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary)  / <alpha-value>)",
        "secondary-dark": "rgb(var(--color-secondary-dark)  / <alpha-value>)",
        accent: "rgb(var(--color-accent)  / <alpha-value>)",
        text: "rgb(var(--color-text)  / <alpha-value>)",
        background: "rgb(var(--color-background)  / <alpha-value>)",
        error: "rgb(var(--color-error)  / <alpha-value>)",
        success: "rgb(var(--color-success)  / <alpha-value>)",
      },
      fontSize: {
        smallest: "var(--font-size-smallest)",
        base: "var(--font-size-base)",
        "card-title": "var(--font-size-card-title)",
        title: "var(--font-size-title)",
        header: "var(--font-size-header)",
      },
      screens: {
        "md-lg": "860px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const withAlpha = (cssVar: string) => `hsl(var(${cssVar}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: withAlpha("--primary-50"),
          100: withAlpha("--primary-100"),
          200: withAlpha("--primary-200"),
          300: withAlpha("--primary-300"),
          400: withAlpha("--primary-400"),
          500: withAlpha("--primary-500"),
          600: withAlpha("--primary-600"),
          700: withAlpha("--primary-700"),
          800: withAlpha("--primary-800"),
          900: withAlpha("--primary-900"),
          950: withAlpha("--primary-950"),
        },
        accent: {
          50: withAlpha("--accent-50"),
          100: withAlpha("--accent-100"),
          200: withAlpha("--accent-200"),
          300: withAlpha("--accent-300"),
          400: withAlpha("--accent-400"),
          500: withAlpha("--accent-500"),
          600: withAlpha("--accent-600"),
          700: withAlpha("--accent-700"),
          800: withAlpha("--accent-800"),
          900: withAlpha("--accent-900"),
          950: withAlpha("--accent-950"),
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


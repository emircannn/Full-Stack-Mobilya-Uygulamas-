import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#020225',
        "primary-light": '#0d074f',
        "secondary": '#e09e2a',
        "third": '#F6F6F6',
        "third-dark": '#A9B0B9',
      },
      screens: {
        '1336' : '1335px',
        '876' : '876px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ],
};
export default config;

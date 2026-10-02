import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { forest: { DEFAULT: "#0b5a0b", dark: "#073d07" }, gold: { DEFAULT: "#fdb413", deep: "#b97f00" }, cream: "#fbf7ee", ink: "#1d2a1d" },
    fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;

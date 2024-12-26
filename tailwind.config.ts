import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cream: "#f4eddb",
      },
      fontFamily: {
        "playfair-display": ["var(--font-playfair-display)"],
        "source-sans-3": ["var(--font-source-sans-3)"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;

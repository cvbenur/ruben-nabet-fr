import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAE8FF",
        secondary: "#2A2B2E",
      },
    },
  },
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "#1A1F2C",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#D6BCFA",
          foreground: "#1A1F2C",
        },
        secondary: {
          DEFAULT: "#9b87f5",
          foreground: "#FFFFFF",
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        "firefly": {
          "0%": {
            transform: "translateY(-100%) translateX(0)",
            opacity: "1"
          },
          "100%": {
            transform: "translateY(100vh) translateX(100px)",
            opacity: "0"
          }
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "gradient": {
          "0%, 100%": {
            "background-position": "0% 50%"
          },
          "50%": {
            "background-position": "100% 50%"
          }
        }
      },
      animation: {
        "firefly": "firefly 5s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out forwards",
        "gradient": "gradient 8s linear infinite"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
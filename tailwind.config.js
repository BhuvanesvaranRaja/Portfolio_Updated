/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-color": "#0b1220",
        "second-bg-color": "#111827",
        "text-color": "#e5e7eb",
        "second-color": "#9ca3af",
        "main-color": "#60a5fa",
        "accent-color": "#a78bfa",
        "gradient-start": "#60a5fa",
        "gradient-end": "#a78bfa",
        "card-bg": "rgba(255, 255, 255, 0.04)",
        "card-border": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      fontSize: {
        big: "5rem",
        h2: "3rem",
        p: "1.1rem",
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bounce: {
          "0%, 20%, 53%, 80%, 100%": {
            transform: "translate3d(0, 0, 0)",
          },
          "40%, 43%": {
            transform: "translate3d(0, -30px, 0)",
          },
          "70%": {
            transform: "translate3d(0, -15px, 0)",
          },
          "90%": {
            transform: "translate3d(0, -4px, 0)",
          },
        },
        pulse: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: ".5",
          },
        },
      },
    },
  },
  plugins: [],
};

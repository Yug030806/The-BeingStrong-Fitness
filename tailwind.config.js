/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#050505",
          charcoal: "#111111",
          card: "#161616",
          yellow: "#FFD000",
          "yellow-hover": "#E6B800",
          white: "#FFFFFF",
          gray: "#A5A5A5",
          darkgray: "#222222",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "impact", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2s infinite ease-in-out",
        "float-slow": "float 6s ease-in-out infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 208, 0, 0.2)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 208, 0, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};

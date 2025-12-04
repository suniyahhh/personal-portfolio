/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
  // Light mode base
  background: "#F5F8FF",     // soft icy blue
  foreground: "#0F1A2C",     // deep navy (perfect contrast)
  card: "#FFFFFF",           // clean white cards
        // Accents 
        accent: "#6AA9FF",         // bright baby blue
        accentLight: "#AFCBFF",    // soft pastel blue
        accentSoft: "#DCE8FF",     // very light, airy blue

        // Hover / active accent
        accentGlow: "#7FB6FF",     // glowy soft neon-blue

        // Dark mode base
        darkBg: "#0A0F1E",         // deep navy-black
        darkCard: "#121A2F",       // slightly lighter navy for cards
        darkForeground: "#DCE7FF", // soft pale blue text

        // Dark mode accents
        darkAccent: "#6FB0FF",     // neon-ish sky blue
        darkAccentSoft: "#3D6B99", // muted steel blue
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
      marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },

    },
  },

  plugins: [],
};

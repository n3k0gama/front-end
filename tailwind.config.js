/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7755FF",
        secondary: "#FF54B0",
        bgLight: "#E5E7EB",
        softA: "#E0EAFE",
        softB: "#F0E7FF",
        textDark: "#232946",
        textGray: "#5A5F73"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      boxShadow: {
        soft: "0 8px 30px rgba(35,41,70,0.08)",
      },
    },
  },
  plugins: [],
}

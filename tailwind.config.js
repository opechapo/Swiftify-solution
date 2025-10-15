/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#003366",
        "secondary-blue": "#336699",
        white: "#FFFFFF",
        "light-gray": "#E0E0E0",
        "dark-gray": "#333333",
        "off-white": "#F8F9FA",
        primary: "#0f49bd",
        "background-light": "#f6f6f8",
        "background-dark": "#101622",
        "text-light": "#111827",
        "text-dark": "#f3f4f6",
        "subtext-light": "#6b7280",
        "subtext-dark": "#9ca3af",
        "border-light": "#e5e7eb",
        "border-dark": "#374151",
      },
      fontFamily: {
        display: ["Work Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          400: "hsl(0, 0%, 70%)",
          500: "hsl(0, 0%, 55%)",
          600: "hsl(0, 0%, 45%)",
          700: "hsl(0, 0%, 35%)",
          800: "hsl(0, 0%, 20%)",
          900: "hsl(0, 0%, 10%)",
        },
        success: "hsl(150, 55%, 40%)",
        warning: "hsl(40, 90%, 45%)",
        error: "hsl(0, 75%, 45%)",
        info: "hsl(205, 90%, 45%)",
        background: "hsl(0, 0%, 98%)",
        foreground: "hsl(220, 15%, 20%)",
        border: "hsl(0, 0%, 90%)",
        input: "hsl(0, 0%, 90%)",
        ring: "hsl(205, 90%, 45%)",
        primary: "hsl(350, 80%, 40%)",
        card: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 20%)",
        },
        muted: {
          DEFAULT: "hsl(0, 0%, 96%)",
          foreground: "hsl(0, 0%, 45%)",
        },
        accent: {
          DEFAULT: "hsl(350, 80%, 35%)",
          foreground: "hsl(0, 0%, 100%)",
        },
        popover: {
          DEFAULT: "hsl(0, 0%, 100%)",
          foreground: "hsl(220, 15%, 20%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 75%, 45%)",
          foreground: "hsl(0, 0%, 100%)",
        },
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      spacing: {
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        24: "6rem",
        32: "8rem",
        48: "12rem",
        64: "16rem",
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.5" }],
        lg: ["1.25rem", { lineHeight: "1.2" }],
        xl: ["1.414rem", { lineHeight: "1.2" }],
        "2xl": ["2rem", { lineHeight: "1.2" }],
        "3xl": ["2.82rem", { lineHeight: "1.2" }],
      },
      backgroundImage: {
        "gradient-1":
          "linear-gradient(135deg, hsl(350, 80%, 40%) 0%, hsl(220, 65%, 25%) 100%)",
        "gradient-2":
          "linear-gradient(90deg, hsl(220, 65%, 20%) 0%, hsl(350, 70%, 40%) 100%)",
        "button-border-gradient":
          "linear-gradient(135deg, hsl(350, 80%, 50%) 0%, hsl(220, 70%, 35%) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
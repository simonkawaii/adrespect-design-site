/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/*.{html,js}",
    "./src/components/*.{html,js}",
    "./src/components/header/*.{html,js}",
    "./src/components/footer/*.{html,js}",
    "./src/components/about/*.{html,js}",
    "./src/components/masonry/*.{html,js}",
    "./src/components/offer/*.{html,js}",
    "./src/components/newsletter/*.{html,js}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#1B5B31",
        hover: "#038c32",
      },
      offwhite: "#F5F0EC",
      secondary: "#DCC1AB",
      white: "#fff",
      black: "#111",
      transparent: "transparent",
    },
    extend: {
      gap: {
        header: "clamp(24px,5vw + 1rem, 48px)",
      },
      padding: {
        large: "89px",
        medium: "2rem",
        small: "1rem",
      },
      borderWidth: {
        sm: "1px",
      },
      gridTemplateColumns: {
        custom: "repeat(2, minmax(0, 1fr))", // Adjust the number of columns as needed
      },
      height: {
        heroLgHeight: "calc(100svh - var(--header-height))",
      },

      keyframes: {
        wiggle: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        bounceme: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },

          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle .2s ease-in-out",
        bounceme: "bounceme .5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

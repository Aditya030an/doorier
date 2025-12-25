// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        planeFly: {
          '0%': {
            transform: 'translateX(-100%) translateY(-50%)',
          },
          '100%': {
            transform: 'translateX(100vw) translateY(-50%)',
          },
        },
      },
      animation: {
        planeFly: 'planeFly 3s linear infinite', // faster speed
      },
    },
  },
  plugins: [],
};
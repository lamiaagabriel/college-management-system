/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,ts}"],
  corePlugins: {
    preflight: false,
  },
  // prefix: "tw-",
  // purge: {
  //   enabled: true,
  // content: ["./src/**/*.{html,ts}"],
  // },
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1350px",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: "#fffdf4",
          100: "#fffbea",
          200: "#fff7d1",
          300: "#fff3b8",
          400: "#ffe98a",
          500: "#ffe05c",
          600: "#e6d656",
          700: "#bfb043",
          800: "#999033",
          900: "#7d7829",
        },
      },
    },
  },
};

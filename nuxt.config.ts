// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/robots", "nuxt-simple-sitemap"],
  css: ["~/assets/style/main.scss"],
  colorMode: {
    preference: "light",
  },
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/robots", "nuxt-simple-sitemap"],
  colorMode: {
    preference: "light",
  },
});

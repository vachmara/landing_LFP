// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/robots",
    "nuxt-simple-sitemap",
    "@zadigetvoltaire/nuxt-gtm",
  ],
  css: ["~/assets/style/main.scss"],
  colorMode: {
    preference: "light",
  },
  gtm: {
    id: "GTM-PRC9ZM7W",
    compatibility: false,
  },
});

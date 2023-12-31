<script lang="ts" setup>
useHead({
  title: "La Famiglia",
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      name: "description",
      content:
        "Une famille de passionnés, d'innovateurs et d'audacieux. Qui partagent une ambition commune : propulser les projets entrepreneuriaux vers la réussite. Nous croyons en la puissance des relations humaines.C'est dans le partage d'idées et d'expertises que naissent les plus grands projets.",
    },
    {
      name: "keywords",
      content:
        "La Famiglia, Agence, startup, marketing digitale, projet, invest, réseaux, freelance",
    },
    { name: "lang", content: "fr" },
    {
      name: "og:title",
      content:
        "La Famiglia- Au cœur de l'écosystème startup, nous avons bâti une famille. ",
    },
    {
      name: "og:description",
      content:
        "Une famille de passionnés, d'innovateurs et d'audacieux. Qui partagent une ambition commune : propulser les projets entrepreneuriaux vers la réussite. Nous croyons en la puissance des relations humaines.C'est dans le partage d'idées et d'expertises que naissent les plus grands projets.",
    },
    {
      name: "og:keywords",
      content:
        "La Famiglia, Agence, startup, marketing digitale, projet, invest, réseaux, freelance",
    },
    { name: "og:locale", content: "fr" },
    { name: "og:type", content: "website" },
    { name: "og:site_name", content: "La Famiglia" },
  ],
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
  script: [
    {
      src: "https://kit.fontawesome.com/b3fb3aef7b.js",
      crossorigin: "anonymous",
    },
  ],
});
</script>

<template>
  <div>
    <UContainer>
      <Navbar />
      <div class="hero-container">
        <Hero />
        <div class="flex items-center justify-center py-32">
          <Trust />
        </div>
      </div>
    </UContainer>
    <Formules />
    <Team />
  </div>
</template>

<style scoped>
.hero-container::before {
  content: "";
  background-image: url("/lignes.webp");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  opacity: 0.1; /* Change this value for your desired opacity */

  /* Make the pseudo-element cover the container */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  /* Place it under the content of the container */
  z-index: -1;
}
.hero-container {
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(40px);
}
</style>

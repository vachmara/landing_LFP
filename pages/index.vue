<script lang="ts" setup>

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
    <UContainer>
      <Process />
    </UContainer>
    <Work />
    <FAQ />
    <Footer />
  </div>
</template>

<style scoped>
@media (min-width: 768px) {
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
}
</style>

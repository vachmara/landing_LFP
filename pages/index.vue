<script lang="ts" setup>
const showScrollTop = ref(false);

const handleScroll = () => {
  // Check if the window scroll is past 100 viewport heights
  showScrollTop.value = window.scrollY > window.innerHeight * 0.7;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div>
    <UContainer>
      <Navbar />
      <div class="hero-container">
        <Hero />
        <div class="flex items-center justify-center py-10 md:py-32 lg:px-28">
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
    <button v-if="showScrollTop" class="scroll-to-top" @click="scrollToTop">
      <i class="fas fa-arrow-up"></i>
    </button>
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
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #2d74ff; /* Adjust to match design */
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  z-index: 1000;
}
</style>

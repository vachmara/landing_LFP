<script lang="ts" setup>
import anime from "animejs";

const logos = ref<HTMLElement | null>(null);

const imgWidth = 190;
const duration = 20000;

const animation = reactive<{ instance?: anime.AnimeInstance }>({});

onMounted(() => {
  if (logos.value) {
    const totalSlides = logos.value.children.length;

    // Initialize Anime.js animation instance for the logos element
    animation.instance = anime({
      targets: logos.value.children,
      translateX: [
        { value: `-${totalSlides * imgWidth}px`, duration },
        { value: 0, duration },
      ],
      loop: true,
      easing: "linear",
      reverse: true,
      autoplay: true,
    });
  }
});

// Clear interval on component unmount to prevent memory leaks
onUnmounted(() => {
  if (animation.instance) {
    animation.instance.pause();
  }
});
</script>

<template>
  <div class="trust flex flex-col items-center justify-center gap-10">
    <p class="trust-text">Ils ont fait confiance aux Freelances</p>
    <div ref="logos" class="logos flex overflow-hidden rounded-full w-full max-w-screen-md mx-auto">
      <img
        v-for="i in 9"
        :key="i"
        :src="`/proof/${i}.webp`"
        height="83"
        class="h-20"
      />
    </div>
  </div>
</template>

<style scoped>
.trust {
  border-radius: 30px;
  background-image: url("/bg-trust.webp"),
    linear-gradient(
      109deg,
      rgba(39, 88, 184, 0.2) -72.88%,
      rgba(45, 116, 255, 0.2) 16.78%,
      rgba(32, 32, 65, 0.2) 106.43%
    );
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(40px);
  width: 1096px;
  min-height: 300px;
}
.trust-text {
  color: #fff;
  text-align: center;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  line-height: normal;
}


.logos {
  min-height: 130px;
  scroll-behavior: smooth;
}

@media (min-width: 640px) {
  .trust-text {
    font-size: 32px;
  }
  .logos {
    min-height: 83px; /* Original height */
  }
}
</style>

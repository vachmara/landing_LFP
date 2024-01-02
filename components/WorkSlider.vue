<script lang="ts" setup>
import anime from "animejs";
defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true,
  },
  direction: {
    type: String as PropType<"left" | "right">,
    default: "left",
  },
});

const slider = ref<HTMLElement | null>(null);

const imgWidth = 150;
const duration = 20000;

const animation = reactive<{ instance?: anime.AnimeInstance }>({});

onMounted(() => {
  if (slider.value) {
    const totalSlides = slider.value.children.length;

    // Initialize Anime.js animation instance for the slider element
    animation.instance = anime({
      targets: slider.value.children,
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

onUnmounted(() => {
  if (animation.instance) {
    animation.instance.pause();
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-10">
    <div
      ref="slider"
      class="slider flex overflow-hidden w-full"
    >
      <img
        v-for="image in images"
        :key="image"
        :src="image"
        height="502"
      />
    </div>
  </div>
</template>

<style scoped></style>

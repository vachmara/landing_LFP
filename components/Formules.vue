<script lang="ts" setup>
import anime from "animejs";

const underlinedText = ref<HTMLElement | null>(null);
const curveSVG = ref<HTMLElement | null>(null);

const init = () => {
  const text = underlinedText.value;
  const svgElement = curveSVG.value;

  if (!text || !svgElement) return;

  const textRect = text.getBoundingClientRect();

  // Position the SVG underneath the underlined text (adjust 'bottom' as needed)
  svgElement.style.position = "absolute";
  svgElement.style.bottom = "-8px"; // Adjust this value for correct placement

  // Anime.js animation for the SVG stroke
  anime({
    targets: svgElement.querySelector("path"),
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
    easing: "easeInOutSine",
    autoplay: false,
    begin: function () {
      // Set the SVG width to the text width before starting the animation
      svgElement.style.width = Math.ceil(textRect.width) + "px";
    },
  }).play();
};

onMounted(() => {
  nextTick(() => {
    init();
  });
});
</script>

<template>
  <div id="formules">
    <UContainer class="py-32 flex flex-col gap-20">
      <h1 class="text-6xl font-semibold text-white">
        <span class="relative" ref="underlinedText">
          Nos formules
          <svg
            ref="curveSVG"
            xmlns="http://www.w3.org/2000/svg"
            width="0"
            height="15"
            viewBox="0 0 434 15"
            fill="none"
            class="curve-underline"
            style="stroke-dasharray: 1000; stroke-dashoffset: 1000"
          >
            <path
              d="M3.09633 10.5882C106.093 4.86689 335.673 -3.03378 430.014 11.1339"
              stroke="#2D74FF"
              stroke-width="6"
              stroke-linecap="round"
            />
          </svg>
        </span>
      </h1>
      <div class="flex justify-between gap-[15vw] xl:gap-[10vw] flex-col md:flex-row">
        <FormulesCard class="w-full" />
        <FormulesCard class="w-full" project />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
#formules {
  background: var(
    --fond-hero,
    url("/lignes_blanches.webp") center center / cover no-repeat,
    linear-gradient(
      38deg,
      rgba(41, 36, 255, 0.2) 15.91%,
      rgba(8, 7, 47, 0.04) 86.41%,
      rgba(0, 0, 0, 0) 102.48%
    ),
    linear-gradient(
      162deg,
      rgba(41, 36, 255, 0.2) 5.92%,
      rgba(0, 0, 0, 0) 59.17%
    ),
    #1f1f1f
  );
}
.curve-underline {
  position: absolute;
  display: block;
  transform: rotate(-1deg);

  overflow: visible;
}
</style>

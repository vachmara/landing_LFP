<script lang="ts" setup>
import { onMounted, ref, nextTick } from "vue";
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
  svgElement.style.bottom = "-5px"; // Adjust this value for correct placement

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
  <div class="px-28 py-20 relative flex">
    <div class="flex w-1/2 relative">
      <h1>
        Levez votre
        <span class="relative" ref="underlinedText">
          premier million
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

        et générez vos premiers clients.
      </h1>
    </div>
    <div class="flex w-1/2">
      <AnimateSvg />
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--fond-gris-bleu, #202041);
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 110%; /* 70.4px */
  letter-spacing: -3.2px;
}
.curve-underline {
  position: absolute;
  display: block;
  transform: rotate(1deg);

  overflow: visible;
}
</style>

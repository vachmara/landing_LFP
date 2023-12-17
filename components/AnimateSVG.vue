<script lang="ts" setup>
import { ref, onMounted } from "vue";
import anime from "animejs";

const animatedSVG = ref<SVGElement | null>(null);
const morphingPath = ref<SVGPathElement | null>(null);

const initAnimation = () => {
  const svg = animatedSVG.value;
  const pathElement = morphingPath.value;

  if (!svg || !pathElement) return;

  const bbox = pathElement.getBBox();
  const padding = 0; // add padding to avoid cropping
  const newViewBox = [
    bbox.x - padding / 2,
    bbox.y - padding / 2,
    bbox.width + padding,
    bbox.height + padding,
  ].join(" ");

  svg.setAttribute("viewBox", newViewBox);

  // Calculate the length of the path
  const pathLength = pathElement.getTotalLength();
  pathElement.style.strokeDasharray = `${pathLength} ${pathLength}`;

  // First, animate the drawing of the path
  anime({
    targets: pathElement,
    strokeDashoffset: [pathLength, 0],
    duration: 3000,
    easing: "easeInOutSine",
    complete: () => {
      // Once the path drawing is complete, start a continuous loop animation
      anime({
        targets: pathElement,
        scale: [1, 0.8],
        rotate: [0, 5],
        duration: 2000,
        easing: "easeInOutExpo",
        loop: true,
        direction: "alternate",
        autoplay: true,
      });
    },
  });
};

onMounted(() => {
  initAnimation();
});
</script>

<template>
  <div class="svg-container">
    <svg
      ref="animatedSVG"
      xmlns="http://www.w3.org/2000/svg"
      width="343"
      height="478"
      viewBox="0 0 343 478"
      fill="none"
    >
      <path
        ref="morphingPath"
        d="M153.572 472.248C152.878 472.251 152.179 472.251 151.474 472.248M151.474 472.248C86.3865 471.916 -28.9567 440.71 14.5716 317.248C69.5716 161.248 111.572 305.748 218.072 237.248C324.572 168.748 16.5718 204.748 45.0718 102.248C73.5718 -0.252243 162.072 -37.2522 257.072 45.2478C352.072 127.748 410.876 457.248 151.474 472.248Z"
        stroke="#FFD027"
        stroke-width="10"
        style="stroke-dashoffset: 1500"
      />
    </svg>
  </div>
</template>

<style scoped>
.svg-container {
  /* Center the SVG in the container for rotation */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.svg-container svg {
  position: absolute;
  top: 60%;
  left: 60%;
  transform: translate(-50%, -50%);
  overflow: visible; /* Allow the SVG to overflow its container */
}
</style>

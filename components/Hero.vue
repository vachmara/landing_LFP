<script lang="ts" setup>
import anime from "animejs";
import { ref, onMounted, nextTick } from "vue";

const underlinedText = ref<HTMLElement | null>(null);
const curveSVG = ref<HTMLElement | null>(null);

const init = () => {
  const text = underlinedText.value;
  const svgElement = curveSVG.value;

  if (!text || !svgElement) return;

  const textRect = text.getBoundingClientRect();

  // SVG will be positioned relatively to the text based on Tailwind classes
  svgElement.style.width = Math.ceil(textRect.width) + "px"; // Set in begin function earlier
  svgElement.style.bottom =  "-10px";
  const animation = anime({
    targets: svgElement.querySelector("path"),
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 1000,
    easing: "easeInOutSine",
    autoplay: false,
  });

  animation.play();
};

onMounted(() => {
  nextTick(init);
  window.addEventListener("resize", init); // Handle resize to ensure responsive SVG
});
</script>

<template>
  <div
    class="px-4 lg:px-28 py-8 lg:py-15 relative flex flex-wrap lg:flex-nowrap"
  >
    <div class="flex-grow lg:flex lg:w-1/2 relative flex-col">
      <h1 class="text-3xl lg:text-5xl font-bold leading-tight">
        Votre
        <span class="relative inline-block" ref="underlinedText">
          croissance,
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
        notre mission.
      </h1>
      <h2 class="py-4 lg:py-8 text-lg lg:text-xl">
        Notre collectif de Freelances guide votre entreprise à chaque étape de sa croissance, de la levée de fonds à la mise en œuvre de la stratégie marketing.
      </h2>
      <Button
        class="max-w-xs md:max-w-[250px] px-4 lg:px-8 py-3 lg:py-6 z-10"
        :text="'Rencontrer l\'équipe'"
        primary
        to="https://calendly.com/lafamiglia-contact/30min"
      />
      <div class="flex py-3 lg:py-6 items-center">
        <img src="/clients.webp" width="84" height="30" class="mr-2 lg:mr-3" />
        <h3 class="text-sm opacity-50">+50 entreprises accompagnées.</h3>
      </div>
    </div>
    <div class="hidden md:flex-grow lg:flex lg:w-1/2">
      <img
        src="/logo.webp"
        class="w-full absolute left-0 z-[8] transform rotate-[-5deg] -top-10"
      />
      <AnimateSvg class="relative" />
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: var(--fond-gris-bleu, #202041);
}

h2 {
  background: var(
    --hero,
    url("/lignes.webp") center center / cover no-repeat,
    linear-gradient(111deg, #202041 68.83%, rgba(45, 116, 255, 0.37) 117.95%)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.curve-underline {
  position: absolute;
  display: block;
  left: 0;
  bottom: -0.5rem;
  overflow: visible;
}
</style>

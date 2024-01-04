<script lang="ts" setup>
import anime from "animejs";

defineProps({
  project: {
    type: Boolean,
    default: false,
  },
});

const underlinedText = ref<HTMLElement | null>(null);
const curveSVG = ref<HTMLElement | null>(null);

const init = () => {
  const text = underlinedText.value;
  const svgElement = curveSVG.value;

  if (!text || !svgElement) return;

  const textRect = text.getBoundingClientRect();

  // Position the SVG underneath the underlined text (adjust 'bottom' as needed)
  svgElement.style.position = "absolute";
  svgElement.style.bottom = "-13px"; // Adjust this value for correct placement

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
  <div
    class="rounded-[50px] bg-white px-10 flex flex-col gap-10 py-10 relative pb-32 overflow-hidden"
  >
    <img
      :src="`/lfp_${project ? 'project' : 'invest'}.svg`"
      alt="logo"
      width="198"
      height="93"
      class="w-[198px] h-auto sm:w-[150px]"
    />
    <div>
      <span
        ref="underlinedText"
        class="relative text-3xl font-bold text-[#1F1F1F]"
      >
        La Famiglia {{ project ? "Project" : "Invest" }}
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
            :stroke="project ? '#2D74FF' : '#FFD027'"
            stroke-width="6"
            stroke-linecap="round"
          />
        </svg>
      </span>
    </div>

    <div class="max-w-full sm:max-w-[30vw] opacity-60 text-sm sm:text-base">
      <span v-if="!project"
        >
        <b class="pb-2">Recherche de financements</b><br>
        De la préparation du dossier, à la mise en relation avec des
        investisseurs, notre rôle est de vous introduire auprès de nouvelles
        sources de financements. Des relations étroites avec notre réseau
        d'investisseurs nous permettent de faciliter les échanges et maximiser
        les chances de réussite.</span
      >
      <span v-else
        >
        <b class="pb-2">Collectif de Freelances en marketing</b><br>
        Notre équipe de spécialistes rassemble tous les métiers du marketing
        digital, pour proposer un accompagnement à 360°, et adapté à vos besoins
        : conseil stratégique, développement de marque, acquisition et
        fidélisation de clients. Notre mission est de planifier, exécuter et
        piloter votre projet, de A à Z.</span
      >
    </div>
    <div class="flex items-end h-full">
      <Button
        class="w-full sm:max-w-[250px] px-4 py-3 sm:px-8 sm:py-6 z-10 mt-auto text-sm sm:text-base"
        :text="!project ? 'Découvrir notre offre' : 'Obtenir un devis'"
        :primary="!project"
        to="https://calendly.com/lafamiglia-contact/30min"
      />
    </div>

    <div class="absolute bottom-0 right-0">
      <svg
        width="130"
        height="158"
        viewBox="0 0 130 158"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M129.86 0.379395V35.6237C77.6896 35.9057 35.4976 78.8799 35.4976 131.847V157.253H0.741455V131.498C0.741455 59.1355 58.5337 0.466699 129.86 0.379395Z"
          :fill="project ? '#2D74FF' : '#FFD027'"
        />
        <path
          d="M129.86 69.1626V104.111C115.786 104.573 104.515 116.523 104.515 131.198V157.253H70.7311V130.838C70.7311 96.9499 97.1596 69.4411 129.86 69.1626Z"
          :fill="project ? '#2D74FF' : '#FFD027'"
          fill-opacity="0.6"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
.curve-underline {
  position: absolute;
  display: block;
  transform: rotate(-1deg);

  overflow: visible;
}
</style>

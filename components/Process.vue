<script lang="ts" setup>
const cardsContent = [
  {
    position: 1,
    title: "Lancement du projet",
    description:
      "Nous vous accompagnons dans la réalisation du Business Plan / Pitch Deck.",
    isYellow: true,
  },
  {
    position: 2,
    title: "Recherche de financements",
    description:
      "Nous vous mettons en relation avec notre réseau d'investisseurs (Business Angel, VC, FamilyOffice).",
    isYellow: true,
  },
  {
    position: 3,
    title: "Identité de marque",
    description:
      "Nous créons avec vous la charte graphique de votre marque.",
    isYellow: false,
  },
  {
    position: 4,
    title: "Fondations marketing",
    description:
      "Nous bâtissons les piliers de votre écosystème marketing digital.",
    isYellow: false,
  },
  {
    position: 5,
    title: "Acquisition de clients",
    description:
      "Nous déployons les canaux marketing adaptés pour la génération de leads.",
    isYellow: false,
  },
  {
    position: 6,
    title: "Rétention",
    description:
      "Nous implémentons les ressources et actions nécessaires à la fidélisation client.",
    isYellow: false,
  },
];
const cardWidth = 300; // Or whatever your card width is, including margins
const gapWidth = 30; // The gap you've used in `gap-10` Tailwind class
const totalMargin = cardWidth + gapWidth;
const sliderRef = ref(null);
const state = reactive({
  currentIndex: 0,
  translateX: 0,
});
const calculateTranslation = () => {
  state.translateX = state.currentIndex * totalMargin * -1;
};

const nextSlide = () => {
  if (state.currentIndex < cardsContent.length - 1) {
    state.currentIndex++;
    calculateTranslation();
  }
};

const prevSlide = () => {
  if (state.currentIndex > 0) {
    state.currentIndex--;
    calculateTranslation();
  }
};
const clickCard = (index: number) => {
  state.currentIndex = index;
  calculateTranslation();
};

const totalSliderWidth = computed(() => {
  return cardsContent.length * totalMargin - gapWidth; // Subtracting one gap because there's no gap after the last card
});
</script>

<template>
  <div id="process" class="px-20 py-16 overflow-hidden">
    <div class="flex w-full justify-between">
      <h1 class="md:text-5xl text-3xl font-bold text-white">Notre process</h1>
      <div class="hidden md:flex gap-5">
        <img
          src="/left.svg"
          alt="arrow-left"
          class="cursor-pointer"
          width="45"
          height="45"
          @click="prevSlide"
        />
        <img
          src="/right.svg"
          alt="arrow-right"
          class="cursor-pointer"
          width="45"
          height="45"
          @click="nextSlide"
        />
      </div>
    </div>
    <div
      class="slider-track py-10"
      ref="sliderRef"
      :style="{
        width: totalSliderWidth + 'px',
        transform: `translateX(${state.translateX}px)`,
      }"
    >
      <div class="card" v-for="card in cardsContent" :key="card.position">
        <ProcessCard
          class="w-full h-full"
          :class="card.position === state.currentIndex + 1 ? 'scale-100' : 'scale-90 cursor-pointer'"
          :key="card.position"
          :position="card.position"
          :title="card.title"
          :description="card.description"
          :isYellow="card.isYellow"
          :current="card.position === state.currentIndex + 1"
          @click="clickCard(card.position - 1)"
        />
      </div>
    </div>
    <div class="hidden justify-center md:flex">
      <Button
        class="max-w-xs lg:max-w-sm px-4 lg:px-8 py-3 lg:py-6 z-10"
        text="Rencontrez La Famiglia"
        to="https://calendly.com/lafamiglia-contact/30min?month=2023-12"
        primary
      />
    </div>
    <div class="flex md:hidden justify-between">
        <img
          src="/left.svg"
          alt="arrow-left"
          class="cursor-pointer"
          width="45"
          height="45"
          @click="prevSlide"
        />
        <img
          src="/right.svg"
          alt="arrow-right"
          class="cursor-pointer"
          width="45"
          height="45"
          @click="nextSlide"
        />
      </div>
  </div>
</template>

<style scoped>
#process {
  border-radius: 67px;
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
.card {
  min-width: 300px; /* Adjust width as per your design requirements */
}
.slider-track {
  margin-left: calc(
    50% - 150px
  ); /* Adjust margin as per your design requirements */
  display: flex;
  gap: 30px;
  transition: transform 0.3s ease-in-out;
}
</style>

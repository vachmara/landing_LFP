<script lang="ts" setup>
const images = [
  "/work/asterblank.webp",
  "/work/biosa.webp",
  "/work/delex.webp",
  "/work/hapyes.webp",
  "/work/lpj.webp",
  "/work/pain_des_hautes_chaumes.webp",
  "/work/phya.webp",
  "/work/reelmer.webp",
  "/work/social_media.webp",
];
</script>

<template>
  <div>
    <UContainer class="flex flex-col gap-20 pt-32">
      <div class="flex flex-col gap-5">
        <h1 class="text-6xl font-bold text-[#202041]">Nos travaux</h1>
        <h2 class="text-[#2D74FF] opacity-60 text-xl">
          Découvrez nos derniers travaux
        </h2>
      </div>
    </UContainer>
    <WorkSlider :images="images" />
  </div>
</template>

<style scoped></style>

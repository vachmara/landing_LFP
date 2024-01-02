<script lang="ts" setup>
defineProps({
  image: String,
  firstname: String,
  lastname: String,
  role: String,
  hashtags: String,
  socials: Array as PropType<{ name: string; link: string }[]>,
});
</script>

<template>
  <div class="flex flex-col gap-5 max-w-[223px]">
    <img
      :src="image"
      :alt="`${firstname} ${lastname}`"
      class="w-auto h-auto max-w-[223px] max-h-[292px]"
    />
    <div class="flex flex-col">
      <span class="text-[#202041] font-bold text-3xl">{{ firstname }}</span>
      <span class="text-[#FFD027] font-bold text-3xl">{{ lastname }}.</span>
    </div>
    <div class="flex flex-col gap-2">
      <span class="text-[#202041] text-xl">{{ role }}</span>
      <!-- Always two lines text even empty -->
      <span class="text-[#2D74FF] min-h-[40px]">{{ hashtags }}</span>
    </div>
    <div class="flex flex-row gap-5">
      <div
        v-for="social in socials"
        :key="social.name"
        class="flex flex-row gap-5"
      >
       <NuxtLink :to="social.link">
          <img
            :src="`/socials/${social.name}.svg`"
            :alt="social.name"
            width="30"
            height="30"
            class="w-auto h-auto max-w-[30px] max-h-[30px]"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

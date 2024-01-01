<script lang="ts" setup>
  defineProps({
    position: Number, 
    title: String,
    description: String,
    isYellow:{
      type: Boolean,
      default: true
    },
    current: Boolean
  })
</script>

<template>
  <div class="bg-white flex flex-col gap-5 items-start rounded-[40px] px-10 pt-16 pb-40 relative overflow-hidden transition-all duration-500" 
  :style="current ? '' : 'opacity: 0.5;'">
    <span class="text-xl text-[#1F1F1F] font-bold">{{position}}. {{ title }}</span>
    <p class="text-lg text-[#202041] font-normal">{{ description }}</p>
    <div class="absolute bottom-0 left-0 flex justify-center" v-if="isYellow">
      <img src="/process/yellow.svg" alt="process" width="113" height="135" />
    </div>
    <div class="absolute bottom-0 right-0 flex justify-center" v-else>
      <img src="/process/blue.svg" alt="process" width="113" height="135" />
    </div>
  </div>
</template>

<style scoped>
</style>
<script lang="ts" setup>
defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const open = ref(false);

const toggleOpen = () => {
  open.value = !open.value;
};
</script>

<template>
  <div
    @click="toggleOpen"
    :class="['h-max rounded-[35px] p-10 cursor-pointer duration-300 overflow-visible transition-all', open ? 'bg-[#FFD027] text-[#202041]' : 'bg-[#202041] text-white']"
  >
    <div class="flex flex-col gap-5 min-h-[50px]">
      <h1 class="text-2xl font-bold">{{ question }}</h1>
      <transition
        name="fade"
        mode="out-in"
      >
        <p
          v-if="open"
          class="text-xl text-[#202041] transition-all duration-300"
        >
          {{ answer }}
        </p>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  max-height: 0;
  overflow: hidden;
}

.fade-enter-to, .fade-leave-from {
  opacity: 1;
  max-height: 1000px;
}
</style>

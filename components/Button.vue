<script lang="ts" setup>
defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: "",
  },
  to: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <NuxtLink
    class="button h-12 px-8"
    :to="to"
    target="_blank"
    :class="[primary ? 'primary' : 'secondary']"
  >
    {{ text }}
  </NuxtLink>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 11px;
  background: var(--Jaune, #ffd027);
  color: #202041;
  text-align: center;
  font-family: "SF Pro Text", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  transition: all 0.35s ease-in-out;
}

.button.secondary {
  background: var(--Bleu-clair, #2d74ff);
  color: #ffffff;
}
.button.secondary:hover {
  color: #202041;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  background: var(--Jaune, #ffd027);
}

.button:hover {
  color: #ffffff;
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  background: var(--Bleu-clair, #2d74ff);
}
</style>

<script lang="ts" setup>
const props = defineProps({
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
    class="button h-12 px-8 max"
    :to="to"
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
  color: #fff;
  text-align: center;
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-family: "SF Pro Text", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.35s ease-in-out;
}

.button:hover {
  transition: all 0.3s ease-in-out;
  font-size: 16px;
  background: var(--Bleu-clair, #2d74ff);
}
</style>

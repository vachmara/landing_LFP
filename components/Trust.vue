<script lang="ts" setup></script>

<template>
  <div class="trust flex flex-col items-center justify-center">
    <p class="trust-text">Ils ont fait confiance aux Freelances</p>
    <div ref="logos" class="logo">
    
    </div>
  </div>
</template>

<style scoped>
.trust {
  border-radius: 30px;
  background-image: url("bg-trust.webp"),
    linear-gradient(
      109deg,
      rgba(39, 88, 184, 0.2) -72.88%,
      rgba(45, 116, 255, 0.2) 16.78%,
      rgba(32, 32, 65, 0.2) 106.43%
    );
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(40px);
  width: 1096px;
  min-height: 300px;
}
.trust-text {
  color: #fff;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  line-height: normal;
}
</style>

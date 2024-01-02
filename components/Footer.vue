<script lang="ts" setup></script>

<template>
  <div class="bg-[#F5F5F5]">
    <UContainer >
      <!--<hr class="border-[#202041] border-t w-full border-opacity-80 pt-5" />-->
      <div class="flex justify-between flex-col md:flex-row gap-2 md:gap-10 py-5 text-sm text-md text-center md:text-left">
        <div class="hidden md:flex gap-2">
          <img src="/france.svg" /> 
          France
        </div>
        <div>
          © {{ new Date().getFullYear() }} La Famiglia. <NuxtLink to="/legal" class="text-[#202041]"
          >Mentions légales</NuxtLink>
        </div>
        <div>
          Créé avec <i class="fas fa-heart text-[#FFCF27]"></i> par La Famiglia.
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>

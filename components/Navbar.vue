<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import Menu from "@/assets/menu.svg";
</script>

<template>
  <Disclosure as="nav" v-slot="{ open }">
    <div class="mx-auto max-w-7xl">
      <div
        class="inset-y-0 left-0 flex items-center sm:hidden py-5 justify-between px-2"
      >
        <!-- Mobile menu button-->
        <DisclosureButton
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          <span class="sr-only">Open main menu</span>
          <img :src="Menu" v-if="!open" />
          <i class="fas fa-times" v-else></i>
        </DisclosureButton>
        <NuxtLink
          to="/"
          class="flex items-center justify-center gap-2 text-2xl font-bold"
        >
          <img
            src="/logo.svg"
            width="80"
            height="20"
            alt="La Famiglia"
            class="h-auto"
        /></NuxtLink>
      </div>
      <div
        class="gap-[101px] items-center justify-center py-[48px] md:flex hidden"
      >
        <div class="flex flex-shrink-0 items-center justify-center">
          <NuxtLink
            to="/"
            class="flex items-center justify-center gap-2 text-2xl font-bold"
          >
            <img
              src="/logo.svg"
              width="100"
              height="40"
              alt="La Famiglia"
              class="h-auto"
          /></NuxtLink>
        </div>
        <div class="flex gap-10 w-max min-w-[600px] items-center justify-center">
          <NuxtLink to="/#formules" class="nav-link"> Nos formules </NuxtLink>
          <NuxtLink to="/#team" class="nav-link">Notre équipe</NuxtLink>
          <NuxtLink to="/#work" class="nav-link">Nos travaux</NuxtLink>
          <NuxtLink to="/#process" class="nav-link">Notre process</NuxtLink>
        </div>
        <Button
          class="md:max-w-[250px] px-8 hidden md:block"
          :text="'Découvrir la Famiglia'"
          primary
          to="https://calendly.com/lafamiglia-contact/30min"
        />
      </div>
      <div
        class="absolute gap-5 inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
      >
        <div
          class="hidden tablet:block h-6 w-px bg-accent-faded border-l border-gray-200 border-opacity-25"
        ></div>
      </div>
    </div>
    <DisclosurePanel
      class="fixed inset-0 z-50 bg-white sm:hidden flex flex-col overflow-y-auto px-10"
    >
      <div class="space-y-1 px-2 py-10 pb-3 flex flex-col gap-8 items-start">
        <span class="text-2xl font-bold">Menu</span>
        <NuxtLink
          to="/#formules"
          class="nav-link"
          active-class="text-[#3131C9F1]"
        >
          Nos formules
        </NuxtLink>
        <NuxtLink to="/#team" class="nav-link" active-class="text-[#3131C9F1]">
          Notre équipe
        </NuxtLink>
        <NuxtLink to="/#work" class="nav-link" active-class="text-[#3131C9F1]">
          Nos travaux
        </NuxtLink>
        <NuxtLink
          to="/#process"
          class="nav-link"
          active-class="text-[#3131C9F1]"
        >
          Notre process
        </NuxtLink>
        <!-- Add a button for closing the mobile menu -->
        <DisclosureButton
          class="absolute top-0 right-0 text-[#FFD027] text-3xl p-5"
        >
          <i class="fas fa-times"></i>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
.nav-link {
  color: var(--fond-gris-bleu, #202041);
  text-align: center;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.35s ease-in-out;
}

.nav-link:hover {
  transform: scale(0.85);
  color: var(--fond-gris-bleu-hover, #3131c9f1);
  transition: all 0.3s ease-in-out;
}
</style>

<script lang="ts" setup></script>

<template>
  <UContainer class="flex flex-col gap-20 pb-32 pt-5">
    <div class="flex flex-col gap-5">
      <h1 class="text-6xl font-bold text-[#202041]">FAQ</h1>
      <h2 class="text-[#2D74FF] opacity-60 text-xl">
        Vos questions fréquentes
      </h2>
    </div>
    <div class="flex flex-col gap-10">
      <div class="flex md:flex-row flex-col gap-10">
        <FAQBlock
          question="Combien coûte une levée de fonds ?"
          answer="L’accompagnement à la levée de fonds se distingue en deux parties, un accompagnement à la création des différents éléments : sur devis. Ainsi que la présentation du dossier à un panel d’investisseurs, ce service est majoritairement payé au succès."
          class="md:w-2/3 w-full"
        />
        <FAQBlock
          class="md:w-1/3 w-full"
          question="Pourquoi travailler avec un collectif de Freelance VS une agence ?"
          answer="Travailler avec un collectif de Freelances c'est collaborer avec des entrepreneurs comme vous, disposant d’une vision business affutée, une flexibilité dans l'exécution et une expertise construite dans la réalité du terrain."
        />
      </div>
      <div class="flex md:flex-row flex-col gap-10">
        <FAQBlock
          class="md:w-2/5 w-full"
          question="Comment les freelances ont-ils été sélectionnés ?"
          answer="Les freelances de La Famiglia ont été sélectionnés pour leur expertise reconnue sur le marché, ainsi que leurs valeurs entrepreneuriales : fiabilité, partage, dévotion."
        />
        <FAQBlock
          class="md:w-3/5 w-full"
          question="Qui coordonne un projet marketing avec La Famiglia ?"
          answer="La chefferie de projet est assurée en interne par le chef de projet et des outils de travail collaboratifs (Notion, Slack, Trello etc.)."
        />
      </div>
    </div>
  </UContainer>
</template>

<style scoped></style>

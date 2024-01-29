<script lang="ts" setup>
const team_members = [
  {
    image: "/team/kacper.webp",
    firstname: "Kacper",
    lastname: "Landowski",
    role: "Expert Growth Marketing",
    hashtags: "#Marketing #Growth #Graphisme #Vidéo",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/kacper-landowski-a47946217/",
      },
      {
        name: "behance",
        link: "https://www.behance.net/kacperlandowski",
      },
    ],
  },
  {
    image: "/team/valentin.webp",
    firstname: "Valentin",
    lastname: "Chmara",
    role: "Expert Technique",
    hashtags: "#CTO #SaaS #Fullstack #Web3",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/valentinchmara/",
      },
      {
        name: "github",
        link: "https://github.com/vachmara",
      },
    ],
  },
  {
    image: "/team/sonya.webp",
    firstname: "Sonya",
    lastname: "Drideche",
    role: "Experte Copywriting",
    hashtags: "#Emailling #LinkedIn #PageDeVente",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/sonya-d-42274210b/",
      },
    ],
  },
  {
    image: "/team/florent.webp",
    firstname: "Florent",
    lastname: "Ferrante",
    role: "Expert Financier",
    hashtags: "#BusinessPlan #LevéeDeFonds #PitchDeck",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/florent-ferrante/",
      },
    ],
  },
  {
    image: "/team/gabriel.webp",
    firstname: "Gabriel",
    lastname: "Achmet",
    role: "Expert Social Ads",
    hashtags: "#MetaAds #TiktokAds #UGC",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/gabriel-achmet-a949a8269/",
      },
      {
        name: "instagram",
        link: "https://www.instagram.com/lepleinpotentiel/",
      },
    ],
  },
  {
    image: "/team/laura.webp",
    firstname: "Laura",
    lastname: "Benhamou",
    role: "Experte Réseaux Sociaux",
    hashtags: "#Content #CommunityManagement",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/laura-benhamou-223372172/",
      },
    ],
  },
  {
    image: "team/abdel.webp",
    firstname: "Abdel",
    lastname: "Sakhi",
    role: "Expert Google Ads",
    hashtags: "#Publicité #GA4",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/abdel-wahid-sakhi/",
      },
    ],
  },
  {
    image: "/team/elie.webp",
    firstname: "Elie",
    lastname: "Zemmour",
    role: "Product Owner",
    hashtags: "#Management #Gestion #Finance #Cofounder",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/elie-zemmour",
      },
    ],
  },
  {
    image: "/team/mathieu.webp",
    firstname: "Mathieu",
    lastname: "Turban",
    role: "Chef de projet",
    hashtags: "#RelationClient #Project #Cofounder #Marketing",
    socials: [
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/mathieu-turban/",
      },
    ],
  },
];


</script>

<template>
  <UContainer class="flex flex-col gap-10 py-20 md:py-32">
    <div class="flex flex-col gap-5" id="team">
      <h1 class="text-6xl font-bold text-[#202041]">Nos Freelances</h1>
      <h2 class="text-[#2D74FF] opacity-60 text-xl">
        Chacun expert dans son domaine
      </h2>
      
    </div>
    
    <div
      class="flex overflow-x-auto md:overflow-x-hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center items-center"
    >
      <TeamMember
        v-for="member in team_members"
        :key="member.firstname"
        :image="member.image"
        :firstname="member.firstname"
        :lastname="member.lastname"
        :role="member.role"
        :hashtags="member.hashtags"
        :socials="member.socials"
        class="w-full"
      />
    </div>
    <p class="text-[#202041] opacity-60 md:hidden">
        Scroll pour voir les autres membres de l'équipe 
        <i class="fas fa-arrow-right"></i>
      </p>
  </UContainer>
</template>

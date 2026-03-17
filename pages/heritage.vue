<template>
  <!-- ===============================
       Page Header
  ================================== -->
  <HeaderNav />

  <!-- ===============================
       Heritage Detail Section
       Displays content if `heritage` is found
  ================================== -->
  <section class="heritage-detail" v-if="heritage">
    
    <!-- Hero Image of the Heritage Site -->
    <img :src="heritage.image" :alt="heritage.title" class="heritage-image" />

    <!-- Textual Content -->
    <div class="heritage-content">
      <!-- Title -->
      <BaseHeading class="heritage-title">{{ heritage.title }}</BaseHeading>

      <!-- Location -->
      <p class="heritage-location">{{ heritage.location }}</p>

      <!-- Category -->
      <p class="heritage-category">Category: {{ heritage.category }}</p>

      <!-- Description -->
      <p class="heritage-description">{{ heritage.description }}</p>
    </div>
  </section>

  <section v-else class="heritage-notfound">
    <p>Heritage site not found.</p>
  </section>

  <Footer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import HeaderNav from '~/components/organisms/HeaderNav.vue'
import BaseHeading from '~/components/atoms/BaseHeading.vue'
import Footer from '~/components/organisms/Footer.vue'

// List of heritage sites
const heritageSites = [
  {
    title: "Hundred Islands National Park",
    location: "Alaminos, Pangasinan",
    category: "Natural Heritage",
    image: "./images/hundredIslands.jpg",
    description: "A group of 124 islands with beaches, coves, and snorkeling spots."
  },
  {
    title: "Cape Bolinao",
    location: "Bolinao, Pangasinan",
    category: "Natural Heritage",
    image: "./images/capeBolinao.jpg",
    description: "Famous for its white sand beaches, rock formations, and lighthouse."
  },
  {
    title: "Our Lady of the Rosary of Manaoag",
    location: "Manaoag, Pangasinan",
    category: "Religious Heritage",
    image: "./images/manaoagChurch.jpg",
    description: "A centuries-old pilgrimage site and church in Pangasinan."
  },
  {
    title: "Saint James the Great Parish Church",
    location: "Bolinao, Pangasinan",
    category: "Religious / Historical Heritage",
    image: "./images/bolinaoChurch.jpg",
    description: "Historic church with Spanish colonial architecture."
  },
  {
    title: "Lingayen Co-Cathedral",
    location: "Lingayen, Pangasinan",
    category: "Religious / Historical Heritage",
    image: "./images/lingayenCoCathedral.jpg",
    description: "A landmark cathedral known for its beautiful architecture and history."
  },
  {
    title: "St. Joseph the Patriarch Cathedral",
    location: "Alaminos, Pangasinan",
    category: "Religious Heritage",
    image: "./images/alaminosCathedral.jpg",
    description: "A historic cathedral serving as a religious center for the community."
  },
  {
    title: "San Juan Evangelista Church",
    location: "Dagupan City, Pangasinan",
    category: "Religious / Historical Heritage",
    image: "./images/dagupanChurch.jpg",
    description: "Famous for its centuries-old history and beautiful interiors."
  },
  {
    title: "Saints Peter and Paul Parish Church",
    location: "Calasiao, Pangasinan",
    category: "Religious / Historical Heritage",
    image: "./images/calasiaoChurch.jpeg",
    description: "Known for its intricate architectural design and historic significance."
  },
  {
    title: "Minor Basilica of Saint Dominic",
    location: "San Carlos City, Pangasinan",
    category: "Religious Heritage",
    image: "./images/sanCarlosBasilica.jpg",
    description: "A notable basilica with rich cultural and religious heritage."
  },
  {
    title: "Saint Vincent Ferrer Parish Church",
    location: "Bayambang, Pangasinan",
    category: "Religious Heritage",
    image: "./images/bayambangChurch.png",
    description: "A historic church with centuries-old traditions and architecture."
  },
  {
    title: "Casa Real (Banaan Pangasinan Provincial Museum)",
    location: "Lingayen, Pangasinan",
    category: "Historical / Cultural Heritage",
    image: "./images/casaReal.jpg",
    description: "A museum showcasing provincial history and artifacts."
  },
  {
    title: "Dagupan City Museum",
    location: "Dagupan City, Pangasinan",
    category: "Cultural Heritage",
    image: "./images/dagupanMuseum.jpg",
    description: "Museum preserving Dagupan’s rich cultural and historical heritage."
  },
  {
    title: "Bolinao Museum",
    location: "Bolinao, Pangasinan",
    category: "Cultural Heritage",
    image: "./images/bolinaoMuseum.jpg",
    description: "Features historical artifacts and exhibits about Bolinao’s culture."
  },
  {
    title: "Urdaneta Park Landmark Monument",
    location: "Urdaneta City, Pangasinan",
    category: "Historical Heritage",
    image: "./images/urdanetaMonument.jpg",
    description: "A monument commemorating the city’s history and local heroes."
  },
  {
    title: "Sison Auditorium",
    location: "Lingayen, Pangasinan",
    category: "Cultural / Architectural Heritage",
    image: "./images/sisonAuditorium.jpg",
    description: "A cultural venue showcasing events, performances, and heritage."
  },
  {
    title: "Abinganan Falls",
    location: "Sual, Pangasinan",
    category: "Natural Heritage",
    image: "./images/abingananFalls.jpg",
    description: "A natural waterfall popular for its scenic views and local legends."
  },
  {
    title: "Enchanted Cave",
    location: "Bolinao, Pangasinan",
    category: "Natural Heritage",
    image: "./images/enchantedCave.jpg",
    description: "A mystical cave known for its clear waters and natural beauty."
  },
  {
    title: "Patar Beach",
    location: "Bolinao, Pangasinan",
    category: "Natural Heritage",
    image: "./images/patarBeach.jpg",
    description: "A famous beach destination for swimming, sunbathing, and nature walks."
  },
  {
    title: "Mount Balungao",
    location: "Balungao, Pangasinan",
    category: "Natural Heritage",
    image: "./images/mtBalungao.jpg",
    description: "A popular hiking spot with panoramic views of Pangasinan."
  },
  {
    title: "Bengson-Yuson Ancestral House",
    location: "Lingayen, Pangasinan",
    category: "Cultural / Architectural Heritage",
    image: "./images/ancestralHouseLingayen.jpg",
    description: "Historic ancestral house showcasing Filipino colonial architecture."
  },
  {
  title: "Pangasinan Provincial Capitol",
  location: "Lingayen, Pangasinan",
  category: "Architectural Heritage",
  image: "./images/pangasinanCapitol.jpg",
  description: "The provincial capitol building of Pangasinan, featuring grand neoclassical architecture."
 },
 {
  title: "San Quintin Parish Church",
  location: "San Quintin, Pangasinan",
  category: "Architectural Heritage",
  image: "./images/sanQuintinChurch.jpg",
  description: "A historic church known for its colonial-era architectural design and bell tower."
},
{
  title: "Pangasinan Museum of Local Arts",
  location: "Lingayen, Pangasinan",
  category: "Cultural Heritage",
  image: "./images/museumOfLocalArts.jpg",
  description: "Museum highlighting Pangasinan’s local arts, crafts, and cultural artifacts."
}
]

const route = useRoute()
const heritage = ref(null)

onMounted(() => {
  const query = route.query.q?.toLowerCase() || ''
  heritage.value = heritageSites.find(site =>
    site.title.toLowerCase().includes(query)
  )
})
</script>

<style scoped src="@/assets/css/page.css"></style>
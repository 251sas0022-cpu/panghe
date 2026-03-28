<template>
  <!-- Full-width Header -->
  <HeaderNav />

  <!-- Page content wrapper -->
  <div class="page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-content">
          <BaseHeading class="hero-title">
            Explore Pangasinan Heritage
          </BaseHeading>

          <p class="hero-subtitle">
            Discover historical sites, rich culture, and living traditions of Pangasinan.
          </p>

          <!-- Search Card -->
          <div class="search-card">
            <SearchForm />
          </div>
        </div>
      </div>
    </section>

 <!-- Carousel Section -->
<section class="carousel-section">
  <!-- Section Heading -->
  <BaseHeading class="carousel-title">
    Featured Heritage Sites
  </BaseHeading>

  <HeritageFilmCarousel :slides="heritageSlides" />
</section>

  </div>

  <Footer />
</template>

<script setup>
import HeaderNav from '~/components/organisms/HeaderNav.vue'
import Footer from '~/components/organisms/Footer.vue'
import BaseHeading from '~/components/atoms/BaseHeading.vue'
import SearchForm from '~/components/molecules/SearchForm.vue'
import HeritageFilmCarousel from '~/components/organisms/HeritageFilmCarousel.vue'

const heritageSlides = [
   { image: "/images/hundredIslands.jpg", title: "Hundred Islands National Park", location: "Alaminos, Pangasinan", category: "Natural Heritage" },
  { image: "/images/capeBolinao.jpg", title: "Cape Bolinao", location: "Bolinao, Pangasinan", category: "Natural Heritage" },
  { image: "/images/manaoagChurch.jpg", title: "Our Lady of the Rosary of Manaoag", location: "Manaoag, Pangasinan", category: "Religious Heritage" },
  { image: "/images/bolinaoChurch.jpg", title: "Saint James the Great Parish Church", location: "Bolinao, Pangasinan", category: "Religious / Historical Heritage" },
  { image: "/images/lingayenCoCathedral.jpg", title: "Lingayen Co-Cathedral", location: "Lingayen, Pangasinan", category: "Religious / Historical Heritage" },
  { image: "/images/alaminosCathedral.jpg", title: "St. Joseph the Patriarch Cathedral", location: "Alaminos, Pangasinan", category: "Religious Heritage" },
  { image: "/images/dagupanChurch.jpg", title: "San Juan Evangelista Church", location: "Dagupan City, Pangasinan", category: "Religious / Historical Heritage" },
  { image: "/images/calasiaoChurch.jpeg", title: "Saints Peter and Paul Parish Church", location: "Calasiao, Pangasinan", category: "Religious / Historical Heritage" },
  { image: "/images/sanCarlosBasilica.jpg", title: "Minor Basilica of Saint Dominic", location: "San Carlos City, Pangasinan", category: "Religious Heritage" },
  { image: "/images/bayambangChurch.png", title: "Saint Vincent Ferrer Parish Church", location: "Bayambang, Pangasinan", category: "Religious Heritage" },
  { image: "/images/casaReal.jpg", title: "Casa Real (Banaan Pangasinan Provincial Museum)", location: "Lingayen, Pangasinan", category: "Historical / Cultural Heritage" },
  { image: "/images/dagupanMuseum.jpg", title: "Dagupan City Museum", location: "Dagupan City, Pangasinan", category: "Cultural Heritage" },
  { image: "/images/bolinaoMuseum.jpg", title: "Bolinao Museum", location: "Bolinao, Pangasinan", category: "Cultural Heritage" },
  { image: "/images/urdanetaMonument.jpg", title: "Urdaneta Park Landmark Monument", location: "Urdaneta City, Pangasinan", category: "Historical Heritage" },
  { image: "/images/sisonAuditorium.jpg", title: "Sison Auditorium", location: "Lingayen, Pangasinan", category: "Cultural / Architectural Heritage" },
  { image: "/images/abingananFalls.jpg", title: "Abinganan Falls", location: "Sual, Pangasinan", category: "Natural Heritage" },
  { image: "/images/enchantedCave.jpg", title: "Enchanted Cave", location: "Bolinao, Pangasinan", category: "Natural Heritage" },
  { image: "/images/patarBeach.jpg", title: "Patar Beach", location: "Bolinao, Pangasinan", category: "Natural Heritage" },
  { image: "/images/mtBalungao.jpg", title: "Mount Balungao", location: "Balungao, Pangasinan", category: "Natural Heritage" },
  { image: "/images/ancestralHouseLingayen.jpg", title: "Bengson-Yuson Ancestral House", location: "Lingayen, Pangasinan", category: "Cultural / Architectural Heritage" },
  { image: "/images/pangasinanCapitol.jpg", title: "Pangasinan Provincial Capitol", location: "Lingayen, Pangasinan", category: "Architectural Heritage" },
  { image: "/images/sanQuintinChurch.jpg", title: "San Quintin Parish Church", location: "San Quintin, Pangasinan", category: "Architectural Heritage" },
  { image: "/images/museumOfLocalArts.jpg", title: "Pangasinan Museum of Local Arts", location: "Lingayen, Pangasinan", category: "Cultural Heritage" }
]
</script>

<style scoped src="@/assets/css/home.css"></style>
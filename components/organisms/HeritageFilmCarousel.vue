<template>
  <!--
    FilmCarousel Component
    ----------------------
    - Horizontally scrolling carousel of items (films, heritage sites, etc.)
    - Infinite scroll effect by duplicating slides
    - Uses CarouselItem molecule for each slide
  -->
  <div class="film-carousel">
    <div class="film-track">
      <!-- Loop over duplicated slides for seamless infinite effect -->
      <CarouselItem
        v-for="(item, index) in duplicatedSlides"
        :key="index"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import CarouselItem from '~/components/molecules/CarouselItem.vue'

const props = defineProps({
  slides: {
    type: Array,
    required: true
  }
})

// Duplicate slides to create infinite scroll illusion
const duplicatedSlides = computed(() => [
  ...props.slides,
  ...props.slides
])
</script>

<style scoped>
/* =====================================
   CAROUSEL CONTAINER
===================================== */
.film-carousel {
  overflow: hidden; 
  width: 100%;
  padding: 2rem 0;
}

/* =====================================
   TRACK (FLEX WRAPPER)
===================================== */
.film-track {
  display: flex;
  gap: 1rem;
  animation: scroll 25s linear infinite; 
  container-type: inline-size;
  container-name: film;
}

.film-track > * {
  flex: 0 0 auto; 
  width: 200px;   
}

/* =====================================
   SCROLL ANIMATION
===================================== */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } 
}

/* =====================================
   RESPONSIVE ADJUSTMENTS
===================================== */
@container film (max-width: 768px) {
  .film-track > * {
    width: 140px;
  }

  .film-track {
    gap: 0.5rem;
  }
}

@container film (max-width: 480px) {
  .film-track > * {
    width: 120px;
  }
}
</style>
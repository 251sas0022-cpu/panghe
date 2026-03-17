<template>
  <!--
    CarouselItem Component
    ----------------------
    Represents a single item in a carousel.
    - Displays an image and a title overlay
    - Click navigates to the heritage detail page using Vue Router
    - Includes hover animation for interactivity
  -->
  <div class="carousel-item" @click="goToHeritage">
    <BaseImage :src="item.image" :alt="item.title" />
    <p class="title">{{ item.title }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import BaseImage from '~/components/atoms/BaseImage.vue'

const router = useRouter()

// Props
const props = defineProps({
  item: {
    type: Object,
    required: true // expects { title: string, image: string }
  }
})

// Navigate to heritage page with the item title as query
function goToHeritage() {
  router.push({
    path: '/heritage',
    query: { q: props.item.title }
  })
}
</script>

<style scoped>
/* =========================================
   CAROUSEL ITEM
   -----------------------------------------
   - Fixed size for carousel layout
   - Rounded corners and overflow hidden for clean look
   - Hover scaling for interactive feedback
========================================= */
.carousel-item {
  min-width: 220px;              
  height: 160px;                 
  border-radius: 12px;           
  overflow: hidden;              
  position: relative;            
  flex-shrink: 0;                
  cursor: pointer;               
  transition: transform 0.3s ease;
}

.carousel-item:hover {
  transform: scale(1.05);      
}

/* =========================================
   TITLE OVERLAY
   -----------------------------------------
   - Positioned at the bottom of the card
   - Semi-transparent background for readability
   - Centered text
========================================= */
.title {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 6px 8px;
  font-size: 0.9rem;
  background: rgba(0,0,0,0.5); 
  color: white;
  text-align: center;
}
</style>
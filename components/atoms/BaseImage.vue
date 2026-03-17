<template>
  <!--
    BaseImage Component
    ------------------
    Reusable image component
    - Accepts `src` and `alt` props
    - Ensures consistent sizing and object-fit behavior
    - Respects parent container's border-radius
  -->
  <img :src="src" :alt="alt" class="image" />
</template>

<script setup>
defineProps({
  src: String,  /* image source URL */
  alt: String   /* alternative text for accessibility */
})
</script>

<style scoped>
/* =========================================
   IMAGE STYLING
   -----------------------------------------
   Ensures images fill their container and maintain aspect ratio
   - object-fit: cover crops image nicely
   - border-radius inherits from parent card/container
========================================= */
.image {
  width: 100%;         
  height: 100%;         
  object-fit: cover;     
  display: block;       
  border-radius: inherit; 
}

/* =========================================
   CONTAINER QUERY (optional)
   -----------------------------------------
   Allows parent container to control image sizing for responsive layouts
   - Example: row layout cards in a grid
========================================= */
@container (min-width: 360px) {
  .image {
    height: 100%; /* ensure image fills height in wider containers */
  }
}
</style>
<template>
  <!--
    BaseHeading Component
    ---------------------
    Reusable heading component (h1)
    - Accepts a slot for heading text
    - Allows additional custom classes via `customClass` prop
  -->
  <h1 :class="['base-heading', customClass]">
    <slot />
  </h1>
</template>

<script setup>
/* Props */
const props = defineProps({
  customClass: String  // allows parent to pass extra classes for styling variations
})
</script>

<style scoped>
/* =========================================
   BASE HEADING
   -----------------------------------------
   Standard H1 styling for consistency
   - Uses global text color variable
   - Removes default margins
   - Can be extended with custom classes
========================================= */
.base-heading {
  font-weight: 700;           
  font-size: 2rem;            
  color: var(--text-dark);    
  margin: 0;                  
}
</style>
<template>
  <!--
    BaseTypography Component
    ------------------------
    Reusable text component
    - Accepts a `tag` prop to render any HTML text element (p, span, div, etc.)
    - Ensures consistent typography using the design system
  -->
  <component :is="tag" class="text">
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: 'p'  /* default to paragraph if no tag is provided */
  }
})
</script>

<style scoped>
/* =========================================
   TYPOGRAPHY STYLING
   -----------------------------------------
   Standard text styles for consistent appearance
   - Uses global design system variables for font size and color
   - Provides comfortable line height for readability
========================================= */
.text {
  font-size: var(--text-base); 
  color: var(--text-light);    
  line-height: 1.6;           
}
</style>
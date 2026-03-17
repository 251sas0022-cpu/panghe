<script setup>
/* =========================================
   BASE ICON COMPONENT
   -----------------------------------------
   Reusable icon wrapper for consistent inline placement
   - Accepts a `name` prop to render the desired icon
   - Designed for flexibility in text or button contexts
========================================= */
defineProps({
  name: {
    type: String,
    required: true   // icon name must be provided
  }
})
</script>

<template>
  <!--
    Icon Wrapper
    - Uses a span to ensure consistent inline alignment
    - Renders the Icon component with the provided `name`
  -->
  <span class="icon">
    <Icon :name="name" />
  </span>
</template>

<style scoped>
/* =========================================
   ICON STYLING
   -----------------------------------------
   Ensures icons align nicely with text or other inline elements
========================================= */
.icon {
  display: inline-flex;     
  align-items: center;     
}
</style>
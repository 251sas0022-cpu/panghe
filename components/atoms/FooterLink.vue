<template>
  <!--
    FooterLink Component
    -------------------
    Reusable link for footer or secondary navigation
    - Accepts `label` (text) and `href` (URL)
    - Provides hover effect for visual feedback
  -->
  <a :href="href" class="footer-link">{{ label }}</a>
</template>

<script setup>
defineProps({
  label: { 
    type: String, 
    required: true  /* text content of the link */ 
  },
  href: { 
    type: String, 
    default: "#"    /* default link if none provided */ 
  }
});
</script>

<style scoped>
/* =========================================
   FOOTER LINK STYLING
   -----------------------------------------
   Provides subtle, readable footer links
   - Earthy green color for brand consistency
   - Smooth hover transition for user feedback
========================================= */
.footer-link {
  color: #2e4d2e;            
  text-decoration: none;     
  font-size: 0.95rem;         
  transition: color 0.2s ease;
}

/* Hover state */
.footer-link:hover {
  color: #4caf50;             
}
</style>
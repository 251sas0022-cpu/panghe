<template>
  <!--
    FooterLink Component
    -------------------
    Uses NuxtLink for internal routing
    - Prevents full page reload
    - Fixes 404 issue on GitHub Pages
  -->
  <NuxtLink :to="href" class="footer-link">
    {{ label }}
  </NuxtLink>
</template>

<script setup>
defineProps({
  label: { 
    type: String, 
    required: true 
  },
  href: { 
    type: String, 
    default: "#" 
  }
});
</script>

<style scoped>
.footer-link {
  color: #2e4d2e;            
  text-decoration: none;     
  font-size: 0.95rem;         
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #4caf50;             
}
</style>
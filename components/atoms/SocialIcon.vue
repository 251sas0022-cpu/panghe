<template>
  <!--
    SocialIcon Component
    -------------------
    Reusable social media icon link
    - Supports Facebook, Twitter, and Instagram
    - Scales and changes color on hover
    - Opens in a new tab with safe rel attributes
  -->
  <a :href="url" target="_blank" rel="noopener noreferrer" class="social-icon">
    <!-- Facebook icon -->
    <svg v-if="icon === 'facebook'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z"/>
    </svg>

    <!-- Twitter icon -->
    <svg v-else-if="icon === 'twitter'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M22.46 6c-.77.35-1.5.58-2.28.69a4.02 4.02 0 0 0 1.75-2.21 8.1 8.1 0 0 1-2.55.97 4.05 4.05 0 0 0-6.91 3.69A11.5 11.5 0 0 1 3.16 4.3a4.05 4.05 0 0 0 1.25 5.4c-.7-.02-1.35-.21-1.93-.53v.05a4.05 4.05 0 0 0 3.25 3.97 4.1 4.1 0 0 1-1.8.07 4.05 4.05 0 0 0 3.77 2.82A8.12 8.12 0 0 1 2 18.57 11.46 11.46 0 0 0 8.29 20c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.35 8.35 0 0 0 22.46 6z"/>
    </svg>

    <!-- Instagram icon -->
    <svg v-else-if="icon === 'instagram'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.8.24 2.22.402a4.5 4.5 0 0 1 1.62.97 4.5 4.5 0 0 1 .97 1.62c.16.42.348 1.05.402 2.22.058 1.267.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.8-.402 2.22a4.5 4.5 0 0 1-.97 1.62 4.5 4.5 0 0 1-1.62.97c-.42.16-1.05.348-2.22.402-1.267.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.8-.24-2.22-.402a4.5 4.5 0 0 1-1.62-.97 4.5 4.5 0 0 1-.97-1.62c-.16-.42-.348-1.05-.402-2.22-.058-1.267-.07-1.65-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.8.402-2.22a4.5 4.5 0 0 1 .97-1.62 4.5 4.5 0 0 1 1.62-.97c.42-.16 1.05-.348 2.22-.402 1.267-.058 1.65-.07 4.85-.07zm0 1.8c-3.16 0-3.536.012-4.78.07-1.032.047-1.593.217-1.963.362a2.7 2.7 0 0 0-1 .605 2.7 2.7 0 0 0-.605 1c-.145.37-.315.93-.362 1.963-.058 1.244-.07 1.62-.07 4.78s.012 3.536.07 4.78c.047 1.032.217 1.593.362 1.963.14.35.34.654.605 1a2.7 2.7 0 0 0 1 .605c.37.145.93.315 1.963.362 1.244.058 1.62.07 4.78.07s3.536-.012 4.78-.07c1.032-.047 1.593-.217 1.963-.362a2.7 2.7 0 0 0 1-.605 2.7 2.7 0 0 0 .605-1c.145-.37.315-.93.362-1.963.058-1.244.07-1.62.07-4.78s-.012-3.536-.07-4.78c-.047-1.032-.217-1.593-.362-1.963a2.7 2.7 0 0 0-.605-1 2.7 2.7 0 0 0-1-.605c-.37-.145-.93-.315-1.963-.362-1.244-.058-1.62-.07-4.78-.07zm0 4.3a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm5.7-.9a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6z"/>
    </svg>
  </a>
</template>

<script setup>
defineProps({
  icon: String,                 // 'facebook' | 'twitter' | 'instagram'
  url: { type: String, default: '#' }  // link to social profile
})
</script>

<style scoped>
/* =========================================
   SOCIAL ICON
   -----------------------------------------
   - Displays inline social icons (SVG)
   - Supports hover scaling and color change
   - Uses brand-inspired earthy green colors
========================================= */
.social-icon {
  display: inline-flex;                  
  width: 2.2rem;                        
  height: 2.2rem;
  color: #2e4d2e;                       
  transition: transform 0.15s ease, color 0.15s ease; /* smooth hover animations */
}

.social-icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;                     
}

/* Hover effect */
.social-icon:hover {
  color: #4caf50;                   
  transform: scale(1.15);             
}
</style>
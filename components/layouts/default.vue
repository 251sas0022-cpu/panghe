<template>
  <!--
    BaseLayout Component
    -------------------
    Provides the main page structure for the application:
    - Includes a header navigation component at the top
    - Wraps page content in a responsive main container
    - Ensures consistent background and padding across pages
  -->
  <div class="layout">
    <HeaderNavigation />
    <main>
      <slot /> <!-- page content injected here -->
    </main>
  </div>
</template>

<script setup>
import HeaderNavigation from '~/components/organisms/HeaderNavigation.vue'
</script>

<style>
/* =========================================
   LAYOUT STYLING
   -----------------------------------------
   Ensures full-page height and consistent background
========================================= */
.layout {
  min-height: 100vh;        
  background: var(--bg-light); 
}

/* =========================================
   MAIN CONTENT AREA
   -----------------------------------------
   - Centers content
   - Provides consistent spacing
   - Constrains max width for readability
========================================= */
main {
  max-width: 1200px;          
  margin: auto;               
  padding: var(--space-lg);   
}
</style>
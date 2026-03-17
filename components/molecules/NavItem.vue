<template>
  <!--
    NavItem Component
    ----------------
    Renders a navigation link using NuxtLink.
    - Accepts a 'to' prop for routing
    - Supports slot content for flexible text or icons
    - Provides hover and active styling
  -->
  <NuxtLink :to="to" class="nav-item">
    <slot />
  </NuxtLink>
</template>

<script setup>
// Props
defineProps({
  to: String  // Target route path
})
</script>

<style scoped>
/* =========================================
   NAV ITEM STYLING
   -----------------------------------------
   - Basic link style with padding and border radius
   - Smooth transition for hover effects
   - Slot content allows text or icons
========================================= */
.nav-item {
  text-decoration: none;
  color: #031c03;       
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* Hover effect */
.nav-item:hover {
  background: #008014;  
  color: white;                
}

/* Active route styling */
.router-link-active {
  color: #008014; 
}
</style>
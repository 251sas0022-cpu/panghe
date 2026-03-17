<template>
  <button
    :class="['category-btn', { active }]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  active: Boolean 
})
</script>

<style scoped>
/* =========================================
   CATEGORY BUTTON
   -----------------------------------------
   Pill-shaped, reusable category button
   - Supports hover, active, and selected states
   - Uses global design system variables
   - Emits click events to parent
========================================= */
.category-btn {
  padding: 0.55rem 1.4rem;               
  border-radius: 999px;                   
  border: 1px solid var(--primary);       
  background: var(--white);               
  color: var(--primary-dark);            
  font-weight: 600;                       
  font-size: 0.9rem;                      
  cursor: pointer;                        
  transition: all 0.25s ease;             
}

/* Hover state */
.category-btn:hover {
  background: var(--primary);             
  color: var(--white);                   
  box-shadow: 0 6px 18px rgba(76, 175, 80, 0.25); 
  transform: translateY(-2px);            
}

/* Active / selected state */
.category-btn.active {
  background: var(--primary-dark);        
  color: var(--white);                    
  box-shadow: 0 8px 22px rgba(56, 142, 60, 0.35); 
}

/* Click (pressed) state */
.category-btn:active {
  transform: scale(0.96);                 
}
</style>
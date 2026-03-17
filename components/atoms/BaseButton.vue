<template>
  <button class="btn">
    <slot />
  </button>
</template>

<style scoped>
/* =========================================
   BUTTON COMPONENT
   -----------------------------------------
   Reusable button with hover and active states
   - Uses theme colors and spacing variables
   - Smooth transitions for interactive feedback
   - Fits content width by default
========================================= */
.btn {
  padding: var(--space-sm) var(--space-md); 
  background: var(--primary);               
  color: white;                             
  border: none;                             
  border-radius: 12px;                     
  cursor: pointer;                          
  font-weight: 600;                        
  font-size: var(--text-base);            
  transition: all 0.3s ease;                
  width: fit-content;                       
}

/* Hover state */
.btn:hover {
  background: var(--primary-dark);          
  transform: translateY(-2px);             
  box-shadow: 0 6px 15px rgba(0,0,0,0.15); 
}

/* Active (pressed) state */
.btn:active {
  transform: scale(0.98);                  
}
</style>
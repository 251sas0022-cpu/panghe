<template>
  <!--
    CategoryFilter Component
    -----------------------
    Displays a row of category buttons that users can select.
    - Uses BaseCategoryButton for consistent styling
    - Supports v-model binding for selected category
    - Emits `update:modelValue` when a category is clicked
  -->
  <div class="category-filter">
    <BaseCategoryButton
      v-for="cat in categories"
      :key="cat"
      :active="cat === modelValue"
      @click="$emit('update:modelValue', cat)"
    >
      {{ cat }}
    </BaseCategoryButton>
  </div>
</template>

<script setup>
import BaseCategoryButton from '~/components/atoms/BaseCategoryButton.vue'

// Props
defineProps({
  categories: Array,  // Array of category names to display
  modelValue: String  // Currently selected category
})
</script>

<style scoped>
/* =========================================
   CATEGORY FILTER
   -----------------------------------------
   - Flexible row that wraps on smaller screens
   - Gap between buttons for readability
   - Centered alignment
========================================= */
.category-filter {
  display: flex;
  flex-wrap: wrap;       
  gap: 1rem;             
  justify-content: center; 
  margin-top: 2rem;      
}
</style>
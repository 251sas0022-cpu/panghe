<template>
  <form class="search" @submit.prevent="handleSearch">
    <input
      v-model="query"
      type="text"
      placeholder="Search heritage sites..."
      aria-label="Search heritage sites"
    />
    <BaseButton class="search-button" type="submit">
      Search
    </BaseButton>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '~/components/atoms/BaseButton.vue'

const query = ref('')
const router = useRouter()

const handleSearch = () => {
  if (!query.value.trim()) return

  router.push({
    name: 'heritage',
    query: { q: query.value.trim() }
  })
}
</script>

<style scoped>
/* =========================================
   HERO CENTERING
========================================= */
.hero {
  display: flex;
  align-items: center;    
  justify-content: center; 
  min-height: 70vh;        
  padding: 1rem;
  position: relative;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1.5rem;
  width: 100%;
  max-width: 500px;
}

/* =========================================
   SEARCH FORM LAYOUT
========================================= */
.search {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  max-width: 500px; /* limits the width on large screens */
}

/* =========================================
   INPUT FIELD – island theme
========================================= */
.search input {
  flex: 1;
  padding: 0.85rem 1.25rem;
  border-radius: 10px;
  border: 1px solid #b7d5bb;  
  font-size: 1rem;
  background: #e0faee;          
  color: #004d40;              
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.search input::placeholder {
  color: #00796b; /* slightly darker teal for placeholder */
}

.search input:focus {
  outline: none;
  border-color: #62b66d; 
}

/* =========================================
   SEARCH BUTTON – island theme
========================================= */
.search-button {
  padding: 0.85rem 1.6rem;
  font-weight: 600;
  background-color: #008014; 
  color: #ffffff;
  border: none;
  cursor: pointer;
  box-shadow: 0 3px 5px rgba(0,0,0,0.2);
  transition: background 0.3s;
}

.search-button:hover {
  background-color: #009688; 
}

/* =========================================
   MOBILE RESPONSIVENESS
========================================= */
@container page (max-width: 500px) {
  .hero {
    min-height: 60vh; 
  }

  .search {
    flex-direction: column;  
    width: 90%;             
    margin: 0 auto;          
  }
}
</style>
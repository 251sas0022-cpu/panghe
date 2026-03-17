<template>
  <!--
    FooterSection Component
    ----------------------
    Renders a section in the footer with a title and a list of links.
    - Uses FooterLink for consistent link styling
    - Supports dynamic links via props
    - Suitable for multi-column footer layouts
  -->
  <div class="footer-section">
    <h4 class="footer-section-title">{{ title }}</h4>
    <ul>
      <li v-for="link in links" :key="link.label">
        <FooterLink :label="link.label" :href="link.href" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import FooterLink from '@/components/atoms/FooterLink.vue';

// Props
defineProps({
  title: { type: String, required: true },   // Section title
  links: { type: Array, default: () => [] }  // Array of link objects { label, href }
});
</script>

<style scoped>
/* =========================================
   FOOTER SECTION
   -----------------------------------------
   - Vertical layout for section title + links
   - Gap between elements for readability
========================================= */
.footer-section {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;  
}

/* Section title styling */
.footer-section-title {
  font-weight: 700;
  color: #2e4d2e; 
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

/* List styling */
.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem; 
}

/* Links inside the list */
.footer-section li a {
  color: #4d6b4d; 
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-section li a:hover {
  color: #81c784; 
}
</style>
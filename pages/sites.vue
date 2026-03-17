<template>
  <HeaderNav />

  <!-- ===== Intro: Title & Description ===== -->
  <BaseHeading :customClass="'heritage-title'" align="center">
    All Heritage Sites
  </BaseHeading>

  <p class="heritage-description">
    Pangasinan is home to a diverse collection of heritage sites that showcase
    the province's rich history, culture, and traditions.
  </p>

  <!-- ===== Category Filter + Grid ===== -->
  <section class="heritage-list">
    <CategoryFilter
      v-model="selectedCategory"
      :categories="categories"
    />

    <div class="heritage-grid">
      <HeritageGrid
        :selectedCategory="selectedCategory"
      />
    </div>
  </section>

  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import HeaderNav from '~/components/organisms/HeaderNav.vue'
import BaseHeading from '~/components/atoms/BaseHeading.vue'
import HeritageGrid from '~/components/organisms/HeritageGrid.vue'
import CategoryFilter from '~/components/molecules/CategoryFilter.vue'
import Footer from '~/components/organisms/Footer.vue'

const selectedCategory = ref('All')

const categories = [
  'All',
  'Natural Heritage',
  'Religious Heritage',
  'Historical Heritage',
  'Cultural Heritage',
  'Architectural Heritage'
]
</script>

<style scoped>
/* ===== Title & Description ===== */
.heritage-title {
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  color: #2e4d2e; 
  margin: 3rem 0 1.5rem 0;
  margin-top: 2rem;
}

.heritage-description {
  font-size: 1.125rem;
  font-weight: 400;
  color: var(--text-light);
  line-height: 1.75;
  text-align: center;
  max-width: 750px;
  margin: 0 auto 3rem auto;
}

</style>
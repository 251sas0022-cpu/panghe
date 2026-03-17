<template>
  <!-- Full-width Header -->
  <HeaderNav />

  <!-- Main page wrapper for consistent padding and layout -->
  <div class="page-wrapper">

    <!-- About Section -->
    <section class="about-heritage">
      
      <!-- Section Header: Icon + Title -->
      <div class="about-header">
        <!-- Landmark Icon -->
        <BaseIcon name="landmark" class="title-icon" />

        <!-- Section Title -->
        <BaseHeading class="about-title">
          About Pangasinan Heritage
        </BaseHeading>
      </div>

      <!-- Introductory Text -->
      <p class="about-text">
        Discover the rich cultural and historical treasures of Pangasinan. 
        Explore its traditions, heritage sites, and living culture that make it truly unique.
      </p>

      <!-- Feature Cards Grid -->
      <div class="heritage-features">

        <!-- Feature 1: Historic Landmarks -->
        <div class="feature-card">
          <BaseIcon name="heroicons:building-office" class="feature-icon" />
          <h3>Historic Landmarks</h3>
          <p>
            From colonial-era churches to ancestral houses, Pangasinan 
            preserves architectural treasures that reflect centuries of history.
          </p>
        </div>

        <!-- Feature 2: Living Traditions -->
        <div class="feature-card">
          <BaseIcon name="heroicons:users" class="feature-icon" />
          <h3>Living Traditions</h3>
          <p>
            Festivals, local crafts, and community rituals continue to keep 
            Pangasinan’s identity alive across generations.
          </p>
        </div>

        <!-- Feature 3: Cultural Destinations -->
        <div class="feature-card">
          <BaseIcon name="heroicons:map" class="feature-icon" />
          <h3>Cultural Destinations</h3>
          <p>
            Visit iconic places like Hundred Islands and historical towns 
            that shape the province’s cultural landscape.
          </p>
        </div>

      </div>
    </section>

    <!-- Page Footer -->
    <Footer />
  </div>
</template>

<script setup>
// ================================
// Component Imports
// ================================

// Typography and icons
import BaseHeading from '~/components/atoms/BaseHeading.vue'
import BaseIcon from '~/components/atoms/BaseIcon.vue'

// Layout
import HeaderNav from '~/components/organisms/HeaderNav.vue'
import Footer from '~/components/organisms/Footer.vue'
</script>

<!-- ================================
     Styles
     Using scoped CSS from an external file
     Ensures consistent layout and styling
================================ -->
<style scoped src="@/assets/css/about.css"></style>
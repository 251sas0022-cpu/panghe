<template>
  <!--
    Footer Component
    ----------------
    - Contains site navigation links and social media icons
    - Fully responsive: links wrap naturally on smaller screens
    - Uses FooterLink and SocialIcon atoms for consistency
    - Includes copyright notice
  -->
  <footer class="footer">
    <div class="footer-container">
      <!-- Site navigation links -->
      <div class="footer-links">
        <FooterLink label="Home" href="/" />
        <FooterLink label="Sites" href="/sites" />
        <FooterLink label="About" href="/about" />
        <FooterLink label="Blog" href="/blog" />
        <FooterLink label="Contact" href="/contact" />
        <FooterLink label="FAQ" href="/faq" />
      </div>

      <!-- Social media icons -->
      <div class="footer-social">
        <SocialIcon icon="facebook" :href="'https://facebook.com'" />
        <SocialIcon icon="twitter" :href="'https://twitter.com'" />
        <SocialIcon icon="instagram" :href="'https://instagram.com'" />
      </div>
    </div>

    <!-- Copyright text -->
    <p class="footer-copy">
      © 2026 Pangasinan Heritage. All rights reserved.
    </p>
  </footer>
</template>

<script setup>
import FooterLink from '@/components/atoms/FooterLink.vue';
import SocialIcon from '@/components/atoms/SocialIcon.vue';
</script>

<style scoped>
/* =====================================
   FOOTER WRAPPER
   -------------------------------------
   - Black background with white text
   - Vertical spacing controlled by clamp for responsiveness
===================================== */
.footer {
  background-color: #000;
  color: #fff;
  padding: clamp(0.75rem, 1vw, 1.5rem) clamp(1rem, 3vw, 2rem);
  display: flex;
  flex-direction: column;
  font-size: clamp(0.8rem, 0.9vw, 0.95rem);
  gap: clamp(0.25rem, 0.5vw, 0.75rem);
}

/* =====================================
   FOOTER CONTAINER
   -------------------------------------
   - Flex layout: space between links and social icons
   - Wraps naturally on smaller screens
   - Centers content horizontally with max-width
===================================== */
.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(0.5rem, 1vw, 1rem);
  max-width: 1200px;
  margin: 0 auto;
}

/* =====================================
   FOOTER LINKS
   -------------------------------------
   - Flex layout with wrap for responsiveness
   - Links styled with subtle color and hover effect
===================================== */
.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: clamp(0.75rem, 1vw, 1.5rem);
}

.footer-links a {
  color: #ccc;
  font-weight: 500;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #4caf50; /* highlight green on hover */
}

/* =====================================
   SOCIAL ICONS
   -------------------------------------
   - Flex layout with gap
   - Circular buttons with hover scale and color change
===================================== */
.footer-social {
  display: flex;
  gap: clamp(0.5rem, 1vw, 1rem);
}

.footer-social a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: clamp(24px, 2vw, 28px);
  height: clamp(24px, 2vw, 28px);
  background-color: #222;
  border-radius: 50%;
  color: #fff;
  font-size: clamp(0.75rem, 1vw, 0.85rem);
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.footer-social a:hover {
  transform: scale(1.15);
  background-color: #4caf50;
}

/* =====================================
   COPYRIGHT TEXT
   -------------------------------------
   - Centered text
   - Subtle gray color
===================================== */
.footer-copy {
  text-align: center;
  color: #666;
  font-size: clamp(0.7rem, 0.8vw, 0.8rem);
  margin-top: clamp(0.25rem, 0.5vw, 0.5rem);
}
</style>
<template>
  <article class="card">
    <div class="image-wrapper">
      <BaseImage :src="image" :alt="title" class="image" loading="lazy"/>
    </div>

    <div class="content">
      <BaseTypography tag="h3" class="title">{{ title }}</BaseTypography>
      <BaseTypography class="location">{{ location }}</BaseTypography>

      <NuxtLink
        :to="{ path: '/heritage', query: { q: title } }"
        class="cta"
      >
        <BaseButton>
          Explore
        </BaseButton>
      </NuxtLink>

    </div>
  </article>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Props
const props = defineProps({
  image: { type: String, required: true },     // URL of the heritage image
  title: { type: String, required: true },     // Heritage site title
  location: { type: String, required: true }   // Location name
})

// Navigate to heritage detail page
function goToHeritage() {
  router.push({
    path: '/heritage',
    query: { q: props.title }
  })
}
</script>

<style scoped>
/* =========================================
   CARD BASE
   -----------------------------------------
   - Column layout by default
   - Rounded corners and shadow
   - Hover effect with lift and shadow increase
========================================= */
.card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}

/* =========================================
   IMAGE WRAPPER
   -----------------------------------------
   - Maintains 4:3 aspect ratio
   - Rounded top corners
   - Prevents shrinking too much
========================================= */
.image-wrapper {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
  min-height: 150px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* =========================================
   CONTENT AREA
   -----------------------------------------
   - Padding and vertical layout
   - Gap between elements
   - CTA button sticks to bottom
========================================= */
.content {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  flex: 1;
}

/* Text styling */
.title { font-weight: 600; line-height: 1.3; }
.location { opacity: 0.75; font-size: 0.95rem; }
.cta { margin-top: auto; align-self: flex-start; }

/* =========================================
   RESPONSIVE ROW LAYOUT
   -----------------------------------------
   - Applies when container width ≥ 360px
   - Image takes fixed width range
   - Content padding increases
========================================= */
@container (min-width: 360px) {
  .card {
    flex-direction: row;
  }

  .image-wrapper {
    width: clamp(120px, 35%, 300px);
    aspect-ratio: auto;
    border-radius: 1rem 0 0 1rem;
  }

  .image {
    height: 100%;
  }

  .content {
    padding: var(--space-lg);
  }
}
</style>
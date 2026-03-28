<template>
  <div>
    <HeaderNav />
    <!-- HERO SECTION -->
    <section class="hero-faq">
      <div class="hero-content">
        <h1>FAQ – Pangasinan Heritage Sites</h1>
        <p>Answers to the most commonly asked questions about visiting Pangasinan's heritage destinations.</p>
      </div>
    </section>

    <!-- FAQ CONTENT -->
    <main class="faq-container">
      <div class="faq-grid">

        <div class="faq-item" v-for="(item, index) in faqs" :key="index">
          <h3 @click="toggle(index)">
            {{ item.question }}
            <span>{{ active === index ? '-' : '+' }}</span>
          </h3>
          <p v-show="active === index">{{ item.answer }}</p>
        </div>

      </div>
    </main>

    <!-- FOOTER -->
    <Footer />

  </div>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(null)

function toggle(index) {
  active.value = active.value === index ? null : index
}

const faqs = [
  {
    question: 'What is the best time to visit Pangasinan heritage sites?',
    answer: `The ideal time to visit is during the dry season, from November to May, when
            weather is pleasant and outdoor activities like island hopping, sightseeing,
            and hiking are most enjoyable. Avoid the rainy season for safer travel.`
  },
  {
    question: 'Are there entrance fees for heritage sites?',
    answer: `Yes, some sites like Hundred Islands National Park have minimal entrance fees
            for park maintenance and facilities. Others, like lighthouses or cultural
            areas, may have voluntary donations or guided tour fees.`
  },
  {
    question: 'Can I bring my family to these heritage destinations?',
    answer: `Absolutely! Pangasinan offers family-friendly destinations with safe facilities,
            picnic areas, and activities suitable for kids. Always follow park rules for safety.`
  },
  {
    question: 'Do I need a guide to explore the sites?',
    answer: `While not required, hiring a local guide enhances the experience, providing
            historical context, insider knowledge, and safe navigation through islands and trails.`
  },
  {
    question: 'Where can I stay when visiting Pangasinan?',
    answer: `There are a variety of accommodations ranging from budget inns to luxury
            resorts. Popular areas include Alaminos for Hundred Islands, Bolinao for
            lighthouses, and Balungao for hot spring resorts.`
  },
]
import HeaderNav from '~/components/organisms/HeaderNav.vue'
import Footer from '~/components/organisms/Footer.vue'
</script>

<style scoped>

/* HERO */

.hero-faq {
  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
              url("/images/hundredIslands.jpg") center/cover;
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.hero-faq h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

.hero-faq p {
  max-width: 650px;
  margin: auto;
  font-size: 18px;
}

/* FAQ CONTAINER */

.faq-container {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 20px;
}

.faq-item {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}

.faq-item h3 {
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}

.faq-item h3 span {
  font-size: 24px;
}

.faq-item p {
  margin-top: 10px;
  line-height: 1.7;
  color: #333;
  transition: all 0.3s ease;
}

/* FOOTER */
/* Your Footer component handles the styling */

</style>
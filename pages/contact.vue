<template>
  <div>
    <HeaderNav />
    <!-- HERO -->
    <section class="hero-contact">
      <div class="hero-content">
        <h1>Contact Pangasinan Tourism Office</h1>
        <p>We’d love to hear from you! Reach out for inquiries, suggestions, or partnership opportunities.</p>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <main class="contact-container">

      <div class="contact-grid">

        <!-- CONTACT INFO -->
        <div class="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> Pangasinan Provincial Capitol, Lingayen, Pangasinan, Philippines</p>
          <p><strong>Phone:</strong> +63 75 123 4567</p>
          <p><strong>Email:</strong> info@pangasinantourism.ph</p>

          <h3>Office Hours</h3>
          <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>

          <h3>Follow Us</h3>
          <p>
            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">Twitter</a>
          </p>
        </div>

        <!-- CONTACT FORM -->
        <div class="contact-form">
          <h2>Send a Message</h2>
          <form @submit.prevent="submitForm">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="form.name" placeholder="Your Name" required />

            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" placeholder="Your Email" required />

            <label for="subject">Subject</label>
            <input type="text" id="subject" v-model="form.subject" placeholder="Subject" required />

            <label for="message">Message</label>
            <textarea id="message" v-model="form.message" placeholder="Write your message here..." required></textarea>

            <button type="submit">Send Message</button>
          </form>
          <p v-if="successMessage" class="success">{{ successMessage }}</p>
        </div>

      </div>

      <!-- MAP SECTION -->
      <div class="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.1234567890!2d120.353456!3d16.020123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a12345abcd%3A0x1234567890abcd!2sPangasinan%20Provincial%20Capitol!5e0!3m2!1sen!2sph!4v1678901234567!5m2!1sen!2sph" 
          width="100%" 
          height="400" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>

    </main>

    <!-- FOOTER -->
    <Footer />

  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const successMessage = ref('')

function submitForm() {
  // For demo purposes, we just reset the form
  console.log('Form submitted:', form.value)
  successMessage.value = "Thank you! Your message has been sent."
  form.value = { name: '', email: '', subject: '', message: '' }
}

import HeaderNav from '~/components/organisms/HeaderNav.vue'
import Footer from '~/components/organisms/Footer.vue'
</script>

<style scoped>

/* HERO */

.hero-contact {
  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
              url("/images/hundredIslands.jpg") center/cover;
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.hero-contact h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

.hero-contact p {
  max-width: 650px;
  margin: auto;
  font-size: 18px;
}

/* CONTACT CONTAINER */

.contact-container {
  max-width: 1100px;
  margin: 60px auto;
  padding: 0 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
}

/* CONTACT INFO */

.contact-info h2, .contact-info h3 {
  margin-bottom: 15px;
}

.contact-info p {
  line-height: 1.6;
  margin-bottom: 10px;
}

.contact-info a {
  color: #0a4d68;
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

/* CONTACT FORM */

.contact-form h2 {
  margin-bottom: 20px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-bottom: 5px;
  font-weight: bold;
}

.contact-form input,
.contact-form textarea {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 100%;
}

.contact-form textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form button {
  background: #0a4d68;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.contact-form button:hover {
  background: #063a4f;
}

.success {
  color: green;
  margin-top: 10px;
  font-weight: bold;
}

/* MAP */

.map-container {
  margin-top: 60px;
  border-radius: 12px;
  overflow: hidden;
}

/* FOOTER */
/* Footer styling comes from your Footer component */

</style>
<template>
  <div>
     <HeaderNav />
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-content">
        <h1>Pangasinan Heritage Blog</h1>
        <p>
          Explore the rich history, breathtaking landscapes, and vibrant
          culture that make Pangasinan one of the most beautiful provinces
          in the Philippines.
        </p>
      </div>
    </section>

    <!-- BLOG CONTENT -->
    <main class="blog-container">

      <!-- ARTICLE -->
      <article class="blog-post">

        <h2>Hundred Islands National Park – Alaminos</h2>

        <img src="/images/hundredIslands.jpg" alt="Hundred Islands Pangasinan"/>

        <p>
          One of the most iconic tourist destinations in Pangasinan is the
          breathtaking Hundred Islands National Park located in the city of
          Alaminos. This natural wonder is composed of more than one hundred
          limestone islands scattered across the clear waters of Lingayen Gulf.
          These islands were formed thousands of years ago through geological
          processes and coral growth, creating a unique seascape that attracts
          both local and international visitors.
        </p>

        <p>
          Travelers who visit the Hundred Islands can experience a variety of
          exciting activities such as island hopping, snorkeling, kayaking,
          swimming, and cliff diving. Several islands such as Governor’s
          Island, Quezon Island, and Children’s Island have been developed
          for tourism and provide viewing decks, cottages, and scenic
          walkways for visitors.
        </p>

        <p>
          Aside from its natural beauty, the park also plays an important role
          in the preservation of marine biodiversity in the region. The area
          is home to vibrant coral reefs and different species of fish and
          marine life, making it a valuable ecological destination as well
          as a popular tourist attraction.
        </p>

      </article>


      <!-- ARTICLE -->
      <article class="blog-post">

        <h2>Cape Bolinao Lighthouse</h2>

        <img src="/images/lighthouse.jpg" alt="Bolinao Lighthouse"/>

        <p>
          Standing proudly on a hill overlooking the vast West Philippine Sea,
          the Cape Bolinao Lighthouse is one of the tallest lighthouses in
          the Philippines and an important historical landmark in Pangasinan.
          Built during the American colonial period in 1905, the lighthouse
          served as a guiding light for ships navigating the coastal waters
          of northern Luzon.
        </p>

        <p>
          The structure rises approximately 351 feet above sea level,
          allowing sailors to see its light from miles away. Today,
          the lighthouse remains operational and continues to serve as
          a navigational aid for maritime vessels passing through the area.
        </p>

        <p>
          Aside from its historical significance, the lighthouse has become
          a popular tourist destination because of its stunning panoramic
          views. Visitors who climb the hill where the lighthouse stands
          can enjoy spectacular sunsets, ocean views, and the refreshing
          coastal breeze that makes the area truly memorable.
        </p>

      </article>


      <!-- ARTICLE -->
      <article class="blog-post">

        <h2>Balungao Hot Spring Resort</h2>

        <img src="/images/hotspring.jpg" alt="Balungao Hot Spring"/>

        <p>
          Located in the municipality of Balungao in eastern Pangasinan,
          the Balungao Hot Spring Resort is a well-known destination for
          relaxation and wellness tourism. The natural hot spring pools
          found in this resort are believed to contain mineral-rich water
          that can help relieve muscle tension and improve blood circulation.
        </p>

        <p>
          The resort is surrounded by lush green trees and peaceful
          landscapes, providing visitors with a quiet escape from the
          busy environment of city life. Families and travelers often
          visit the resort to enjoy the warm therapeutic pools, picnic
          areas, and nearby eco-tourism attractions.
        </p>

        <p>
          Balungao is also known for its eco-park which features a
          zipline ride and viewing deck overlooking the beautiful
          countryside of Pangasinan. Together, these attractions make
          Balungao a perfect destination for both adventure and
          relaxation.
        </p>

      </article>


      <!-- ARTICLE -->
      <article class="blog-post">

        <h2>The Cultural Identity of Pangasinan</h2>

        <p>
          Beyond its natural landscapes and tourist attractions,
          Pangasinan is also rich in cultural traditions and local
          heritage. The province is home to the Pangasinense people,
          who are known for their hospitality, strong community
          values, and vibrant festivals.
        </p>

        <p>
          One of the most famous celebrations in the province is the
          Bangus Festival held annually in Dagupan City. This festival
          honors the province’s thriving milkfish industry and features
          colorful street dancing, culinary events, and the famous
          “Kalutan ed Dalan” where thousands of milkfish are grilled
          along the streets.
        </p>

        <p>
          Local delicacies such as bagoong, tupig, and puto Calasiao
          are also important parts of Pangasinan’s cultural identity.
          These traditional foods represent the province’s culinary
          heritage and are enjoyed by both locals and visitors.
        </p>

        <p>
          Through tourism and cultural preservation, Pangasinan continues
          to celebrate its history while sharing its traditions with the
          rest of the world.
        </p>

      </article>

    </main>

    <Footer />

  </div>
</template>

<script setup>
import HeaderNav from '~/components/organisms/HeaderNav.vue'
import Footer from '~/components/organisms/Footer.vue'
</script>

<style scoped>

/* HERO */

.hero{
  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
  url("/images/hundredIslands.jpg") center/cover;
  color:white;
  padding:100px 20px;
  text-align:center;
}

.hero h1{
  font-size:42px;
  margin-bottom:10px;
}

.hero p{
  max-width:650px;
  margin:auto;
  font-size:18px;
}


/* BLOG */

.blog-container{
  max-width:850px;
  margin:auto;
  padding:60px 20px;
}


/* BLOG POST */

.blog-post{
  margin-bottom:80px;
}

.blog-post h2{
  font-size:28px;
  margin-bottom:15px;
}

.blog-post img{
  width:100%;
  border-radius:12px;
  margin:20px 0;
}

.blog-post p{
  font-size:16px;
  line-height:1.8;
  margin-bottom:16px;
  color:#333;
}

</style>
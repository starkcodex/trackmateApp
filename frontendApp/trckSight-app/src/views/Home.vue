<template>
  <v-container>
    <!-- Hero Section with Animated Carousel -->
    <v-row class="d-flex justify-center">
      <v-col cols="12" md="8">
        <v-carousel show-arrows>
          <v-carousel-item v-for="(item, i) in carouselItems" :key="i">
            <v-img :src="item.src" height="500px" class="shadow-lg">
              <!-- Centered text with animations -->
              <v-container class="d-flex flex-column align-center justify-center hero-text">
                <h1 class="text-h3 white--text fade-in-up">Welcome to TrackSight</h1>
                <p class="text-h6 white--text fade-in-up">Your project management solution</p>
                <v-btn color="primary" @click="goToLogin" class="rounded-btn">
                  Get Started
                </v-btn>
              </v-container>
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter();
    const carouselItems = [
      { src: '/path-to-your-image1.jpg' },
      { src: '/path-to-your-image2.jpg' },
      { src: '/path-to-your-image3.jpg' },
    ];

    const goToLogin = () => {
      router.push({ name: 'Login' });
    };

    return { goToLogin, carouselItems };
  },
});
</script>

<style scoped>
/* Styling the carousel images with dynamic shadow and smooth animation */
.v-img {
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease;
}

/* Hover effect on carousel images */
.v-img:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
}

/* Centering text and animations */
.hero-text h1, .hero-text p {
  text-align: center;
  z-index: 1;
  animation: fadeInUp 1s ease-in-out;
}

.hero-text {
  position: relative;
  padding: 50px;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Add some hover effect to buttons */
.v-btn:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <v-content>
    <section>
      <v-parallax :src="require('../assets/hero.jpg')" height="600">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-1 text-xs-center">
            Welcome to MIC Sports Facilities based in Brampton, ON, Canada.
          </h1>
          <div class="subheading mb-3 text-xs-center">
            This sports portal is created for the community to provide
            information on sports related activities on a centralized platform
            offered at the Masumeen Islamic Center.
          </div>
          <v-btn class="light-green darken-1 mt-5" dark large href="/login"
            >Get Started</v-btn
          >
        </v-layout>
      </v-parallax>
    </section>

    <section></section>
  </v-content>
</template>

<script>
export default {
  data() {}
};
</script>

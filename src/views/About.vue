<template>
  <v-content>
    <section>
      <Carousel />
    </section>

    <section class="grey lighten-4">
      <About />
    </section>
  </v-content>
</template>

<script>
import About from "../components/sports/About";
import Carousel from "../components/sports/Carousel";

export default {
  components: {
    About,
    Carousel
  }
};
</script>

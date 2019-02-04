<template>
  <v-content>
    <section>
      <Carousel />
    </section>

    <section class="grey lighten-3">
      <About />
    </section>

    <section class="grey lighten-2"></section>
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

<template>
  <v-content>
    <section>
      <Carousel />
    </section>

    <section class="grey lighten-3 px-5">
      <About />
    </section>

    <section class="px-5">
      <Play />
    </section>
  </v-content>
</template>

<script>
import About from "../components/sports/About";
import Carousel from "../components/sports/Carousel";
import Play from "../components/sports/Play";

export default {
  components: {
    About,
    Carousel,
    Play
  }
};
</script>

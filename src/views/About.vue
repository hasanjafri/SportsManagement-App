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

    <section class="grey lighten-4 px-5">
      <Join />
    </section>

    <section class="px-5 py-5 grey lighten-3">
      <Location />
    </section>

    <section class="px-5">
      <UpcomingEvents />
    </section>

    <section class="px-5">
      <Contact />
    </section>
  </v-content>
</template>

<script>
import About from "../components/sports/About";
import Carousel from "../components/sports/Carousel";
import Contact from "../components/sports/Contact";
import Join from "../components/sports/Join";
import Location from "../components/sports/Location";
import Play from "../components/sports/Play";
import UpcomingEvents from "../components/sports/UpcomingEvents";

export default {
  components: {
    About,
    Carousel,
    Contact,
    Join,
    Location,
    Play,
    UpcomingEvents
  }
};
</script>

<template>
  <v-carousel v-if="windowWidth >= 1400" dark height="750">
    <v-carousel-item
      gradient="to top right, rgba(0,0,0,.55), rgba(0,0,0,.55)"
      lazy
      v-for="(item, i) in images"
      :key="i"
      :src="item.src"
    >
      <v-layout
        fill-height
        align-content-center
        column
        align-center
        justify-center
        class="white--text text-xs-center"
      >
        <h1 class="white--text mb-2 display-1 text-xs-center font-weight-bold">
          WELCOME
        </h1>
        <br />
        <div
          class="light-green--text text--lighten-3 headline mb-3 text-xs-center"
        >
          Registrations open for 2019-2020
        </div>
        <!-- <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn> -->
      </v-layout></v-carousel-item
    >
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          src: require("@/assets/img/b1.jpeg")
        },
        {
          src: require("@/assets/img/b2.jpeg")
        },
        {
          src: require("@/assets/img/b3.jpeg")
        },
        {
          src: require("@/assets/img/b4.jpeg")
        }
      ],
      windowWidth: window.innerWidth
    };
  },
  created() {
    window.addEventListener("resize", this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.windowWidth = window.innerWidth;
      console.log(this.windowWidth);
    }
  }
};
</script>

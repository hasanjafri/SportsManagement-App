<template>
  <div>
    <v-flex xs12 sm6>
      <v-select
        v-model="value"
        :items="items"
        chips
        label="FILTER BY YEAR"
        multiple
        outline
      ></v-select>
    </v-flex>
    <gallery
      :images="images.map(img => img.src)"
      :index="index"
      @close="index = null"
    ></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{
        backgroundImage: 'url(' + image.src + ')',
        width: '300px',
        height: '200px',
        cursor: 'pointer'
      }"
    ></div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  data: function() {
    return {
      images: [
        { src: require("@/assets/img/b1.jpeg"), tag: "2016" },
        { src: require("@/assets/img/b2.jpeg"), tag: "2016" },
        { src: require("@/assets/img/b3.jpeg"), tag: "2017" },
        { src: require("@/assets/img/b4.jpeg"), tag: "2017" },
        { src: require("@/assets/img/b5.jpeg"), tag: "2018" },
        { src: require("@/assets/img/b6.jpeg"), tag: "2018" },
        { src: require("@/assets/img/b7.jpeg"), tag: "2019" },
        { src: require("@/assets/img/b8.jpeg"), tag: "2019" }
      ],
      index: null,
      items: ["2016", "2017", "2018", "2019"],
      value: ["2016", "2017", "2018", "2019"]
    };
  },

  components: {
    gallery: VueGallery
  }
};
</script>

<style scoped>
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
}
</style>

<template>
  <div>
    <v-flex xs12 sm6>
      <v-select
        :items="items"
        value="ALL"
        label="FILTER BY YEAR"
        outline
        v-on:change="filter"
      ></v-select>
    </v-flex>
    <gallery
      :images="images.map(img => img.src)"
      :index="index"
      @close="index = null"
    ></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in filteredItems"
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
        { src: require("@/assets/img/b1.jpeg"), tags: ["ALL", "2016"] },
        { src: require("@/assets/img/b2.jpeg"), tags: ["ALL", "2016"] },
        { src: require("@/assets/img/b3.jpeg"), tags: ["ALL", "2017"] },
        { src: require("@/assets/img/b4.jpeg"), tags: ["ALL", "2017"] },
        { src: require("@/assets/img/b5.jpeg"), tags: ["ALL", "2018"] },
        { src: require("@/assets/img/b6.jpeg"), tags: ["ALL", "2018"] },
        { src: require("@/assets/img/b7.jpeg"), tags: ["ALL", "2019"] },
        { src: require("@/assets/img/b8.jpeg"), tags: ["ALL", "2019"] }
      ],
      index: null,
      items: ["ALL", "2016", "2017", "2018", "2019"],
      currentTag: "ALL"
    };
  },

  components: {
    gallery: VueGallery
  },

  computed: {
    filteredItems: function() {
      var filter = this.currentTag;
      return this.images.filter(function(item) {
        return item.tags.indexOf(filter) !== -1;
      });
    }
  },

  methods: {
    filter: function(tag) {
      this.currentTag = tag;
    }
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

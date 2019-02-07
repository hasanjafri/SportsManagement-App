<template>
  <v-content :style="{ height: '100%' }" class="pt-5 mt-5 px-5 grey lighten-3">
    <PhotoGallery />
  </v-content>
</template>

<script>
import PhotoGallery from "../components/PhotoGallery";

export default {
  components: {
    PhotoGallery
  }
};
</script>

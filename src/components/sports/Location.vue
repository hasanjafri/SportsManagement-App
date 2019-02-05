<template>
  <v-layout class="my-1" column align-start>
    <v-flex xs12 sm4 class="my-1">
      <div class="text-xs-center">
        <h2 class="display-3 text-xs-left text-uppercase secPadding pb-4">
          Location
        </h2>
      </div>
    </v-flex>
    <gmap-map :center="center" :zoom="17" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center = m.position"
      ></gmap-marker>
    </gmap-map>
  </v-layout>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 43.667456, lng: -79.711747 },
      markers: [{ position: { lat: 43.667456, lng: -79.711747 } }]
    };
  }
};
</script>

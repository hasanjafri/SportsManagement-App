<template>
  <v-layout class="my-1 topPadding" column align-start>
    <v-flex xs12 sm4 class="my-1">
      <div class="text-xs-center">
        <h2 class="display-3 text-xs-left text-uppercase secPadding">
          About MIC Badminton Club
        </h2>
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text secPadding"
        >
          Mission, Goal, and Values
        </h3>
      </div>
    </v-flex>
    <v-flex xs12 sm4 class="my-1">
      <v-layout
        justify-center
        align-center
        class="topPadding"
        v-bind:style="{
          paddingLeft: '2%',
          paddingRight: '2%',
          marginBottom: '5%'
        }"
      >
        <v-img
          :src="require('@/assets/img/badmintonlogo.png')"
          height="150"
          width="150"
          class="inline"
          v-bind:style="{ float: 'left' }"
        ></v-img>
        <p
          class="title inline text-xs-center blue-grey--text text--darken-3 font-weight-light"
        >
          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
          tincidunt ornare. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam in aliquet odio.
          Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
          tincidunt ornare. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam in aliquet odio.
          Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
          Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
          tincidunt ornare. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Nullam in aliquet odio.
          Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
        </p>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<style>
.topPadding {
  padding-top: 3%;
}
.secPadding {
  padding-left: 5%;
  white-space: nowrap;
}
.inline {
  display: inline;
}
</style>

<script>
export default {};
</script>

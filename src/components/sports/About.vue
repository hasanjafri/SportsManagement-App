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
          marginBottom: '3%'
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
          class="title inline text-xs-left blue-grey--text text--darken-3 font-weight-light py-3 blockquote"
        >
          The MIC (Masumeen Islamic Center) Badminton Club, we aim to create a
          healthy, social and interactive environment for all community members
          to share their love for badminton. We welcome all players of all skill
          levels, from beginner to competitive. We offer weekly court hours to
          play badminton, improve their skills and meet other players. Each
          session (1 and half hour) hours is require pre-registration and few
          spots available on a drop-in basis. There is tournaments and
          intramurals with two/three categories, recreational, intermdiate and
          advance. For those who wish to compete competitively.
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
  padding-left: 20px;
}
.inline {
  display: inline;
}
</style>

<script>
export default {};
</script>

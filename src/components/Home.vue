<template>
  <v-content class="grey lighten-4">
    <section>
      <v-parallax :src="require('../assets/img/hero.jpg')" height="400" />
    </section>

    <section class="grey lighten-4">
      <v-layout class="my-1" column wrap align-center>
        <v-flex xs12 sm4 class="my-1">
          <div class="text-xs-center">
            <h2 class="headline">
              Welcome to MIC Sports Facilities based in Brampton, ON, Canada.
            </h2>
            <span class="subheading"
              >This sports portal is created for the community to provide
              information on sports related activities on a centralized platform
              offered at the Masumeen Islamic Center.</span
            >
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card elevation="0" id="card">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="grey--text text--darken-3"
                      >fa-user</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Sports for Everyone!
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla
                    volutpat tincidunt ornare. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus
                    bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card elevation="0" id="card">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="grey--text text--darken-3"
                      >fa-clock</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Updated Daily!</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla
                    volutpat tincidunt ornare. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus
                    bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card elevation="0" id="card">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="grey--text text--darken-3"
                      >fa-tasks</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Managed by the Community.
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla
                    volutpat tincidunt ornare. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus
                    bibendum tincidunt. Suspendisse potenti.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax :src="require('../assets/img/mix.jpeg')" height="380">
        <!-- <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            Staying healthy has never been easier
          </div>
          <em>Enroll in an event today!</em>
          <v-btn flat class="light-green darken-1 mt-5" dark large to="/login">
            Get Started
          </v-btn>
        </v-layout> -->
      </v-parallax>
    </section>
  </v-content>
</template>

<style>
#card {
  background-color: transparent !important;
}
</style>

<script>
export default {};
</script>

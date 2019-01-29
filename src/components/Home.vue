<template>
  <v-content>
    <section>
      <v-parallax :src="require('../assets/hero.jpg')" height="400" />
    </section>

    <section>
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
                    <v-icon x-large class="light-green--text text--lighten-2"
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
                    <v-icon x-large class="light-green--text text--lighten-2"
                      >fa-clock</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Updated Daily!</div>
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
                    <v-icon x-large class="light-green--text text--lighten-2"
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
      <v-parallax :src="require('../assets/indoor-ball.jpeg')" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            Staying healthy has never been easier
          </div>
          <em>Enroll in an event today!</em>
          <v-btn flat class="light-green darken-1 mt-5" dark large to="/login">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-1">
          <v-flex xs12 sm4>
            <v-card elevation="0" id="card">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Who We Are</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat
                tincidunt ornare. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Nullam in aliquet
                odio. Aliquam eu est vitae tellus bibendum tincidunt.
                Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card elevation="0" id="card">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Contact us if you have any questions or require more information
                about an event
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="light-green--text text--darken-1"
                      >fa-phone</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>(905) 459-0891</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="light-green--text text--darken-1"
                      >fa-home</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Brampton, ON, Canada</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="light-green--text text--darken-1"
                      >fa-envelope</v-icon
                    >
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>email@domain.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <v-footer class="light-green darken-1">
      <v-layout row wrap align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Managed by the Masumeen Islamic Center © 2019
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-content>
</template>

<style>
#card {
  background-color: transparent !important;
}
</style>

<script>
export default {
  data() {}
};
</script>

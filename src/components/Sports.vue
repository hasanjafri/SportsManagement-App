<template>
  <v-content>
    <section>
      <v-layout class="my-1" column wrap align-center>
        <v-carousel class="hidden-md-and-down" dark height="750">
          <v-carousel-item
            v-for="(item, i) in images"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <div class="text-xs-center">
            <h2 class="headline">
              MIC Men's Badminton
            </h2>
            <span class="subheading"
              >This sports portal is created for the community to provide
              information on sports related activities on a centralized platform
              offered at the Masumeen Islamic Center.</span
            >
          </div>
        </v-flex>
        <v-flex xs12 sm4 class="my-1">
          <div class="text-xs-center">
            <h2 class="headline">
              JOIN
            </h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card elevation="3">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2">
                      fa-clipboard-list
                    </v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Rules
                    </div>
                  </v-card-title>
                  <v-card-text>
                    Players will abide with general rules and conditions of the
                    Masumeen Islamic Centre and MBC (Masumeen Men&#39;s
                    Badminton Committee) will have discretion of making final
                    rulings in respect to usage and schedule. Full list of rules
                    can be downloaded
                    <a href="@/assets/GeneralRules.docx" download>HERE</a>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card elevation="3">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2"
                      >fa-dollar-sign</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Fee</div>
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
              <v-flex xs12 md3>
                <v-card elevation="3">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2"
                      >fa-whatsapp</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      WhatsApp Group
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
              <v-flex xs12 md3>
                <v-card elevation="3">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="light-green--text text--lighten-2"
                      >fa-tree</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">
                      Current Season
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
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <div class="text-xs-center">
            <h2 class="headline">
              News & Announcements
            </h2>
          </div>
        </v-flex>
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <div class="text-xs-center">
            <h2 class="headline">
              Events
            </h2>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 sm6>
                <v-card elevation="3">
                  <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"
                            >Top 10 Australian beaches</span
                          >
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div class="text-xs-center">
                      <span class="grey--text">Number 10</span><br />
                      <span>Whitehaven Beach</span><br />
                      <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="green">Share</v-btn>
                    <v-btn flat color="green">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
              <v-flex xs12 sm6>
                <v-card elevation="3">
                  <v-img
                    class="white--text"
                    height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline"
                            >Top 10 Australian beaches</span
                          >
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">Number 10</span><br />
                      <span>Whitehaven Beach</span><br />
                      <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn flat color="green">Share</v-btn>
                    <v-btn flat color="green">Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <div class="text-xs-center" v-bind:style="{ paddingBottom: '11px' }">
            <h2 class="headline">
              Informational Documents
            </h2>
          </div>
          <div>
            <v-btn color="success">Rules</v-btn>
            <v-btn color="error">Drop-In Dates</v-btn>
            <v-btn color="warning">Ranking System</v-btn>
            <v-btn color="info">Upcoming Tournaments</v-btn>
          </div>
        </v-flex>
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <section>
            <v-container grid-list-xl>
              <v-layout row wrap justify-center class="my-1">
                <v-flex xs12 sm4>
                  <v-card elevation="0" id="card">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Who We Are</div>
                    </v-card-title>
                    <v-card-text>
                      Cras facilisis mi vitae nunc lobortis pharetra. Nulla
                      volutpat tincidunt ornare. Pellentesque habitant morbi
                      tristique senectus et netus et malesuada fames ac turpis
                      egestas. Nullam in aliquet odio. Aliquam eu est vitae
                      tellus bibendum tincidunt. Suspendisse potenti.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 sm4 offset-sm1>
                  <v-card elevation="0" id="card">
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Contact us</div>
                    </v-card-title>
                    <v-card-text>
                      Contact us if you have any questions or require more
                      information about an event
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
                          <v-list-tile-title
                            >Brampton, ON, Canada</v-list-tile-title
                          >
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-list-tile>
                        <v-list-tile-action>
                          <v-icon class="light-green--text text--darken-1"
                            >fa-envelope</v-icon
                          >
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title
                            >email@domain.com</v-list-tile-title
                          >
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </section>
        </v-flex>
      </v-layout>
    </section>
  </v-content>
</template>

<style>
#card {
  background-color: transparent !important;
}

#top_section {
  padding-top: 33px;
  padding-bottom: 11px;
}
</style>

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
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
};
</script>

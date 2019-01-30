<template>
  <v-content>
    <section>
      <v-layout class="my-1" column wrap align-center>
        <v-carousel dark height="750">
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
                <v-card elevation="0" id="card">
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
                <v-card elevation="0" id="card">
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
                <v-card elevation="0" id="card">
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
                <v-card elevation="0" id="card">
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
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <div class="text-xs-center">
            <h2 class="headline">
              Forms
            </h2>
          </div>
        </v-flex>
        <v-flex xs12 sm4 class="my-1" id="top_section">
          <div class="text-xs-center">
            <h2 class="headline">
              Contact
            </h2>
          </div>
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
  padding-bottom: 33px;
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
      ]
    };
  }
};
</script>

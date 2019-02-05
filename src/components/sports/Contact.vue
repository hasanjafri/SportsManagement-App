<template>
  <v-layout class="my-1" column align-center>
    <v-flex xs12 sm4 class="my-1">
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-1">
            <v-flex xs12 sm4>
              <v-card elevation="0" id="card">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline" v-bind:style="{ whiteSpace: 'nowrap' }">
                    This group is managed by:
                  </div>
                </v-card-title>
                <v-card-text class="title">
                  Safdar<br />
                  Safdar2<br />
                  Safdar3
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
                      <v-list-tile-title>email@domain.com</v-list-tile-title>
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
</template>

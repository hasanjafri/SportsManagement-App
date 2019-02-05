<template>
  <v-layout class="my-1 topPadding" column align-start>
    <v-flex xs12 sm4 class="my-1">
      <div class="text-xs-center secPadding">
        <h2 class="display-3 text-xs-left text-uppercase">
          Contact Us
        </h2>
        <h3
          class="display-1 text-xs-left text-uppercase font-weight-light grey--text pt-2"
        >
          This group is managed by
        </h3>
      </div>
    </v-flex>
    <v-flex xs12 sm4 class="my-1">
      <v-layout class="pt-3 px-5">
        <v-icon x-large class="green--text text---darken-5">fa-user</v-icon>
        <p
          class="title inline text-xs-left blue-grey--text text--darken-3 font-weight-medium pt-3 px-3"
        >
          Safdar Abbas
        </p>
      </v-layout>
      <v-layout class="pt-3 px-5">
        <v-icon x-large class="green--text text---darken-5">fa-phone</v-icon>
        <p
          class="title inline text-xs-left blue-grey--text text--darken-3 font-weight-medium pt-3 px-3"
        >
          (905) 459-0891
        </p>
      </v-layout>
      <v-layout class="pt-3 px-5" v-bind:style="{ width: '100%' }">
        <v-icon x-large class="green--text text---darken-5">fa-at</v-icon>
        <p
          class="title inline text-xs-left blue-grey--text text--darken-3 font-weight-medium pt-3 px-3"
        >
          email@domain.com
        </p>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

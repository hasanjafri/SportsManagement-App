<template>
  <v-layout class="my-1 topPadding" column align-start>
    <v-flex xs12 sm4 class="my-1">
      <div class="text-xs-center secPadding">
        <h2 class="display-3 text-xs-left text-uppercase">
          Badminton at the Masumeen Islamic Center
        </h2>
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text pt-2 pb-5"
        >
          Current Season
        </h3>
        <ul
          class="text-xs-left headline blue-grey--text text--darken-3 font-weight-light pb-4"
        >
          <li v-for="(current, i) in current_season" :key="i">
            {{ current }}
          </li>
        </ul>
        <v-divider class="pb-4" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      current_season: [
        "Current session has started on Jan, 1 2019 and will be held on every Wednesday after Namaza Maghrabain 7:30 pm to 9pm till Mid March 2019",
        "Registration are open, we still have couple of spots available to join current session"
      ]
    };
  }
};
</script>

<template>
  <v-layout class="my-1" column align-start>
    <v-flex xs12 sm4 class="my-1">
      <div class="text-xs-center">
        <h2 class="display-3 text-xs-left text-uppercase secPadding">
          Join
        </h2>
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text secPadding py-5"
        >
          News & Announcements
        </h3>
        <v-divider />
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text secPadding py-5"
        >
          Rules
        </h3>
        <ul
          class="text-xs-left headline blue-grey--text text--darken-3 font-weight-light pb-4"
        >
          <li v-for="(rule, i) in rules" :key="i">
            {{ rule }}
          </li>
        </ul>
        <v-divider />
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text secPadding py-5"
        >
          Fees
        </h3>
        <ul
          class="text-xs-left headline blue-grey--text text--darken-3 font-weight-light pb-4"
        >
          <li v-for="(fee, i) in fees" :key="i">
            {{ fee }}
          </li>
        </ul>
        <v-divider />
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text secPadding py-5"
        >
          WhatsApp Group
        </h3>
        <p
          class="headline text-xs-left blue-grey--text text--darken-3 font-weight-light pt-1 pb-1 blockquote"
        >
          To get latest and instance update about game join our group
          <v-btn
            icon
            fab
            flat
            small
            depressed
            href="https://chat.whatsapp.com/8w48a2c7o5oEJUTMu1fiMy"
            target="_blank"
          >
            <v-icon x-large class="light-green--text text--darken-1"
              >mdi-whatsapp</v-icon
            >
          </v-btn>
        </p>
        <v-divider class="pb-5" />
        <h3
          class="display-2 text-xs-left text-uppercase font-weight-light grey--text secPadding pb-5"
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
        <v-divider class="pb-5" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      rules: [
        "Players will abide with general rules and conditions of the Masumeen Islamic Centre and MBC (Masumeen Men's Badminton Committee) will have discretion of making final rulings in respect to usage and schedule.",
        "Proper athletic clothing and appropriate non-marking shoes are required - shorts will not be permitted",
        "Outdoor shoes are not permitted in the gym",
        "All participant/players should submit the consent form",
        "Food or drinks will not be allowed except for bottled water",
        "Players will be expected to assist in setting up badminton nets at the beginning of each session and taking down the sets at the end of each session including storage",
        "Please arrive 5-10 min early to setup the court to avoid disruption",
        "The play system will be determined after assessing the calibre of players. Play could be coordinated with either a tag system or a ‘winners stay’ basis. Discretion may be exercised in forming partnerships to avoid games being one-sided",
        "Players will be expected to avoid walking on and near the courts when games are in progress",
        "Players will be expected to handle all available equipments with care",
        "Foul language will not be permitted",
        "Players should have their own badminton racquets",
        "Organisers will make the final decision to accommodate harmonious play",
        "Players are encouraged to participate in Prayers before/after the play",
        "Attendance will be taken to assess the level of commitment",
        "Guests will not be accommodate except with permission",
        "Organisers will have the final decision"
      ],
      fees: [
        "One season fees (typically 10-11 sessions/day) is $45",
        "Pay as you go $7"
      ],
      current_season: [
        "Current session has started on Jan, 1 2019 and will be held on every Wednesday after Namaza Maghrabain 7:30 pm to 9pm till Mid March 2019",
        "Registration are open, we still have couple of spots available to join current session"
      ]
    };
  }
};
</script>

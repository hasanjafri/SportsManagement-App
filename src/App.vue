<template>
  <v-app id="app" light>
    <v-navigation-drawer v-if="windowWidth <= 960" v-model="drawer" fixed app>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item, i) in dropDownItems" :key="i">
          <div slot="header">{{ item.title }}</div>
          <v-list>
            <v-list-tile @click="" v-for="(itemList, i) in item.items" :key="i">
              <v-list-tile-content>
                <v-list-tile-title>{{ itemList }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-navigation-drawer>
    <v-toolbar dark app color="light-green darken-1">
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>MIC </span>
        <span class="font-weight-light">Sports Facilities</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu v-for="(item, index) in dropDownItems" :key="index" offset-y>
          <v-btn flat slot="activator">
            <v-icon class="pr-2">{{ item.iconName }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-list>
            <v-list-tile
              v-for="(itemList, index) in item.items"
              :key="index"
              @click=""
            >
              <v-list-tile-title>{{ itemList }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-btn flat to="/about">
          <v-icon class="pr-2">fa-phone</v-icon>
          Contact Us
        </v-btn>
        <v-btn flat to="/about">
          <v-icon class="pr-2">fa-sign-in-alt</v-icon>
          Admin
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <router-view />
  </v-app>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    }
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch("logout");
        }
        throw err;
      });
    });
  },
  data() {
    return {
      dropDownItems: [
        {
          title: "Badminton",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-table-tennis"
        },
        {
          title: "Basketball",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-basketball-ball"
        },
        {
          title: "VolleyBall",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-volleyball-ball"
        },
        {
          title: "Hockey",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-hockey-puck"
        },
        { title: "Yoga", items: ["Men's", "Women's"], iconName: "fa-heart" },
        {
          title: "Table Tennis",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-table-tennis"
        }
      ],
      drawer: null,
      windowWidth: window.innerWidth
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

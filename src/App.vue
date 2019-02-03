<template>
  <v-app id="app" light>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      dark
      floating
      fixed
      v-if="windowWidth < 1450"
    >
      <v-expansion-panel>
        <v-expansion-panel-content v-for="(item, i) in dropDownItems" :key="i">
          <div slot="header">{{ item.title }}</div>
          <v-list>
            <v-list-tile
              @click=""
              :to="Object.values(item.links)[i]"
              v-for="(itemList, i) in item.items"
              :key="i"
            >
              <v-list-tile-content>
                <v-list-tile-title class="white--text">{{
                  itemList
                }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-spacer />
      <Footer v-bind:style="{ position: 'absolute', marginTop: '30px' }" />
    </v-navigation-drawer>
    <v-toolbar dark app color="grey lighten-3">
      <v-toolbar-side-icon
        class="black--text"
        v-if="windowWidth < 1450"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="black--text">MIC </router-link>
        <router-link to="/" class="black--text font-weight-light"
          >Sports Facilities</router-link
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="windowWidth >= 1450">
        <v-menu v-for="(item, index) in dropDownItems" :key="index" offset-y>
          <v-btn class="black--text" flat slot="activator">
            <v-icon class="pr-2">{{ item.iconName }}</v-icon>
            {{ item.title }}
          </v-btn>
          <v-list v-if="item.items">
            <v-list-tile
              v-for="(itemList, index) in item.items"
              :key="index"
              @click=""
              :to="Object.values(item.links)[index]"
            >
              <v-list-tile-title>{{ itemList }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
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
a {
  text-decoration: none;
}
</style>

<script>
import Footer from "./components/Footer";

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
  components: {
    Footer
  },
  data() {
    return {
      dropDownItems: [
        {
          title: "Badminton",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "mdi-badminton",
          links: {
            mens: "/mens/badminton",
            womens: "/mens/badminton",
            kids: "/mens/badminton"
          }
        },
        {
          title: "Basketball",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-basketball-ball",
          links: {
            mens: "/mens/badminton",
            womens: "/mens/badminton",
            kids: "/mens/badminton"
          }
        },
        {
          title: "VolleyBall",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-volleyball-ball",
          links: {
            mens: "/mens/badminton",
            womens: "/mens/badminton",
            kids: "/mens/badminton"
          }
        },
        {
          title: "Hockey",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-hockey-puck",
          links: {
            mens: "/mens/badminton",
            womens: "/mens/badminton",
            kids: "/mens/badminton"
          }
        },
        {
          title: "Table Tennis",
          items: ["Men's", "Women's", "Kid's"],
          iconName: "fa-table-tennis",
          links: {
            mens: "/mens/badminton",
            womens: "/mens/badminton",
            kids: "/mens/badminton"
          }
        },
        {
          title: "Yoga",
          items: ["Men's", "Women's"],
          iconName: "fa-heart",
          links: { mens: "/mens/badminton", womens: "/mens/badminton" }
        },
        { title: "Contact Us", iconName: "fa-phone", link: "/contact" },
        { title: "Admin", iconName: "fa-sign-in-alt", link: "/login" }
      ],
      drawer: false,
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

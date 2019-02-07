import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import Secure from "./components/Secure.vue";
import PhotoGallery from "./views/PhotoGallery.vue";
import Sports from "./views/Sports.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/secure",
      name: "secure",
      component: Secure,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/mens/badminton",
      name: "Men's Badminton",
      component: Sports
    },
    {
      path: "/mens/badminton/photos",
      name: "Men's Badminton Photo Gallery",
      component: PhotoGallery
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;

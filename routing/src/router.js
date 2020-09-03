import Vue from "vue";
import Router from "vue-router";

import Home from "./components/views/Home.vue";
import Contact from "./components/views/Contact.vue";
import About from "./components/views/About.vue";
import User from "./components/user/User.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/about", name: "about", component: About },
    { path: "/user/:id", name: "user", component: User },
  ],
  linkExactActiveClass: "has-text-warning",
});

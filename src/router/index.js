import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/circuit",
        name: "circuit",
        component: () => import( '../components/circuit.vue')
      },
      {
        path: "/monthlyPlan",
        name: "monthlyPlan",
        component: () => import( '../components/monthlyPlan.vue')
      },
      {
        path: "/test",
        name: "test",
        component: () => import( '../components/test.vue')
      }
    ],
    redirect: "/monthlyPlan"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

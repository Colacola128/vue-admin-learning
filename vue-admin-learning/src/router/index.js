import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

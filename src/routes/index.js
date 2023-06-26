import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../components/SignUp.vue";
import SignIn from "../components/SignIn.vue";
const routes = [
  {
    path: "/signin",
    component: SignIn,
  },
  {
    path: "/",
    component: SignUp,
  },
  {
    path: "/signup",
    component: SignUp,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

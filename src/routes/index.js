import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../components/Signup.vue";
import SignIn from "../components/SignIn.vue";
import Home from "../components/Home.vue";
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
  {
    path: "/HomePage",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

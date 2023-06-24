import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Movie from "../views/Movie.vue";
import SignUp from "../components/SignUp.vue";
const routes = [
  {
    path: "/",
    component: SignUp,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

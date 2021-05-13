import { createWebHistory, createRouter } from "vue-router";
import Main from "../layout/Main.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  { path: "/:catchAll(.*)", name: "Error", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

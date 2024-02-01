import { createRouter, createWebHistory } from "vue-router";
import Homepage from "./components/Homepage.vue";
import ApartmentDetail from "./pages/Apartment.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/apartment/:id",
    name: "apartment-detail",
    component: ApartmentDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

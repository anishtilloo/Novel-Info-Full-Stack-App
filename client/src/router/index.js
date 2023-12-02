import { createRouter, createWebHistory } from 'vue-router'
import Listing from "../views/Listing.vue";
import AddNovel from "../views/AddNovel.vue";

const routes = [
  {
    path: '/listing',
    name: 'Listing',
    component: Listing
  },
  {
    path: '/addnovel',
    name: 'AddNovel',
    component: AddNovel
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
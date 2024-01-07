import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Listing from "../views/Listing.vue";
import AddNovel from "../views/AddNovel.vue";
import ViewNovel from "../views/ViewNovel.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: []
  },
  {
    path: '/listing',
    name: 'Listing',
    component: Listing,
    children: []
  },
  {
    path: '/addnovel',
    name: 'AddNovel',
    component: AddNovel
  },
  {
    path: '/novel/:id',
    name: 'ViewNovel',
    component: ViewNovel
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
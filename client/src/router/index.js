import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Listing from "../views/Listing.vue";
import AddNovel from "../views/AddNovel.vue";
import ViewNovel from "../views/ViewNovel.vue";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";

const routes = [
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    children: []
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    children: []
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: []
  },
  {
    path: '/novel/listing',
    name: 'Listing',
    component: Listing,
    children: []
  },
  {
    path: '/novel/addnovel',
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
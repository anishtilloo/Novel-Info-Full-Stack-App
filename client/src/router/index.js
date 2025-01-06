import { createRouter, createWebHistory } from 'vue-router';
import { storeToRefs } from 'pinia';

import { useAuthStore } from "../stores/auth.store";

import Home from "../views/Home.vue";
import Listing from "../views/Listing.vue";
import AddNovel from "../views/AddNovel.vue";
import ViewNovel from "../views/ViewNovel.vue";
import Register from "../views/auth/Register.vue";
import Login from "../views/auth/Login.vue";
import LandingPage from "../views/Landing.vue";

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage,
    children: [],
    meta: { requiresAuth: false },
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: Register,
    children: [],
    meta: { requiresAuth: false },
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login,
    children: [],
    meta: { requiresAuth: false },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [],
    meta: { requiresAuth: true },
  },
  {
    path: '/novel/listing',
    name: 'Listing',
    component: Listing,
    children: [],
    meta: { requiresAuth: true },
  },
  {
    path: '/novel/addnovel',
    name: 'AddNovel',
    component: AddNovel,
    meta: { requiresAuth: true },
  },
  {
    path: '/novel/:id',
    name: 'ViewNovel',
    component: ViewNovel,
    meta: { requiresAuth: true },
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});


router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  const { setIsAuthenticated } = authStore;
  const { isAuthenticated } = storeToRefs(authStore);;
  if (localStorage.getItem('auth_token')) {
    setIsAuthenticated(true);
  }
  if (
    to.meta.requiresAuth &&
    // make sure the user is authenticated
    !isAuthenticated.value
    // ❗️ Avoid an infinite redirect
    // to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Landing'
  ) {
    // redirect the user to the login page
    return { name: 'Landing' }
  }
  return true;
})


export default router
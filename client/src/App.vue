
<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore } from "./stores/auth.store.js";
import Navbar from "./components/Navbar/Navbar.vue";

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore)
</script>
<template>
  <template v-if="isAuthenticated">
    <Navbar />
  </template>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
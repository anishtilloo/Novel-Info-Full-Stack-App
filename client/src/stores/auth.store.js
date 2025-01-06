import { ref } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', () => {
    const isAuthenticated = ref(false);
    function getIsAuthenticated() {
        return isAuthenticated;
    }
    function setIsAuthenticated(isAuth) {
        isAuthenticated.value = isAuth;
    }

    return {
        isAuthenticated,
        getIsAuthenticated,
        setIsAuthenticated
    }
});
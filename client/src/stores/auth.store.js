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

    function logout() {
        alert('Are you sure you want to logout?')
        isAuthenticated.value = false;
        localStorage.removeItem('auth_token');
    }

    return {
        isAuthenticated,
        logout,
        getIsAuthenticated,
        setIsAuthenticated
    }
});
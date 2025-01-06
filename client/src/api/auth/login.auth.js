import axios from 'axios';

export function login(payload) {
    return axios.post('/api/auth/login', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
}
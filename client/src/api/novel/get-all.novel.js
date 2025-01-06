import axios from 'axios';

export function getAllNovels(token, novelData) {
    return axios.get(`/api/novel/allnovel?limit=${novelData.limit || 10}&page=${novelData.page | 1}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}
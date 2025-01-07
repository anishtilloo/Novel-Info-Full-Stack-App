import axios from 'axios';

export function addNovel(token, novelData){
        const formData = new FormData();
        formData.append('novelName', novelData.novelName);
        formData.append('novelAuthor', novelData.novelAuthor);
        formData.append('genre', novelData.genre);
        formData.append('rating', novelData.rating);
        formData.append('synopsis', novelData.synopsis);
        formData.append('backgroundImg', novelData.backgroundImg);
            return axios.post(`/api/novel/add-novel`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`,
                }
            });
    }
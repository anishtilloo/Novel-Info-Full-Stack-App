import { ref, reactive } from "vue";
import axios from 'axios';

export default function useNovel() {
    const novelData = ref([]);
    const error = ref(null);
    let novelByIdData = reactive({});

    async function getAllNovels(limit=10, page=1) {
        novelData.value = [];
        error.value = null;
        try {
            const getNovelResult = await axios.get(`/api/novel/allnovel?limit=${limit}&page=${page}`, {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVlYmEwZjNlMzg4ODQwYWRmMjQxYmUiLCJpYXQiOjE3MzQyNzc0MTAsImV4cCI6MTczNDI4MTAxMH0.9xa7ygE8QW8yYGLZ13Kwczwln7EMmnsxALFIyCUWpNg`
                }
            })
            console.log(getNovelResult);
            novelData.value = getNovelResult.data.result;
            return novelData.value;
        } catch (error) {
            console.log(error);
            error.value = error;
            return error;
        }
    }

    const getNovelById = async (id) => {
        try {
            let getNovelById = await axios(`/api/novel/novel/${id}`,  {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVlYmEwZjNlMzg4ODQwYWRmMjQxYmUiLCJpYXQiOjE3MzQyNzc0MTAsImV4cCI6MTczNDI4MTAxMH0.9xa7ygE8QW8yYGLZ13Kwczwln7EMmnsxALFIyCUWpNg`
                }
            })
            novelByIdData = getNovelById.data.result;
            return novelByIdData;
        } catch (error) {
            console.log(error);
            error.value = error;
            return error;   
        }
    }

    const addNovelsUrl = "/novel/add-novel";

    const addNovel = async (novelName, novelAuthor, genre, rating, sypnosis, backgroundImg) => {
        const formData = new FormData();
        formData.append('novelName', novelName);
        formData.append('novelAuthor', novelAuthor);
        formData.append('genre', genre);
        formData.append('rating', rating);
        formData.append('sypnosis', sypnosis);
        formData.append('backgroundImg', backgroundImg);
        console.log("Form Data:", formData);
        try {
            const response = await axios.post(addNovelsUrl, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            return "Novel Added Successfully";
        } catch (error) {
            console.log(error);
            error.value = error;
            return error;
        }
    }


    return {
        novelData,
        novelByIdData,
        error,
        getAllNovels,
        getNovelById,
        addNovel
    }
}
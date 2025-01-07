import { ref, reactive } from "vue";
import axios from 'axios';

export default function useNovel() {
    const novelData = ref([]);
    const error = ref(null);
    let novelByIdData = reactive({});

    // async function getAllNovels(limit=10, page=1) {
    //     novelData.value = [];
    //     error.value = null;
    //     try {
    //         const getNovelResult = await axios.get(`/api/novel/allnovel?limit=${limit}&page=${page}`, {
    //             headers: {
    //                 Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzVlYmEwZjNlMzg4ODQwYWRmMjQxYmUiLCJpYXQiOjE3MzQyNzc0MTAsImV4cCI6MTczNDI4MTAxMH0.9xa7ygE8QW8yYGLZ13Kwczwln7EMmnsxALFIyCUWpNg`
    //             }
    //         })
    //         console.log(getNovelResult);
    //         novelData.value = getNovelResult.data.result;
    //         return novelData.value;
    //     } catch (error) {
    //         console.log(error);
    //         error.value = error;
    //         return error;
    //     }
    // }

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

    


    return {
        novelData,
        novelByIdData,
        error,
        getAllNovels,
        getNovelById,
        addNovel
    }
}
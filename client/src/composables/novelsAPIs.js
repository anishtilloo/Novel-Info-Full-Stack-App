import { ref, reactive } from "vue";
import axios from 'axios';

export default function useNovel() {
    const novelData = ref([]);
    const error = ref(null);
    let novelByIdData = reactive({});

    const getAllNovels = async (limit, page) => {
        novelData.value = [];
        error.value = null;
        try {
            const getNovelResult = await axios(`http://localhost:4000/api/allnovel?limit=${limit}&page=${page}`)
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
            let getNovelById = await axios(`http://localhost:4000/api/novel/${id}`)
            novelByIdData = getNovelById.data.result;
            return novelByIdData;
        } catch (error) {
            console.log(error);
            error.value = error;
            return error;   
        }
    }

    const addNovelsUrl = "http://localhost:4000/api/add-novel";

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
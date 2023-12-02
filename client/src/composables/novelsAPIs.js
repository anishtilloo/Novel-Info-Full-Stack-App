import { ref, reactive } from "vue";
import axios from 'axios';

export default function useNovel() {
    const getNovelsUrl = "http://localhost:4000/api/allnovel";
    const novelData = ref([]);
    const error = ref(null);
    let novelByIdData = reactive({});

    const getAllNovels = async () => {
        novelData.value = [];
        error.value = null;
        try {
            const getNovelResult = await axios(getNovelsUrl)
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
            console.log(getNovelById);
            novelByIdData = getNovelById.data.result;
            return novelByIdData;
        } catch (error) {
            console.log(error);
            error.value = error;
            return error;   
        }
    }

    const addNovelsUrl = "http://localhost:4000/api/add-novel";

    const addNovel = async (novelName, novelAuthor, genre, rating) => {
        console.log("genre array",genre);
        try {
            const addNovel = await axios.post(addNovelsUrl, {
                novelName: novelName,
                novelAuthor: novelAuthor,
                genre: genre,
                rating: rating,
            })
            console.log(addNovel.data);
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
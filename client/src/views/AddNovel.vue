<template>
    <h1>Add Novel</h1>
    <div v-if="toastBool">
        <GreenToast />
    </div>
    <div v-if="toastBool == false">
        <RedToast />
    </div>
    <div>
        <form class="flex items-center justify-center h-screen form-control w-full max-w" @submit.prevent="handleSubmit">
            <div>
                <label class="label label-text" for="novelName">Novel Name</label>
                <input class="input input-bordered w-full max-w-xs" type="text" id="novelName" v-model="novelName" />
            </div>
            <div>
                <label class="label label-text" for="novelAuthor">Novel Author</label>
                <input class="input input-bordered w-full max-w-xs" type="text" id="novelAuthor" v-model="novelAuthor" />
            </div>
            <div>
                <label class="label label-text" for="genres">Genres</label>
                <input class="input input-bordered w-full max-w-xs" type="text" id="genres" v-model="genre" />
            </div>
            <div>
                <label class="label label-text" for="rating">Rating</label>
                <input class="input input-bordered w-full max-w-xs" type="text" id="rating" v-model="rating" />
            </div>
            <button class="btn btn-primary my-4" type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import GreenToast from '../components/Toast/Green-Toast.vue';
import RedToast from '../components/Toast/Red-Toast.vue';
import useNovel from "../composables/novelsAPIs";

const novelName = ref('');
const novelAuthor = ref('');
const genre = ref('');
const rating = ref('');
const toastBool = ref();

const { addNovel } = useNovel();

const handleSubmit = async () => {
    const genreArray = genre.value.split(',').map(genre => genre.trim());
    console.log("genre array",genreArray);
    try {
        await addNovel(novelName.value, novelAuthor.value, genreArray, rating.value);
        toastBool.value = true;
        setTimeout(()=> toastBool.value = null, 5000)
    } catch (error) {
        console.log(error);
        toastBool.value = false;
        setTimeout(()=> toastBool.value = null, 5000)
    }
    
};
</script>

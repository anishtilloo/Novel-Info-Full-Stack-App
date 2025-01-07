<script setup>
import { ref } from 'vue';
import GreenToast from '../components/Toast/Green-Toast.vue';
import RedToast from '../components/Toast/Red-Toast.vue';
import { addNovel } from '../api/novel/add.novel';
// import useNovel from "../composables/novelsAPIs";

const novelName = ref('');
const novelAuthor = ref('');
const genre = ref('');
const rating = ref('');
const synopsis = ref('');
const backgroundImg = ref({});
const toastBool = ref();

function handleFileInput(event) {
    const {files, name} = event.target;
    console.log("files",files);
    console.log("name",name);
    backgroundImg.value = files[0];
}

async function handleSubmit() {
    const genreArray = genre.value.split(',').map(genre => genre.trim());
    const novelData = {
        novelName: novelName.value, 
        novelAuthor: novelAuthor.value, 
        genre: genreArray, 
        rating: rating.value, 
        synopsis: synopsis.value, 
        backgroundImg: backgroundImg.value,
    }
    try {
        await addNovel(localStorage.getItem('auth_token'), novelData);
        toastBool.value = true;
        setTimeout(()=> toastBool.value = null, 5000)
    } catch (error) {
        console.log(error);
        toastBool.value = false;
        setTimeout(()=> toastBool.value = null, 5000)
    }
    
};
</script>


<template>
    <div v-if="toastBool">
        <GreenToast />
    </div>
    <div v-if="toastBool == false">
        <RedToast />
    </div>
    <div>
        <div class=" flex justify-center items-center font-semibold text-2xl text-center h-20">
            <h1>Add Novel</h1>
        </div>
        <div class="flex items-center w-full h-full justify-center rounded-md">
            <form enctype="multipart/form-data" class="flex items-center w-1/2 form-control" @submit.prevent="handleSubmit">
                <div class="flex mx-4 input-group-md">
                    <div class="mx-2">
                        <label class="label label-text" for="novelName">Novel Name</label>
                        <input class="input input-bordered rounded-md h-10" type="text" id="novelName" placeholder="Novel Name" v-model="novelName" />
                    </div>
                    <div class="mx-2">
                        <label class="label label-text" for="novelAuthor">Novel Author</label>
                        <input class="input input-bordered rounded-md h-10" type="text" id="novelAuthor" placeholder="Novel Author" v-model="novelAuthor" />
                    </div>
                    <div class="mx-2">
                        <label class="label label-text" for="genres">Genres</label>
                        <input class="input input-bordered rounded-md h-10" type="text" id="genres" placeholder="Genres" v-model="genre" />
                    </div>
                </div>
                <div class="flex">
                    <div class="mx-2">
                        <label class="label label-text" for="rating">Rating</label>
                        <input class="input input-bordered rounded-md h-10" type="text" id="rating" placeholder="Rating" v-model="rating" />
                    </div>
                    <div class="mx-2">
                        <label class="label label-text" for="backgroundImg">Image</label>
                        <input class="file-input file-input-bordered file-input-sm rounded-md h-10" type="file" id="backgroundImg" name="backgroundImg" @change="handleFileInput($event)" />
                    </div>
                </div>
                <div>
                    <div class="mx-2">
                        <label class="label label-text" for="rating">Synopsis</label>
                        <textarea class="textarea textarea-bordered textarea-lg w-[600px] rounded-md" type="text" rows="4" cols="20" id="synopsis" v-model="synopsis"></textarea>
                    </div>
                </div>
                <button class="btn btn-primary my-4 rounded-md" type="submit">Add Novel</button>
            </form>
        </div>
    </div>
</template>
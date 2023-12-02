<script setup>

import { onMounted } from "vue";
import useNovel from "../composables/novelsAPIs";

const {novelData, error, getAllNovels, getNovelById } = useNovel();

onMounted(getAllNovels);
 
function openModel() {
  $refs.childModalRef.openModal()  
}

</script>

<template>
    <h1 class="flex items-center justify-center text-2xl">Novel Listing</h1>
    <div class="flex">
      <div class="" v-if="error">Oops!!! Error Encountered : {{ error.message }}</div> 
    <div class="flex flex-wrap px-4 py-8">
      <div class="flex py-4" v-for="(novel, i) in novelData" :key="novel.id">
        <div class="flex card w-96 bg-primary text-primary-content mx-8">
          <div class="card-body">
            <div class="px-4">
              <h3>{{ ++i }}</h3>
            </div>
            <div class="px-4">
              <h3 class="card-title pb-6">{{ novel.novelName }}</h3>
              <h3>Novel Author : {{ novel.novelAuthor }}</h3>
              <h3><span class="text-xl">Genra</span> : 
                <p class="inline-block  px-1" v-for="(genra, i) in novel.genre" :key="i">
                  <span class="bg-[#502f89] rounded-lg px-1"> {{ genra }} </span> 
                </p>
              </h3>
              <h3>Rating : {{ novel.rating }}</h3>
            </div>
            <div class="card-actions justify-end">
               <button class="btn" @click="getNovelById(novel._id)">
                <a href="/src/views/ViewNovel.vue">
                  <button class="btn">
                    Info
                  </button>
                </a>
              </button>
              <!-- <button class="btn">Edit</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
      <Content />
    </div>
</template>
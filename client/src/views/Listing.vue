<script setup>
import { onMounted } from "vue";
import useNovel from "../composables/novelsAPIs";
import NovelViewCard from "../components/Cards/NovelViewCard.vue";
const { novelData, error, getAllNovels } = useNovel();

onMounted(getAllNovels);
</script>

<template>
  <h1 class="flex items-center justify-center text-2xl">Novel Listing</h1>
  <div class="flex items-center justify-center">
    <div class="" v-if="error">
      Oops!!! Error Encountered : {{ error.message }}
    </div>
    <div v-if="novelData" class="flex flex-wrap px-4 py-8">
      <div class="flex py-4" v-for="(novel) in novelData" :key="novel.id">
        <NovelViewCard 
        :key="i"
        :novelName="novel.novelName"
        :novelAuthor="novel.novelAuthor"
        :rating="novel.rating"
        :genres="novel.genres"
        :id="novel._id"
        :backgroundImg="novel.backgroundImg"
       />
      </div> 
    </div>
    <div v-else class="flex flex-wrap px-4 py-8">
      <h1>NO DATA Available</h1>
    </div>
    <div>
      <select name="pageLimit" id="limit">
        <option value="">10</option>
        <option value="">50</option>
        <option value="">100</option>
      </select>
      <p>Showing 1 to 10 entries of 100</p>
      <div>
        <button>
        prev
      </button>
      
      <button>
        next
      </button>
      </div>
    </div>
  </div>
</template>

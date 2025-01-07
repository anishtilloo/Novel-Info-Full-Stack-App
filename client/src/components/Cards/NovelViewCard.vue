<script setup>
import router from "../../router/index";

defineProps({
    key: Number,
    novelName: String,
    novelAuthor: String,
    backgroundImg: String,
    rating: Number,
    genres: Array,
    id: String
});
</script>

<template>
    <div class="flex card bg-primary text-primary-content w-full m-4">
      <figure>
        <img
          class="w-full h-full max-h-[200px]"
          v-if="backgroundImg"
          :src="`${backgroundImg}`"
          alt="background img"
        />
      </figure>
      <div class="card-body px-2">
        <div class="px-4 py-4">
          <div class="card-title pb-6 flex">
            <h4>
              {{ novelName }}
            </h4>
          </div>
          <div>Author : {{ novelAuthor }}</div>
          <div>
            <span class="text-md">Genre</span> :
            <p
              class="inline-block px-1"
              v-for="(genera, i) in genres"
              :key="i"
            >
              <span class="bg-[#502f89] rounded-lg px-1">
                {{ genera }}
              </span>
            </p>
          </div>
          <div>Rating : {{ rating }}</div>
        </div>
      </div>
      <div class="card-actions justify-end absolute right-5 bottom-3">
        <button class="btn" @click="router.push(`/novel/${id}`)">
          Info
        </button>
        <!-- <button class="btn">Edit</button> -->
      </div>
    </div>
</template>
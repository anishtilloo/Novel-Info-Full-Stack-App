<template>
    <div class="flex card bg-primary text-primary-content mx-8 w-96">
          <figure>
            <img
              class="h-[284px]"
              v-if="backgroundImg"
              :src="`${backgroundImg}`"
              alt="background img"
            />
          </figure>
          <div class="card-body px-2">
            <div class="px-4 py-4">
              <h3 class="mr-1"></h3>
              <h3 class="card-title pb-6 flex">
                <!-- <span> {{ key }}. </span> -->
                <span>
                  {{ novelName }}
                </span>
              </h3>
              <h3>Author : {{ novelAuthor }}</h3>
              <!-- <h3>
                <span class="text-md">Genre</span> :
                <p
                  class="inline-block px-1"
                  v-for="(genra, i) in genres"
                  :key="i"
                >
                  <span class="bg-[#502f89] rounded-lg px-1">
                    {{ genra }}
                  </span>
                </p>
              </h3> -->
              <h3>Rating : {{ rating }}</h3>
            </div>
          </div>
          <div class="card-actions justify-end absolute right-5 bottom-3">
            <button class="btn" @click="router.push(`/novel/${id}`)">
              <!-- <button class="btn"  -->
              Info
              <!-- </button> -->
            </button>
            <!-- <button class="btn">Edit</button> -->
          </div>
        </div>
</template>

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
<script setup>
import { useRoute } from "vue-router";
import { onMounted, reactive, ref} from "vue";
import useNovel from "../composables/novelsAPIs";

const { getNovelById } = useNovel();

const router = useRoute()

const novelData = reactive({
    novelName: "",
    novelAuthor: "",
    genre: "",
    rating: "",
    backgroundImg: ""
});
const rating = ref([]);

// let novelData = ref({});

onMounted(async () => {
  console.log(router.params.id);
  const result = await getNovelById(router.params.id);
  Object.assign(novelData, {...result});
  novelData.value.map((novel, index) => {
    if (novel.rating) {
      rating.value.push(index)
    }
  });
});

console.log("novelData", novelData.novelAuthor);

</script>

<template>
   <div class="flex justify-start my-8 mx-8 px-4 flex-col md:flex-row">
        <div class="md:w-1/3 ">
            <figure>
            <img
              class="h-[284px] w-full"
              v-if="novelData.backgroundImg"
              :src="`${novelData.backgroundImg}`"
              alt="background img"
            />
          </figure>
        </div>
        <div class="flex-col top-0 leading-snug mx-4 px-4 md:w-2/3">
            <div class="text-[18px] text-[#9c9c9c]">By {{ novelData.novelAuthor }} (Author)</div>
            <div class="text-[35px] text-[#fff] font-bold">{{ novelData.novelName }}</div>
            <div class="text-[15px] text-[#4244d7]">{{ novelData.genre[0] }}</div>
            <div class="flex">
             <div class="pr-2">
              {{ novelData.rating }}/10
             </div>
             <div v-for="(rating, i) in rating" class="flex flex-row text-yellow-400">
                <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>     
             </div>
             <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
            </div>
            <div>
              <span class="text-[#ffffff] text-md">
                Synpopsis
              </span>
              <div class="text-[#908c8c] text-sm">
                <span class="pl-8">You</span> must be strong enough to strike and strike and strike again without tiring.
                The first lesson is to make yourself strong.
                After the jaw-dropping revelation that Oak is the heir to Faerie, Jude must keep her younger brother safe. To do so, she has bound the wicked king, Cardan, to her, and made herself the power behind the throne. 
              </div>
            </div>
        </div>
   </div>
</template>

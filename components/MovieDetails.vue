<template>
  <div  class="p-3 rounded-md shodow-md h-full">
    <div class="grid grid-cols-2 gap-10 items-center">
      <div class="p-7">
        <img :src="API_IMG + data.poster_path" class="mx-auto my-7 w-96" alt="" />
      </div>
      <div class="py-7">
        <h2 class="text-4xl my-7">{{ data.title }}</h2>
        <h3 class="font-bold border-b-2 mb-4 pb-2">description:</h3>
        <p class="mb-7">{{ data.overview }}</p>
        <button
          class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm my-4 flex items-center gap-2"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = defineProps(["data"]);
let API_IMG = "https://image.tmdb.org/t/p/w500/";
</script>

<style scoped></style>

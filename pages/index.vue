<script setup>
import { useMovieStore } from "../store/movie";
const store = useMovieStore();

watchEffect(() => {
  store.getMovie();
});
</script>

<template>
  <div class="flex justify-center my-10">
    <input type="text" class="border border-black p-2 rounded-2xl" placeholder="Search" v-model="store.query" />
  </div>
  <div class="grid grid-cols-4 gap-5 justify-center items-center">
    <Movie v-for="movie in store.movies" :movie="movie" />
  </div>
</template>

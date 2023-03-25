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
  <div class="flex flex-wrap gap-5 justify-center items-center bla">
    <Movie v-for="movie in store.movies" :movie="movie" />
  </div>
</template>


<style>

html,body{
  overflow-x: hidden;
}

.p{
  width: 200px;
  margin: 0 auto;
}

@media screen and (max-width:600px){
  .box{
    width: 100%;
  }
}


</style>
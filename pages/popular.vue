<script setup>
import {useMovieStore} from "../store/movie"
const store = useMovieStore()


  store.getPopular()

</script>

<template>
    <div class="grid grid-cols-4 gap-5 justify-center items-center">
     <Popular v-for="movie in store.popular" :movie="movie"/>
    </div>
</template>


<script setup>
import {useMovieStore} from "../store/movie"
const store = useMovieStore()


  store.getCinema()

</script>

<template>
    <div class="grid grid-cols-4 gap-5 justify-center items-center">
     <Cinema v-for="movie in store.cinema" :movie="movie"/>
    </div>
</template>


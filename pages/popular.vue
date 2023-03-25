<script setup>
import {useMovieStore} from "../store/movie"
const store = useMovieStore()


useHead({
  title: "Nuxt Movie | Popular",
  meta: [
     {name: "description", content:"Nuxt About"}
  ]
})

  store.getPopular()

</script>

<template>
    <div class="flex flex-wrap gap-5 justify-center items-center bla">
     <Popular v-for="movie in store.popular" :movie="movie"/>
    </div>
</template>


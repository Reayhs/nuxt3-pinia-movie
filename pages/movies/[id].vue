<script setup>
const { id } = useRoute().params;
const url = `https://api.themoviedb.org/3/movie/${id}?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&external_source=imdb_id`;
const { data } = await useFetch(url);
console.log(data.value);
</script>

<template>
  <div>
    <Head>
      <Title>Nuxt Movie| {{ data.title }}</Title>
      <Meta name="description" :content="data.overview" />
    </Head>
    <MovieDetails :data="data" />
  </div>
</template>

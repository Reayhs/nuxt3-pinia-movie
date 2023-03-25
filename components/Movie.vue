<script setup>
const { movie } = defineProps(["movie"]);
const API_IMG = "https://image.tmdb.org/t/p/w500/";
</script>

  <template>
    <div class="p-3 rounded-md shodow-md h-full text-center  w-64 box">
      <img
        :src="API_IMG + movie.poster_path"
        alt="product thumb"
        class="thumb"
      />
      <p class="font-bold text-gray-500 m-4 truncate">{{ movie.title }}</p>
      <NuxtLink :to="`/movies/${movie.id}`">
        <p class="bg-[#12b488] text-white px-3 py-2 rounded-md text-sm my-4 p">
          View Details
        </p>
      </NuxtLink>
    </div>
  </template>
<style scoped>
.thumb {
  max-height: 580px;
  max-width: 70%;
  margin: 0 auto;
}
</style>

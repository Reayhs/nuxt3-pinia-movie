<script setup>
const statu = ref(true);
watchEffect(() => {
  console.log(statu.value);
});
</script>

<template>
  <div class="container mx-auto relative">
    <nav class="flex justify-between items-center shadow-md py-6 px-10">
      <h1 class="text-3xl"><nuxt-link to="/">Movie</nuxt-link></h1>

      <ul class="flex gap-10 items-center" :class="{ ul: statu }">
        <li class="text-lg"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="text-lg"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="text-lg"><nuxt-link to="/popular">Popular</nuxt-link></li>
        <li class="text-lg"><nuxt-link to="/cinema">Cinema</nuxt-link></li>
      </ul>
      <button class="text-4xl" @click="statu = !statu">
        {{ statu ? "+" : "-" }}
      </button>
    </nav>
    <div class="mt-8">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: rgb(46, 144, 144);
  font-weight: bold;
}

button {
  display: none;
}

@media screen and (max-width: 800px) {
  .ul {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: center;
    top: 0;
    left: 0;
    background-color: rgb(190, 187, 187);
    width: 250px;
    height: 100%;
  }
  button {
    display: block;
  }
}
</style>

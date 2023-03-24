<template>
  <div class="container mx-auto">
    <nav class="flex justify-between items-center shadow-md py-6">
      <h1 class="text-3xl"><nuxt-link to="/">Movie</nuxt-link></h1>
      <ul class="flex gap-10 items-center">
        <li class="text-lg"><nuxt-link to="/">Home</nuxt-link></li>
        <li class="text-lg"><nuxt-link to="/about">About</nuxt-link></li>
        <li class="text-lg"><nuxt-link to="/popular">Popular</nuxt-link></li>
        <li class="text-lg"><nuxt-link to="/cinema">Cinema</nuxt-link></li>
      </ul>
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
</style>

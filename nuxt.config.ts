// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  app: {
    head: {
      title: "Nuxt Movie",
      meta: [{ name: "description", content: "Nuxt Movie App" }],
    },
  },
});

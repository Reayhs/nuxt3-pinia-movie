import { defineStore } from "pinia";

export const useMovieStore = defineStore("movie", {
  state: () => {
    return {
      movies: [],
      popular: [],
      cinema: [],
      query: "",
    };
  },
  actions: {
    async getMovie() {
      if (this.query === "") {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=4"
        );
        const res = await data.json();
        this.movies = res.results;
        console.log(this.movies);
      } else {
        const data = await fetch(
          `
          https://api.themoviedb.org/3/search/movie?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&query=${this.query}}&page=1&include_adult=false
          `
        );
        const res = await data.json();
        this.movies = res.results;
        console.log(this.movies);
      }
    },
    async getCinema() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=5"
      );
      const res = await data.json();
      this.cinema = res.results;
      console.log(this.cinema);
    },
    async getPopular() {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=2"
      );
      const res = await data.json();
      this.popular = res.results;
      console.log(this.popular);
    },
  },
});

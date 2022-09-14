<template>
  <SayHello :user="userObject"></SayHello>
  <ul class="flex flex-wrap gap-20 px-10 sm:px-32 justify-start">
    <li
      class="card h-100 shadow-xl m-auto mb-10 w-full md:w-[42%] lg:w-1/3 xl:w-1/5"
      v-for="movie in movies"
      :key="movie.id">
      <div
        class="card text-white w-auto h-auto bg-cover bg-base-500 shadow-xl image-full">
        <figure>
          <img
            v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white">{{ movie.title }}</h2>
          <p>{{ movie.tagline }}</p>
          <div class="card-actions justify-start">
            <button class="btn btn-primary" v-on:click="goMovie(movie.id)">
              Info
            </button>
          </div>
        </div>
      </div>
    </li>
    <div class="btn-group m-auto mb-10 grid grid-cols-2">
      <button class="btn btn-outline" @click="last">Previous page</button>
      <button class="btn btn-outline" @click="next">Next</button>
    </div>
  </ul>
</template>

<script>
import SayHello from '../components/sayHello.vue'
export default {
  props: {
    userObject: String
  },
  components: { SayHello },
  data() {
    return {
      movies: null,
      page: 1
    }
  },
  methods: {
    goMovie(e) {
      this.$router.push({ name: 'movie', params: { idMovie: e } })
    },
    last() {
      this.page = this.page > 1 ? this.page - 1 : 1
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=89c13ea7efe0c2c3828bcae47738a4e6&page=${this.page}`,
        {
          method: 'GET',
          redirect: 'follow'
        }
      )
        .then((response) => response.json())
        .then((result) => (this.movies = result.results))
        .catch((error) => console.log('error', error))
    },
    next() {
      this.page++
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=89c13ea7efe0c2c3828bcae47738a4e6&page=${this.page}`,
        {
          method: 'GET',
          redirect: 'follow'
        }
      )
        .then((response) => response.json())
        .then((result) => (this.movies = result.results))
        .catch((error) => console.log('error', error))
    },
    render() {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=89c13ea7efe0c2c3828bcae47738a4e6&page=${this.page}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => (this.movies = result.results))
        .catch((error) => console.log('error', error))
    }
  },
  beforeCreate() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=89c13ea7efe0c2c3828bcae47738a4e6&page=${this.page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (this.movies = result.results))
      .catch((error) => console.log('error', error))
  }
}
</script>

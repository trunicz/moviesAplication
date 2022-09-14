<template>
  <div class="hidden">{{ (this.id = idMovie) }}</div>
  <div class="p-32 min-h-screen">
    <div class="card h-auto lg:card-side bg-base-100 shadow-xl">
      <figure class="w-1/4">
        <img
          class="w-100 h-auto object-fill"
          v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
          alt="Album" />
      </figure>
      <div class="card-body bg-white">
        <div class="card-title flex flex-wrap">
          <a href="javascript: history.go(-1)" class="btn ml-auto">back</a>
          <h2 class="text-6xl w-full text-black">
            {{ movie.original_title }}
          </h2>
          <p>{{ movie.title }}</p>
        </div>
        <p class="mt-8 text-base100">{{ movie.overview }}</p>
        <div class="card-actions justify-end">
          <div class="mr-auto flex gap-5">
            <div class="badge text-xl p-4 badge-accent">{{ movie.status }}</div>
            <div class="badge text-xl p-4 badge-warning">
              {{ movie.release_date }}
            </div>
            <div
              class="badge text-xl p-4"
              v-for="genre in movie.genres"
              :key="genre">
              {{ genre.name }}
            </div>
          </div>
          <label for="my-modal" class="btn modal-button text-white">
            Rate
          </label>
          <input type="checkbox" id="my-modal" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box bg-white">
              <h3 class="font-bold text-lg">Set Rate</h3>
              <div class="rating py-4">
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input
                  type="radio"
                  name="rating-1"
                  class="mask mask-star"
                  checked />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
                <input type="radio" name="rating-1" class="mask mask-star" />
              </div>
              <div class="modal-action">
                <label for="my-modal" class="btn">Yay!</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    idMovie: String
  },
  data() {
    return {
      id: null,
      movie: null
    }
  },
  beforeMount() {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(
      `https://api.themoviedb.org/3/movie/${this.id}?api_key=89c13ea7efe0c2c3828bcae47738a4e6`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => (this.movie = result))
      .catch((error) => console.log('error', error))
  }
}
</script>

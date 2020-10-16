<template>
  <div id="giffSearcher">
    <div class="title">
      <h1>{{ appTitle }}</h1>
    </div>
    <div class="form-container">
      <form @submit.prevent="searchGifs">
        <label for="input-search">Search:</label>
        <input v-model="search" type="text" id="input-search" v-on:blur="searchGifs">
      </form>
    </div>
    <div class="loading" v-if="loading">
      <img src="https://media.giphy.com/media/xT9DPldJHzZKtOnEn6/giphy.gif" alt="">
    </div>
    <div class="gifs" v-if="!loading">
      <img v-for="gif in gifs" :key="gif" :src="gif">
    </div>
  </div>
</template>
<script>

import { ref } from 'vue';
import { setTimeout } from 'timers';

const API_URL = 'http://api.giphy.com/v1/gifs/search?api_key=1wk3Don9sHr3RnWwRRO65C0p29SjKV1e&q=';

export default {
  setup() {
    const appTitle = ref('gif-searcher 👾');
    const search = ref('');
    const loading = ref(false);
    const gifs = ref([]);

    const searchGifs = async () => {
      loading.value = true;
      const trimmedString = search.value.replace(/ /g, '+');
      const res = await fetch(API_URL + trimmedString);
      const json = await res.json();
      gifs.value = json.data.map(gif => gif.images.fixed_height.url);
      setTimeout(() => {
        loading.value = false;
      }, 2000);
    };

    return {
      appTitle,
      search,
      searchGifs,
      loading,
      gifs,
    };
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');

#giffSearcher {
  font-family: 'Montserrat', sans-serif;
}

.title {
  display: flex;
  flex-direction: row;
}

.title h1 {
  flex: 1;
  text-align: center;
  font-size: 45px;
}

.form-container {
  display: flex;
  flex-direction: row;
}

.form-container form {
  flex: 1;
  text-align: center;
}

.form-container form label {
  font-weight: bold;
  display: inline-block;
  margin-right: 20px;
}

.form-container form input#input-search {
  width: 400px;
}

.loading {
  text-align: center;
}

.gifs {
  column-count: 4;
  margin-top: 50px;
}

.gifs img {
  width: 100%;
}
</style>

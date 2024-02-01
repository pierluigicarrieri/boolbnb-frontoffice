<script setup>
import { ref } from 'vue';
import axios from 'axios';

const address = ref('');
const locations = ref([]);
let timer;
const latitude = ref('');
const longitude = ref('');

const searchLocation = () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    callApi();
  }, 100);
};

const callApi = () => {
  if (address.value.length >= 5) {
    axios.post('/api/geodata', {
        query: address.value,
    })
      .then(response => {
        createLocationsList(response.data);
      })
      .catch(error => {
        console.error('Error fetching geodata:', error);
        // Gestisci gli errori della chiamata TomTom qui
        if (error.response) {
          console.error('TomTom API Erro999r:', error.response.data);
        }
      });
  }
};

const createLocationsList = (locationsData) => {
  locations.value = locationsData;
};

const selectLocation = (location) => {
  latitude.value = location.position.lat;
  longitude.value = location.position.lon;
  address.value = location.address;
  locations.value = [];
};
</script>



<template>
  <div id="app">
    <header>
      <div><img src="../public/Cattura.PNG" class="logo" alt=""></div>
      <div class="search-container">
        <input type="text" id="locationInput" placeholder="Inserisci il nome della località">
        <button @click="searchLocation">Cerca</button>
      </div>
      <div class="link">
        <a href="http://127.0.0.1:8000/register">Registrati</a>
        <a href="http://127.0.0.1:8000/login">Accedi</a>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>



<style scoped>
header {
  padding: 0 8%;
  height: 13vh;
  background-color: rgb(192, 168, 168);
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.logo {
  height: 13vh;
}

.link {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
}

header > .link > a {
  font-size: 2rem;
  text-decoration: none;
  margin: 0 20px;
  color: black;
}

header > .link > a:hover {
  font-size: 2.2rem;
  text-decoration: underline;
  color: blue;
}

.search-container {
  display: flex;
  padding: 2% 0;
}

input {
  padding: 10px;
  font-size: 16px;
  width: 250px;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>

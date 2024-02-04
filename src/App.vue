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
        <div class="logo">
            <img src="../../public/Cattura.PNG" class="logo" alt="Logo">
        </div>
        <div class="search-container">
            <input type="text" id="locationInput" placeholder="Inserire località">
            <button @click="searchLocation">
              <i class="fa-solid fa-magnifying-glass"></i>
              Cerca
            </button>
        </div>
        <div class="link">
            <a href="http://127.0.0.1:8000/register">Registrati</a>
            <a href="http://127.0.0.1:8000/login">Accedi</a>
        </div>
    </header>
    <router-view></router-view>
  </div>
</template>



<style lang="scss" scoped>
header {
    width: 100%;
    height: 10vh;
    background-color: #002d2b;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .logo {
      width: 10%;
      display: flex;
      justify-content: center;
      
      img{
        height: 10vh;
        width: auto;
      }
    }

    .search-container {
        width: 30%;
        height: 5vh;
        padding: 0 2%;
        display: flex;
        border: 1px solid white;
        border-radius: 20px;

        input {
          width: 80%;
            border: 0;
            font-size: 16px;
            background-color: #002d2b;

            &:focus {
              border: 0;
              outline: none;
              color: white;
            }
        }

        button {
          width: 20%;
          border: 0;
          font-size: 16px;
          background-color: #002d2b;
          color: white;
          cursor: pointer;
        }
    }

    .link {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 10%;
        font-size: 1rem;

        a {
            text-decoration: none;
            color: #00d1c9;

            &:hover {
                color: #00847e;
            }
        }
    }
}
</style>

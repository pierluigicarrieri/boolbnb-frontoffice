<script setup>
import Homepage from './components/Homepage.vue'

function searchLocation() {

    let locationName = document.getElementById("locationInput").value;

  
    let resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "<h3>Risultati della ricerca:</h3><p>" + locationName + "</p>";
}
</script>

<template>
<header>
  <div><img src="../public/Cattura.PNG" class="logo" alt=""></div>
  <div class="search-container">
        <input type="text" id="locationInput" placeholder="Inserisci il nome della località">
        <button onclick="searchLocation()">Cerca</button>
    </div>
  <div class="link"><a href="http://127.0.0.1:8000/register">Registrati</a><a href="http://127.0.0.1:8000/login">Accedi</a></div>
</header>
  <Homepage/>
</template>

<style scoped>
header{
  padding:0  8%;
  height: 13vh;
  background-color: rgb(192, 168, 168);
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.logo{
  height: 13vh;
}
.link{
  display: flex;
  align-items: center;
  justify-content: space-around; 
  width: 20%;
}
header>.link>a{
  font-size: 2rem;
  text-decoration: none;
  margin: 0 20px;
  color: black;
}
header>.link>a:hover{
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

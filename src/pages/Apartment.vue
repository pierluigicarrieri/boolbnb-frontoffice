<script>
export default {
  data() {
    return {
      apartment: {},
    };
  },
  mounted() {
  // Recupera l'ID dell'appartamento dai parametri della route
  const apartmentId = this.$route.params.id;
  console.log('Apartment ID:', apartmentId);

  // Ora puoi utilizzare l'ID per ottenere i dettagli dell'appartamento dalla tua API
  // E aggiornare la proprietà 'apartment' con i dati ottenuti
  this.fetchApartmentDetails(apartmentId);
},
methods: {
  fetchApartmentDetails(apartmentId) {
    // Esegui una chiamata API per ottenere i dettagli dell'appartamento
    const apiUrl = `/apartments/${apartmentId}`;
    console.log('API URL:', apiUrl);

    this.$axios.get(apiUrl)
      .then(response => {
        // Assegna i dettagli dell'appartamento alla tua proprietà
        this.apartment = response.data;
      })
      .catch(error => {
        console.error('Error fetching apartment details:', error);
      });
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="my-card">
      <div><img :src="apartment.photo" class="card-img-top apartment-photo" alt="Apartment Photo"></div>
      <div class="card-body">
        <h5 class="card-title text-center fs-1 my-4">{{ apartment.name }}</h5>
        <div class="info-container ms-3">
          <p class="card-text fs-2">Stanze: {{ apartment.rooms }}</p>
          <p class="card-text fs-2">Letti: {{ apartment.beds }}</p>
          <p class="card-text fs-2">Bagni: {{ apartment.bathrooms }}</p>
          <p class="card-text fs-2">Metri Quadri: {{ apartment.mq }}</p>
        </div>
        <p class="card-text fs-2 ms-3 mt-2">Address: {{ apartment.address }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .apartment-photo{
  width: 100%;
  height: 30rem;
 }
 .my-card{
  display: flex;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 20px;
 }
</style>

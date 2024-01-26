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
  <div class="container">
    <h1 class="text-center my-4">Dettagli dell'Appartamento</h1>
    <div class="card">
      <img :src="apartment.photo" class="card-img-top apartment-photo" alt="Apartment Photo">
      <div class="card-body">
        <h5 class="card-title text-center">{{ apartment.name }}</h5>
        <div class="info-container">
          <p class="card-text">Stanze: {{ apartment.rooms }}</p>
          <p class="card-text">Letti: {{ apartment.beds }}</p>
          <p class="card-text">Bagni: {{ apartment.bathrooms }}</p>
          <p class="card-text">Metri Quadri: {{ apartment.mq }}</p>
        </div>
        <p class="card-text">Address: {{ apartment.address }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Stili specifici per la pagina dettaglio appartamento */
</style>

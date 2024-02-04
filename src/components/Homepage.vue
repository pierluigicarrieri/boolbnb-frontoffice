<script>
export default {
  data() {
    return {
      apartments: [],
      apartmentId: null, // Aggiungi una nuova proprietà per l'ID dell'appartamento
    };
  },
  mounted() {
    this.$axios.get('/apartments')
      .then(response => {
        // Ottieni tutti gli appartamenti
        const allApartments = response.data;

        // Estrai 12 appartamenti randomici non ripetuti
        const randomApartments = this.getRandomApartments(allApartments, 12);

        // Assegna gli appartamenti randomici alla proprietà apartments
        this.apartments = randomApartments;
      })
      .catch(error => {
        console.error('Error fetching apartments:', error);
      });

    // Verifica se apartment è presente nei parametri della route prima di accedere all'ID
    if (this.$route.params.apartment && this.$route.params.apartment.id) {
      this.apartmentId = this.$route.params.apartment.id;
      this.fetchApartmentDetails(this.apartmentId);
    }
  },
  computed: {
    filteredApartments() {
      return this.apartments.filter(apartment => apartment.visible !== 0);
    },
  },
  methods: {
    // Aggiungi la tua implementazione per fetchApartmentDetails
    fetchApartmentDetails(apartmentId) {
      // Esegui una chiamata API per ottenere i dettagli dell'appartamento
      // (Sostituisci questo con la tua logica effettiva)
      // Assegna i dettagli dell'appartamento alla tua proprietà
    },
    getRandomApartments(allApartments, count) {
      const shuffled = allApartments.slice(0).sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    redirectToApartmentDetail(apartmentId) {
      this.$router.push({ name: 'apartment-detail', params: { id: apartmentId } });
    },
  },
};
</script>

<template>
  <div class="my-container">
    <div>
      <h1 class="text-center my-4">I PIÙ VICINI A TE</h1>
      <div class="card-container justify-content-center">
        <div v-for="apartment in filteredApartments" :key="apartment.id" class="card">
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
          <div class="button-container">
            <router-link :to="{ name: 'apartment-detail', params: { id: apartment.id } }">
              <button type="button" class="btn btn-primary">Vedi di Piu</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>

.my-container{
  padding:0 10%;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.info-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.apartment-photo{
  max-width: 100%;
  height: 200px;
  padding: 5px;
}
.info-container>p{
  width: 50%;
}
.button-container{
  width: 100%;
  display: flex;
  justify-content: center;
}
a{
  color: white;
  text-decoration: none;
}
.card {
  width: 18rem;
  height: 28rem;
  /* Aggiungi altri stili CSS a seconda delle tue esigenze */
}

</style>

<script>
export default {
  data() {
    return {
      apartments: [],
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
  },
  methods: {
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
  <div class="container">
  <div>
    <h1 class="text-center my-4">I PIÙ VICINI A TE</h1>
    <div class="card-container justify-content-center">
      <div v-for="apartment in apartments" :key="apartment.id" class="card">
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

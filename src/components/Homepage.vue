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
  },
};
</script>

<template>
  <div class="container">
  <div>
    <h1 class="text-center my-4">I PIÙ VICINI A TE</h1>
    <div class="card-container">
      <div v-for="apartment in apartments" :key="apartment.id" class="card">
        <img :src="apartment.photo" class="card-img-top" alt="Apartment Photo">
        <div class="card-body">
          <h5 class="card-title">{{ apartment.name }}</h5>
          <p class="card-text">Rooms: {{ apartment.rooms }}</p>
          <p class="card-text">Beds: {{ apartment.beds }}</p>
          <p class="card-text">Bathrooms: {{ apartment.bathrooms }}</p>
          <p class="card-text">Square Meters: {{ apartment.mq }}</p>
          <p class="card-text">Address: {{ apartment.address }}</p>
          
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

.card {
  width: 18rem;
  /* Aggiungi altri stili CSS a seconda delle tue esigenze */
}
</style>

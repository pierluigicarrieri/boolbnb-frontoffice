<script>
export default {
  data() {
    return {
      apartment: {},
      showSendMessageForm: false, // Aggiungi questa proprietà
      messageFormData: {
        // Aggiungi campi necessari per il form di messaggistica
        name: '',
        email: '',
        message: '',
      },
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
    openSendMessageForm() {
      // Imposta lo stato del form di messaggistica su true quando si clicca sul pulsante
      this.showSendMessageForm = true;
    },

    sendMessage() {
      // Implementa la logica per inviare il messaggio, puoi utilizzare $axios o un'altra API
      // Dopo l'invio, puoi anche reimpostare lo stato del form e pulire i campi
      console.log('Sending message:', this.messageFormData);
      this.showSendMessageForm = false;
      // Puoi anche reimpostare i campi del form a questo punto
    },
    closeSendMessageForm() {
      this.showSendMessageForm = false;
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
        <div>
          <button @click="openSendMessageForm" class="btn btn-primary">Invia un messaggio</button>
        </div>
      </div>
    </div>
      
      <div v-if="showSendMessageForm" class="overlay">
          <div class="message-form">
            <form @submit.prevent="sendMessage">
              <!-- Campi del form di messaggistica -->
              <div class="my-data">
                <div class="message-input"><label for="name">Nome:</label>
             <input v-model="messageFormData.name" type="text" id="name" required></div>

             <div class="message-input"><label for="email">Email:</label>
              <input v-model="messageFormData.email"  class="email" type="email" id="email" required></div></div>

              
              <div class="message-input text">
                <label for="message" class="message-label">Messaggio:</label>
              <textarea v-model="messageFormData.message" id="message" required></textarea></div>

              <div class="button-container">
                <button type="submit" class="btn btn-primary">Invia Messaggio</button>
                <button @click="closeSendMessageForm" class="btn btn-secondary">Annulla</button>
              </div>
            </form>
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
 .overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Colore scuro con opacità */
  display: flex;
  justify-content: center;
  align-items: center;
 }

 .message-input{
  width: 100%;
  padding: 10px 0;
 }
 .my-data{
  display: flex;
  justify-content: space-around;
  padding: 10px 30px;
 }
 .message-input>.email{
  width: 300px;
 }
 label{
  padding: 0 20px;
 }
 .message-label{
  width: 100%;
  max-width: 700px;
  padding-bottom: 15px;
 }
 .message-input>input{
  padding-left: 10px;
 }

.text{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 0 20px 20px 20px;
 }
 .message-input>textarea{
  width: 100%;
  max-width: 700px;
  height: 100px;
 }

 /* Stili per il form */
 .message-form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 50%;
 }

 /* Stili per il pulsante Annulla */
 .button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
 }
</style>

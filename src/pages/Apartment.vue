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

    // Ora puoi utilizzare l'ID per ottenere i dettagli dell'appartamento dalla tua API
    // E aggiornare la proprietà 'apartment' con i dati ottenuti
    this.fetchApartmentDetails(apartmentId);
  },
  methods: {
    fetchApartmentDetails(apartmentId) {
      // Esegui una chiamata API per ottenere i dettagli dell'appartamento
      // Assegna i dati ottenuti alla proprietà 'apartment'
    },
  },
};
</script>

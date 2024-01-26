import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

const app = createApp(App);

// Configura Axios con la baseURL dell'API Laravel
axios.defaults.baseURL = 'http://localhost:8000/api';

app.config.globalProperties.$axios = axios;

app.use(router).mount('#app');
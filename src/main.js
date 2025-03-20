import { createApp } from 'vue'

// Vuetify
import './app/styles/style.css'
//import './app/styles/globals.css'

// Components
import App from './App.vue'

// router
import router from './app/providers/router'

//pinia
import { createPinia } from 'pinia'

const app = createApp(App).use(router).use(createPinia()).mount('#app');

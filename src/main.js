import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(VueAxios, axios)
app.use(router)
import "bootstrap/dist/js/bootstrap"

app.mount('#app')


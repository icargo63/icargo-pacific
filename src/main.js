import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from "firebase/app"

import 'bootstrap/dist/js/bootstrap.js'
import './assets/main.css'

const firebaseConfig = {
  apiKey: "AIzaSyC_BYZAMvH7pHiAt496INIGDyA4GjCj8N4",
  authDomain: "vue-fire-auth-yt-e7f88.firebaseapp.com",
  projectId: "vue-fire-auth-yt-e7f88",
  storageBucket: "vue-fire-auth-yt-e7f88.appspot.com",
  messagingSenderId: "905903358438",
  appId: "1:905903358438:web:7059e5b0350cac29935627"
};

firebase.initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')



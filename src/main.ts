import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { initializeApp } from 'firebase/app'
import router from './router'

// Initialize Firebase
import { getAnalytics } from 'firebase/analytics'
import firebaseConfig from '../firebase-config'

const firebaseApp = initializeApp(firebaseConfig);

const analytics = getAnalytics(firebaseApp);

const app = createApp(App)
app.use(router)
app.mount('#app')


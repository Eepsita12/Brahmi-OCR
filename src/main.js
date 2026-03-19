import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

// Import your page components
import HomeView from './views/HomeView.vue'
import OCRPage from './views/OCRPage.vue'

// 1. Define routes
const routes = [
  { path: '/', component: HomeView },
  { path: '/ocr', component: OCRPage }
]

// 2. Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// 3. Create and mount the app
const app = createApp(App)
app.use(router)
app.mount('#app')
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OCRPage from '../views/OCRPage.vue' // Ensure this path matches your file name

const routes = [
  { path: '/', component: HomeView },
  { path: '/ocr', component: OCRPage }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
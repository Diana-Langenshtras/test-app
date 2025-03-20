import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../../../pages/home/HomePage.vue'
import ResultPage from '../../../pages/result/ResultPage.vue'

const routes = [
  { name: "home", path: '/', component: HomePage},
  { name: "result", path: '/result', component: ResultPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
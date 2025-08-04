import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import MainPage from './pages/MainPage.vue'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/about', component: AboutPage },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

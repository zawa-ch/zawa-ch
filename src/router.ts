import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from './pages/AboutPage.vue'
import FaqPage from './pages/about/FaqPage.vue'
import LikesPage from './pages/about/LikesPage.vue'
import PersonalityPage from './pages/about/PersonalityPage.vue'
import StacksPage from './pages/about/StacksPage.vue'
import LinksPage from './pages/LinksPage.vue'
import MainPage from './pages/MainPage.vue'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/about', component: AboutPage },
	{ path: '/about/faq', component: FaqPage },
	{ path: '/about/likes', component: LikesPage },
	{ path: '/about/personality', component: PersonalityPage },
	{ path: '/about/stacks', component: StacksPage },
	{ path: '/links', component: LinksPage },
]

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

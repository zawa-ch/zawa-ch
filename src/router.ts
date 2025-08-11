import {
	createRouter,
	createWebHistory,
} from 'vue-router'
import { defineAsyncComponent } from 'vue'
import MainPage from './pages/MainPage.vue'

const AboutPage = defineAsyncComponent(() => import('./pages/AboutPage.vue'))
const FaqPage = defineAsyncComponent(() => import('./pages/about/FaqPage.vue'))
const LikesPage = defineAsyncComponent(() => import('./pages/about/LikesPage.vue'))
const PersonalityPage = defineAsyncComponent(() => import('./pages/about/PersonalityPage.vue'))
const StacksPage = defineAsyncComponent(() => import('./pages/about/StacksPage.vue'))
const InfomationPage = defineAsyncComponent(() => import('./pages/InfomationPage.vue'))
const LinksPage = defineAsyncComponent(() => import('./pages/LinksPage.vue'))

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/about', component: AboutPage },
	{ path: '/about/faq', component: FaqPage },
	{ path: '/about/likes', component: LikesPage },
	{ path: '/about/personality', component: PersonalityPage },
	{ path: '/about/stacks', component: StacksPage },
	{ path: '/infomation', component: InfomationPage },
	{ path: '/links', component: LinksPage },
]

export const router = createRouter({
	history: createWebHistory(),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else if (to.hash) {
			return { el: to.hash }
		} else {
			return { top: 0 }
		}
	},
	routes,
})

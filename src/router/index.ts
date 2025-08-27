import { createWebHashHistory, createRouter } from 'vue-router';

import HomeView from '@/pages/HomeView.vue';
import SentencesView from '@/pages/SentencesView.vue';
import AboutView from '@/pages/AboutView.vue';

import NotFoundPage from '@/pages/errors/NotFoundPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/sentences',
        redirect: () => {
            return {
                name: 'sentences',
                params: {
                    pageNumber: 1,
                }
            };
        },
    },
    {
        path: '/sentences/:pageNumber',
        name: 'sentences',
        component: SentencesView,
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
    },

    {
        path: '/404',
        name: 'errors.not-found',
        component: NotFoundPage,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/404',
    },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };

import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import LoginPage from '@/components/LoginPage.vue';
import RegisterPage from '@/components/RegisterPage.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/LoginPage', name: 'LoginPage', component: LoginPage },
  { path: '/RegisterPage', name: 'RegisterPage', component: RegisterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

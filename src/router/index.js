import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Relatorios from '../views/Relatorios.vue';
import BDO from '../views/BDO.vue';
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/relatorios',
    name: 'Relatorios',
    component: Relatorios
  },
  {
    path: '/bdo',
    name: 'BDO',
    component: BDO
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

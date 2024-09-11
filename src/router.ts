import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue';
import Registro from './components/Registro.vue';
import Gracias from './components/Gracias.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro,
  },
  {
    path: '/gracias',
    name: 'Gracias',
    component: Gracias,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
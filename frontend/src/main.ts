import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import './index.css'
import Home from './layouts/Home.vue'
import Login from './layouts/Login.vue'
import SignUp from './layouts/SignUp.vue'
import TopLinks from './layouts/TopLinks.vue'
import HomeLoggedVue from './layouts/HomeLogged.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/signup',
    component: SignUp
  },
  {
    path: '/topLinks',
    component: TopLinks
  },
  {
    path: '/HomeLogged',
    component: HomeLoggedVue
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

const app = createApp(App);
app.use(router);
app.mount('#app');

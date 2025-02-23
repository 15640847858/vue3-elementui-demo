import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import TestView from '../views/TestView.vue';
import SelfCenterView from '../views/SelfCenterView.vue';
import LoginView from '../views/LoginView.vue';
import ChatGPTView from '../views/ChatGPTView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'app',
    component: HomeView,
    children: [
      {
        path: '/about',
        name: 'about',
        component: AboutView
      },
      {
        path: '/test',
        name: 'test',
        component: TestView
      },
      {
        path: '/chatgpt',
        name: 'chatgpt',
        component: ChatGPTView
      },
      {

          path: "/dashboard",
          name: "dashboard",
          component: DashboardView,
              
      },
      {
        path: '/self-center',
        name: 'self-center',
        component: SelfCenterView
      }
      
    ]
  },  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

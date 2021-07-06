import { createRouter, createWebHashHistory } from 'vue-router';
import Demo from '../views/Demo.vue'

const routes = [    
  {
    path : '/demo',
    name: 'demo',
    component: Demo
  },
  {
    path : '/',
    redirect : '/demo'
  }
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

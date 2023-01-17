import { createRouter, createWebHistory } from 'vue-router'
import { getCurrentUser } from 'vuefire'

import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        requiresAuth:  true
      },
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  if(to.meta.requiresAuth) {
    const currentUser = await getCurrentUser()
    if(!currentUser)  {
      return {
        path: '/login',
        query: {
          // we keep the current path in the query so we can redirect to it after login
          // with `router.push(route.query.redirectTo || '/')`
          redirectTo: to.fullPath,
        },
      }
    }
  }
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/main/HomePage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/main/AboutPage.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../pages/main/ContactsPage.vue')
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../pages/main/FeedbackPage.vue')
    },
    //
    //
    //
    //
    //
    //
    //
    {
      path: '/dressing',
      name: 'dressing',
      component: () => import('../pages/sidebar/DressingPage.vue')
    },
    {
      path: '/material',
      name: 'material',
      component: () => import('../pages/sidebar/MaterialPage.vue')
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: () => import('../pages/sidebar/InventoryPage.vue')
    },
    {
      path: '/single-pedestal',
      name: 'single-pedestal',
      component: () => import('../pages/sidebar/SinglePedestalPage.vue')
    },
    {
      path: '/double-pedestal',
      name: 'double-pedestal',
      component: () => import('../pages/sidebar/DoublePedestalPage.vue')
    },
    {
      path: '/nightstand',
      name: 'nightstand',
      component: () => import('../pages/sidebar/NightstandPage.vue')
    },
    {
      path: '/shelving',
      name: 'shelving',
      component: () => import('../pages/sidebar/ShelvingPage.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../pages/main/AboutPage.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../pages/main/AboutPage.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../pages/main/AboutPage.vue')
    // }
  ]
})

export default router

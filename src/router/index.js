import { async } from '@firebase/util'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/LandingPage.vue') },
    { path: '/sign-in', component: () => import('../views/SignIn.vue') },
    { path: '/sign-in', component: () => import('../views/Signin.vue') },
    {
      path: '/create-account',
      component: () => import('../views/CreateAccount.vue')
    },
    {
      path: '/customer-sign-in',
      component: () => import('../views/CustomerSignIn.vue')
    },
    {
      path: '/customer-sign-up',
      component: () => import('../views/CustomerSignUp.vue')
    },
    {
      path: '/merchant-sign-in',
      component: () => import('../views/MerchantSignIn.vue')
    },
    {
      path: '/merchant-sign-up',
      component: () => import('../views/MerchantSignUp.vue')
    },
    {
      path: '/partner-sign-in',
      component: () => import('../views/PartnerSignIn.vue')
    },
    {
      path: '/partner-sign-up',
      component: () => import('../views/PartnerSignUp.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})
export default router

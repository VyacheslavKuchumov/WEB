import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import instance from '@/middlewares'
import Restaraunts from '@/views/Restaraunts.vue'
import Reviews from '@/views/Reviews.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: {auth:true}
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/restaraunts',
    name: 'restaraunts',
    component: Restaraunts
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: Reviews
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async(to, from, next) => {
  try{
    const requireAuth = to.matched.some(record => record?.meta.auth)
    if (requireAuth){
      const uid = localStorage.getItem('uid')
      const response = await instance.get(`/api/users/${uid}`)
      if (response.status ==200){
        return next ()
      } else if (response.status == 403){
        return next ('/login')
      }

    }
    return next()

  } catch(error)  {
    return next ('/login')

  }
})

export default router

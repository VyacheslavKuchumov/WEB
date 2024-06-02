import { createStore } from 'vuex'
import auth from '@/store/auth'
import user from '@/store/user'
import restaurant from '@/store/restaurant';


export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth: auth,
    user: user,
    restaurant: restaurant,
    
  }
})

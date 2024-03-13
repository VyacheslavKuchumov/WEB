import instance from '@/middlewares'
import router from '@/router'

const checkStatuses = (status) => {
  switch (status) {
    case 400:
      window.alert('Проблема на сервере')
      return false
    case 403:
      window.alert('Пользователь не авторизован')
      return false
    case 404:
      window.alert('Пользователь не найден')
      return false
    case 405:
      window.alert('Email уже используется')
      return false
    case 414:
      window.alert('Пароль неверный')
      return false
    default:
      return true
  }
}
export default {
  name: 'auth',
  state: () => ({
    isAuth: false
  }),
  getters: {
  },
  mutations: {
    setAuth(state, isAuth) {
      state.isAuth = isAuth
    }
  },
  actions: {
    async register({ }, { email, password, name }) {
      const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify({
          email: email,
          password: password,
          name: name
        })
      })
      if (!checkStatuses(response.status)) return
      window.alert('')
      router.push('/login')
      return
    },
    async login({ commit }, { email, password }) {
      const response = await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify({
            email: email,
            password: password,
          })
        })
      if (!checkStatuses(response.status)) return
      const result = await response.json()
      commit('setAuth', true)
      localStorage.setItem('accessToken', result.accessToken)
      localStorage.setItem('refreshToken', result.refreshToken)
      localStorage.setItem('uid', result.uid)
      router.push('/')
      return
    },
    async changeAccess({}){
      const response = await instance.post('api/auth/changeAccess')
    }
  },
  namespaced: true
}
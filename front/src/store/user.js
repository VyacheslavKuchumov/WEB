import instance from "@/middlewares";

export default {
    name: 'user',
    state: () =>({
        user: null
    }),
    mutations: {
        setUser(state, user){
            state.user = user
        }
    },
    actions:{
        async getUserByUid({commit}){
            const uid = localStorage.getItem('uid')
            const user = await instance.get(`/api/users/${uid}`)
            if (user) return commit('setUser', user.data)
            console.log(user.message)
        }
    
    },
    namespaced: true
}
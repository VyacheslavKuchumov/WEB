import instance from "@/middlewares"

export default {
    name: 'user',
    state: () => ({
        user: null,
        allUsers: null,
    }),
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setAllUsers(state, users) {
            state.allUsers = users
        }

    },
    actions: {
        async getUserByUid({ commit }) {
            const uid = localStorage.getItem('uid')
            const user = await instance.get(`/api/users/${uid}`)
            if (user) return commit('setUser', user.data)
            console.log(user.message);
        },
        async updateLikes({}, {likes}){
            const response = await instance.put('/api/users/likes', {likes})
            if (response.ok) return console.log('ok');
            console.log(response.statusText);
        },
        async getAllUsers({commit}){
            try {
                const response = await instance.get(`/api/users`); 
                if (response.data) {
                    commit('setAllUsers', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        }
    },
    
    namespaced: true
}
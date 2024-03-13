import router from "@/router"

export default {
    name: 'auth',
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        async register({state, commit}, {email, password, name}){
            await fetch(`${process.env.VUE_APP_SERVER}/api/auth/signup`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    email,
                    password,
                    name
                })
            }).then(res =>{
                console.log(res.status)
                if(res?.status == 405){
                    window.alert('email is already in use')
                } else{
                    window.alert('nice')
                    router.push('/login')
                }
            })
        }
    },
    namespaced: true
    
}

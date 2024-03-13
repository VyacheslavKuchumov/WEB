import axios from "axios"
import store from "@/store"

const instance = axios.create({
    baseURL: process.env.VUE_APP_SERVER,
    headers:{
        'Content-Type': 'application/json; charset=utf-8'
    }
})

instance.interceptors.request.use(
    function (config){
        config.headers['x-access-token'] = localStorage.getItem('accessToken')
        return config
    },
    function (error){
        return Promise.reject(error)
    }
)

export default instance
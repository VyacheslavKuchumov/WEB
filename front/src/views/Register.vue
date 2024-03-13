<template>
    <div class="home">
        <form @submit.prevent="go_register()" class="reg-form">
            <span>Create an account:</span>
            <input type="email" class="form-input" placeholder="enter email" v-model="email">
            <input type="password" class="form-input" placeholder="enter password" v-model="password">
            <input type="text" class="form-input" placeholder="enter nickname" v-model="name">
            <button type="submit" class="form-btn">submit</button>
            <span>Already have an account? <a href="/login">click here!</a></span>
        </form>
        
    </div>
</template>
<script>
import { mapActions } from 'vuex';


export default {
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    methods:{
        ...mapActions({
            register: 'auth/register'
        }),
        go_register(){
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            this.register(formData)
        }
    }
    
}
</script>
<style>
    .reg-form{
        padding: 20px;
        display: flex;
        flex-direction: column;
        width: 30vw;
        row-gap: 10px;
        margin: auto;
        background-color: whitesmoke;
        border: 3px solid black;
    }
</style>
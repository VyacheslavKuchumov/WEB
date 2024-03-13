<template>
    <div class="home">
        <form @submit.prevent="" class="login-form">
            <input type="email" class="form-input" placeholder="enter email" v-model="email">
            <input type="password" class="form-input" placeholder="enter password" v-model="password">
            <input type="text" class="form-input" placeholder="enter nickname" v-model="name">
            <button type="submit" class="form-btn">submit</button>
            <span>Don't have an account? <a href="/login">click here!</a></span>
        </form>
        
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    
}
</script>
<style>
    .login-form{
        display: flex;
        flex-direction: column;
        width: 30vw;
        row-gap: 10px;
        margin: auto;
    }
    .form-btn{
        margin: auto;
        width: 40%;
    }
</style>
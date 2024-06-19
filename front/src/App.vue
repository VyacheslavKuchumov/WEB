<template>
  <nav>
    <router-link to="/">Главная</router-link>  
    <router-link to="/restaraunts">Рестораны</router-link>
    <router-link v-if="isAuth" to="/orders">Заказать</router-link>
    <router-link v-if="isAuth" to="/order_history">История заказов</router-link>
    <router-link to="/about">О нас</router-link> 
    <router-link v-if="!isAuth" to="/login">Войти</router-link>
    
    <a v-if="isAuth" @click="logout()">Выйти</a>
    <div v-if="isAuth" class="user">{{ user.name }}</div>
    
  </nav>
  <router-view/>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default{

  methods:{
    ...mapActions({
      logout:'auth/logout',
      getUserByUid: 'user/getUserByUid'
    })
  },
  beforeMount() {
    this.getUserByUid()
  },
  mounted() {
    const uid = localStorage.getItem('uid')
    uid ? this.$store.commit('auth/setAuth', true) : this.$store.commit('auth/setAuth', false)
  },
  computed:{
    ...mapState({
      isAuth: state => state.auth.isAuth
    }),
    user() {
      return this.$store.state.user.user
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.user{
  color: #ffffff;
  position: absolute;
  right: 20px;
  font-weight: bold;
}
nav {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin: auto;
  justify-content: center;

  padding-top: 30px;
  padding-bottom: 30px;
  background-color: 	#982121;
  width: 100%;
  
}

nav a {
  font-weight: bold;
  color: #c6b7b7;
  text-decoration: none;
  
}

nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: underline;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f8f8f8;
    margin: 0;
    padding: 0;
  }
</style>

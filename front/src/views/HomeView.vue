<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="window">
      <div class="window-label">
        Кол-во лайков: {{ likes }}
        {{text}}
      </div>
      <div class="btns">
        <button class="btn like" @click="addlike">
          <img src="@/assets/like.png" alt="" width="40px">
          <div>Поставить лайк</div>
        </button>
        <button class="btn dislike" @click="adddislike">
          <img src="@/assets/dislike.png" alt="" width="40px">
          <div>Поставить дизлайк</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      likes: 0,
      text: '',
      uid:''
    }
  },
  methods: {

    ...mapActions({
      updateLike: 'user/updateLikes',
      getUser: 'user/getUserByUid'
    }),
    addlike() {
      this.likes += 1
      if (this.uid){
        this.updateLike({likes:this.likes})
      }
    },
    adddislike() {
      this.likes -= 1
      if (this.uid){
        this.updateLike({likes:this.likes})
      }
    },
  },
  watch: {
    likes() {
      if (this.likes < 0) {
        this.likes = 0
      }
    }
  },
  async mounted(){
    this.uid = localStorage.getItem('uid')
    if (this.uid){
      await this.getUser()
      this.likes = this.$store.state.user.user?.likes || 0
      this.text = `вы авторизованы как ${this.uid} 씨발`
    } else{
      this.text = 'вы не авторизованы, счетчик обнулен'
    }
  },
  components: {

  }
}
</script>

<style>
.window {
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 350px;
  background-color: #42b983;
  border-radius: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
}

.label {
  font-size: 1.5rem;
}

.btns {
  display: flex;
  flex-direction: row;
  column-gap: 15px;
}

.btn {
  display: flex;
  flex-direction: row;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  column-gap: 15px;
  cursor: pointer;
}

.like {
  color: green;
}

.dislike {
  color: brown;
}
</style>
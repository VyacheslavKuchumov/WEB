<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/3d843572f09b8f0658d7c43621bc00d7.jpg"> -->
    <div class="header">
      <h1>Добро пожаловать в наш сервис доставки еды</h1>
      <p>Лучшие блюда из вашего любимого ресторана, доставленные прямо к вашему порогу</p>
    </div>
    <div class="grid">
      <img class="main-image" src="@/assets/sus.jpg" alt="Main Dish">
      <div class="grid-right">
        <img class="right" src="@/assets/chad.jpg" alt="Side Dish 1">
        <img class="right" src="@/assets/sheesh.jpg" alt="Side Dish 2">
      </div>
    </div>
    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomeView',
  data() {
    return {
      likes: 0,
      text: '',
      uid: '',
      name: ''
    }
  },
  methods: {
    ...mapActions({
      updateLike: 'user/updateLikes',
      getUser: 'user/getUserByUid'
    }),
    addlike() {
      this.likes += 1
      if (this.uid) {
        this.updateLike({ likes: this.likes })
      }
    },
    adddislike() {
      this.likes -= 1
      if (this.uid) {
        this.updateLike({ likes: this.likes })
      }
    },
    user() {
      return this.$store.state.user.user
    }
  },
  watch: {
    likes() {
      if (this.likes < 0) {
        this.likes = 0
      }
    }
  },
  async mounted() {
    this.uid = localStorage.getItem('uid')
    this.name = localStorage.getItem('name')
    if (this.uid) {
      await this.getUser()
      this.likes = this.$store.state.user.user?.likes || 0
      this.text = `вы авторизованы как ${this.user().name}`
    } else {
      this.text = 'вы не авторизованы, счетчик обнулен'
    }
  },
  components: {}
}
</script>

<style>

.home{
  padding-bottom: 200px;
}
.header {
  margin-top: 30px;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 2.5em;
  color: #333;
}

.header p {
  font-size: 1.2em;
  color: #666;
}

.grid {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  height: 80%;
  
}

.main-image {
  height: 100%;
  margin-right: 10px;
}

.grid-right {
  display: flex;
  flex-direction: column;

}



img.right {
  height: 50%;
  margin-bottom: 10px;
  

}


</style>

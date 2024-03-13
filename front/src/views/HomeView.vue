<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="window">
      <div class="window-label">
        Количество лайков: {{ likes }}
      </div>
      <div class="btns">
        <button class="btn like" @click="addLike()">
          <img src="@/assets/like.png" alt="" width="40px">
          <div>
            Поставить лайк
          </div>
        </button>

        <button class="btn dislike" @click="addDislike()">
          <img src="@/assets/dislike.png" alt="" width="40px">
          <div>
            Поставить дизлайк
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.window {
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100px;
  background-color: rgb(190, 242, 197);
  border-radius: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  row-gap: 15px;
}

.window-label {
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
  padding: 0px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  column-gap: 15px;
}

.like {
  color: rgb(127, 208, 127);
}

.dislike {
  color: rgb(136, 101, 224);
}
</style>
<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data() {
    return {
      likes: 0
    }
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.likes -= 1
    },
  },
  watch: {
    likes() {
      if (this.likes < 0) {
        this.likes = 0
      }
    }
  },
  components: {

  }
}
</script>

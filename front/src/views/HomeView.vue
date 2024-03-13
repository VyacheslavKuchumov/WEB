<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="window">
      <div class="window-label">Счетчик лайков: {{ likes }}</div>
      <div class="btns">
        <button @click="addLike" class="btn-like">
          <img src="@/assets/like.png" width="50px">
          <div>лайк</div>
        </button>
        <button @click="removeLike" class="btn-dislike">
          <img src="@/assets/dislike.png" width="50px">
          <div>диз</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  data(){
    return {
      likes: 0,
    }
  },
  methods:{
    addLike(){
      this.likes+=1;
    },
    removeLike(){
      this.likes-=1;
    }
  },
  watch:{
    likes(){
      if (this.likes < 0){
        this.likes = 0;
      }
    }
  },
  components: {
    HelloWorld
  }
}


</script>


<style>
  
  .window{
   display: flex;
   flex-direction: column;
   background-color: whitesmoke;
   width: 40vw;
   margin: auto;
   border: 3px solid black;
  }

  .window-label{
    font-size: 2em;
    padding: 20px;
  }

  .btns{
    display: flex;
    flex-direction: row;
    margin: auto;
    column-gap: 20px;
    margin-bottom: 30px;
  }

  

</style>
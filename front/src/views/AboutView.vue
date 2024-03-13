<template>
  <div class="about">
    <PostCreate @create="createPost"/>
    <PostList :posts="posts"/>
  </div>
</template>

<script>
  import PostCreate from '@/components/PostCreate.vue'; 
  import PostList from '@/components/PostList.vue'; 


  export default{
    name: "about-view",

    data() {
      return {
        posts:[]
      }
    },

    components:{
      PostCreate,
      PostList
    },
    methods: {
      createPost(post){
        console.log(post)
        this.posts.unshift(post)
      }
    },
  }
</script>
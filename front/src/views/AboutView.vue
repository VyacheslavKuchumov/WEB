<template>
  <div class="about">
    <PostCreate @create="createPost()" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostCreate from '@/components/PostCreate.vue';
import PostList from '@/components/PostList.vue';

export default
  {
    name: 'about-view',
    data() {
      return {
        posts: []
      }
    },
    methods: {
      createPost(post) {
        this.posts.unshift(post)
      }
    },

    components: {
      PostCreate,
      PostList
    }
  }
</script>
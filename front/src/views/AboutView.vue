<template>
  <div class="about">
    {{ user }}
    <!-- <PostCreate @create="createPost()" /> -->
    <!-- <PostList :posts="posts" /> -->
  </div>
</template>

<script>
import PostCreate from '@/components/PostCreate.vue';
import PostList from '@/components/PostList.vue';

import { mapActions, mapState } from 'vuex';

export default
  {
    name: 'about-view',
    data() {
      return {
        posts: []
      }
    },
    computed:{
      user() {
        return this.$store.state.user.user
      }
    },
    methods: {
      ...mapActions({
        getUserByUid: 'user/getUserByUid'
      }),
      createPost(post) {
        this.posts.unshift(post)
      }
    },
    beforeMount(){
      this.getUserByUid
    },

    components: {
      PostCreate,
      PostList
    }
  }
</script>
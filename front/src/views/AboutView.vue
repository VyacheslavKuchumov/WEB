<template>
  <div class="about">
    <h1>О нас</h1>
    <p>Vyachik Delivery - это ведущий сервис доставки еды, основанный с целью предоставить нашим клиентам лучшие блюда из их любимых ресторанов. Мы стремимся к высокому качеству обслуживания и всегда готовы удовлетворить ваши гастрономические потребности.</p>
      <p>Наша команда состоит из опытных профессионалов, которые работают с любовью и энтузиазмом, чтобы каждый заказ был выполнен быстро и качественно. Мы гордимся тем, что предоставляем вам возможность наслаждаться разнообразием вкусов прямо у вас дома.</p>
      <p>С Vyachik Delivery вы можете быть уверены в свежести и качестве каждого блюда. Мы сотрудничаем только с проверенными ресторанами и всегда контролируем процесс доставки, чтобы вы получили лучший сервис.</p>
      <p>Спасибо, что выбрали нас! Мы рады быть частью вашего повседневного комфорта.</p>
    
    
  </div>
</template>

<script>
import PostCreate from '@/components/PostCreate.vue';
import PostList from '@/components/PostList.vue';
import { mapActions } from 'vuex';

export default {
  name: 'AboutView',
  data() {
    return {
      posts: []
    }
  },
  computed: {
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
  components: {
    PostCreate,
    PostList
  },
  async beforeMount() {
    await this.getUserByUid()
  }
}
</script>

<style>
.about {
  margin: auto;
  width: 60%;
  text-align: justify;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5em;
  color: #333;
}

p {
  font-size: 1.2em;
  color: #666;
}

.user-info {
  margin: 20px 0;
}

.posts-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-create-form {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
}

textarea {
  resize: none;
  font-style: normal;
}

.post-create-input {
  margin: 5px;
  border-radius: 10px;
  padding: 10px;
}

.post-create-button {
  width: 25%;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  background-color: #bcf8dd;
  font-style: monospace;
}

.post-create-button:hover {
  background-color: #42b983;
  cursor: pointer;
}

.post-list {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
  margin-top: 20px;
  row-gap: 15px;
}

.post-item {
  display: flex;
  flex-direction: column;
  background-color: #42b983;
  border-radius: 10px;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
}

.post-item-title {
  font-size: 1.4rem;
}

.post-item-body {
  font-size: 0.9rem;
  width: 100%;
  word-wrap: break-word;
  text-align: left;
}
</style>

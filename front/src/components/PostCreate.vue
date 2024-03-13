<template>
  <div>
    <form @submit.prevent="createPost" class="post-create-form">
      <input type="text " class="post-create-input" placeholder="Введите название" required v-model="title">
      <input type="text " class="post-create-input" placeholder="Введите содержимое" required v-model="body">
      <button class="post-create-button" type="submit">Создать пост</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'post-create',
  data() {
    return {
      title: '',
      body: ''
    }
  },
  methods: {
    createPost() {
      const post = {
        title: this.title,
        body: this.body
      }
      this.$emit('create', post)
    }
  },
}

</script>
<style>
.post-create-form {
  display: flex;
  flex-direction: column;
  width: 50vw;
  margin: auto;
  border: 6px solid rgb(56, 183, 56);
  border-style: double;

}

.post-create-button {
  color: rgb(56, 56, 56);
  font-size: 20px;
  font-weight: bolder;
  text-shadow: 1px 1px 4px rgb(0, 0, 0);
  background-color: rgb(172, 220, 179);
  border: 1px solid black;
  font-style: italic;
  padding: 5px;
}

.post-create-button:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(93, 192, 108);
}
</style>


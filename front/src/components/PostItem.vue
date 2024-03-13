<template>
  <div class="post-item">
    <div class="post-item-title">
      {{ title }}
    </div>
    <div class="post-item-body">
      {{ body }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'post-item',
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },

  }
}
</script>
<style>
.post-item {
  display: flex;
  flex-direction: column;
  background-color: rgb(190, 242, 197);
  border: 2px solid black;
  border-radius: 5px;
  position: relative;
  /*Задать позицию */
}

.post-item-title {
  font-size: 20px;
  font-weight: bolder;
  border-bottom: 2px solid black;
  text-align: center;
  background-color: rgb(49, 194, 68);
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  color: white;
  word-wrap: break-word;
  /* Перенос */
  text-align: center;
  /* позиционирование текста*/
}

.post-item-body {
  font-size: 0.9rem;
  width: 100%;
  word-wrap: break-word;
  /* Перенос */
  text-align: center;
  /* позиционирование текста*/
}
</style>
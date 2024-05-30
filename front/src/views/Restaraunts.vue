<template>
    <div>
      <h1>Наши рестораны</h1>
      <div class="main">
        
        

        <div class="restaraunt-block" v-for="restaurant in this.$store.state.restaurant.restaurants">
          <div class="restraraunt-name">
            {{ restaurant.name }}
          </div>
          <div class="restaraunt-description">
            {{ restaurant.description }}
          </div>
        </div>

      </div>
      
    </div>
  </template>
  
  <script>
  import { mapState, useStore } from 'vuex';
  import { onMounted } from 'vue';
  
  export default {
    name: 'RestaurantView',
    setup() {
      const store = useStore();
  
      onMounted(async () => {
        await store.dispatch('restaurant/getRestaurants');
      });
  
      return {
        ...mapState('restaurant', ['restaurants'])
      };
    }
  }
  </script>
  
<style>
.restaraunt-block {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  

}

.restraraunt-name {
  font-size: 1.6rem;
  padding: 5px;
}

.restaraunt-description {
  font-size: 0.9rem;
  width: 100%;
  word-wrap: break-word;
  text-align: center
}



</style>
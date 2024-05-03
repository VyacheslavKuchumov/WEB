<template>
    <div>
      <h1>Restaurants</h1>
      <div>
        {{ this.$store.state.restaurant }}
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
  
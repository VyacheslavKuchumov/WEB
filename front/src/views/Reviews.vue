<template>
    <div>
        <h1>Наши рестораны</h1>
        <div class="main" v-if="reviews">
            {{ reviews }}
        </div>
        <div v-else>Loading reviews...</div>

      
      
    </div>
  </template>
  
  <script>
  import { useStore } from 'vuex';
  import { onMounted, computed } from 'vue';
  
  export default {
    // ...
  
    setup() {
      const store = useStore();
  
      onMounted(async () => {
        
  
        try {
          await Promise.all([
            store.dispatch('review/getReviews'),
          ]);
  
          
  
        } catch (error) {
          console.error('An error occurred:', error);
        }
      });
  
      const reviews = computed(() => store.state.review.reviews);
  
      return {
        reviews,
      };
    },
  
    // ...
  };
  </script>
  
<style>
.restaurant-block {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  

}

.restaurant-name {
  font-size: 1.6rem;
  padding: 5px;
  font-weight: bold;
}

.restaurant-description {
  font-size: 1rem;
  width: 50%;
  word-wrap: break-word;
  text-align: center;
  justify-content: center;
  margin: auto;
}

.restaurant-review{
  font-weight: bold;
}



</style>
<template>
    <div>
      <h1>Наши рестораны</h1>
      <div class="main">
        
        
        

        <div class="restaurant-block" v-for="restaurant in restaurants">
          <div class="restaurant-name">
            {{ restaurant.name }}
          </div>
          <div class="restaurant-description">
            {{ restaurant.description }}
          </div>

          <div class="restaurant-review">
            Отзывы: 
          </div>

        </div>

        

      </div>

      
      
    </div>
  </template>
  
  <script>
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';


export default {
  name: 'RestaurantView',

  data() {
    return {
      
    }
  },

  setup() {
    const store = useStore();

    onMounted(async () => {
      
      try {
        await Promise.all([
          store.dispatch('restaurant/getRestaurants'),
          
        ]);
        
        
      } catch (error) {
          console.error('An error occurred:', error);
        }
    });

    const restaurants = computed(() => store.state.restaurant.restaurants);
    

    return {
      restaurants,
      
    };
  },
  methods:{
    
  }

}
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
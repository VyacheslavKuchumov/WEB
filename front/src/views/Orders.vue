<template>
  <div>
    <h1>Заказать</h1>
    
    <form @submit.prevent="go_order()">
      <div v-for="(orderItem, index) in orderItems" :key="index">
        <label for="restaurants">Выберите ресторан:</label>
        <select v-model="orderItem.restaurant" @change="updateMenus(index)">
          <option v-for="restaurant in restaurants" :key="restaurant.id" :value="restaurant">{{ restaurant.name }}</option>
        </select>
        
        <label for="dish">Выберите блюдо:</label>
        <select v-model="orderItem.dish">
          <option v-for="dish in filteredMenus(orderItem.restaurant)" :key="dish.id" :value="dish">{{ dish.name }} - {{ dish.price }} руб.</option>
        </select>
        
        <div v-if="orderItem.dish">
          Цена: {{ orderItem.dish.price }} руб.
        </div>

        <button type="button" @click="removeOrderItem(index)" class="form-btn">Удалить позицию</button>
      </div>
      
      <button type="button" @click="addOrderItem" class="form-btn">Добавить позицию заказа</button>
      
      <div>
        <strong>Общая стоимость заказа: {{ totalCost }} руб.</strong>
      </div>
      
      <button type="submit" class="form-btn">Оформить заказ</button>
    </form>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { onMounted, computed, reactive } from 'vue';

export default {
  setup() {
    const store = useStore();
    const restaurants = computed(() => store.state.restaurant.restaurants);
    const menus = computed(() => store.state.restaurant.menus);
    // const user_id = computed(() => store.state.user.user.id);

    const orderItems = reactive([]);

    onMounted(async () => {
      try {
        await Promise.all([
          store.dispatch('restaurant/getRestaurants'),
          store.dispatch('restaurant/getMenus'),
          store.dispatch('user/getUserByUid')
        ]);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });

    const addOrderItem = () => {
      orderItems.push({
        restaurant: null,
        dish: null
      });
    };

    const removeOrderItem = (index) => {
      orderItems.splice(index, 1);
    };

    const updateMenus = (index) => {
      orderItems[index].dish = null; // Reset dish selection when restaurant changes
    };

    const filteredMenus = (selectedRestaurant) => {
      if (!selectedRestaurant) return [];
      return menus.value.filter(menu => menu.restaurant_id === selectedRestaurant.id);
    };

    const totalCost = computed(() => {
      return orderItems.reduce((total, item) => {
        return total + (item.dish ? item.dish.price : 0);
      }, 0);
    });

    const go_order = () => {
      
      const data = {
        user_id: store.state.user.user.id,
        dishes: orderItems.map(item => ({
          restaurant_id: item.restaurant.id,
          dish_id: item.dish.id
        }))
      };
      store.dispatch('restaurant/order', data);
      
      // window.location.reload();
    };

    return {
      restaurants,
      menus,
      orderItems,
      addOrderItem,
      removeOrderItem,
      updateMenus,
      filteredMenus,
      totalCost,
      go_order,
      
    };
  },
  
};
</script>


<style>
  form{
    width: 80%;
    margin: auto;
  }
</style>
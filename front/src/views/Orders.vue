<template>
  <div>
    <h1>Заказать</h1>
    
    <form @submit.prevent="go_order">
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

        <button id="delete-btn" type="button" @click="removeOrderItem(index)" class="form-btn">Удалить позицию</button>
      </div>
      
      <button type="button" @click="addOrderItem" class="form-btn">Добавить позицию заказа</button>
      
      <div>
        <strong>Общая стоимость заказа: {{ totalCost }} руб.</strong>
      </div>
      
      <button id="post-order-btn" type="submit" class="form-btn">Оформить заказ</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderItems: []
    };
  },
  computed: {
    restaurants() {
      return this.$store.state.restaurant.restaurants;
    },
    menus() {
      return this.$store.state.restaurant.menus;
    },
    totalCost() {
      return this.orderItems.reduce((total, item) => {
        return total + (item.dish ? item.dish.price : 0);
      }, 0);
    }
  },
  methods: {
    async fetchData() {
      try {
        await Promise.all([
          this.$store.dispatch('restaurant/getRestaurants'),
          this.$store.dispatch('restaurant/getMenus'),
          this.$store.dispatch('user/getUserByUid')
        ]);
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    addOrderItem() {
      this.orderItems.push({
        restaurant: null,
        dish: null
      });
    },
    removeOrderItem(index) {
      this.orderItems.splice(index, 1);
    },
    updateMenus(index) {
      this.orderItems[index].dish = null;
    },
    filteredMenus(selectedRestaurant) {
      if (!selectedRestaurant) return [];
      return this.menus.filter(menu => menu.restaurant_id === selectedRestaurant.id);
    },
    go_order() {
      const data = {
        user_id: this.$store.state.user.user.id,
        dishes: this.orderItems.map(item => ({
          restaurant_id: item.restaurant.id,
          dish_id: item.dish.id
        }))
      };
      this.$store.dispatch('restaurant/order', data);
      // window.location.reload();
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
#post-order-btn{
  background-color: #28a745;
}
#delete-btn{
  background-color: rgb(222, 50, 50);
}
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  width: 60%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.order-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.order-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

label {
  display: block;
  margin: 10px 0 5px;
  color: #555;
}

select {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.form-btn:hover {
  background-color: #0056b3;
}

.add-btn {
  background-color: #28a745;
}

.add-btn:hover {
  background-color: #218838;
}

.submit-btn {
  background-color: #ffc107;
}

.submit-btn:hover {
  background-color: #e0a800;
}

.total-cost {
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
  color: #000;
}
</style>

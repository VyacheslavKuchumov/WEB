<template>
  <div>
    <h1>История заказов</h1>
    <div class="main">
      <div v-for="order in combinedOrders" :key="order.id" class="order">
        <h2>Заказ на дату {{ order.order_date }}:</h2>
        <ul>
          <li v-for="dish in order.dishes" :key="dish.id" class="dish-item">{{ dish.name }} - {{ dish.price }} руб.</li>
        </ul>
        <p class="total-cost">Общая стоимость: {{ order.totalCost }} руб.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'OrderHistoryView',
  data() {
    return {
      combinedOrders: [],
    };
  },
  computed: {
    ...mapState({
      orders: state => state.restaurant.orders,
      menus: state => state.restaurant.menus,
      orderItems: state => state.restaurant.orderItems,
    }),
  },
  methods: {
    async fetchData() {
      try {
        const userId = this.$store.state.user?.user?.id; // Ensure that user and user.id exist
        if (userId) {
          await Promise.all([
            this.$store.dispatch('user/getUserByUid'),
            this.$store.dispatch('restaurant/getOrderHistory', userId),
            this.$store.dispatch('restaurant/getMenus'),
            this.$store.dispatch('restaurant/getOrderItems'),
          ]);
          this.combineOrders();
        } else {
          console.error('User ID is not available.');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    combineOrders() {
      this.combinedOrders = this.orders.map(order => {
        const orderDishes = this.orderItems
          .filter(item => item.order_id === order.id)
          .map(item => this.menus.find(dish => dish.id === item.dish_id));
        
        const totalCost = orderDishes.reduce((sum, dish) => sum + dish.price, 0);

        return {
          ...order,
          dishes: orderDishes,
          totalCost: totalCost
        };
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f8f8f8;
  margin: 0;
  padding: 0;
}

.main {
  width: 60%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.order {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.order:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

h1 {
  text-align: center;
  color: #333;
}

h2 {
  color: #666;
  font-size: 1.2em;
}

ul {
  list-style-type: none;
  padding: 0;
}

.dish-item {
  padding: 5px 0;
}

.total-cost {
  font-weight: bold;
  color: #000;
  margin-top: 10px;
}
</style>

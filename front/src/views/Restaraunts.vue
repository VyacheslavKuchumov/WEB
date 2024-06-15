<template>
  <div>
    <h1>Наши рестораны</h1>
    <div class="main">
      <div class="restaurant-block" v-for="restaurant in restaurants" :key="restaurant.id">
        <div class="restaurant-name">
          {{ restaurant.name }}
        </div>
        <div class="restaurant-description">
          {{ restaurant.description }}
        </div>
        <button @click="toggleMenu(restaurant.id)">
          {{ showMenu[restaurant.id] ? 'Скрыть меню' : 'Показать меню' }}
        </button>
        <div v-if="showMenu[restaurant.id]" class="restaurant-menu">
          Меню:
          <div class="menu-item" v-for="menuItem in filteredMenu(restaurant.id)" :key="menuItem.id">
            <div class="menu-item-name">
              {{ menuItem.name }}
            </div>
            <div class="menu-item-price">
              {{ menuItem.price }} р
            </div>
          </div>
        </div>
        <button @click="toggleReviews(restaurant.id)">
          {{ showReviews[restaurant.id] ? 'Скрыть отзывы' : 'Показать отзывы' }}
        </button>
        <div v-if="showReviews[restaurant.id]" class="restaurant-review">
          Отзывы:
          <div class="review-block" v-for="review in filteredReviews(restaurant.id)" :key="review.id">
            <div class="review-username">
              Пользователь: {{ getUserById(review.user_id).name }}, оценка: {{ review.review_score }}/5
            </div>
            <div class="review-text">
              {{ review.review_text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'RestaurantView',
  data() {
    return {
      showReviews: {},
      showMenu: {}
    };
  },
  computed: {
    ...mapState({
      restaurants: state => state.restaurant.restaurants,
      reviews: state => state.restaurant.reviews,
      users: state => state.user.allUsers,
      menus: state => state.restaurant.menus
    })
  },
  methods: {
    ...mapActions('restaurant', ['getRestaurants', 'getReviews', 'getMenus']),
    ...mapActions('user', ['getAllUsers']),
    toggleReviews(restaurantId) {
      this.showReviews = { ...this.showReviews, [restaurantId]: !this.showReviews[restaurantId] };
    },
    toggleMenu(restaurantId) {
      this.showMenu = { ...this.showMenu, [restaurantId]: !this.showMenu[restaurantId] };
    },
    filteredReviews(restaurantId) {
      return this.reviews.filter((review) => review.restaurant_id === restaurantId);
    },
    filteredMenu(restaurantId) {
      return this.menus.filter((menuItem) => menuItem.restaurant_id === restaurantId);
    },
    getUserById(userId) {
      return this.users.find((user) => user.id === userId) || {};
    }
  },
  mounted() {
    Promise.all([
      this.getRestaurants(),
      this.getReviews(),
      this.getAllUsers(),
      this.getMenus()
    ]).catch((error) => {
      console.error('An error occurred:', error);
    });
  }
};
</script>

<style>
.main {
  width: 60%;
  margin: auto;
}

.restaurant-block {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.restaurant-name {
  font-size: 1.8rem;
  padding: 10px 0;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #ccc;
}

.restaurant-description {
  font-size: 1.2rem;
  width: 100%;
  word-wrap: break-word;
  text-align: justify;
  margin: 20px 0;
  color: #666;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.restaurant-review,
.restaurant-menu {
  font-weight: bold;
  font-size: 1.2rem;
  color: #333;
  margin-top: 20px;
}

.menu-item,
.review-block {
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-item-name,
.review-username {
  font-size: 1.4rem;
  font-weight: bold;
  color: #333;
}

.menu-item-price,
.review-text {
  font-size: 1.2rem;
  color: #666;
}

.menu-item-description {
  font-size: 1.1rem;
  color: #777;
}
</style>

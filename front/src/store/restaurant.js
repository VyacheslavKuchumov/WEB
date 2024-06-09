import instance from "@/middlewares";
import router from '@/router'

export default {
    name: 'restaurant', // Correct the spelling
    state: () => ({
        restaurants: null,
        reviews: null,
        menus: null,
    }),
    mutations: {
        setRestaurants(state, restaurants) { 
            state.restaurants = restaurants;
        },
        setReviews(state, reviews) { 
            state.reviews = reviews;
        },
        setMenus(state, menus) { 
            state.menus = menus;
        }
    },
    actions: {
        async order({}, {user_id, dishes}){
            try {
                // Create the order
                const orderResponse = await fetch(`${process.env.VUE_APP_SERVER}/api/orders/create_order/${user_id}`, {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=utf-8'
                    }
                });
        
                // Check if the response is ok (status 200-299)
                if (!orderResponse.ok) {
                    throw new Error('Order creation failed');
                }
        
                // Parse the JSON response
                const orderData = await orderResponse.json();
                console.log(orderData)

                // Iterate over each dish to create order items
                for (const dish of dishes) {
                    console.log(dish)
                    const itemResponse = await fetch(`${process.env.VUE_APP_SERVER}/api/orders/create_order_item`, {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json; charset=utf-8'
                        },
                        body: JSON.stringify({
                            order_id: orderData.order_id,
                            dish_id: dish.dish_id,
                        })
                    });
        
                    // Check if the response is ok
                    if (!itemResponse.ok) {
                        throw new Error(`Failed to create order item for dish ${dish.id}`);
                    }
        
                    // Log the response for debugging purposes
                    const itemData = await itemResponse.json();
                    console.log(itemData);
                }
        
                // Alert the user that the order was successful
                window.alert('Заказ оформлен успешно!');
                router.push('/order_history')
            } catch (error) {
                // Handle errors by alerting the user
                console.error('Error:', error);
                window.alert('Произошла ошибка при оформлении заказа. Пожалуйста, попробуйте еще раз.');
            }
        },
        async getRestaurants({ commit }) { 
            try {
                const response = await instance.get(`/api/restaurants/get_restaurants`); 
                if (response.data) {
                    commit('setRestaurants', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch restaurants:', error);
            }
        },
        async getReviews({ commit }) { 
            try {
                const response = await instance.get(`/api/reviews/get_reviews`);
                if (response.data) {
                    commit('setReviews', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            }
        },
        async getMenus({ commit }) { 
            try {
                const response = await instance.get(`/api/restaurants/get_menu`);
                if (response.data) {
                    commit('setMenus', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch menu:', error);
            }
        },
    },
    namespaced: true
};

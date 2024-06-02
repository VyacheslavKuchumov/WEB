import instance from "@/middlewares";

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

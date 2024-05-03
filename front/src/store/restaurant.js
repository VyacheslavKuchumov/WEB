import instance from "@/middlewares";

export default {
    name: 'restaurant', // Correct the spelling
    state: () => ({
        restaurants: null // Correct the spelling
    }),
    mutations: {
        setRestaurants(state, restaurants) { // Correct the spelling and use camelCase for consistency
            state.restaurants = restaurants;
        }
    },
    actions: {
        async getRestaurants({ commit }) { // Correct the spelling and add 'commit' to the destructured context
            try {
                const response = await instance.get(`/api/restaurants/get_restaurants`); // Correct the API endpoint if necessary
                if (response.data) {
                    commit('setRestaurants', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch restaurants:', error);
            }
        },
    },
    namespaced: true
};

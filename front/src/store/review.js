import instance from "@/middlewares";

export default {
    name: 'review', // Correct the spelling
    state: () => ({
        reviews: null // Correct the spelling
    }),
    mutations: {
        setReviews(state, reviews) { // Correct the spelling and use camelCase for consistency
            state.reviews = reviews;
        }
    },
    actions: {
        async getReviews({ commit }) { // Correct the spelling and add 'commit' to the destructured context
            try {
                const response = await instance.get(`/api/reviews/get_reviews`); // Correct the API endpoint if necessary
                if (response.data) {
                    commit('setReviews', response.data);
                }
            } catch (error) {
                console.error('Failed to fetch reviews:', error);
            }
        },
    },
    namespaced: true
};

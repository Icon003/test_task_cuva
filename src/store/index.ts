import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		hotels: [],
		currentHotel: {}
	},
	mutations: {
		// Mutation для сохранения отелей
		saveHotels(state, value) {
			state.hotels = value
		},
		// Mutation для сохранения информации о текущем отеле
		saveCurrentHotel(state, value) {
			state.currentHotel = value
		}
	},
	actions: {
		// Action для получения отелей
		async getHotels({commit}) {
			const currentLimit = 15
			try {
				const response = await axios.get("http://jsonplaceholder.typicode.com/posts", {
					params: {
						_limit: currentLimit
					}
				})
				commit("saveHotels", response?.data)
			} catch (error) {
				console.error(error)
			}
		},
		// Action для получения информации об отеле по id
		async getCurrentHotel({commit}, id) {
			try {
				const response = await axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
				commit("saveCurrentHotel", response?.data)
			} catch (error) {
				console.error(error)
			}
		}
	},
	getters: {
		// Getter для получения списка отелей
		GET_HOTELS: state => state.hotels,
		// Getter для полчения информации о текущем отеле
		GET_CURRENT_HOTEL: state => state.currentHotel,
	},
	modules: {}
});

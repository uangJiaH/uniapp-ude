import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		token: "",
		user: null
	},
	getters: {

	},
	mutations: {
		setUser(state, user) {
			state.user = user
		}
	},
	actions: {
		setUser({commit},payload){
			commit('setUser',payload)
		}
	},
	modules: {

	}
})

export default store

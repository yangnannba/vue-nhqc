import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from '../api/db.json'

export default new Vuex.Store({
	state:{
		data:data
	}
})
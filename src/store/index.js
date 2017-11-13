import Vuex from 'vuex'
import Vue from 'vue'
import company from './flyouts/company'
import flyouts from './flyouts/flyout'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        company, 
        flyouts
    }
})

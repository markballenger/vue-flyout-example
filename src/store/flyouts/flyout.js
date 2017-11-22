import _ from 'lodash'

/**
 * State
 */
const state = {
    flyouts: []
}

/**
 * Actions
 */
const actions = {
    addFlyout ({commit}, component) {
        commit('add_flyout', component)
    },
    back ({commit}, component) {
        commit('set_back')
    }
}

/**
 * Mutations
 */
const mutations = {
    add_flyout (state, data) {
        state.flyouts.push(data)
    },
    set_back (state, data) { 
        state.flyouts = _.drop(state.flyouts, 1)
    }
}

/**
 * Getters
 */
const getters = {
    flyouts: x => x.flyouts
}

export default {
    state, 
    actions,
    mutations,
    getters
}

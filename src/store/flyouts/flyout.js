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
    }
}

/**
 * Mutations
 */
const mutations = {
    add_flyout (state, data) {
        state.flyouts.push(data)
    },
    toggle (state, name) {
        state[name] = !state[name]
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

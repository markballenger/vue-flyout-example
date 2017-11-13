/**
 * State
 */
const state = {
    flyouts: [],
    company: false,
    pipeline: false
}

/**
 * Actions
 */
const actions = {
    addFlyout ({commit}, component) {
        commit('add_flyout', component)
    },
    toggle ({commit}, name) {
        commit('toggle', name)
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

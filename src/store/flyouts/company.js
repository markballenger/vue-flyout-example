/**
 * State
 */
const state = {
    visible: false,
    dbaEdit: false,
    legalEdit: false
}

/**
 * Actions
 */
const actions = {
    setVisible ({commit}, val) {
        commit('set_visible', !state.visible)
    },
    setDbaEdit ({commit}) {
        commit('set_dba_edit')
    },
    setLegalEdit ({commit}) {
        commit('set_legal_edit')
    }
}

/**
 * Mutations
 */
const mutations = {
    set_visible (state, data) {
        state.visible = data
    },
    set_dba_edit (state, data) {
        state.dbaEdit = data
    },
    set_legal_edit (state, data) {
        state.legalEdit = data
    }
}

/**
 * Getters
 */
const getters = {
    visible: x => x.visible,
    dbaEdit: x => x.dbaEdit,
    legalEdit: x => x.legalEdit
}

export default {
	state,
	actions,
	mutations,
	getters
} 

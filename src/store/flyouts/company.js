/**
 * State
 */
const state = {
    dbaEdit: false,
    legalEdit: false
}

/**
 * Actions
 */
const actions = {
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
    dbaEdit: x => x.dbaEdit,
    legalEdit: x => x.legalEdit
}

export default {
	state,
	actions,
	mutations,
	getters
} 

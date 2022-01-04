import CasesService from "../services/CasesService";

export const state = () => {
  return {
    cases: []
  }
}

export const mutations = {
  SET_CASES(state, data) {
    state.cases = data
  },
}

export const actions = {
  async getCases({commit}, data) {
    const resp = await CasesService.getCases(data)
    commit('SET_CASES', resp.data)
  },
  async getCasesHero() {
    return await CasesService.getCasesHero()
  }
}

// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients: [],
  },
  mutations: {
    setClients(state, newClients) {
      state.clients = newClients;
    },
  },
  actions: {
    updateClients({ commit }, newClients) {
      commit('setClients', newClients);
    },
  },
});

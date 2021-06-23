import api from '../../api';

export default {
  async getInitialData({ commit }) {
    try {
      const { data } = await api.getData();
      commit('setInitialData', data);
    } catch (error) {
      throw new Error(error);
    }
  },
};

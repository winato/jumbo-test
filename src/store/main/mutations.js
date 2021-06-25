import searchData from '@/utils/searchData';

export default {
  setInitialData(state, payload) {
    state.isLoading = false;
    state.initialData = payload;
    state.searchData = payload;
  },
  setListType(state, payload) {
    state.listType = payload;
  },
  setSearch(state, payload) {
    state.search = payload;
    const { listType } = state;

    if (listType === 'stores') {
      state.searchData = searchData({
        data: state.initialData,
        text: payload,
        param: 'addressName',
      });
    }

    if (listType === 'cities') {
      state.searchData = searchData({
        data: state.initialData,
        text: payload,
        param: 'city',
      });
    }
  },
};

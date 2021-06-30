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
    const { listType } = state;
    const param = listType === 'stores' ? 'addressName' : 'city';

    state.search = payload;
    state.searchData = searchData({
      data: state.initialData,
      text: payload,
      param,
    });
  },
};

export default {
  getStoresByName: (state) => {
    const stores = state.searchData.map(({ addressName }) => addressName.replace('Jumbo ', ''));
    return [...new Set(stores)];
  },
  getStoresByCity: (state) => {
    const cities = state.searchData.map(({ city }) => city);
    return [...new Set(cities)];
  },
};

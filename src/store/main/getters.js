export default {
  getShopsByName: (state) => {
    const shops = state.initialData.map(({ addressName }) => addressName.replace('Jumbo ', ''));
    return [...new Set(shops)];
  },
  getShopsByCity: (state) => {
    const cities = state.initialData.map(({ city }) => city);
    return [...new Set(cities)];
  },
};

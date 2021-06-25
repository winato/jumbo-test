const searchData = ({ data, text, param }) => data.filter((item) => item[param]
  .toLowerCase()
  .indexOf(text) >= 0);

export default searchData;

const searchData = ({ data, text, param }) => data.filter((item) => item[param]
  .toLowerCase()
  .includes(text.toLowerCase()));

export default searchData;

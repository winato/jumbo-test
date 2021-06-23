import axios from 'axios';
import { BASE_API_URL } from '../config/constants';

const doRequest = ({
  method,
  data,
  params,
  url,
}) => axios({
  method,
  data,
  params,
  url: `${BASE_API_URL}${url}`,
});

export default doRequest;

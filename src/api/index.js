import doRequest from './doRequest';
import { API_KEY } from '../config/constants';

const getData = () => doRequest({
  methods: 'GET',
  url: `/json/979c81ae-9e77-430c-b6db-f67b42beb044?apiKey=${API_KEY}`,
});

export default { getData };

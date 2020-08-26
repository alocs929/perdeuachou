import axios from 'axios';

const api = axios.create({
  baseURL: "http://perdeuachouloadbalancer-1274309618.us-east-1.elb.amazonaws.com"
});

export default api;
import axios from 'axios';

export default axios.create({
  baseURL: `${process.env.REACT_APP_NODE_SERVER}`,
  timeout: 1000 * 10, // Wait for 10 seconds
});
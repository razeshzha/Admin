import axios from "axios";
import Cookies from 'js-cookie';

const getToken = () => {
  return Cookies.get('access_token');  // Assuming the token is stored in cookies
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,  // Make sure the base URL is correct
  timeout: 10000,  // If you need a timeout, you can enable it
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    console.log('api config', config);

    const token = getToken();
    if (token) {
      // Fix: Correct the "Bearer" format here
      config.headers['Authorization'] = `BEARER ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default api;

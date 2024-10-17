

import axios from 'axios';
import store from './store';

const iAX = axios.create({
    baseUrl: 'https://reqres.in/api',
    headers: {'Content-type': 'application/json'}
});


iAX.interceptors.request.use(
    config => {
        const token = store.getState().taller3.info.token; 
       
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default iAX; 
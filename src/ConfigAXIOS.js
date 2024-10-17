

import axios from 'axios';

const iAX = axios.create();


iAX.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Aquí asumimos que guardas el token en localStorage
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
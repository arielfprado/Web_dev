import axios from 'axios';

//axios is a libraru to improve http requests, better than fetch for example
const api = axios.create({
    baseURL: 'https://api.github.com/',
});

export default api;
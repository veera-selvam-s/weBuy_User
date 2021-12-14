import axios from 'axios';//axios package
import { api } from '../urlConfig';//getting base url from urlconfig
const token = window.localStorage.getItem('token');

const axiosInstance = axios.create({ //creating axios instance
    baseURL: api,//assinged base url
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Credentials": true,
        'Authorization':token ? `Bearer ${token}` : ''
    }
});

export default axiosInstance;

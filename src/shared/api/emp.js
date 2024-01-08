import axios from 'axios';

axios.defaults.baseURL=import.meta.env.VITE_BASE_URL;

export const getEmployees=async()=>{
    const url=import.meta.env.VITE_BASE_URL+'/users?_page=1&_limit=25';
    return await axios.get(url);
}

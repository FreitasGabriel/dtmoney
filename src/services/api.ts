import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://dtmoney-beige-theta.vercel.app//api',
})

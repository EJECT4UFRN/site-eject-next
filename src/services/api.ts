import axios from 'axios';

const API_DEVELOPER = 'http://127.0.0.1:8000/api/';
const API_PRODUCTION = 'https://apisite.ejectufrn.com.br/api/';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? API_PRODUCTION,
  auth: {
    username: process.env.NEXT_PUBLIC_API_USER ?? "client_site_eject",
    password: process.env.NEXT_PUBLIC_API_PASSWORD ?? "Senha@frontEJECT21"
  }
});

export default api;

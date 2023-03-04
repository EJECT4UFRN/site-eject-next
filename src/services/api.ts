import axios from 'axios';

const API_DEVELOPER = 'http://127.0.0.1:8000/api/';
const API_PRODUCTION = 'http://apisite.ejectufrn.com.br/api/';


const api = axios.create({
  baseURL: API_PRODUCTION,
  auth: {
    username: "client_site_eject",
    password: "Senha@frontEJECT21"
  }
});

export default api;

import axios from 'axios';

const API_DEVELOPER = 'http://127.0.0.1:8000/api/';
const API_PRODUCTION = 'https://apisite.ejectufrn.com.br/api/';
const API_MOCK = 'https://ejectbackteste.pythonanywhere.com/api/';


const api = axios.create({
  baseURL: API_MOCK,
  auth: {
    username: "eject",
    //antigo ---- "client_site_eject"
    password: "HGIaiwWXQFgKspr3oQVbcg=="
    //antigo ---- "Senha@frontEJECT21"
  }
});

export default api;

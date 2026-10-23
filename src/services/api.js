import axios from "axios";

const api = axios.create({
  baseURL: "https://cadastro-usuarios-backend-dm8t.onrender.com",
});

export default api;

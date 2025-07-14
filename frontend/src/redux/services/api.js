import axios from "axios";
import { getItem } from "../../helpers/persistenceStorage";

axios.defaults.baseURL =
  import.meta.env.MODE === "development"
    ? import.meta.env.VITE_APP_DEV_URL
    : import.meta.env.VITE_APP_PROD_URL;

axios.interceptors.request.use((config) => {
  const token = getItem("token");
  const authorization = token ? `Token ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default axios;

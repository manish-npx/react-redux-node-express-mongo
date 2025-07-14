import axios from "./api";
import { setItem } from "../../helpers/persistenceStorage";
const AuthService = {
  async userRegister(name, email, password) {
    const response = await axios.post("api/auth/register", {
      name,
      email,
      password,
    });
    return response.data;
  },

  async userLogin(email, password) {
    const response = await axios.post("api/auth/login", { email, password });
    const { docs: { token } } = response.data;
    if (token) {
      setItem("token", token);
    }

    return response.data;
  },

  async getUser() {
    const response = await axios.get("/user");
    return response.data;
  },
};

export default AuthService;

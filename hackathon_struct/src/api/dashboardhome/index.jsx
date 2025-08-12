import axios from "axios";

export const getWHData = () => {
  return axios.get("http://127.0.0.1:5000/access");
};

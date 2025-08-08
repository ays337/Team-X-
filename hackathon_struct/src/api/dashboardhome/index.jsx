import axios from "axios";

export const addCurrentTime = (currentTime) => {
  return axios.post("http://localhost:4000/addTime", { currentTime });
};

export const addCurrentTimeDB = (currentTime) => {
  return axios.post("http://localhost:4000/api/times", { currentTime });
};

export const getWHData = () => {
  return axios.get("http://127.0.0.1:5000/access");
};

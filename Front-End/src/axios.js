import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44333/api/",
});

export default instance;

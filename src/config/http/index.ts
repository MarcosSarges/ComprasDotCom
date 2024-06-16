import API from "@constants/API";
import axios from "axios";

const http = axios.create({
  baseURL: API.API_HOST,
});

export default http;

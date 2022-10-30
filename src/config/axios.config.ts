import axios from "axios";
const ENDPOINT: string = process.env.AUTH_SERVICE_ENDPOINT || "";

export const axiosRequest = axios.create({
  baseURL: ENDPOINT,
});

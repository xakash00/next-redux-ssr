import axios from "axios";
let url = "https://jsonplaceholder.typicode.com";
let marketUrl = "https://dummyjson.com";

export const api = axios.create({
  baseURL: url,
  timeout: 60000,
});

export const marketApi = axios.create({
  baseURL: marketUrl,
  timeout: 60000,
});

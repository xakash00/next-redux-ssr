import axios from "axios";
import { api } from "./createAxios";

export const jsonApi = () => {
  return api.get(`/posts?_limit=100`);
};

export const singlePostApi = (id) => {
  return api.get(`/posts/${id}`);
};

export const commentApi = (id) => {
  return api.get(`/posts/${id}/comments`);
};
export const metaImageApi = () => {
  return axios.get(`https://aws.random.cat/meow`);
};

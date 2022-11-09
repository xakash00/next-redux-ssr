import axios from "axios";

const memeAxios = axios.create({
  timeout: 60000,
});

export const memeApi = () => {
  return memeAxios.get("https://meme-api.herokuapp.com/gimme");
};

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5414ab177f5c4802944b90eb8c798d13",
  },
});

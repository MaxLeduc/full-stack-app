import axios from "axios";

export class ApiClient {
  get = (url: string, opts?: { [key: string]: string }) => {
    return axios.get(url, opts);
  };
}

export default new ApiClient();

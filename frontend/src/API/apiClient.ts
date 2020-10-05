import axios from "axios";

export class ApiClient {
  get = (url: string, opts?: { [key: string]: string }) => {
    return axios.get(`http://localhost:8080/${url}`, opts);
  };
}

export default new ApiClient();

import AxiosClient from "./axiosClient";
import { getJSONheaders } from "../../utils/http";
import config from "../../config/config";
const baseURL = config.axios.AXIOSBASEURL;

export default class StealsService {
  constructor() {
    this.client = new AxiosClient();
    this.baseURL = `${baseURL}/api/steal/mock`
  }

  updateSteals = () => {
    const requestInfo = {
      url: this.baseURL,
      config: getJSONheaders()
    }
  }
}
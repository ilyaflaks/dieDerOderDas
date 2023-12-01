import axios from "axios";

export const apiClient = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL:
    "http://diederdas-env-1.eba-4rwje3ud.us-west-1.elasticbeanstalk.com/",
});

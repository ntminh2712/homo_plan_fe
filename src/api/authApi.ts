import { ParamsRegister, ParamsLogin } from './../type/api/authType';
import apiClient from "./apiClient";
import { useQuery } from "react-query";

const authApi = {
  register(params: ParamsRegister) {
    const url = '/Login/Register';
    return apiClient.post(url, params);
  },
  login(params: ParamsLogin) {
    const url = '/Login/Login';
    return apiClient.post(url, params);
  },
};


export default authApi;

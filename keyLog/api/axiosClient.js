import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createTestScheduler } from "jest";
import { useRecoilState } from "recoil";
import AccountConnectPageComponents from "../components/AccountConnectPageComponents/AccountConnectPageComponents";
import { loginAtom } from "../recoil/loginAtom";
import { navigateToLoginPage } from "../utils/NavigateToLoginPage";
import { getRefresh } from "./api";

const BASE_URL = "http://3.38.13.139:8081";
const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

export const axiosRefreshClient = axios.create({
  baseURL: BASE_URL,
});

axiosRefreshClient.interceptors.request.use(async (config) => {

  try {
    if ((await AsyncStorage.getItem("refresh_token")) && config.headers) {
      config.headers["Authorization"] = `Bearer ${JSON.parse(
        await AsyncStorage.getItem("refresh_token")
      )}`;
    }

    return config;
  } catch {
    console.log("refrest Error")
  }
});

axiosRefreshClient.interceptors.request.use(async (response) => {
 return response
},
async(error) => {
 console.log("리프레쉬클라이언트",error)
 return error
}
)

axiosClient.interceptors.request.use(async (config) => {
  try {
    if ((await AsyncStorage.getItem("access_token")) && config.headers) {
      console.log("interceptors", await AsyncStorage.getItem("access_token"));
      config.headers["Authorization"] = `Bearer ${JSON.parse(
        await AsyncStorage.getItem("access_token")
      )}`;
    }
    return config;
  } catch {
    
  }
});
axiosClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    console.log("에러가 오긴 하니")
    console.log(error.response.status)
    if (error.response.status === 400 || error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
 
      try{
        const newAccessToken = await getRefresh();
        console.log("어세스토큰",newAccessToken)
        if(newAccessToken?.data?.refresh_token) {
          await AsyncStorage.removeItem("refresh_token")
          await AsyncStorage.setItem("refresh_token",JSON.stringify(newAccessToken?.data?.refresh_token))
        }
        await AsyncStorage.removeItem("access_token");
        await AsyncStorage.setItem(
          "access_token",
          JSON.stringify(newAccessToken.data.access_token)
        );
        console.log("newAccessToken",newAccessToken.data.access_token)
        originalRequest.headers["Authorization"] = `Bearer ${await newAccessToken
          .data.access_token}`;
      } catch(err) {
        console.log("err",err.response.data)
        console.log("status",err.response.data.code)
        if(err.response.data.code==400||err.response.data?.status==500) {
          await AsyncStorage?.removeItem("refresh_token")
          await AsyncStorage?.removeItem("access_token");
        }
      }
    
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);


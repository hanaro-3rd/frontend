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
    console.log("refrest Error");
  }
});

axiosRefreshClient.interceptors.request.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log("리프레쉬클라이언트", error);
    return error;
  }
);

axiosClient.interceptors.request.use(async (config) => {
  try {
    if ((await AsyncStorage.getItem("access_token")) && config.headers) {
      console.log("interceptors", await AsyncStorage.getItem("access_token"));
      config.headers["Authorization"] = `Bearer ${JSON.parse(
        await AsyncStorage.getItem("access_token")
      )}`;
    }
    return config;
  } catch {}
});
axiosClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    console.log(
      "axiosClient에러일때 어세스 토큰",
      await AsyncStorage.getItem("access_token")
    );
    const originalRequest = error.config;
    console.log(error.response);
    console.log("axiosClient에러status", error.response.status);
    if (
      (error.response.status === 401 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await getRefresh();
        console.log("새로 받은 어세스토큰헤더", newAccessToken.headers);
        if (newAccessToken?.headers?.refresh_token) {
          await AsyncStorage.removeItem("refresh_token");
          await AsyncStorage.setItem(
            "refresh_token",
            JSON.stringify(newAccessToken?.headers?.refresh_token)
          );
        }
        await AsyncStorage.removeItem("access_token");
        await AsyncStorage.setItem(
          "access_token",
          JSON.stringify(newAccessToken.headers.access_token)
        );
        console.log("newAccessToken", newAccessToken.headers.access_token);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${newAccessToken.headers.access_token}`;
      } catch (err) {
        console.log("err", err.response.data);
        console.log("status", err.response.data.code);
        if (err.response.data.code == 400 || err.response.data?.status == 500) {
          await AsyncStorage?.removeItem("refresh_token");
          await AsyncStorage?.removeItem("access_token");
        }
      }

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

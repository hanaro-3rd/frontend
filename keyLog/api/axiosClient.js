import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import AccountConnectPageComponents from "../components/AccountConnectPageComponents/AccountConnectPageComponents";
import { getRefresh } from "./api";

const BASE_URL = "http://10.0.2.2:8082";
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
      console.log(
        "refreshinterceptors",
        await AsyncStorage.getItem("refresh_token")
      );
      config.headers["Authorization"] = `Bearer ${JSON.parse(
        await AsyncStorage.getItem("refresh_token")
      )}`;
    }

    return config;
  } catch {}
});

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

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newAccessToken = await getRefresh();
      await AsyncStorage.removeItem("access_token");
      await AsyncStorage.setItem(
        "access_token",
        JSON.stringify(newAccessToken.data.access_token)
      );
      console.log("newAccessToken",newAccessToken.data.access_token)
      originalRequest.headers["Authorization"] = `Bearer ${await newAccessToken
        .data.access_token}`;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

const refreshAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem("refresh_token");
  console.log("refreshAccessToken", refreshToken);
  try {
    await axios
      .get("/refresh", {
        headers: {
          Authorization: `Bearer ${JSON.parse(
            await AsyncStorage.getItem("refresh_token")
          )}`,
        },
      })
      .then((response) => console.log("then", response));

  } catch {
    console.log(error);
    return null;
  }
};


import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const BASE_URL = "http://3.38.13.139:8081";
const HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};
export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
});

axiosClient.interceptors.request.use(async (config) => {
  if ((await AsyncStorage.getItem("token")) && config.headers) {
    config.headers["Authorization"] = `Bearer ${JSON.parse(
      await AsyncStorage.getItem("token")
    )}`;
  }
  return config;
});
axiosClient.interceptors.response.use((response) => {
  return response;
});

async function refreshAccessToken() {
  const refreshToken = await AsyncStorage.getItem("refresh_token");
  try {
    const response = await axiosClient.get("/refresh", {
      refreshToken: refreshToken,
    });
    if (response.data && response.data.access_token) {
      await AsyncStorage.setItem(
        "access_token",
        JSON.stringify(response.data.access_token)
      );
      return response.data.access_token;
    } else {
      throw new Error("No access token found in refresh response");
    }
  } catch (error) {
    console.error("Error refreshing access token", error);
    return null;
  }
}

axiosClient.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data.errorMessage === "Access Token이 만료되었습니다."
    ) {
      originalRequest._retry = true;

      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosClient(originalRequest);
      } else {
        await AsyncStorage.removeItem("access_token");
        await AsyncStorage.removeItem("refresh_token");
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

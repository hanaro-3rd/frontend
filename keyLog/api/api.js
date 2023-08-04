import { axiosClient } from "./axiosClient";

export const postSignup = (signupData) => {
  return axiosClient.post("/signup", signupData);
};

export const postSigninPattern = (signInPatternData) => {
  return axiosClient.post("/signin/pattern", signInPatternData);
};

export const postSigninPassword = (signInPasswordData) => {
  return axiosClient.post("/signin/password", signInPasswordData);
};

export const postVerification = (verificationData) => {
  return axiosClient.post("/verification", verificationData);
};

export const postVerificationAuth = (verifiacationAuthData) => {
  return axiosClient.post("/verifiaction/auth", verifiacationAuthData);
};
export const getRegistrationDeviceId = (deviceId) => {
  return axiosClient.get(`/registration/${deviceId}`);
};

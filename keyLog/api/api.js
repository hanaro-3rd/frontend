import axios from "axios";
import { axiosClient, axiosRefreshClient } from "./axiosClient";

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
  return axiosClient.post("/verification/auth", verifiacationAuthData);
};

export const getRegistrationDeviceId = (deviceId) => {
  return axiosClient.get(`/registration/${deviceId}`);
};
export const getRefresh = async () => {
  return axiosRefreshClient.get("/refresh");
};
export const getMarkers = () => {
  return axiosClient.get("/marker");
};

export const postMarkers = ({ markerId, markerData }) => {
  console.log(markerId, markerData);
  return axiosClient.post(`/marker/${markerId}`, markerData);
};

export const postPayment = (payData) => {
  return axiosClient.post("/payment", payData);
};

export const updatepayment = ({ historyId, updatePaymentData }) => {
  return axiosClient.patch(`/payment/${historyId}/update`, updatePaymentData);
};

//계좌
export const getAccount = () => {
  return axiosClient.get("/account");
};
export const getAccounExternal = () => {
  return axiosClient.get("/account/external");
};
export const postAccountExternal = ({
  externalAccountId,
  externalAccountData,
}) => {
  return axiosClient.post(`/account/${externalAccountId}`, externalAccountData);
};

//환전
export const postExchange = (exchangeData) => {
  return axiosClient.post(`/exchange`, exchangeData);
};

export const getExchange = (exchangeData) => {
  return axiosClient.get(`/exchange/getFromRedis`, exchangeData);
};

export const getTravelBudget = () => {
  return axiosClient.get("/plan");
};

export const postTravelBudget = (travelbudgetData) => {
  return axiosClient.post("/plan", travelbudgetData);
};

export const patchTravelPlan = ({ planId, patchTravelPlanData }) => {
  return axiosClient.patch(`/plan/${planId}`, patchTravelPlanData);
};
export const patchTravelBudget = ({ plan_id, patchTravelBudgetData }) => {
  return axiosClient.patch(`/plan/${plan_id}/category`, patchTravelBudgetData);
};

export const getTravelBudgetDetail = (plan_id) => {
  return axiosClient.get(`/plan/${plan_id}`);
};

export const deleteTravelBudget = (plan_id) => {
  return axiosClient.delete(`/plan/${plan_id}`);
};

export const getTravelBudgetCategory = (plan_id) => {
  return axiosClient.get(`/plan/${plan_id}/category`);
};

export const getMyKeymoney = () => {
  return axiosClient.get("/keymoney");
};

export const getMyKeymoneyUnit = ({ unit, filter }) => {
  return axiosClient.get(`/keymoney/${unit}?filter=${filter}`);
};

export const getDetailKeymoneyHistory = ({ historyId, type }) => {
  return axiosClient.get(
    `/keymoney/detail?historyId=${historyId}&type=${type}`
  );
};

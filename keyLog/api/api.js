import { axiosClient } from './axiosClient';


export const postSignup = signupData => {
  return axiosClient.post('/signup', signupData);
};

export const postSigninPattern = signInPatternData => {
  return axiosClient.post('/signin/pattern', signInPatternData);
};

export const postSigninPassword = signInPasswordData => {
  return axiosClient.post('/signin/password', signInPasswordData);
};

export const postVerification = verificationData => {
  return axiosClient.post('/verification', verificationData);
};

export const postVerificationAuth = verifiacationAuthData => {
  return axiosClient.post('/verification/auth', verifiacationAuthData);
};

export const getRegistrationDeviceId = deviceId => {
  return axiosClient.get(`/registration/${deviceId}`);
};

export const getMarkers = () => {
  return axiosClient.get("/marker");
};

export const postMarkers = ({ markerId, markerData }) => {
  return axiosClient.post(`/marker/${markerId}`, markerData);
};

//계좌
export const getAccount = () => {
  return axiosClient.get('/account')
};
export const getAccounExternal = () => {
  return axiosClient.get('/account/external')
};
export const postAccountExternal = ({externalAccountId,externalAccountData}) => {
  return axiosClient.post(`/account/${externalAccountId}`,externalAccountData)
}

//환전
export const postExchange = (exchangeData) => {
  return axiosClient.post(`/exchange`,exchangeData)
}



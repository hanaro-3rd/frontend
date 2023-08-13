export const isValidName = name => {
  const regex = /^[가-힣ㄱ-ㅎㅏ-ㅣ]*$/;
  return regex.test(name);
};

export const isValidPersonalNumber = number => {
  const regex = /^\d{6}-\d{7}$/;
  return regex.test(number);
};

export const isValidPhoneNumber = number => {
  const regex = /^010-\d{4}-\d{4}$/;
  return regex.test(number);
};

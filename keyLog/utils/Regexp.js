export const checkKoreanName = name => {
  const cleaned = name.replace(/\s/g, ''); // 공백 제거
  const match = cleaned.match(/^[가-힣]*$/); // 이름이 한글로만 이루어져 있는지 확인

  return !!match; // match가 존재하면 true, 그렇지 않으면 false 반환
};


export const checkPhoneChange = number => {
  let cleaned = ('' + number).replace(/\D/g, '');
  let match;

  match = cleaned.match(/^010(\d{4})(\d{4})$/);

  if (match) {
    return true;
  } else {
    return false;
  }
};

export const checkResidentNumber = number => {
  const cleaned = ('' + number).replace(/\D/g, ''); // 숫자 이외의 문자 제거
  const match = cleaned.match(/^\d{6}$/); // 첫 6자리에 정확히 6자리의 숫자인지 확인

  return !!match; // match가 존재하면 true, 그렇지 않으면 false 반환
};

export const checkNumberSet = number => {
  const match = /^[1-4]$/.test(number); // 숫자가 1, 2, 3, 4 중 하나인지 확인

  return match; // true 또는 false 반환
};
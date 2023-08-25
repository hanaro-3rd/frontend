export const checkKoreanName = name => {
  console.log(name)
  if (name== "") return false
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
  const match = cleaned.match(/^(\d{2})(\d{2})(\d{2})$/); // YYMMDD 형식인지 확인

  if (!match) {
    return false; // 매치되지 않으면 false 반환
  }

  const year = parseInt(match[1], 10); // 연도
  const month = parseInt(match[2], 10); // 월
  const day = parseInt(match[3], 10); // 일

  // 연도, 월, 일에 대한 유효성 검사 추가
  if (year < 0 || year > 99 || month < 1 || month > 12 || day < 1 || day > 31) {
    return false;
  }

  // 여기에 추가적인 유효성 검사 규칙을 적용할 수 있습니다.
  // 예: 윤년 검사, 월마다 다른 일 수 검사 등

  return true;
};
export const checkNumberSet = number => {
  const match = /^[1-4]$/.test(number); // 숫자가 1, 2, 3, 4 중 하나인지 확인

  return match; // true 또는 false 반환
};
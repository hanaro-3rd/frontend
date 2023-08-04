const CheckVerificationNumber = async verficationNum => {
  try {
    // TODO:  endpoint 및 method 수정하기
    let response = await fetch('http://localhost:3001/auth', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        code: verficationNum,
      }),
    });

    const textResponse = await response.text();
    console.log('폰번호 인증 서버 응답:', textResponse);

    const responseJson = JSON.parse(textResponse);

    // TODO: 조건문 수정하기
    // if (response.status === 200) {
    if (verficationNum === '102052') {
      console.log('인증 성공: ', responseJson);
    } else {
      console.log('인증 실패: ', responseJson);
    }
  } catch (error) {
    console.log('인증 오류 발생: ', error);
  }
};

export { CheckVerificationNumber };

import { removeHyphen } from '../../pages/SignUp/removeHyphen';

const RequestPhoneVerfication = async phoneNum => {
  try {
    const phoneNumber = removeHyphen(phoneNum);
    let response = await fetch('http://localhost:3001/verification', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      //################## Method POST로 바꿔서 다시 (현재 테스트 중) ##################
      // body: JSON.stringify({
      //   phonenum: phoneNumber,
      // }),
    });

    const textResponse = await response.text();
    const responseJson = JSON.parse(textResponse);

    // 나중에 바꾸기
    if (parseInt(responseJson[0]['statusCode']) === 202) {
      return 'success';
    }
  } catch (error) {
    console.log('인증번호 요청 오류 발생: ', error);
  }
};

export { RequestPhoneVerfication };

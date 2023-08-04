import { removeHyphen } from '../../pages/SignUp/removeHyphen';

const phoneNumberVerification = async phoneNum => {
  try {
    const phoneNumber = removeHyphen(phoneNum);
    let response = await fetch(
      'http://http://3.38.13.139:8081/verification/auth',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phonenum: phoneNumber,
        }),
      }
    );

    const textResponse = await response.text();
    console.log('폰번호 인증 서버 응답:', textResponse);

    const responseJson = JSON.parse(textResponse);

    if (response.status === 202) {
      console.log('핸드폰 번호 인증 성공: ', responseJson);
    } else {
      console.log('핸드폰 번호 인증 실패: ', responseJson);
    }
  } catch (error) {
    console.log('회원가입 오류 발생: ', error);
  }
};

export { phoneNumberVerification };

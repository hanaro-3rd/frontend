import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styled from "styled-components/native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import { useQueryClient } from "react-query";

const Root = styled.SafeAreaView`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  background-color: white;
  justify-content: space-between;
  flex: 1 0 0;
`;

const Header = styled.View`
  display: flex;
  height: ${heightPercentage(50)}px;
  padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  background-color: white;
`;

const BodyHeader = styled.View`
  display: flex;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: white;
`;

const BodyHeaderTitle = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const BodyHeaderText = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const BodyMainContainer = styled.View`
  display: flex;
  height: ${heightPercentage(500)}px;
  width: 100%;
  padding: ${heightPercentage(15)}px ${widthPercentage(25)}px;
  flex-direction: column;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  background-color: white;
`;

const BodyMainTextContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  flex-direction: row;
`;

const BodyMainTextTitleContainer = styled.View`
  display: flex;
  width: ${widthPercentage(150)}px;
  height: ${heightPercentage(50)}px;
  padding: ${heightPercentage(15.5)}px ${widthPercentage(20)}px;
  /* align-items: center; */
  gap: 10px;
  margin-right: ${widthPercentage(50)}px;;
`;
const BodyMainTitleText = styled.Text`
  color: #4e5968;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
  width: ${widthPercentage(80)}px;
  height: ${heightPercentage(22)}px;
`;

const BodyMainTextInfoContainer = styled.View`
  display: flex;
  height: ${heightPercentage(50)}px;
  width: ${widthPercentage(190)}px;
  padding: ${heightPercentage(16)}px ${widthPercentage(20)}px;
  flex: 1 0 0;
`;

const BodyMainInfoTextBox = styled.View`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: ${widthPercentage(45)}px;
  height: ${heightPercentage(20)}px;
`;

const BodyMainInfoText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
  width: ${widthPercentage(150)}px;
`;

const Footer = styled.View`
  display: flex;
  padding: ${heightPercentage(15)}px ${widthPercentage(25)}px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  background-color: white;
`;

const SubmitButton = styled.TouchableOpacity`
  display: flex;
  height: ${heightPercentage(55)}px;
  padding: ${heightPercentage(10)}px ${widthPercentage(10)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background-color: #55acee;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const AlreadySignUpPage = ({ route, navigation }) => {
  const queryClient = useQueryClient();
  const { name, phoneNum, registrationNum, createdAt } = route?.params;
  console.log(route.params,"route.params")
  const formattedRegistrateNum = `${registrationNum.slice(
    0,
    6
  )}-${registrationNum.slice(6)}`;
  const formattedPhoneNum = `${phoneNum.slice(0, 3)}-${phoneNum.slice(
    3,
    7
  )}-${phoneNum.slice(7)}`;

  const year = createdAt[0];
  const month = createdAt[1];
  const day = createdAt[2];

  const formattedDate = `${year}년 ${month}월 ${day}일`;

  const [signUpDate, setSignUpDate] = useState();
  return (
    <Root>
      <Header />
      <BodyHeader>
        <BodyHeaderTitle>가입된 회원</BodyHeaderTitle>
        <BodyHeaderText>
          회원 정보가 일치하면 확인 버튼을 눌러주세요
        </BodyHeaderText>
      </BodyHeader>
      <BodyMainContainer>
        <BodyMainTextContainer>
          <BodyMainTextTitleContainer>
            <BodyMainTitleText>이름</BodyMainTitleText>
          </BodyMainTextTitleContainer>
          <BodyMainTextInfoContainer>
            <BodyMainInfoTextBox>
              <BodyMainInfoText>{name}</BodyMainInfoText>
            </BodyMainInfoTextBox>
          </BodyMainTextInfoContainer>
        </BodyMainTextContainer>
        <BodyMainTextContainer>
          <BodyMainTextTitleContainer>
            <BodyMainTitleText>주민번호</BodyMainTitleText>
          </BodyMainTextTitleContainer>
          <BodyMainTextInfoContainer>
            <BodyMainInfoTextBox>
              <BodyMainInfoText>{formattedRegistrateNum}</BodyMainInfoText>
            </BodyMainInfoTextBox>
          </BodyMainTextInfoContainer>
        </BodyMainTextContainer>
        <BodyMainTextContainer>
          <BodyMainTextTitleContainer>
            <BodyMainTitleText>전화번호</BodyMainTitleText>
          </BodyMainTextTitleContainer>
          <BodyMainTextInfoContainer>
            <BodyMainInfoTextBox>
              <BodyMainInfoText>{formattedPhoneNum}</BodyMainInfoText>
            </BodyMainInfoTextBox>
          </BodyMainTextInfoContainer>
        </BodyMainTextContainer>
        <BodyMainTextContainer>
          <BodyMainTextTitleContainer>
            <BodyMainTitleText>가입일자</BodyMainTitleText>
          </BodyMainTextTitleContainer>
          <BodyMainTextInfoContainer>
            <BodyMainInfoTextBox>
              <BodyMainInfoText>{formattedDate}</BodyMainInfoText>
            </BodyMainInfoTextBox>
          </BodyMainTextInfoContainer>
        </BodyMainTextContainer>
      </BodyMainContainer>
      <Footer>
        <SubmitButton
          onPress={() =>
            navigation.navigate("UpdateDevicePage", {
              name: name,
              phoneNumber: phoneNum,
              personalNumber: registrationNum,
             
            })
          }
        >
          <ButtonText>비밀번호 재설정 하기</ButtonText>
        </SubmitButton>
      </Footer>
    </Root>
  );
};

export default AlreadySignUpPage;

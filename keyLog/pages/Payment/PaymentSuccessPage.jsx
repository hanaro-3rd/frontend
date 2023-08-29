import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";
import { paymentSuccess } from "../../utils/image";

const PaymentSuccessPage = ({ route, navigation }) => {
  const { storeTitle, category, moneyText, unit, memoText } = route?.params;
  return (
    <Root>
      <DeleteHeader navigation={navigation} to="MainPage"/>
      <BodyContainer>
        <BodyHeader>
          <BodyHeaderTitle>결제 완료</BodyHeaderTitle>
          <BodyHeaderSubTitle>결제가 완료되었어요.</BodyHeaderSubTitle>
        </BodyHeader>
        <BodyMainContainer>
          <CreditImageContainer>
            <Image
              source={{ uri: paymentSuccess }}
              style={{
            width: widthPercentage(162.269),
            height: heightPercentage(129.167),
          }}
            />
          </CreditImageContainer>
          <InfoContainer>
            <InfoTitle>결제 정보</InfoTitle>
            <InfoTextContainer>
              <InfoTextTitle>결제처</InfoTextTitle>
              <InfoText>{storeTitle}</InfoText>
            </InfoTextContainer>
            <InfoTextContainer>
              <InfoTextTitle>카테고리</InfoTextTitle>
              <InfoText>{category}</InfoText>
            </InfoTextContainer>
            <InfoTextContainer>
              <InfoTextTitle>금액</InfoTextTitle>
              <InfoText>
                {unit} {moneyText}
              </InfoText>
            </InfoTextContainer>
            <InfoTextContainer>
              <InfoTextTitle>메모</InfoTextTitle>
              <InfoText>{memoText}</InfoText>
            </InfoTextContainer>
          </InfoContainer>
        </BodyMainContainer>
      </BodyContainer>
      <Footer>
        <SubmitButton onPress={() => navigation.navigate("MainPage")}>
          <ButtonText>확인하기</ButtonText>
        </SubmitButton>
      </Footer>
    </Root>
  );
};

const Root = styled.View`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
  flex: 1 0 0;
`;

const BodyContainer = styled.View`
  width: 100%;
  height: ${heightPercentage(709)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  background-color: white;
`;

const BodyHeader = styled.View`
  display: flex;
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(87)}px;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
`;

const BodyHeaderTitle = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const BodyHeaderSubTitle = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const BodyMainContainer = styled.View`
  display: flex;
  padding: 0px ${widthPercentage(25)}px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1 0 0;
  align-self: stretch;
`;

const CreditImageContainer = styled.View`
  display: flex;
  padding: ${heightPercentage(29)}px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const InfoTitle = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 700;
`;

const InfoTextContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex-direction: row;
`;

const InfoTextTitle = styled.Text`
  color: #191f29;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const InfoText = styled.Text`
  color: #191f29;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
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
export default PaymentSuccessPage;

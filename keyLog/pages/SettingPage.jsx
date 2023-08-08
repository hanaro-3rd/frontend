import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import PrevHeader from "../components/Header/PrevHeader";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../utils/ResponseSize";

const BodyContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  width: 100%;
  height: ${heightPercentage(794)}px;
`;
const TitleContainer = styled.View`
  display: flex;
  height: ${heightPercentage(58)}px;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
`;

const SettingTitleText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const SettingSelectContainer = styled.View`
  display: flex;
  height: ${heightPercentage(65)}px;
  padding: 0px ${widthPercentage(20)}px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
`;

const SelectInfoContainer = styled.View`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;

const SettingInfoFrame = styled.View`
  background-color: #fff;
  width: 100%;
`;
const InfoImage = styled.Image`
  width: ${widthPercentage(24)}px;
  height: ${heightPercentage(24)}px;
`;

const InfoText = styled.Text`
  height: ${heightPercentage(25)}px;
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;
const SettingPage = ({ navigation }) => {
  return (
    <View>
      <PrevHeader navigation={navigation} to="MainPage" />
      <BodyContainer>
        <TitleContainer>
          <SettingTitleText>설정</SettingTitleText>
        </TitleContainer>
        <SettingInfoFrame>
          <SettingSelectContainer>
            <SelectInfoContainer>
              <InfoImage
                source={require("../assets/Setting/account_circle.png")}
              />
              <InfoText>유저정보</InfoText>
            </SelectInfoContainer>
            <Image
              source={require("../assets/Setting/SelectRightButton.png")}
            />
          </SettingSelectContainer>
          <SettingSelectContainer>
            <SelectInfoContainer>
              <InfoImage source={require("../assets/Setting/Auth.png")} />
              <InfoText>인증 및 보안</InfoText>
            </SelectInfoContainer>
            <Image
              source={require("../assets/Setting/SelectRightButton.png")}
            />
          </SettingSelectContainer>
          <SettingSelectContainer>
            <SelectInfoContainer>
              <InfoImage source={require("../assets/Setting/Account.png")} />
              <InfoText>연결된 계좌</InfoText>
            </SelectInfoContainer>
            <Image
              source={require("../assets/Setting/SelectRightButton.png")}
            />
          </SettingSelectContainer>
        </SettingInfoFrame>
      </BodyContainer>
    </View>
  );
};

export default SettingPage;

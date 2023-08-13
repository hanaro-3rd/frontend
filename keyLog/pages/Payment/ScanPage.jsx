import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styled from "styled-components/native";
import DeleteHeader from "../../components/Header/DeleteHeader";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";

const Root = styled.SafeAreaView`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
  flex: 1 0 0;
`;

const ScanTitleContainer = styled.View`
  display: flex;
  height: ${heightPercentage(87)}px;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
`;

const ScanTitleText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const ScanSubTitleText = styled.Text`
  color: #8b95a1;
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
  background-color: #fff;
`;
const Button = styled.TouchableOpacity`
  display: flex;
  width: ${widthPercentage(340)}px;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: #55acee;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const ScanPage = ({ navigation }) => {
  return (
    <>
      <DeleteHeader navigation={navigation} to="MainPage" />
      <Root>
        <ScanTitleContainer>
          <ScanTitleText>코드 스캔</ScanTitleText>
          <ScanSubTitleText>결제 코드를 스캔해주세요.</ScanSubTitleText>
        </ScanTitleContainer>
        <Footer>
          <Button onPress={() => navigation.navigate("TestPaymentPage")}>
            <ButtonText>직접 입력하기</ButtonText>
          </Button>
        </Footer>
      </Root>
    </>
  );
};

export default ScanPage;

const styles = StyleSheet.create({});

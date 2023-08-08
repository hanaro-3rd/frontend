import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import styled from "styled-components/native";
import ExchangePage from "../../pages/ExchangeSelectAccount/ExchangePage";

const ChooseAccountComponent = () => {
  const Header = styled.View`
    width: ${phoneWidth}px;
    height: ${heightPercentage(50)}px;
    justify-content: center;
    background-color: white;
  `;
  const HeaderImage = styled.Image`
    margin-left: ${widthPercentage(12)}px;
    width: ${widthPercentage(24)}px;
    height: ${heightPercentage(24)}px;
  `;
  const navigation = useNavigation();

  const closeChooseAccountComponent = () => {
    navigation.navigate("ExchangePage");
  };

  return (
    <View style={styles.root}>
      <View>
        <TouchableOpacity onPress={closeChooseAccountComponent}>
          <Header>
            <HeaderImage source={require("../../Images/삭제.png")} />
          </Header>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyHeader}>
          내 계좌 목록을 가져옵니다. 아래를 읽고 동의해 주세요.
        </Text>
        <Text> 개인신용정보 전송요구 및 수집, 이용</Text>

        <Text> 정보 제공자 </Text>
        <Text> 하나은행, 신한은행, 토스 </Text>

        <Text> 정보 수신자 </Text>
        <Text> KeyLog </Text>

        <Text> 전송 정보 </Text>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.submitButton}>
          <Text style={styles.pressBeforeTextStyle}>동의하기</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ChooseAccountComponent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },
  header: {
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: heightPercentage(13),
    paddingHorizontal: widthPercentage(12),
  },
  title: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(23),
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  body: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    padding: 10,
    alignSelf: "stretch",
  },
  bodyHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: fontPercentage(16),
    fontWeight: "700",
    paddingVertical: heightPercentage(10),
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingHorizontal: widthPercentage(25),
  },
  mainIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(10),
    flexDirection: "row",
    paddingVertical: heightPercentage(29),
  },
  informationText: {
    color: "#4E5968",
    fontFamily: "Inter",
    fontSize: fontPercentage(13),
    fontWeight: "400",
  },
  informationText2: {
    color: "#4E5968",
    fontFamily: "Inter",
    fontSize: fontPercentage(13),
    fontWeight: "400",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
  },
  informationContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  footer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: heightPercentage(20),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  submitButton: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    flexDirection: "row",
    padding: widthPercentage(10),
    borderRadius: 10,
  },
});

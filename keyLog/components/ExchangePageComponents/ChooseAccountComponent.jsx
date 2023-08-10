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

const ChooseAccountComponent = ({ navigate, route }) => {
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
      <View style={styles.bodyHeader}>
        <Text style={styles.title}>내 계좌를 연결합니다.</Text>
        <Text style={styles.subtitle}>아래를 읽고 동의해 주세요</Text>
      </View>
      <View style={styles.bodyMain}>
        <Text style={styles.containerTitle}>
          개인신용정보 전송요구 및 수집 · 이용
        </Text>
        <View style={styles.frame145}>
          <Text style={styles.containerTitle2}>정보 제공자</Text>
          <Text style={styles.containerTitle3}>
            하나은행, 국민은행, 우리은행, 신한은행 카카오뱅크, 토스
          </Text>
        </View>
        <View style={styles.frame145}>
          <Text style={styles.containerTitle2}>정보 수신자</Text>
          <Text style={styles.containerTitle5}>키로그</Text>
        </View>
        <View style={styles.frame147}>
          <Text style={styles.containerTitle2}>전송 정보</Text>
          <View style={styles.frame148}>
            <Text style={styles.containerTitle7}>은행 : 계좌(수신) 목록</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable
          onPress={() => {
            navigation.navigate("AccountConnectPage", {
              page: route.params.page,
            });
          }}
          style={styles.submitButton}
        >
          <Text style={styles.buttonText}>동의하기</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default ChooseAccountComponent;

const styles = StyleSheet.create({
  root: {
    //
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#ffffff",
  },
  title: {
    color: "#191F29",
    fontSize: fontPercentage(23),
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  footer: {
    //
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
    //
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

  bodyHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(20),
  },
  containerTitle: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  containerTitle2: {
    alignSelf: "stretch",
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  containerTitle3: {
    color: "#333D4B",
    fontFamily: "Inter",
    fontSize: fontPercentage(14),
    fontWeight: "400",
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: heightPercentage(30),
    flexGrow: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  frame145: {
    width: widthPercentage(340),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(10),
  },
  containerTitle5: {
    color: "#333D4B",
    fontSize: fontPercentage(14),
    fontWeight: "400",
  },
  containerTitle7: {
    color: "#333D4B",
    fontFamily: "Inter",
    fontSize: fontPercentage(14),
    fontWeight: "400",
  },
  frame147: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
  },
  frame148: {
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    padding: widthPercentage(20),
    borderRadius: 10,
  },
});

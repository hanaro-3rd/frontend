import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import DeleteHeader from "../../components/Header/DeleteHeader";
import CountryChoiceComponent from "../../components/ExchangePageComponents/CountryChoiceComponent";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";

export const ExchangePage = () => {
  const navigation = useNavigation();
  const handleChooseAccountComponent = () => {
    navigation.navigate("ChooseAccountComponent");
  };

  return (
    <View style={styles.root}>
      <ScrollView>
        <DeleteHeader navigation={navigation} to="MainPage" />
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.title}>하나머니 환전</Text>
            <Text style={styles.subtitle}>
              환전을 위해 계좌 및 금액을 설정합니다.
            </Text>
          </View>
          <View style={styles.bodyMain}>
            <View style={styles.accountContainer}>
              <Text style={styles.containerTitle}>계좌 선택</Text>
              <TouchableOpacity
                style={styles.accountSelect}
                onPress={handleChooseAccountComponent}
              >
                <Text style={styles.placeholder}>계좌를 선택해주세요</Text>
                <Image
                  source={require("../../assets/exchangeImg/SelectButton.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.moneyContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.containerTitle2}>환전 금액</Text>
                <Text style={styles.containerSubtitle}>
                  휴일 수수료 10%가 적용됩니다
                </Text>
              </View>
              <View style={styles.foreignCurrencyContainer}>
                {/* <CountryChoiceComponent /> */}
                <View style={styles.foreignCurrencyInput}>
                  <Text style={styles.foreignMoneyText}>10 ~ 10,000</Text>
                </View>
              </View>
              <View style={styles.koreaWonContainer}>
                <View style={styles.textContainer}>
                  <Image
                    source={require("../../assets/exchangeImg/Korea.png")}
                  />
                  <Text style={styles.unitText2}>KRW</Text>
                </View>
                <Text style={styles.koreaMoneyText}>10,000 ~ 10,000,000</Text>
              </View>
            </View>
            <View style={styles.exchangeRateContainer}>
              <View style={styles.titleContainer2}>
                <Text style={styles.containerTitle3}>현재 환율</Text>
                <Text style={styles.containerSubtitle2}>07.11. 18:19 기준</Text>
              </View>
              <View style={styles.currentExchangeRateContainer}>
                <View style={styles.countryInformationContainer}>
                  <Text style={styles.countryText}>미국</Text>
                  <Text style={styles.unitText3}>USD</Text>
                </View>
                <View style={styles.currentExchangeRateTextContainer}>
                  <Text style={styles.exchangeRateText}>1,294.50</Text>
                  <Text style={styles.changeRateText}>▼ 12.00</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.informationContainer}>
            <Text style={styles.informationText}>
              주말 및 공휴일은 수수료가 붙습니다..
            </Text>
            <Text style={styles.informationText}>
              주말 및 공휴일은 수수료가 붙습니다..
            </Text>
            <Text style={styles.informationText}>
              주말 및 공휴일은 수수료가 붙습니다..
            </Text>
          </View>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText}>환전하기</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExchangePage;

const styles = StyleSheet.create({
  root: {
    width: widthPercentage(390),
    height: heightPercentage(844),
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
    flex: 1,
  },
  header: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: heightPercentage(13),
    paddingHorizontal: widthPercentage(12),
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
  body: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  bodyHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
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
  placeholder: {
    color: "#B0B8C1",

    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  accountContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  accountSelect: {
    height: heightPercentage(65),
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(20),
    borderRadius: 10,
  },
  containerTitle2: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  containerSubtitle: {
    color: "#EE3739",
    fontSize: fontPercentage(12),
    fontWeight: "400",
  },
  moneyContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  foreignCountryIcon: {
    width: 29,
    height: 32,
  },
  foreignCurrencyContainer: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },

  foreignMoneyText: {
    color: "#B0B8C1",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  foreignCurrencyInput: {
    height: heightPercentage(65),
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: "rgba(249, 250, 251, 0.62)",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(20),
    borderRadius: 10,
  },
  unitText2: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  koreaWonContainer: {
    height: heightPercentage(65),
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(20),
    borderRadius: 10,
  },
  textContainer: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  koreaMoneyText: {
    color: "#B0B8C1",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  containerTitle3: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  containerSubtitle2: {
    color: "#8B95A1",
    fontSize: fontPercentage(12),
    fontWeight: "400",
  },
  exchangeRateContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer2: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  countryText: {
    color: "#191F29",

    fontSize: fontPercentage(18),
    fontWeight: "700",
  },
  unitText3: {
    color: "#191F29",
    fontSize: fontPercentage(12),
    fontWeight: "400",
  },
  currentExchangeRateContainer: {
    height: heightPercentage(65),
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: heightPercentage(5),
    paddingHorizontal: widthPercentage(20),
    borderRadius: 5,
  },
  countryInformationContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  exchangeRateText: {
    color: "#191F29",

    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  changeRateText: {
    color: "#0A7DF2",
    fontSize: fontPercentage(12),
    fontWeight: "700",
  },
  currentExchangeRateTextContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  informationText: {
    color: "#4E5968",
    fontSize: fontPercentage(13),
    fontWeight: "400",
  },
  footer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    borderBlockColor: "rgba(0, 0, 0, 0.25)",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  informationContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#FFF",

    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  submitButton: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
  },
});

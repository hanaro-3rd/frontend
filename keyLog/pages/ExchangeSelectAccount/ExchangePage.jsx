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
import { PreventRemoveContext } from "@react-navigation/native";
import ChooseAccount from "./ChooseAccount";
import DeleteHeader from "../../components/Header/DeleteHeader";
import ChooseAccountComponent from "../../components/ExchangePageComponents/ChooseAccountComponent";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";

const ExchangePage = () => {
  const navigation = useNavigation();
  const handleChooseAccountComponent = () => {
    navigation.navigate("ChooseAccountComponent");
  };

  return (
    <View styles={styles.root}>
      <DeleteHeader navigation={navigation} to="MainPage" />
      <View style={styles.Container}>
        <ScrollView>
          <View style={styles.s2}>
            <Text style={styles.title}> 하나머니 환전 </Text>
            <Text style={styles.subtitle}>
              환전을 위해 계좌 및 금액을 설정합니다.
            </Text>
          </View>
          <View style={styles.bodyMain}>
            <TouchableOpacity
              style={styles.accountList}
              onPress={handleChooseAccountComponent}
            >
              <Text style={styles.accountListDefault}>계좌를 선택해주세요</Text>
              <Image
                style={styles.selectbutton}
                source={require("../../assets/exchangeImg/SelectButton.png")}
              />
            </TouchableOpacity>
            <View style={styles.MoneyTextContainer}>
              <View style={styles.MoneyTitleContainer}>
                <Text style={styles.MoneyTitle}> 환전 금액 </Text>
                <Text style={styles.MoneySubtitle}>
                  휴일 수수료 10%가 적용됩니다
                </Text>
              </View>
              <View style={styles.ForeignCurrencyContainer}>
                <View style={styles.CountryList}>
                  <Image
                    style={styles.selectCountry}
                    source={require("../../assets/exchangeImg/USD.png")}
                  />
                  <Text style={styles.unitText}>USD</Text>
                  <Image
                    style={styles.selectbutton}
                    source={require("../../assets/exchangeImg/SelectButton.png")}
                  />
                </View>
                <TextInput
                  style={styles.MoneyInput}
                  placeholder="10 ~ 10,000"
                ></TextInput>
              </View>
            </View>
            <View style={styles.KoreaMoney}>
              <View style={styles.KoreaContainer}>
                <Image source={require("../../assets/exchangeImg/Korea.png")} />
                <Text style={styles.unitText}> KRW </Text>
              </View>
              <TextInput editable={false} defaultValue={"10,000~10,000,000"} />
            </View>
            <View style={styles.ExchangerateContainer}>
              <View style={styles.ExchangeTitleContainer}>
                <Text style={styles.MoneyTitle}> 현재 환율 </Text>
                <Text style={styles.ExchangeSubtitle}> API 시간 </Text>
              </View>
              <View style={styles.CurrentExchangerateContainer}>
                <View style={styles.CountryInformationContainer}>
                  <Text style={styles.CountryName}> 미국 </Text>
                  <Text style={styles.CountryEnglishName}> USD </Text>
                </View>
                <View style={styles.CountryInformationContainer}>
                  <Text style={styles.unitText}>1.294.50</Text>
                  <Text style={styles.ChangeRateText}> ▼ 12.00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.s3}>
            <FlatList
              scrollEnabled={false}
              data={[
                { key: "주말이나 공휴일에는 수수료가 붙습니다." },
                { key: "주말이나 공휴일에는 수수료가 붙습니다." },
                { key: "주말이나 공휴일에는 수수료가 붙습니다." },
              ]}
              renderItem={({ item }) => (
                <Text style={styles.listitem}>{item.key}</Text>
              )}
            />
            <Pressable style={styles.submitButton}>
              <Text style={styles.pressBeforeTextStyle}>환전하기</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default ExchangePage;

export const styles = StyleSheet.create({
  root: {
    backgroundColor: "#ffffff",
    height: phoneHeight,
    flex: 1,
  },
  Container: {
    backgroundColor: "#ffffff",
    flexDirection: "column",
    justifyContent: "space-between",
    height: phoneHeight,
    alignSelf: "stretch",
  },
  s2: {
    paddingTop: heightPercentage(13),
    paddingBottom: heightPercentage(13),
    paddingLeft: widthPercentage(12),
    paddingRight: widthPercentage(12),
  },
  title: {
    color: "#191F29",
    Text: fontPercentage(23),
    fontWeight: "700",
  },
  subtitle: {
    paddingTop: heightPercentage(10),
    flexDirection: "column",
    justifyContent: "center",
  },
  bodyMain: {
    paddingBottom: heightPercentage(15),
    paddingTop: heightPercentage(15),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    flexDirection: "column",
    alignSelf: "stretch",
  },
  accountContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: heightPercentage(15),
    height: phoneHeight,
  },

  accountList: {
    backgroundColor: "#F9FAFB",
    height: heightPercentage(64),
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightPercentage(10),
  },
  accountListDefault: {
    color: "#B0B8C1",
    paddingLeft: widthPercentage(10),
    paddingRight: widthPercentage(10),
  },
  selectbutton: {
    marginRight: widthPercentage(20),
  },
  selectCountry: {
    marginLeft: widthPercentage(20),
  },
  MoneyTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  MoneyTitleContainer: {
    paddingTop: heightPercentage(30),
    flexDirection: "row",
    alignItems: "center",
  },
  MoneyTitle: { color: "#191F29", Text: fontPercentage(16) },
  MoneySubtitle: { color: "#EE3739", Text: fontPercentage(12) },
  CountryList: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#191F29",
    borderStyle: "solid",
    borderWidth: 1,
    height: heightPercentage(65),
  },
  MoneyInput: {
    backgroundColor: "rgba(249, 250, 251, 0.62)",
    marginLeft: widthPercentage(10),
    paddingRight: widthPercentage(20),
    flex: 1,
    textAlign: "right",
    borderRadius: 10,
    height: "100%",
  },
  ForeignCurrencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightPercentage(65),
    marginTop: heightPercentage(10),
  },
  KoreaContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  KoreaMoney: {
    backgroundColor: "rgba(249, 250, 251, 0.62)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightPercentage(10),
    borderRadius: 10,
    height: heightPercentage(65),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
  },
  unitText: {
    color: "#191F29",
    fontWeight: "700",
    paddingLeft: widthPercentage(10),
  },
  ExchangerateContainer: {
    marginTop: heightPercentage(30),
  },
  ExchangeTitleContainer: { flexDirection: "row" },
  ExchangeSubtitle: {
    color: "#8B95A1",
    paddingLeft: widthPercentage(10),
  },
  CurrentExchangerateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: heightPercentage(65),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    marginTop: heightPercentage(10),
    paddingBottom: heightPercentage(5),
    borderRadius: 5,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    borderWidth: 1,
  },
  CountryInformationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  CountryName: {
    color: "#191F29",
    fontSize: fontPercentage(18),
    fontWeight: "700",
  },
  CountryEnglishName: {
    fontSize: fontPercentage(12),
    paddingLeft: widthPercentage(10),
  },
  ChangeRateText: {
    paddingLeft: widthPercentage(10),
    color: "#0A7DF2",
  },
  s3: {
    paddingTop: heightPercentage(15),
    paddingLeft: widthPercentage(25),
    paddingRight: widthPercentage(25),
  },
  listitem: {
    fontSize: fontPercentage(13),
    padding: heightPercentage(5),
  },
  submitButton: {
    height: heightPercentage(55),
    borderRadius: 10,
    backgroundColor: "#F2F4F6",
    marginTop: heightPercentage(10),
    marginBottom: heightPercentage(10),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingBottom: heightPercentage(15),
    paddingTop: heightPercentage(15),
    paddingLeft: widthPercentage(20),
    paddingRight: widthPercentage(20),
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  pressBeforeTextStyle: {
    color: "#FFF",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
});

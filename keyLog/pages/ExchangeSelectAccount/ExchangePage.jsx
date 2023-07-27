import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { PreventRemoveContext } from "@react-navigation/native";
import ChooseAccount from "./ChooseAccount";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";

const ExchangePage = () => {
  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.s1}>
          <Image
            source={require("../../assets/accountImg/CloseButton.png")}
            style={styles.button}
          />
        </View>
        <View style={styles.s2}>
          <Text style={styles.title}> 하나머니 환전 </Text>
          <Text style={styles.subtitle}>
            환전을 위해 계좌 및 금액을 설정합니다.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <ChooseAccount />
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
        </View>
      </ScrollView>
    </View>
  );
};

export default ExchangePage;

export const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#ffffff",
    flexGrow: 1,
    justifyContent: "space-between",
    minHeight: 560,
  },
  s1: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 12,
    paddingRight: 12,
  },
  button: {
    width: 24,
    height: 24,
  },
  s2: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: "#191F29",
    Text: 23,
    fontWeight: "700",
  },
  subtitle: {
    paddingTop: 9.92,
    flexDirection: "column",
    justifyContent: "center",
  },
  bodyMain: {
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    alignSelf: "stretch",
  },
  accountContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
  },

  accountList: {
    backgroundColor: "#F9FAFB",
    height: 64,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  accountListDefault: {
    color: "#B0B8C1",
    paddingLeft: 10,
    paddingRight: 10,
  },
  selectbutton: {
    marginRight: 20,
  },
  selectCountry: {
    marginLeft: 20,
  },
  MoneyTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
  },
  MoneyTitleContainer: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  MoneyTitle: { color: "#191F29", Text: 16 },
  MoneySubtitle: { color: "#EE3739", Text: 12 },
  CountryList: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#191F29",
    borderStyle: "solid",
    borderWidth: 1,
    height: 65,
  },
  MoneyInput: {
    backgroundColor: "rgba(249, 250, 251, 0.62)",
    marginLeft: 10,
    paddingRight: 20,
    flex: 1,
    textAlign: "right",
    borderRadius: 10,
    height: "100%",
  },
  ForeignCurrencyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    marginTop: 10,
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
    marginTop: 10,
    borderRadius: 10,
    height: 65,
    paddingLeft: 20,
    paddingRight: 20,
  },
  unitText: {
    color: "#191F29",
    fontWeight: "700",
    paddingLeft: 10,
  },
  ExchangerateContainer: {
    marginTop: 30,
  },
  ExchangeTitleContainer: { flexDirection: "row" },
  ExchangeSubtitle: {
    color: "#8B95A1",
    paddingLeft: 10,
  },
  CurrentExchangerateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 65,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 10,
    paddingBottom: 5,
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
    fontSize: 18,
    fontWeight: "700",
  },
  CountryEnglishName: {
    fontSize: 12,
    paddingLeft: 10,
  },
  ChangeRateText: {
    paddingLeft: 10,
    color: "#0A7DF2",
  },
  s3: {
    paddingTop: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  listitem: {
    fontSize: 13,
    padding: 5,
  },
  submitButton: {
    height: 55,
    borderRadius: 10,
    backgroundColor: "#F2F4F6",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    paddingBottom: 15,
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  pressBeforeTextStyle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

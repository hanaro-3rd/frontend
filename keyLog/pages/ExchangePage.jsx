import {
  StyleSheet,
  Text,
  View,
  Modal,
  Image,
  TextInput,
  FlatList,
  Button,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { PreventRemoveContext } from "@react-navigation/native";

const windowDimensions = Dimensions.get("window");
const screenDimensions = Dimensions.get("screen");

const ExchangePage = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.s1}>
          <Image
            source={require("../public/img/CloseButton.png")}
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
          <View style={styles.accountContainer}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.Container}>
                <ScrollView>
                  <View style={styles.s1}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                      <Image
                        source={require("../public/img/CloseButton.png")}
                        style={styles.button}
                      />
                    </Pressable>
                  </View>
                  <View style={styles.s2}>
                    <Text>
                      내 계좌 목록을 가져옵니다. 아래를 읽고 동의해 주세요.
                    </Text>
                    <Text> 개인신용정보 전송요구 및 수집, 이용</Text>

                    <Text> 정보 제공자 </Text>
                    <Text> 하나은행 </Text>

                    <Text>정보 수신자</Text>
                    <Text>KeyLog</Text>

                    <Text>전송 정보</Text>
                  </View>
                </ScrollView>
              </View>
            </Modal>
            <Text style={styles.accountTitle}> 계좌 선택 </Text>
            <Pressable
              style={styles.accountList}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.accountListDefault}>계좌를 선택해주세요</Text>
              <Image
                style={styles.selectbutton}
                source={require("../public/img/SelectButton.png")}
              />
            </Pressable>
          </View>
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
                  source={require("../public/img/USD.png")}
                />
                <Text style={styles.unitText}>USD</Text>
                <Image
                  style={styles.selectbutton}
                  source={require("../public/img/SelectButton.png")}
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
              <Image source={require("../public/img/Korea.png")} />
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
              <View style={styles.buttonContainer}>
                <Pressable style={styles.submitButton}>
                  <Text style={styles.pressBeforeTextStyle}>환전하기</Text>
                </Pressable>
              </View>
            </View>
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
    flex: 1,
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
    flex: 1,
  },
  accountContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 15,
  },
  accountTitle: {
    color: "#191F29",
    Text: 16,
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
    paddingBottom: 15,
    paddingLeft: 25,
    paddingRight: 25,
  },
  listitem: {
    fontSize: 13,
    padding: 10,
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
  },
  pressBeforeTextStyle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

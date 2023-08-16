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
  Keyboard,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import DeleteHeader from "../../components/Header/DeleteHeader";
import CountryChoiceComponent from "../../components/ExchangePageComponents/CountryChoiceComponent";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  widthPercentage,
} from "../../utils/ResponseSize";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getAccount, getExchange, postExchange } from "../../api/api";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import _ from "lodash";
import { useDebouncedEffect } from "../../hooks/useDebouncedEffect";
import AccountConnectPageComponents from "../../components/AccountConnectPageComponents/AccountConnectPageComponents";
import { integerUnit, minimumUnit } from "../../utils/ExchangeSentence";
import Swiper from "react-native-swiper";
import { styled } from "styled-components/native";
import USIcon from "../../assets/Main/CountryIcon.png";
import JapanIcon from "../../assets/Setting/JapanCountryIcon.png";
import EuroIcon from "../../assets/exchangeImg/EUR.png";
export const ExchangePage = () => {
  const [accountList, setAccountList] = useState([]);
  const inputRef = useRef(null);
  const [eur, setEur] = useState({});
  const [usd, setUsd] = useState({});
  const [jpy, setJpy] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState();
  const [accountId, setAccountId] = useState();
  const [accountBalance, setAccountBalance] = useState(false);
  const [selectedMoney, setSelectedMoney] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [changePrice, setChangePrice] = useState();
  const [minimumMoney, setMinimumMoney] = useState(10);
  const [koreaTextInput, setKoreaTextInput] = useState();
  const [subKoreaText, setSubKoreaText] = useState("");
  const [foreignTextInput, setForeignTextInput] = useState();
  const [subForeignText, setSubForeignText] = useState();
  const navigation = useNavigation();
  const handleChooseAccountComponent = () => {
    navigation.navigate("ChooseAccountComponent", {
      page: "ExchangePage",
    });
  };
  const [USD, setUSD] = useState();
  const [EUR, setEUR] = useState();
  const [JPY, setJPY] = useState();
  const [exchangeDate, setExchangeDate] = useState();
  const { exchangeRating } = useQuery("exchange", async () => getExchange(), {
    onSuccess: (response) => {
      console.log(response.data, "메인환율");
      setUSD(response.data.result.usd);
      setEUR(response.data.result.eur);
      setJPY(response.data.result.jpy);
      let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
      let time = {
        year: today.getFullYear(), //현재 년도
        month: today.getMonth() + 1, // 현재 월
        date: today.getDate(), // 현제 날짜
        hours: today.getHours(), //현재 시간
        minutes: today.getMinutes(), //현재 분
      };
      setExchangeDate(
        `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`
      );
    },
    onError: (error) => {
      console.log(error.response.data);
    },
  });
  const queryClient = useQueryClient();
  const { data } = useQuery("account", async () => getAccount(), {
    onSuccess: (response) => {
      setAccountList(response.data.result.accounts);
    },
    onError: (error) => {
      console.log("connect에러" + error);
    },
  });

  const { exchangeData } = useQuery("exchange", async () => getExchange(), {
    onSuccess: (response) => {
      console.log("exchangePage", response.data);
      setJpy(response.data.result.jpy);
      setEur(response.data.result.eur);
      setUsd(response.data.result.usd);
      setExchangeRate(response.data.result.usd.exchangeRate);
    },
    onError: (error) => {
      console.log("exchangePage,exchangeApi에러", error);
    },
  });
  const handleCountryPress = (account) => {
    setSelectedAccount(account);
    setExpanded(false);
  };
  // 1. integer로 바꾸기 (소수점이면 올림으로 하기)
  // 2. 최소금액 설정하기 (USD= 1달러, EUR = 1유로, JPY= 1000엔)
  // 3. 잔액보다 값이 높으면 잔액으로 리턴 => 소수점 걸리면 내림으로 가야함
  const foreignInputChange = (text) => {
    setForeignTextInput(String(text));
    const exchangeKoreaMoney = Math.floor(text * exchangeRate);
    setKoreaTextInput(String(exchangeKoreaMoney));
    if (minimumMoney == 1000) {
      //일본 환전할 시
      if (text % minimumMoney == 0) {
        setSubForeignText("");
      } else {
        setSubForeignText(integerUnit(minimumMoney, selectedMoney));
      }
    }
  };

  const koreaInputChange = (text) => {
    setKoreaTextInput(text);
    console.log("sdf", text / exchangeRate);
    const exchangeMoney = Math.floor(text / exchangeRate);
    setForeignTextInput(`${exchangeMoney}`);
  };

  // Debounce된 함수 생성
  const handleDebouncedInputChange = () => {
    const numericValue = parseInt(koreaTextInput);
    console.log(minimumMoney, "minimumMoney");
    if (isNaN(numericValue)) {
      Keyboard.dismiss();
      return;
    }
    if (numericValue > 1000000) {
      let exchangeMoney = Math.floor(1000000 / exchangeRate);
      console.log("exchangeRate", exchangeRate);
      console.log(exchangeMoney, "exchangeMoney1000000");
      if (selectedMoney == "JPY") {
        exchangeMoney = Math.floor(exchangeMoney / 1000) * 1000;
      }
      const koreaMoney = Math.floor(exchangeMoney * exchangeRate);
      setForeignTextInput(String(exchangeMoney));
      setKoreaTextInput(String(koreaMoney));
      setSubForeignText("최대 환전금액은 원화 기준 100만원입니다.");
      Keyboard.dismiss();
      return;
    }
    if (numericValue / exchangeRate < minimumMoney) {
      const exchangeValue = minimumMoney;
      setForeignTextInput(`${exchangeValue}`);
      const koreaValue = Math.floor(exchangeValue * exchangeRate);
      setKoreaTextInput(`${koreaValue}`);
      setSubForeignText(minimumUnit(minimumMoney, selectedMoney));
    } else {
      if (minimumMoney == 1000) {
        //  foreignTextInput % 1000 == 0 ? setSubForeignText("") : setSubForeignText(integerUnit(minimumMoney,selectedMoney))
        const japanMoney = Math.round(foreignTextInput / 1000) * 1000;
        console.log(japanMoney);
        setForeignTextInput(String(japanMoney));
        setKoreaTextInput(String(Math.floor(japanMoney * exchangeRate)));
      } else {
        setKoreaTextInput(String(Math.floor(foreignTextInput * exchangeRate)));
      }
    }
    Keyboard.dismiss();
  };

  const postExchangeMutation = useMutation(postExchange, {
    onSuccess: (response) => {
      console.log(response.data);
      navigation.navigate("ExchangeSuccess", {
        exchangeFromUnit: response.data.result.exchangeFromUnit,
        exchangeFromMoney: response.data.result.exchangeFromMoney,
        exchangeToUnit: response.data.result.exchangeToUnit,
        exchangeToMoney: response.data.result.exchangeToMoney,
        exchangeRate: response.data.result.exchangeRate,
        changePrice: response.data.result.changePrice
      });
    },
    onError: (error) => {
      console.log(error.response);
    },
  });

  // 입력값이 변경될 때마다 debounce된 함수 실행
  useDebouncedEffect(handleDebouncedInputChange, 1500, [koreaTextInput]);
  // 나머지 로직을 여기에 추가

  const handleExchangeSubmit = () => {
    console.log("accountId", accountId);
    console.log("money", koreaTextInput);
    console.log("unit", selectedMoney);
    postExchangeMutation.mutate({
      isBought: true,
      isBusinessday: true,
      isNow: true,
      unit: selectedMoney,
      money: koreaTextInput,
      accountId: accountId,
    });
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
              {accountList.length > 0 ? (
                <TouchableOpacity
                  onPress={() => handleCountryPress(e.bank + e.accountNum)}
                >
                  <Collapse
                    isExpanded={expanded}
                    onToggle={(isExpanded) =>
                      setExpanded({ isExpanded: false })
                    }
                  >
                    <CollapseHeader>
                      <View style={styles.countrySelect}>
                        <Text style={styles.unitText}>
                          {selectedAccount
                            ? selectedAccount
                            : "계좌를 선택해주세요"}
                        </Text>
                        <Image
                          source={require("../../assets/exchangeImg/SelectButton.png")}
                        />
                      </View>
                    </CollapseHeader>
                    <CollapseBody>
                      {accountList?.map((e, idx) => {
                        return (
                          <TouchableOpacity
                            key={idx}
                            onPress={() => {
                              handleCountryPress(e.bank + e.accountNum);
                              setAccountId(e.accountId);
                              setAccountBalance(e.balance);
                            }}
                          >
                            <View style={styles.countrySelect}>
                              <View style={styles.countrySelectRow}>
                                <Text style={styles.unitText}>
                                  {e.bank} {e.accountNum}
                                </Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        );
                      })}
                    </CollapseBody>
                  </Collapse>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.accountSelect}
                  onPress={handleChooseAccountComponent}
                >
                  <Text style={styles.placeholder}>계좌를 선택해주세요</Text>
                  <Image
                    source={require("../../assets/exchangeImg/SelectButton.png")}
                  />
                </TouchableOpacity>
              )}
              <Text>
                {accountBalance === false
                  ? ""
                  : "통장 잔고: " + accountBalance + "원"}
              </Text>
            </View>
            <View style={styles.moneyContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.containerTitle2}>환전 금액</Text>
                <Text style={styles.containerSubtitle}>
                  휴일 수수료 10%가 적용됩니다
                </Text>
              </View>

              {/* 환율부분 */}

              <View style={styles.koreaWonContainer}>
                <View style={styles.textContainer}>
                  <Image
                    source={require("../../assets/exchangeImg/Korea.png")}
                  />
                  <Text style={styles.unitText2}>KRW</Text>
                </View>
                <TextInput
                  value={koreaTextInput}
                  onChangeText={(text) => koreaInputChange(text)}
                  placeholder="환전할 원화를 입력하세요"
                  keyboardType="numeric"
                  style={{ textAlign: "right" }}
                />
                {/* <Text style={styles.koreaMoneyText}>10,000 ~ 10,000,000</Text> */}
              </View>
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    color: "#8B95A1",
                    fontSize: 12,
                    marginBottom: 10,
                  }}
                >
                  {subKoreaText}
                </Text>
              </View>
              <View style={styles.foreignCurrencyContainer}>
                <CountryChoiceComponent
                  setMinimumMoney={setMinimumMoney}
                  setExchangeRate={setExchangeRate}
                  setSelectedMoney={setSelectedMoney}
                  setKoreaTextInput={setKoreaTextInput}
                  setForeignTextInput={setForeignTextInput}
                  setSubForeignText={setSubForeignText}
                  setSubKoreaText={setSubKoreaText}
                  setChangePrice={setChangePrice}
                />
                <View style={styles.foreignCurrencyInput}>
                  <TextInput
                    placeholder="환전할 외화를 입력하세요"
                    style={{ textAlign: "right" }}
                    onChangeText={(text) => foreignInputChange(text)}
                    value={foreignTextInput}
                    keyboardType="numeric"
                  />
                </View>
              </View>
              <View style={{ width: "100%" }}>
                <Text
                  style={{
                    textAlign: "right",
                    color: "#8B95A1",
                    fontSize: 12,
                    marginBottom: 10,
                  }}
                >
                  {subForeignText}
                </Text>
              </View>
              {/* 환율 부분 */}
            </View>

            <Swiper
              loop={true} // 무한 루프로 스와이프할 수 있도록 설정
              autoplay={true} // 자동 재생 비활성화
              style={styles.exchangeRateContainer}
              showsButtons={false}
              showsPagination={false}
            >
              {[USD, JPY, EUR].map((e, idx) => {
                return (
                  <ExchangeRateContainer key={idx}>
                    <CountryExchangeRateContainer>
                      {idx == 0 && <Image source={USIcon} />}
                      {idx == 1 && <Image source={JapanIcon} />}
                      {idx == 2 && <Image source={EuroIcon} />}
                      <TextContainer>
                        <CountryTextContainer>
                          <CountryContainer>
                            {idx == 0 && <Country>미국</Country>}
                            {idx == 1 && <Country>일본</Country>}
                            {idx == 2 && <Country>유럽</Country>}

                            {idx == 0 && <MoneytaryUnit>USD</MoneytaryUnit>}
                            {idx == 1 && <MoneytaryUnit>JPY</MoneytaryUnit>}
                            {idx == 2 && <MoneytaryUnit>EUR</MoneytaryUnit>}
                          </CountryContainer>
                          {exchangeDate && <DateTime>{exchangeDate}</DateTime>}
                        </CountryTextContainer>

                        {USD && (
                          <RateTextContainer>
                            <ExchangeRate>{e.exchangeRate}</ExchangeRate>
                            {e.changePrice > 0 ? (
                              <ChangeUpRate>▲ {e.changePrice}</ChangeUpRate>
                            ) : (
                              <ChangeRate>▼ {e.changePrice}</ChangeRate>
                            )}
                          </RateTextContainer>
                        )}
                      </TextContainer>
                    </CountryExchangeRateContainer>
                  </ExchangeRateContainer>
                );
              })}
            </Swiper>
            {/* <View style={styles.exchangeRateContainer}>
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
            </View> */}
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
          {koreaTextInput > 0 &&
          foreignTextInput > 0 &&
          selectedAccount != "" ? (
            <TouchableOpacity
              onPress={handleExchangeSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>환전하기</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.disabledButton} disabled>
              <Text style={styles.buttonText}>환전하기</Text>
            </TouchableOpacity>
          )}
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
    gap: 5,
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
    flexDirection: "row",
    height:100,
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
    backgroundColor: "#55acee",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
  },
  disabledButton: {
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
  countrySelect: {
    height: heightPercentage(65),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#191F29",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(20),
    borderRadius: 10,
    width: "100%",
  },
  countrySelectRow: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  unitText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
    width: "90%",
  },
});
const CountryContainer = styled.View`
  width: ${widthPercentage(65)}px;
  height: ${heightPercentage(18)}px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
`;
const ExchangeRateContainer = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(80)}px;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
  gap: 30px;
`;
const CountryExchangeRateContainer = styled.View`
   width: ${widthPercentage(310)}px;
  height: ${heightPercentage(70)}px;
  display: flex;
  padding: ${heightPercentage(5)}px 0px;
  align-items: center;
  gap: 30px;
  flex-direction: row;
`;
const RateTextContainer = styled.View`
  width: ${widthPercentage(70)}px;
  height: ${heightPercentage(36)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  /* gap: 10px; */
`;
const CountryTextContainer = styled.View`
  width: ${widthPercentage(100)}px;
  height: ${heightPercentage(40)}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
const TextContainer = styled.View`
  width: ${widthPercentage(230)}px;
  height: ${heightPercentage(40)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  flex-direction: row;
`;
const Country = styled.Text`
  width: ${widthPercentage(34)}px;
  height: ${heightPercentage(22)}px;
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 700;
`;
const MoneytaryUnit = styled.Text`
  width: ${widthPercentage(26)}px;
  height: ${heightPercentage(14)}px;
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;
const DateTime = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;
const ExchangeRate = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;
const ChangeRate = styled.Text`
  color: #0a7df2;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 700;
`;
const ChangeUpRate = styled.Text`
  color: #ee3739;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 700;
`;

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
  navigation,
} from "react-native";
import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAccount,
  getExchange,
  postExchange,
  getExchangeFromRedis,
} from "../../api/api";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import _ from "lodash";
import { useDebouncedEffect } from "../../hooks/useDebouncedEffect";
import { integerUnit, minimumUnit } from "../../utils/ExchangeSentence";
import styled from "styled-components/native";
import ForeignPayHistoryPage from "../History/ForeignPayHistoryPage";

export const ExchangeToWonPage = ({ route, navigation }) => {
  const [accountList, setAccountList] = useState([]);
  const inputRef = useRef(null);
  const [eur, setEur] = useState({});
  const [usd, setUsd] = useState({});
  const [jpy, setJpy] = useState({});
  const [expanded, setExpanded] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState();
  const [accountId, setAccountId] = useState();
  const [accountBalance, setAccountBalance] = useState(false);
  const [exchangeRate, setExchangeRate] = useState();
  const [changePrice, setChangePrice] = useState();
  const [minimumMoney, setMinimumMoney] = useState();
  const [koreaTextInput, setKoreaTextInput] = useState();
  const [subKoreaText, setSubKoreaText] = useState("");
  const [foreignTextInput, setForeignTextInput] = useState();
  const [subForeignText, setSubForeignText] = useState();
  const [apiTime, setApiTime] = useState([]);
  const [isBought, setIsBought] = useState(false);
  const { Keyunit, Keybalance } = route?.params;
  const placeholderText = `잔액: ${Keybalance}`;
  const [selectedMoney, setSelectedMoney] = useState(Keyunit);
  useEffect(() => {
    setMinimumMoney(Keyunit == "JPY" ? 1000 : 10);
  }, [setMinimumMoney]);

  const handleChooseAccountComponent = () => {
    navigation.navigate("ChooseAccountComponent", {
      page: "ExchangePage",
    });
  };

  const queryClient = useQueryClient();
  const { data } = useQuery("account", async () => getAccount(), {
    onSuccess: (response) => {
      setAccountList(response.data.result.accounts);
    },
    onError: (error) => {
      console.log("connect에러" + error);
    },
  });

  const { exchangeData } = useQuery(
    "exchangefromredis",
    async () => getExchange(),
    {
      onSuccess: (response) => {
        console.log("exchangePageFromRedis", response.data);
        setJpy(response.data.result.jpy);
        setEur(response.data.result.eur);
        setUsd(response.data.result.usd);
        Keyunit == "USD"
          ? (setExchangeRate(response.data.result.usd.exchangeRate),
            setChangePrice(response.data.result.usd.changePrice))
          : Keyunit == "JPY"
          ? (setExchangeRate(response.data.result.jpy.exchangeRate / 100),
            setChangePrice(response.data.result.jpy.changePrice))
          : Keyunit=="EUR" ? (setExchangeRate(response.data.result.eur.exchangeRate),
            setChangePrice(response.data.result.eur.changePrice))
            : (
              setExchangeRate(1),
            setChangePrice(1)
            )
            ;
        setApiTime(response.data.result.updatedAt);
      },
      onError: (error) => {
        console.log("exchangePage,exchangeApi에러2", error);
      },
    }
  );
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

  const handleAllMoney = () => {
    console.log("???", Keybalance);
    setForeignTextInput(String(Keybalance));
    setKoreaTextInput(String(Math.floor(Keybalance * exchangeRate)));
  };

  const postExchangeMutation = useMutation(postExchange, {
    onSuccess: (response) => {
      console.log("postExchange", response.data);
      navigation.navigate("ExchangeSuccess", {
        exchangeFromUnit: response.data.result.exchangeFromUnit,
        exchangeFromMoney: response.data.result.exchangeFromMoney,
        exchangeToUnit: response.data.result.exchangeToUnit,
        exchangeToMoney: response.data.result.exchangeToMoney,
        exchangeUnit: selectedMoney,
        exchangeRate: exchangeRate,
        changePrice: changePrice,
        isBought: isBought,
      });
    },
    onError: (error) => {
      console.log(error); //실패 페이지로 이동
      navigation.navigate("ExchangeFail");
    },
  });

  // 입력값이 변경될 때마다 debounce된 함수 실행
  // useDebouncedEffect(handleDebouncedInputChange, 1500, [koreaTextInput]);
  // 나머지 로직을 여기에 추가

  const handleExchangeSubmit = () => {
    console.log("accountId", accountId);
    console.log("money", koreaTextInput);
    console.log("unit", selectedMoney);
    postExchangeMutation.mutate({
      accountId: accountId,
      changePrice: changePrice,
      exchangeRate: exchangeRate,
      isBought: false,
      money: koreaTextInput,
      moneyToExchange: foreignTextInput,
      unit: selectedMoney,
    });
  };
  return (
    <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../../Images/삭제.png")}
            style={{ width: widthPercentage(24), height: heightPercentage(24) }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>원화 계좌로 송금하기</Text>
          <Text style={styles.subtitle}>
            환전을 위해 계좌 및 금액을 설정합니다.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.accountContainer}>
            <Text style={styles.containerTitle}>계좌 선택</Text>
            {accountList.length > 0 ? (
              <TouchableOpacity>
                <Collapse
                  isExpanded={expanded}
                  onToggle={(isExpanded) => setExpanded({ isExpanded: false })}
                >
                  <CollapseHeader>
                    <View style={styles.countrySelect1}>
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
                    <View style={styles.accountLists}>
                      {accountList?.map((e, idx) => {
                        return (
                          <React.Fragment key={idx}>
                            <TouchableOpacity
                              onPress={() => {
                                handleCountryPress(e.bank + " " + e.accountNum);
                                setAccountId(e.accountId);
                                setAccountBalance(e.balance);
                              }}
                            >
                              <View style={styles.countrySelectRow}>
                                <Text style={styles.unitText}>
                                  {e.bank + " "} {e.accountNum}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            {idx !== accountList.length - 1 && (
                              <View style={styles.separator} />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </View>
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
                : "통장 잔고: " + accountBalance.toLocaleString() + "원"}
            </Text>
          </View>
          <View style={styles.moneyContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.containerTitle2}>환전 금액</Text>
              <Text style={styles.containerSubtitle}></Text>
            </View>

            {/* 환율부분 */}

            <View style={styles.koreaWonContainer}>
              <View style={styles.textContainer}>
                {Keyunit == "USD" ? (
                  <Image
                    source={require("../../assets/exchangeImg/USD.png")}
                    style={{
                      width: widthPercentage(32),
                      height: heightPercentage(30),
                    }}
                  />
                ) : Keyunit == "JPY" ? (
                  <Image
                    source={require("../../assets/exchangeImg/Japan.png")}
                    style={{
                      width: widthPercentage(32),
                      height: heightPercentage(30),
                    }}
                  />
                ) : Keyunit == "EUR" ? (
                  <Image
                    source={require("../../assets/exchangeImg/EUR.png")}
                    style={{
                      width: widthPercentage(32),
                      height: heightPercentage(30),
                    }}
                  />
                ) : (
                  <Image
                    source={require("../../assets/exchangeImg/Korea.png")}
                    style={{
                      width: widthPercentage(32),
                      height: heightPercentage(30),
                    }}
                  />
                )}

                <Text style={styles.unitText2}>{Keyunit}</Text>
              </View>
              <TextInput //외화
                value={foreignTextInput}
                onChangeText={(text) => foreignInputChange(text)}
                placeholder={placeholderText}
                keyboardType="numeric"
                style={{ textAlign: "right" }}
              />
              <TouchableOpacity
                onPress={handleAllMoney}
                style={{
                  borderColor: "#55ACEE",
                  borderWidth: 1,
                  paddingHorizontal: 10,
                  borderRadius: 5,
                  paddingVertical: 5,
                }}
              >
                <Text style={{ color: `#55ACEE` }}>전액</Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  textAlign: "right",
                  color: "#8B95A1",
                  fontSize: 12,
                }}
              >
                {subKoreaText}
              </Text>
            </View>
            <View style={styles.foreignCurrencyContainer}>
              <View style={{ width: 140 }}>
                <TouchableOpacity disabled>
                  <Collapse>
                    <CollapseHeader>
                      <View style={styles.countrySelect2}>
                        <Image
                          source={require("../../assets/exchangeImg/Korea.png")}
                          style={{
                            width: widthPercentage(32),
                            height: heightPercentage(30),
                          }}
                        />
                        <Text style={styles.unitText}>KRW</Text>
                        <Image
                          source={require("../../assets/exchangeImg/SelectButton.png")}
                        />
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </TouchableOpacity>
              </View>
              <View style={styles.foreignCurrencyInput}>
                <TextInput //한화
                  editable={false}
                  style={{ textAlign: "right" }}
                  value={koreaTextInput}
                  placeholder="계좌에 들어갈 금액"
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
          </View>

          {/* 환율 부분 */}
          {Keyunit == "KRW" ? (
            <View />
          ) : (
            <View style={styles.exchangeRateContainer}>
              <View style={styles.titleContainer2}>
                <Text style={styles.containerTitle3}>현재 환율</Text>
                <Text style={styles.containerSubtitle2}>
                  {apiTime != null
                    ? `${apiTime[1]}.${apiTime[2]}. ${apiTime[3]}:${apiTime[4]} 기준`
                    : ""}
                </Text>
              </View>
              
              <View style={styles.currentExchangeRateContainer}>
                <View style={styles.countryInformationContainer}>
                  <Text style={styles.countryText}>
                    {Keyunit == "USD"
                      ? "미국"
                      : Keyunit == "JPY"
                      ? "일본"
                      : "유럽"}
                  </Text>
                  <Text style={styles.unitText3}>{Keyunit}</Text>
                </View>
                <View style={styles.currentExchangeRateTextContainer}>
                  {Keyunit == "JPY" ? (
                    <Text style={styles.exchangeRateText}>
                      {(exchangeRate * 100).toFixed(2)}
                    </Text>
                  ) : (
                    <Text style={styles.exchangeRateText}>{exchangeRate}</Text>
                  )}
                  <Text
                    style={
                      changePrice > 0
                        ? styles.changeRateUp
                        : styles.changeRateDown
                    }
                  >
                    {changePrice > 0 ? "▲" : "▼"}
                    {changePrice}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.informationContainer}>
          <Text style={styles.informationText}></Text>
        </View>
        {koreaTextInput > 0 &&
        foreignTextInput > 0 &&
        selectedAccount !== undefined ? (
          <TouchableOpacity
            onPress={handleExchangeSubmit}
            style={styles.submitButton}
          >
            <Text style={styles.buttonText}>송금하기</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.disabledButton} disabled>
            <Text style={styles.buttonText}>송금하기</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default ExchangeToWonPage;

const styles = StyleSheet.create({
  root: {
    width: "100%",
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
    justifyContent: "space-between",
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
    backgroundColor: "#F2F4F6",
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
  changeRateUp: {
    color: "#f20a0a",
    fontSize: fontPercentage(12),
    fontWeight: "700",
  },
  changeRateDown: {
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
  countrySelect1: {
    height: heightPercentage(65),
    justifyContent: "flex-start",
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
  countrySelect2: {
    height: heightPercentage(65),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#191F29",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(40),
    borderRadius: 10,
  },
  accountLists: {
    borderWidth: 1,
    borderColor: "#191F29",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: widthPercentage(20),
    paddingVertical: heightPercentage(10),
  },
  countrySelectRow: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  unitText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
    width: "90%",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    marginVertical: heightPercentage(10),
  },
});
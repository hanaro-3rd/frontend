import {
  StyleSheet,
  View,
  Text,
  navigation,
  Image,
  TouchableOpacity,
} from "react-native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import React, { useState } from "react";
import DeleteHeader from "../Header/DeleteHeader";
import Vector from "../../assets/accountImg/Vector.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  widthPercentage,
} from "../../utils/ResponseSize";
import { getDetailKeymoneyHistory } from "../../api/api";

export const ExchangeHistoryResult = ({ route, navigation }) => {
  const { keymoney, unit, time, historyId, type, totalBalance, isBoughtText } =
    route.params;
  console.log("뭐라고", isBoughtText);
  const [exchangeRate, setExchangeRate] = useState();
  const [exchangeWon, setExchangeWon] = useState();
  const { data } = useQuery(
    "detailKeymoneyHistory",
    async () => getDetailKeymoneyHistory({ historyId, type }),
    {
      onSuccess: (response) => {
        console.log(response.data);
        console.log("어디있니", historyId, type);
        setExchangeRate(response.data.result.exchangeRate);
        setExchangeWon(response.data.result.exchangeWon);
      },
      onError: () => {},
    }
  );
  const handleNavigation = () => {
    navigation.navigate("ForeignPayHistoryPage", {
      unit,
      balance: totalBalance,
    });
  };
  return (
    <View style={styles.root}>
      <DeleteHeader navigation={navigation} to="KeyMoneyHistoryPage" />
      <View style={styles.bodyHeader}>
        <View style={styles.frame76}>
          <Text style={styles.____}>환전 내역</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.frame79}>
            <Image
              source={require("../../assets/History/환전.png")}
              style={{ width: 40, height: 40 }}
            />
            <View style={styles.wheretochange}>
              <Text style={styles.krwJpy}>KRW </Text>
              {isBoughtText == "원화 환전" ? (
                <Image source={Vector} />
              ) : (
                <Image
                  source={Vector}
                  style={{ transform: [{ rotate: `${180}deg` }] }}
                />
              )}
              <Text style={styles.krwJpy}> {unit}</Text>
            </View>
          </View>
          <View style={styles.frame80}>
            <Text style={styles.____2}>환전 금액</Text>
            <Text style={styles._80000}>
              {unit == "JPY"
                ? "￥"
                : unit == "EUR"
                ? "€"
                : unit == "USD"
                ? "$"
                : "₩"}
              {keymoney.toLocaleString()}
            </Text>
            <Text style={styles.$202307011359}>
              {time[0]}.{time[1]}.{time[2]} {time[3]}:{time[4]}
            </Text>
          </View>
          <View style={styles.exchangeInformationContainer}>
            <View style={styles.exchangeMoneyContainer}>
              <Text style={styles.containerTitle}>환전 금액</Text>
              <View style={styles.exchangeMoneyBox}>
                <View style={styles.koreaMoneyContianer}>
                  <Text style={styles.koreaMoneyUnitText}>KRW</Text>
                  <Text style={styles.koreaMoneyText}>
                    {exchangeWon != undefined
                      ? exchangeWon.toLocaleString()
                      : exchangeWon}
                  </Text>
                </View>
                {isBoughtText == "원화 환전" ? (
                  <Image source={Vector} />
                ) : (
                  <Image
                    source={Vector}
                    style={{ transform: [{ rotate: `${180}deg` }] }}
                  />
                )}
                <View style={styles.foreignMoneyContainer}>
                  <Text style={styles.foreignMoneyUnitText}>{unit}</Text>
                  <Text style={styles.foreignMoneyText}>
                    {keymoney != undefined
                      ? keymoney.toLocaleString()
                      : keymoney}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.exchangeRateContainer}>
              <Text style={styles.containerTitle2}>적용 환율</Text>
              <View style={styles.currentExchangeRateContainer}>
                <View style={styles.countryInformationContainer}>
                  <Text style={styles.countryText}>
                    {unit == "USD" ? "미국" : unit == "JPY" ? "일본" : "유럽"}
                  </Text>
                  <Text style={styles.unitText}>{unit}</Text>
                </View>
                <View style={styles.currentExchangeRateTextContainer}>
                  <Text style={styles.exchangeRateText}>
                    {unit == "JPY"
                      ? exchangeRate * 1000
                      : exchangeRate?.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity style={styles.frame17} onPress={handleNavigation}>
            <Text style={styles.____3}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ExchangeHistoryResult;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
  },
  headerBack: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: heightPercentage(13),
    paddingHorizontal: widthPercentage(12),
  },
  ____: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "700",
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
  frame76: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
  },
  krwJpy: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(20),
    fontStyle: "normal",
    fontWeight: "700",
  },
  body: {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
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
    paddingVertical: heightPercentage(30),
    paddingHorizontal: widthPercentage(25),
  },
  frame79: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(10),
  },
  ____2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  _80000: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(30),
    fontStyle: "normal",
    fontWeight: "700",
  },
  $202307011359: {
    color: "#4E5968",
    fontFamily: "Inter",
    fontSize: fontPercentage(14),
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame80: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(10),
  },
  containerTitle: {
    alignSelf: "stretch",
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  koreaMoneyUnitText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  koreaMoneyText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
    alignSelf: "stretch",
  },
  exchangeMoneyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(10),
    alignSelf: "stretch",
  },
  exchangeMoneyBox: {
    width: "100%",
    height: heightPercentage(65),
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(20),
    borderRadius: 5,
  },
  koreaMoneyContianer: {
    width: 130,
    alignItems: "center",
    gap: widthPercentage(10),
    flexShrink: 0,
    flexDirection: "row",
  },
  foreignMoneyUnitText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  foreignMoneyText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  foreignMoneyContainer: {
    alignItems: "center",
    gap: 10,
    flexShrink: 0,
    flexDirection: "row",
  },
  containerTitle2: {
    alignSelf: "stretch",
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  countryText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(18),
    fontStyle: "normal",
    fontWeight: "700",
  },
  unitText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(12),
    fontStyle: "normal",
    fontWeight: "400",
  },
  exchangeRateContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
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
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  currentExchangeRateTextContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  ____3: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  bodyFooter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  frame17: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
  },
  wheretochange: {
    flexDirection: "row",
    alignItems: "center",
  },
});

import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Close from "../../assets/accountImg/CloseButton.png";
import Success from "../../assets/exchangeImg/Success.png";
import Vector from "../../assets/accountImg/Vector.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";
import { styled } from "styled-components/native";
import { connectSuccess, exchangeSucess } from "../../utils/image";
import { useQueryClient } from "react-query";
import { useEffect } from "react";
const ExchangeSuccess = ({ navigation, route }) => {
  const {
    exchangeToUnit,
    exchangeToMoney,
    exchangeFromMoney,
    exchangeFromUnit,
    exchangeRate,
    changePrice,
    isBought,
  } = route?.params;
  const queryClient =  useQueryClient()
  useEffect(() => {
    queryClient.invalidateQueries("keymoney")
  }, []);

  return (
    <View style={styles.root}>
      <View>
        <DeleteHeader navigation={navigation} to="MainPage" />
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.title}>환전 완료</Text>
            <Text style={styles.subtitle}>
              환전이 완료되었어요. 키머니를 확인해주세요.
            </Text>
          </View>
          <View style={styles.bodyMain}>
            <View style={styles.mainIconContainer}>
              <Image
                source={{ uri: exchangeSucess }}
                style={{
                  width: widthPercentage(150),
                  height: heightPercentage(150),
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.exchangeInformationContainer}>
              <View style={styles.exchangeMoneyContainer}>
                <Text style={styles.containerTitle}>환전 금액</Text>
                <View style={styles.exchangeMoneyBox}>
                  <View style={styles.koreaMoneyContianer}>
                    <Text style={styles.koreaMoneyUnitText}>
                      {exchangeToUnit}
                    </Text>
                    <Text style={styles.koreaMoneyText}>
                      {exchangeToMoney.toLocaleString()}
                    </Text>
                  </View>
                  <Image source={Vector} />
                  <View style={styles.foreignMoneyContainer}>
                    <Text style={styles.foreignMoneyUnitText}>
                      {exchangeFromUnit}
                    </Text>
                    <Text style={styles.foreignMoneyText}>
                      {exchangeFromMoney.toLocaleString()}
                    </Text>
                  </View>
                </View>
              </View>
              {exchangeToUnit != "KRW" ? (
                <View style={styles.exchangeRateContainer}>
                  <Text style={styles.containerTitle2}>적용 환율</Text>
                  <View style={styles.currentExchangeRateContainer}>
                    <View style={styles.countryInformationContainer}>
                      <Text style={styles.countryText}>
                        {(exchangeToUnit == "USD" && "미국") ||
                          (exchangeToUnit == "EUR" && "유럽") ||
                          (exchangeToUnit == "JPY" && "일본")}
                      </Text>
                      <Text style={styles.unitText}>{exchangeToUnit}</Text>
                    </View>
                    <View style={styles.currentExchangeRateTextContainer}>
                      <Text style={styles.exchangeRateText}>
                        {exchangeToUnit == "JPY"
                          ? exchangeRate * 1000
                          : exchangeRate?.toFixed(2)}
                      </Text>
                      {changePrice > 0 ? (
                        <ChangeUpRate>▲ {changePrice}</ChangeUpRate>
                      ) : (
                        <ChangeRate>▼ {changePrice}</ChangeRate>
                      )}
                    </View>
                  </View>
                </View>
              ) : (
                <View />
              )}
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate("KeyMoneyHistoryPage")}
        >
          <Text style={styles.buttonText}>키머니 확인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ExchangeSuccess;

export const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "stretch",
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
    fontStyle: "normal",
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "400",
  },
  body: {
    flexDirection: "column",
    alignItems: "flex-start",
    alignSelf: "stretch",
  },
  bodyHeader: {
    flexDirection: "column",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(20),
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
    flexGrow: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingHorizontal: widthPercentage(25),
  },
  mainIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: heightPercentage(10),
  },
  containerTitle: {
    alignSelf: "stretch",
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  koreaMoneyUnitText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  koreaMoneyText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
  },
  exchangeMoneyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(10),
    alignSelf: "stretch",
  },
  exchangeMoneyBox: {
    width: widthPercentage(350),
    height: heightPercentage(65),
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(25),
    borderRadius: 5,
  },
  koreaMoneyContianer: {
    width: widthPercentage(130),
    alignItems: "center",
    gap: widthPercentage(10),
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
    width: widthPercentage(130),
    justifyContent: "flex-end",
    gap: widthPercentage(10),
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
    fontSize: fontPercentage(18),
    fontStyle: "normal",
    fontWeight: "700",
  },
  unitText: {
    color: "#191F29",
    fontSize: fontPercentage(12),
    fontStyle: "normal",
    fontWeight: "400",
  },
  exchangeRateContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(10),
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
    gap: widthPercentage(10),
    flexDirection: "row",
  },
  exchangeRateText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
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
    gap: widthPercentage(10),
    flexDirection: "row",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
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

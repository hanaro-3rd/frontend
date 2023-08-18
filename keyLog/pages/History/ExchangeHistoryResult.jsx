import { StyleSheet, View, Text, navigation, Image } from "react-native";
import DeleteHeader from "../../components/Header/DeleteHeader";
import Vector from "../../assets/accountImg/Vector.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  widthPercentage,
} from "../../utils/ResponseSize";

export const ExchangeHistoryResult = ({ navigation }) => {
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
            <Text style={styles.krwJpy}>KRW -> JPY</Text>
          </View>
          <View style={styles.frame80}>
            <Text style={styles.____2}>환전 금액</Text>
            <Text style={styles._80000}>￥80,000</Text>
            <Text style={styles.$202307011359}>2023.07.01 13:59</Text>
          </View>
          <View style={styles.exchangeInformationContainer}>
            <View style={styles.exchangeMoneyContainer}>
              <Text style={styles.containerTitle}>환전 금액</Text>
              <View style={styles.exchangeMoneyBox}>
                <View style={styles.koreaMoneyContianer}>
                  <Text style={styles.koreaMoneyUnitText}>KRW</Text>
                  <Text style={styles.koreaMoneyText}>730,000</Text>
                </View>
                <Image source={Vector} />
                <View style={styles.foreignMoneyContainer}>
                  <Text style={styles.foreignMoneyUnitText}>JPY</Text>
                  <Text style={styles.foreignMoneyText}>80,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.exchangeRateContainer}>
              <Text style={styles.containerTitle2}>적용 환율</Text>
              <View style={styles.currentExchangeRateContainer}>
                <View style={styles.countryInformationContainer}>
                  <Text style={styles.countryText}>일본</Text>
                  <Text style={styles.unitText}>JPY</Text>
                </View>
                <View style={styles.currentExchangeRateTextContainer}>
                  <Text style={styles.exchangeRateText}>1,294.50</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.bodyFooter}>
          <View style={styles.frame17}>
            <Text style={styles.____3}>저장하기</Text>
          </View>
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
});

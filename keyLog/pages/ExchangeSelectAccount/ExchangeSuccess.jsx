import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Close from "../../assets/accountImg/CloseButton.png";
import Success from "../../assets/exchangeImg/Success.png";
import Vector from "../../assets/accountImg/Vector.png";
// import theme from "../../theme";

const ExchangeSuccess = () => {
  return (
    <View style={styles.root}>
      <View>
        <View style={styles.header}>
          <Image source={Close} />
        </View>
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.title}>환전 완료</Text>
            <Text style={styles.subtitle}>
              환전이 완료되었어요. 하나머니를 확인해주세요.
            </Text>
          </View>
          <View style={styles.bodyMain}>
            <View style={styles.mainIconContainer}>
              <Image
                source={Success}
                style={{ width: 100, height: 100 }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.exchangeInformationContainer}>
              <View style={styles.exchangeMoneyContainer}>
                <Text style={styles.containerTitle}>환전 금액</Text>
                <View style={styles.exchangeMoneyBox}>
                  <View style={styles.koreaMoneyContianer}>
                    <Text style={styles.koreaMoneyUnitText}>KRW</Text>
                    <Text style={styles.koreaMoneyText}>1,300,000</Text>
                  </View>
                  <Image source={Vector} />
                  <View style={styles.foreignMoneyContainer}>
                    <Text style={styles.foreignMoneyUnitText}>USD</Text>
                    <Text style={styles.foreignMoneyText}>1,000</Text>
                  </View>
                </View>
              </View>
              <View style={styles.exchangeRateContainer}>
                <Text style={styles.containerTitle2}>적용 환율</Text>
                <View style={styles.currentExchangeRateContainer}>
                  <View style={styles.countryInformationContainer}>
                    <Text style={styles.countryText}>미국</Text>
                    <Text style={styles.unitText}>USD</Text>
                  </View>
                  <View style={styles.currentExchangeRateTextContainer}>
                    <Text style={styles.exchangeRateText}>1,294.50</Text>
                    <Text style={styles.changeRateText}>▼ 12.00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>하나머니 확인하기</Text>
        </View>
      </View>
    </View>
  );
};
export default ExchangeSuccess;

const { height } = Dimensions.get("window");

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
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 12,
  },
  title: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 16,
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
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    flexGrow: 1,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingHorizontal: 25,
  },
  mainIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
  },
  containerTitle: {
    alignSelf: "stretch",
    color: "#191F29",
    fontSize: 16,
    fontWeight: "700",
  },
  koreaMoneyUnitText: {
    color: "#191F29",
    fontSize: 16,
    fontWeight: "700",
  },
  koreaMoneyText: {
    color: "#191F29",
    fontSize: 16,
    fontWeight: "400",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
  exchangeMoneyContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
  },
  exchangeMoneyBox: {
    width: 350,
    height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  koreaMoneyContianer: {
    width: 130,
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  foreignMoneyUnitText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  foreignMoneyText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  foreignMoneyContainer: {
    width: 130,
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  containerTitle2: {
    alignSelf: "stretch",
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  countryText: {
    color: "#191F29",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
  unitText: {
    color: "#191F29",
    fontSize: 12,
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
    height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 20,
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
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  changeRateText: {
    color: "#0A7DF2",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  currentExchangeRateTextContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  footer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  submitButton: {
    height: 55,
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
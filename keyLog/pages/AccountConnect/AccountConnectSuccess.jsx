import { StyleSheet, View, Text, Image } from "react-native";
import Close from "../../assets/accountImg/CloseButton.png";
import Success from "../../assets/accountImg/AccountSuccess.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";

const AccountConnectSuccess = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <DeleteHeader navigation={navigation} to="MainPage" />
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>계좌 연결 완료</Text>
          <Text style={styles.subtitle}>
            연결이 완료되었어요. 계좌 목록을 확인해주세요.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.mainIconContainer}>
            <Image source={Success} />
          </View>
          <View style={styles.frame91}>
            <Text style={styles.containerTitle}>계좌 정보</Text>
            <View style={styles.exchangeInformationContainer}>
              <View style={styles.exchangeMoneyContainer}>
                <Text style={styles.containerTitle2}>은행</Text>
                <Text style={styles.containerTitle3}>신한은행</Text>
              </View>
              <View style={styles.exchangeMoneyContainer2}>
                <Text style={styles.containerTitle4}>계좌번호</Text>
                <Text style={styles.containerTitle5}>302-9556-4022-11</Text>
              </View>
              <View style={styles.exchangeRateContainer}>
                <Text style={styles.containerTitle6}>잔액</Text>
                <Text style={styles.containerTitle7}>1,385,123 원</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>확인하기</Text>
        </View>
      </View>
    </View>
  );
};
export default AccountConnectSuccess;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
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
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontFamily: "Inter",
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
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: 0,
    paddingHorizontal: widthPercentage(25),
  },
  mainIconContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gaps: heightPercentage(10),
    paddingVertical: heightPercentage(29),
  },
  containerTitle: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(18),
    fontWeight: "700",
  },
  containerTitle2: {
    width: widthPercentage(60),
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  containerTitle3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  frame91: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: heightPercentage(20),
    alignSelf: "stretch",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
    alignSelf: "stretch",
  },
  exchangeMoneyContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  containerTitle4: {
    width: widthPercentage(60),
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  containerTitle5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  exchangeMoneyContainer2: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  containerTitle6: {
    width: widthPercentage(60),
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  containerTitle7: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  exchangeRateContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  buttonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
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
    padding: heightPercentage(10),
    borderRadius: 10,
  },
});

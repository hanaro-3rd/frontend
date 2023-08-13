import { StyleSheet, View, Text, Image } from "react-native";
import Close from "../../assets/accountImg/CloseButton.png";
import Fail from "../../assets/accountImg/AccountFail.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";

const AccountConnectFail = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <DeleteHeader navigation={navigation} to="MainPage" />
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>연결 실패</Text>
          <Text style={styles.subtitle}>
            연결에 실패했어요. 다시 시도해주세요.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.mainIconContainer}>
            <Image source={Fail} />
          </View>
          <View style={styles.exchangeInformationContainer}>
            <View style={styles.informationContainer}>
              <Text style={styles.informationText}>
                계속해서 실패할 경우 아래로 문의해주세요.
              </Text>
              <Text style={styles.informationText2}>
                02)5645-4651 / 02)5645-4651
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>다시하기</Text>
        </View>
      </View>
    </View>
  );
};
export default AccountConnectFail;

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
    paddingHorizontal: widthPercentage(25),
  },
  mainIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(10),
    flexDirection: "row",
    paddingVertical: heightPercentage(29),
  },
  informationText: {
    color: "#4E5968",
    fontFamily: "Inter",
    fontSize: fontPercentage(13),
    fontWeight: "400",
  },
  informationText2: {
    color: "#4E5968",
    fontFamily: "Inter",
    fontSize: fontPercentage(13),
    fontWeight: "400",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: heightPercentage(20),
  },
  informationContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
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
    padding: widthPercentage(10),
    borderRadius: 10,
  },
});

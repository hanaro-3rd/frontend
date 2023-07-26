import { StyleSheet, View, Text, Image } from "react-native";
import Close from "../../assets/accountImg/CloseButton.png";
import FailImg from "../../assets/exchangeImg/Fail.png";

const ExchangeFail = () => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={Close} />
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>환전 실패</Text>
          <Text style={styles.subtitle}>
            환전에 실패했어요. 다시 시도해주세요.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.mainIconContainer}>
            <Image source={FailImg} />
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
export default ExchangeFail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#fff",
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
    fontSize: 23,
    fontWeight: "700",
  },
  subtitle: {
    color: "#8B95A1",
    fontSize: 16,
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
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  FailImg: {
    width: 150,
    height: 150,
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: 0,
    paddingHorizontal: 25,
  },
  mainIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    paddingVertical: 29,
    paddingHorizontal: 0,
  },
  informationText: {
    color: "#4E5968",
    fontSize: 13,
    fontWeight: "400",
  },
  informationText2: {
    color: "#4E5968",
    fontSize: 13,
    fontWeight: "400",
  },
  exchangeInformationContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
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
    fontSize: 16,
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

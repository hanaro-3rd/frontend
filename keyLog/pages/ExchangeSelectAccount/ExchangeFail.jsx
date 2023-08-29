import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";
import { Fail } from "../../utils/image";

const ExchangeFail = ({ navigation }) => {
  const handleAgain = () => {
    navigation.navigate("ExchangePage");
  };

  return (
    <View style={styles.root}>
      <DeleteHeader navigation={navigation} to="MainPage" />
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>환전 실패</Text>
          <Text style={styles.subtitle}>
            계좌 잔액이 부족해 환전에 실패했어요. {"\n"} 다시 시도해주세요.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.mainIconContainer}>
            <Image
              source={{ uri: Fail }}
              style={{
                width: widthPercentage(150),
                height: heightPercentage(150),
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleAgain} style={styles.submitButton}>
          <Text style={styles.buttonText}>다시하기</Text>
        </TouchableOpacity>
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
    gap: heightPercentage(10),
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
    paddingVertical: heightPercentage(10),
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
  FailImg: {
    width: 150,
    height: 150,
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
    paddingVertical: heightPercentage(80),
  },
  informationText: {
    color: "#4E5968",
    fontSize: fontPercentage(13),
    fontWeight: "400",
  },
  informationText2: {
    color: "#4E5968",
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
    padding: 10,
    borderRadius: 10,
  },
});

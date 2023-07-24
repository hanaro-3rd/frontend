import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CloseButton from "../../assets/CloseButton.png";
import SelectButton from "../../assets/SelectButton.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TravelSchedulePage = () => {
  const navigation = useNavigation();

  const handleNextButtonPress = () => {
    navigation.navigate("TravelBudgetPlanPage");
  };

  const handleGoBackToBudgetPage = () => {
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBackToBudgetPage}>
          <Image source={CloseButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>계획 작성</Text>
          <Text style={styles.subtitle}>
            계획중인 여행의 정보를 작성해주세요.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.travelTitleContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.containerTitle}>여행 제목</Text>
              <Text style={styles.textSize}>0 / 20</Text>
            </View>
            <View style={styles.input}>
              <Text style={styles.placeHolder}>이름없는 여행1</Text>
            </View>
          </View>
          <View style={styles.travelPlaceContainer}>
            <View style={styles.titleContainer2}>
              <Text style={styles.containerTitle2}>여행지</Text>
              <Text style={styles.textSize2}>0 / 10</Text>
            </View>
            <View style={styles.frame109}>
              <View style={styles.input2}>
                <Text style={styles.placeHolder2}>나라</Text>
                <View style={styles.selectButton2}>
                  <Image source={SelectButton} />
                </View>
              </View>
              <View style={styles.input3}>
                <Text style={styles.placeHolder3}>도시 (선택)</Text>
              </View>
            </View>
          </View>
          <View style={styles.travelPeriodContainer}>
            <View style={styles.titleContainer3}>
              <Text style={styles.containerTitle3}>여행 기간</Text>
            </View>
            <View style={styles.selectContainer}>
              <View style={styles.startSelect}>
                <View style={styles.selectButton4}>
                  <Image source={SelectButton} />
                </View>
              </View>
              <View style={styles.endSelect}>
                <View style={styles.selectButton6}>
                  <Image source={SelectButton} />
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleNextButtonPress}
          >
            <Text style={styles.buttonText}>다음</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default TravelSchedulePage;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 844,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
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
  containerTitle: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  textSize: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    padding: 20,
  },
  travelTitleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  placeHolder: {
    color: "#B0B8C1",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  containerTitle2: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  textSize2: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  travelPlaceContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer2: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  placeHolder2: {
    color: "#B0B8C1",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame109: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  input2: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectButton2: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  placeHolder3: {
    color: "#B0B8C1",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input3: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  containerTitle3: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  travelPeriodContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer3: {
    alignItems: "flex-start",
    gap: 10,
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  selectContainer: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  startSelect: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectButton4: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  endSelect: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  selectButton6: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
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
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
  },
});

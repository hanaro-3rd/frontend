import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import CloseButton from "../../assets/CloseButton.png";
import AddButton from "../../assets/add.png";

const TravelBudgetPage = () => {
  const navigation = useNavigation();

  const handleTravelCardPress = () => {
    navigation.navigate("TravelBudgetDetailPage");
  };

  // const handleGoBack = () => {
  //   navigation.navigate("MainPage");
  // };

  const handleGoToTravelSchedule = () => {
    navigation.navigate("TravelSchedulePage");
  };

  const handleGoBackToMainPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainPage" }],
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.header}>
        {/* <TouchableOpacity onPress={handleGoToTravelSchedule}> */}
        <TouchableOpacity onPress={handleGoBackToMainPage}>
          <Image source={CloseButton} />
        </TouchableOpacity>
        {/* </TouchableOpacity> */}
        <TouchableOpacity onPress={handleGoToTravelSchedule}>
          <Image source={AddButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>내 경비 계획</Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.yearContainer}>
            <Text style={styles.yearText}>2023</Text>
            <TouchableOpacity onPress={handleTravelCardPress}>
              <View style={styles.travelCard}>
                <View style={styles.titleTextContainer}>
                  <Text style={styles.period}>2023.07.01 ~ 2023.07.10</Text>
                  <View style={styles.titleContainer}>
                    <Text style={styles.title2}>첫 도쿄 여행</Text>
                    <Text style={styles.cityText}>일본, 도쿄</Text>
                  </View>
                </View>
                <View style={styles.frame110}>
                  <Text style={styles.remainCost}>총 비용 ￥100,000</Text>
                  <Text style={styles.remainCost2}>남은 비용 ￥100,000</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.travelCard2}>
              <View style={styles.titleTextContainer2}>
                <Text style={styles.period2}>2023.02.01 ~ 2023.02.10</Text>
                <View style={styles.titleContainer2}>
                  <Text style={styles.title3}>친구들이랑 부산 여행</Text>
                  <Text style={styles.cityText2}>대한민국, 부산</Text>
                </View>
              </View>
              <View style={styles.frame1102}>
                <Text style={styles.remainCost3}>총 비용 ￦100,000</Text>
                <Text style={styles.remainCost4}>남은 비용 ￦100,000</Text>
              </View>
            </View>
          </View>
          <View style={styles.yearContainer2}>
            <Text style={styles.yearText2}>2023</Text>
            <View style={styles.travelCard3}>
              <View style={styles.titleTextContainer3}>
                <Text style={styles.period3}>2023.07.01 ~ 2023.07.10</Text>
                <View style={styles.titleContainer3}>
                  <Text style={styles.title4}>첫 도쿄 여행</Text>
                  <Text style={styles.cityText3}>일본, 도쿄</Text>
                </View>
              </View>
              <View style={styles.frame1103}>
                <Text style={styles.remainCost5}>총 비용 ￥100,000</Text>
                <Text style={styles.remainCost6}>남은 비용 ￥100,000</Text>
              </View>
            </View>
            <View style={styles.travelCard4}>
              <View style={styles.titleTextContainer4}>
                <Text style={styles.period4}>2023.02.01 ~ 2023.02.10</Text>
                <View style={styles.titleContainer4}>
                  <Text style={styles.title5}>친구들이랑 부산 여행</Text>
                  <Text style={styles.cityText4}>대한민국, 부산</Text>
                </View>
              </View>
              <View style={styles.frame1104}>
                <Text style={styles.remainCost7}>총 비용 ￦100,000</Text>
                <Text style={styles.remainCost8}>남은 비용 ￦100,000</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TravelBudgetPage;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 844,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
  },
  header: {
    justifyContent: "space-between",
    alignItems: "flex-start",
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
  body: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  bodyHeader: {
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  yearText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  period: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
  title2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  cityText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 20,
    alignSelf: "stretch",
  },
  yearContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 15,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    padding: 20,
  },
  travelCard: {
    width: 350,
    height: 85,
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#55ACEE",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  titleTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  remainCost: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  remainCost2: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame110: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  period2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
  title3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  cityText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  travelCard2: {
    width: 350,
    height: 85,
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#55ACEE",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  titleTextContainer2: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer2: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  remainCost3: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  remainCost4: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame1102: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  yearText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  period3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
  title4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  cityText3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  yearContainer2: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 15,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    padding: 20,
  },
  travelCard3: {
    width: 350,
    height: 85,
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#55ACEE",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  titleTextContainer3: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer3: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  remainCost5: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  remainCost6: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame1103: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  period4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
  title5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  cityText4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  travelCard4: {
    width: 350,
    height: 85,
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#55ACEE",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
  titleTextContainer4: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
  },
  titleContainer4: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  remainCost7: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  remainCost8: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame1104: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FoodIcon from "../../assets/travelBudget/FoodIcon.png";
import TransIcon from "../../assets/travelBudget/TransIcon.png";
import HouseIcon from "../../assets/travelBudget/HouseIcon.png";
import ShopIcon from "../../assets/travelBudget/ShopIcon.png";
import PlayIcon from "../../assets/travelBudget/PlayIcon.png";
import EtcIcon from "../../assets/travelBudget/EtcIcon.png";
import arrow_back from "../../assets/travelBudget/arrow_back.png";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TravelBudgetPlanPage = () => {
  const navigation = useNavigation();

  const handleGoBackToSchedulePage = () => {
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBackToSchedulePage}>
          <Image source={arrow_back} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>경비 작성</Text>
          <Text style={styles.subtitle}>
            카테고리별 여행 경비를 작성해주세요.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.budgetListContainer}>
            <View style={styles.budgetContainer}>
              <View style={styles.categoryContainer}>
                <View style={styles.icon}>
                  <Image source={FoodIcon} />
                </View>
                <Text style={styles.categotyText}>식비</Text>
              </View>
              <View style={styles.input}>
                {/* <Text style={styles.budgetText}>0</Text> */}
                <TextInput
                  // style={styles.budgetInput}
                  keyboardType="numeric"
                  placeholder="0"
                />
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer}>
              <View style={styles.categoryContainer}>
                <Image source={TransIcon} />
                <Text style={styles.categotyText}>교통</Text>
              </View>
              <View style={styles.input}>
                <Text style={styles.budgetText}>0</Text>
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer}>
              <View style={styles.categoryContainer}>
                <Image source={HouseIcon} />
                <Text style={styles.categotyText}>숙박</Text>
              </View>
              <View style={styles.input}>
                <Text style={styles.budgetText}>0</Text>
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer}>
              <View style={styles.categoryContainer}>
                <Image source={ShopIcon} />
                <Text style={styles.categotyText}>쇼핑 · 편의점 · 마트</Text>
              </View>
              <View style={styles.input}>
                <Text style={styles.budgetText}>0</Text>
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer}>
              <View style={styles.categoryContainer}>
                <Image source={PlayIcon} />
                <Text style={styles.categotyText}>문화 · 여가</Text>
              </View>
              <View style={styles.input}>
                <Text style={styles.budgetText}>0</Text>
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer}>
              <View style={styles.categoryContainer}>
                <Image source={EtcIcon} />
                <Text style={styles.categotyText}>기타</Text>
              </View>
              <View style={styles.input}>
                <Text style={styles.budgetText}>0</Text>
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
          </View>
          <View style={styles.budgetTotalContainer}>
            <View style={styles.categoryTotalContainer}>
              <Text style={styles.totalText}>총</Text>
            </View>
            <View style={styles.inputTotal}>
              <Text style={styles.budgetTotalText}>0</Text>
              <Text style={styles.moneyTotalUnitText}>￥</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.submitButton}>
          <Text style={styles.buttonText}>저장하기</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TravelBudgetPlanPage;

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 900,
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
  bodyMain: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  budgetListContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
    alignSelf: "stretch",
  },
  budgetContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryContainer: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  icon: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 5,
  },
  categotyText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  budgetText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  moneyUnitText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "2px solid #F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
    borderBottomWidth: 2,
    borderBottomColor: "#F2F4F6",
  },
  totalText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  budgetTotalContainer: {
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#8B95A1",
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 19,
  },
  categoryTotalContainer: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetTotalText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  moneyTotalUnitText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  inputTotal: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
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
  budgetInput: {
    fontSize: 16,
    color: "#191F29",
    fontStyle: "normal",
    fontWeight: "400",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  budgetTotalInput: {
    fontSize: 24,
    color: "#191F29",
    fontStyle: "normal",
    fontWeight: "700",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

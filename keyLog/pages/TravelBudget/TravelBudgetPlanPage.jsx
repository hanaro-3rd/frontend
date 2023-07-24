import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import FoodIcon from "../../assets/FoodIcon.png";
import TransIcon from "../../assets/TransIcon.png";
import HouseIcon from "../../assets/HouseIcon.png";
import ShopIcon from "../../assets/ShopIcon.png";
import PlayIcon from "../../assets/PlayIcon.png";
import EtcIcon from "../../assets/EtcIcon.png";
import arrow_back from "../../assets/arrow_back.png";
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
                <Text style={styles.budgetText}>0</Text>
                <Text style={styles.moneyUnitText}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer2}>
              <View style={styles.categoryContainer2}>
                <Image source={TransIcon} />
                <Text style={styles.categotyText2}>교통</Text>
              </View>
              <View style={styles.input2}>
                <Text style={styles.budgetText2}>0</Text>
                <Text style={styles.moneyUnitText2}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer3}>
              <View style={styles.categoryContainer3}>
                <Image source={HouseIcon} />
                <Text style={styles.categotyText3}>숙박</Text>
              </View>
              <View style={styles.input3}>
                <Text style={styles.budgetText3}>0</Text>
                <Text style={styles.moneyUnitText3}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer4}>
              <View style={styles.categoryContainer4}>
                <Image source={ShopIcon} />
                <Text style={styles.categotyText4}>쇼핑 · 편의점 · 마트</Text>
              </View>
              <View style={styles.input4}>
                <Text style={styles.budgetText4}>0</Text>
                <Text style={styles.moneyUnitText4}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer5}>
              <View style={styles.categoryContainer5}>
                <Image source={PlayIcon} />
                <Text style={styles.categotyText5}>문화 · 여가</Text>
              </View>
              <View style={styles.input5}>
                <Text style={styles.budgetText5}>0</Text>
                <Text style={styles.moneyUnitText5}>￥</Text>
              </View>
            </View>
            <View style={styles.budgetContainer6}>
              <View style={styles.categoryContainer6}>
                <Image source={EtcIcon} />
                <Text style={styles.categotyText6}>기타</Text>
              </View>
              <View style={styles.input6}>
                <Text style={styles.budgetText6}>0</Text>
                <Text style={styles.moneyUnitText6}>￥</Text>
              </View>
            </View>
          </View>
          <View style={styles.budgetContainer7}>
            <View style={styles.categoryContainer7}>
              <Text style={styles.totalText}>총</Text>
            </View>
            <View style={styles.input7}>
              <Text style={styles.budgetText7}>0</Text>
              <Text style={styles.moneyUnitText7}>￥</Text>
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
  },
  icon2: {
    width: 30,
    height: 30,
  },
  categotyText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  budgetContainer2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryContainer2: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  moneyUnitText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input2: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "2px solid #F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  icon3: {
    width: 30,
    height: 30,
  },
  categotyText3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  budgetContainer3: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "stretch",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryContainer3: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetText3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  moneyUnitText3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input3: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "2px solid #F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  icon4: {
    width: 30,
    height: 30,
  },
  categotyText4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  budgetContainer4: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
    alignSelf: "stretch",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryContainer4: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetText4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  moneyUnitText4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input4: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "2px solid #F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  icon5: {
    width: 30,
    height: 30,
  },
  categotyText5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  budgetContainer5: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
    alignSelf: "stretch",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryContainer5: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetText5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  moneyUnitText5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input5: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "2px solid #F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  icon6: {
    width: 30,
    height: 30,
  },
  categotyText6: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  budgetContainer6: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
    alignSelf: "stretch",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  categoryContainer6: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetText6: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  moneyUnitText6: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  input6: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "2px solid #F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  totalText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  budgetContainer7: {
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
  },
  categoryContainer7: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  budgetText7: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  moneyUnitText7: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  input7: {
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
});

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CloseButton from "../../assets/CloseButton.png";
import DeleteButton from "../../assets/delete.png";
import EditButton from "../../assets/edit.png";
import FoodIcon from "../../assets/FoodIcon.png";
import TransIcon from "../../assets/TransIcon.png";
import HouseIcon from "../../assets/HouseIcon.png";
import ShopIcon from "../../assets/ShopIcon.png";
import SelectButton from "../../assets/SelectButton.png";
import { useNavigation } from "@react-navigation/native";

const TravelBudgetDetailPage = () => {
  const navigation = useNavigation();

  const handleGoBackToBudgetPage = () => {
    navigation.goBack();
  };
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBackToBudgetPage}>
          <Image source={CloseButton} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <Image source={DeleteButton} />
          <Image source={EditButton} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>경비 계획 상세</Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.mainTextContainer}>
            <Text style={styles.periodText}>2023.07.01 ~ 2023.07.10</Text>
            <Text style={styles.titleText}>첫 도쿄 여행</Text>
            <Text style={styles.cityText}>일본, 도쿄</Text>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.categoryPaymentContainer}>
              <View style={styles.categoryCardContainer}>
                <View style={styles.categoryContainer}>
                  <View style={styles.icon}>
                    <Image source={FoodIcon} />
                  </View>
                  <Text style={styles.categotyText}>식비</Text>
                </View>
                <View style={styles.remainCostContainer}>
                  <Text style={styles.remainText}>계획한 비용</Text>
                  <Text style={styles.costText}>￥80,000</Text>
                  <View style={styles.selectButton2}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer}>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryContainer2}>
                    <Text style={styles.categotyText2}>스테이크</Text>
                  </View>
                  <Text style={styles.remainCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer2}>
                  <View style={styles.categoryContainer3}>
                    <Text style={styles.categotyText3}>오코노미야키</Text>
                  </View>
                  <Text style={styles.remainCost2}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer3}>
                  <View style={styles.categoryContainer4}>
                    <Text style={styles.categotyText4}>남은 비용</Text>
                  </View>
                  <Text style={styles.remainCost3}>￥60,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryPaymentContainer2}>
              <View style={styles.categoryCardContainer2}>
                <View style={styles.categoryContainer5}>
                  <Image source={TransIcon} />
                  <Text style={styles.categotyText5}>교통</Text>
                </View>
                <View style={styles.remainCostContainer2}>
                  <Text style={styles.remainText2}>계획한 비용</Text>
                  <Text style={styles.costText2}>￥80,000</Text>
                  <View style={styles.selectButton4}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer2}>
                <View style={styles.paymentContainer4}>
                  <View style={styles.categoryContainer6}>
                    <Text style={styles.categotyText6}>지하철</Text>
                  </View>
                  <Text style={styles.remainCost4}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer5}>
                  <View style={styles.categoryContainer7}>
                    <Text style={styles.categotyText7}>신칸센</Text>
                  </View>
                  <Text style={styles.remainCost5}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer6}>
                  <View style={styles.categoryContainer8}>
                    <Text style={styles.categotyText8}>남은 비용</Text>
                  </View>
                  <Text style={styles.remainCost6}>￥60,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryPaymentContainer3}>
              <View style={styles.categoryCardContainer3}>
                <View style={styles.categoryContainer9}>
                  <Image source={HouseIcon} />
                  <Text style={styles.categotyText9}>숙박</Text>
                </View>
                <View style={styles.remainCostContainer3}>
                  <Text style={styles.remainText3}>계획한 비용</Text>
                  <Text style={styles.costText3}>￥80,000</Text>
                  <View style={styles.selectButton6}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer3}>
                <View style={styles.paymentContainer7}>
                  <View style={styles.categoryContainer10}>
                    <Text style={styles.categotyText10}>호텔</Text>
                  </View>
                  <Text style={styles.remainCost7}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer8}>
                  <View style={styles.categoryContainer11}>
                    <Text style={styles.categotyText11}>남은 비용</Text>
                  </View>
                  <Text style={styles.remainCost8}>￥70,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryPaymentContainer4}>
              <View style={styles.categoryCardContainer4}>
                <View style={styles.categoryContainer12}>
                  <Image source={ShopIcon} />
                  <Text style={styles.categotyText12}>
                    쇼핑 · 편의점 · 마트
                  </Text>
                </View>
                <View style={styles.remainCostContainer4}>
                  <Text style={styles.remainText4}>계획한 비용</Text>
                  <Text style={styles.costText4}>￥80,000</Text>
                  <View style={styles.selectButton8}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer4}>
                <View style={styles.paymentContainer9}>
                  <View style={styles.categoryContainer13}>
                    <Text style={styles.categotyText13}>스테이크</Text>
                  </View>
                  <Text style={styles.remainCost9}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer10}>
                  <View style={styles.categoryContainer14}>
                    <Text style={styles.categotyText14}>오코노미야키</Text>
                  </View>
                  <Text style={styles.remainCost10}>- ￥10,000</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TravelBudgetDetailPage;

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
  headerRight: {
    alignItems: "flex-start",
    gap: 10,
    flexDirection: "row",
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
  periodText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  titleText: {
    color: "#000",
    fontFamily: "Inter",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "700",
  },
  cityText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
  },
  mainTextContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  mainContainer: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  categoryPaymentContainer: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
  },
  categoryCardContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer: {
    alignItems: "center",
    gap: 10,
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
  remainText: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  costText: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  remainCostContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  selectButton2: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  categotyText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentListContainer: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  paymentContainer: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer2: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyText3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentContainer2: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer3: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost2: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyText4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  paymentContainer3: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer4: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost3: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  icon2: {
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
  categoryPaymentContainer2: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
  },
  categoryCardContainer2: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer5: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  remainText2: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  costText2: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  remainCostContainer2: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  selectButton4: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  categotyText6: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentListContainer2: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  paymentContainer4: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer6: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost4: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyText7: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentContainer5: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer7: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost5: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyText8: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  paymentContainer6: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer8: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost6: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  icon3: {
    width: 30,
    height: 30,
  },
  categotyText9: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categoryPaymentContainer3: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
  },
  categoryCardContainer3: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer9: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  remainText3: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  costText3: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  remainCostContainer3: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  selectButton6: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  categotyText10: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentListContainer3: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  paymentContainer7: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer10: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost7: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyText11: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  paymentContainer8: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer11: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost8: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  icon4: {
    width: 30,
    height: 30,
  },
  categotyText12: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categoryPaymentContainer4: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
  },
  categoryCardContainer4: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer12: {
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
  },
  remainText4: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  costText4: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  remainCostContainer4: {
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  selectButton8: {
    height: 19,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  categotyText13: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentListContainer4: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  paymentContainer9: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer13: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost9: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyText14: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  paymentContainer10: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  categoryContainer14: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  remainCost10: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
});

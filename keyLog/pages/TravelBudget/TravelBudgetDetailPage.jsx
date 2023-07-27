import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import CloseButton from "../../assets/travelBudget/CloseButton.png";
import DeleteButton from "../../assets/travelBudget/delete.png";
import EditButton from "../../assets/travelBudget/edit.png";
import FoodIcon from "../../assets/travelBudget/FoodIcon.png";
import TransIcon from "../../assets/travelBudget/TransIcon.png";
import HouseIcon from "../../assets/travelBudget/HouseIcon.png";
import ShopIcon from "../../assets/travelBudget/ShopIcon.png";
import SelectButton from "../../assets/travelBudget/SelectButton.png";
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
                  <View style={styles.selectButton}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer}>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>스테이크</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>오코노미야키</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyRemainText}>남은 비용</Text>
                  </View>
                  <Text style={styles.remainCost}>￥60,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryPaymentContainer}>
              <View style={styles.categoryCardContainer}>
                <View style={styles.categoryContainer}>
                  <Image source={TransIcon} />
                  <Text style={styles.categotyText}>교통</Text>
                </View>
                <View style={styles.remainCostContainer}>
                  <Text style={styles.remainText}>계획한 비용</Text>
                  <Text style={styles.costText}>￥80,000</Text>
                  <View style={styles.selectButton}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer}>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>지하철</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>신칸센</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyRemainText}>남은 비용</Text>
                  </View>
                  <Text style={styles.remainCost}>￥60,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryPaymentContainer}>
              <View style={styles.categoryCardContainer}>
                <View style={styles.categoryContainer}>
                  <Image source={HouseIcon} />
                  <Text style={styles.categotyText}>숙박</Text>
                </View>
                <View style={styles.remainCostContainer}>
                  <Text style={styles.remainText}>계획한 비용</Text>
                  <Text style={styles.costText}>￥80,000</Text>
                  <View style={styles.selectButton}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer}>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>호텔</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyRemainText}>남은 비용</Text>
                  </View>
                  <Text style={styles.remainCost}>￥70,000</Text>
                </View>
              </View>
            </View>
            <View style={styles.categoryPaymentContainer}>
              <View style={styles.categoryCardContainer}>
                <View style={styles.categoryContainer}>
                  <Image source={ShopIcon} />
                  <Text style={styles.categotyText}>쇼핑 · 편의점 · 마트</Text>
                </View>
                <View style={styles.remainCostContainer}>
                  <Text style={styles.remainText}>계획한 비용</Text>
                  <Text style={styles.costText}>￥80,000</Text>
                  <View style={styles.selectButton}>
                    <Image source={SelectButton} />
                  </View>
                </View>
              </View>
              <View style={styles.paymentListContainer}>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>스테이크</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
                </View>
                <View style={styles.paymentContainer}>
                  <View style={styles.categoryDetailContainer}>
                    <Text style={styles.categotyDetailText}>오코노미야키</Text>
                  </View>
                  <Text style={styles.payCost}>- ￥10,000</Text>
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
    width: "100%",
    height: 1000,
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
    alignSelf: "stretch",
    paddingVertical: 10,
    gap: 5,
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
  selectButton: {
    height: 19,
    marginTop: 4,
    // gap: 20,
  },
  categotyDetailText: {
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
  categoryDetailContainer: {
    alignItems: "center",
    gap: 5,
    flexDirection: "row",
  },
  payCost: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  categotyRemainText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  remainCost: {
    color: "#191F29",
    textAlign: "right",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
});

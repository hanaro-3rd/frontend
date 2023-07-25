import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import React from "react";
import styled from "styled-components/native";
import DeleteHeader from "../Header/DeleteHeader";
const TravelRecordMainComponent = ({ navigation }) => {
  const Main = styled.SafeAreaView`
    margin-top: ${getStatusBarHeight}px;
    min-height: ${phoneHeight}px;
    width: 100%;
  `;
  const PlanTextView = styled.View`
    width: 100%;
    height: ${heightPercentage(58)}px;
    justify-content: center;
    background-color: #fff;
  `;
  const PlanText = styled.Text`
    margin-left: ${widthPercentage(20)}px;
    color: #191f29;
    font-size: ${fontPercentage(23)}px;
    font-weight: 700;
  `;
  const PlanComponent = styled.View`
    width: ${phoneWidth}px;
    height: auto;
    align-items: center;
    margin-bottom: ${heightPercentage(15)}px;
  `;
  const PlanContainer = styled.View`
    padding: ${widthPercentage(20)}px;
    background-color: white;
  `;

  const PlanDataView = styled.TouchableOpacity`
    width: ${widthPercentage(350)}px;
    height: ${widthPercentage(100)}px;
    border-radius: 10px;
    flex-direction: row;
    border: 1px solid black;
    margin-bottom: ${heightPercentage(10)}px;
  `;
  const PlanMainTextView = styled.View`
    width: 100%;
  `;
  const PlanMainText = styled.Text`
    color: #191f29;
    font-size: ${fontPercentage(20)}px;
    font-weight: 400;
    margin-bottom: ${heightPercentage(15)}px;
  `;

  const PlanDataImage = styled.Image`
    width: ${widthPercentage(100)}px;
    height: ${widthPercentage(100)}px;
  `;

  return (
    <Main>
      <DeleteHeader />
      <PlanTextView>
        <PlanText>내 여행 기록</PlanText>
      </PlanTextView>

      <PlanComponent>
        <PlanContainer>
          <PlanMainTextView>
            <PlanMainText>2023</PlanMainText>
          </PlanMainTextView>

          <PlanDataView
            onPress={() => navigation.navigate("TravelRecordDetailComponent")}
          >
            <PlanDataImage
              resizeMode="contain"
              source={require("../../Images/도쿄.png")}
            />
            <PlanTextContainer>
              <PlanTextTitle>일본,도쿄</PlanTextTitle>
              <PlanDuringTitle style={styles.planDuringText}>
                2023.07.01~2023.07.10
              </PlanDuringTitle>
              <PlanCostView>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </PlanCostView>
            </PlanTextContainer>
          </PlanDataView>
          <PlanDataView
            onPress={() => navigation.navigate("TravelRecordDetailComponent")}
          >
            <PlanDataImage
              resizeMode="contain"
              source={require("../../Images/도쿄.png")}
            />
            <PlanTextContainer>
              <PlanTextTitle>일본,도쿄</PlanTextTitle>
              <PlanDuringTitle style={styles.planDuringText}>
                2023.07.01~2023.07.10
              </PlanDuringTitle>
              <PlanCostView>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </PlanCostView>
            </PlanTextContainer>
          </PlanDataView>
          <PlanDataView
            onPress={() => navigation.navigate("TravelRecordDetailComponent")}
          >
            <PlanDataImage
              resizeMode="contain"
              source={require("../../Images/도쿄.png")}
            />
            <PlanTextContainer>
              <PlanTextTitle>일본,도쿄</PlanTextTitle>
              <PlanDuringTitle style={styles.planDuringText}>
                2023.07.01~2023.07.10
              </PlanDuringTitle>
              <PlanCostView>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </PlanCostView>
            </PlanTextContainer>
          </PlanDataView>
        </PlanContainer>
      </PlanComponent>
      <PlanComponent>
        <PlanContainer>
          <PlanMainTextView>
            <PlanMainText>2023</PlanMainText>
          </PlanMainTextView>

          <PlanDataView
            onPress={() => navigation.navigate("TravelRecordDetailComponent")}
          >
            <PlanDataImage
              resizeMode="contain"
              source={require("../../Images/도쿄.png")}
            />
            <PlanTextContainer>
              <PlanTextTitle>일본,도쿄</PlanTextTitle>
              <PlanDuringTitle style={styles.planDuringText}>
                2023.07.01~2023.07.10
              </PlanDuringTitle>
              <PlanCostView>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </PlanCostView>
            </PlanTextContainer>
          </PlanDataView>
          <PlanDataView
            onPress={() => navigation.navigate("TravelRecordDetailComponent")}
          >
            <PlanDataImage
              resizeMode="contain"
              source={require("../../Images/도쿄.png")}
            />
            <PlanTextContainer>
              <PlanTextTitle>일본,도쿄</PlanTextTitle>
              <PlanDuringTitle style={styles.planDuringText}>
                2023.07.01~2023.07.10
              </PlanDuringTitle>
              <PlanCostView>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </PlanCostView>
            </PlanTextContainer>
          </PlanDataView>
          <PlanDataView
            onPress={() => navigation.navigate("TravelRecordDetailComponent")}
          >
            <PlanDataImage
              resizeMode="contain"
              source={require("../../Images/도쿄.png")}
            />
            <PlanTextContainer>
              <PlanTextTitle>일본,도쿄</PlanTextTitle>
              <PlanDuringTitle style={styles.planDuringText}>
                2023.07.01~2023.07.10
              </PlanDuringTitle>
              <PlanCostView>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </PlanCostView>
            </PlanTextContainer>
          </PlanDataView>
        </PlanContainer>
      </PlanComponent>
    </Main>
  );
};

export default TravelRecordMainComponent;

const PlanTextContainer = styled.View`
  margin-left: ${widthPercentage(10)}px;
  margin-top: ${heightPercentage(5)}px;
  width: 70%;
`;
const PlanTextTitle = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(18)}px;
  font-weight: 700;
`;
const PlanDuringTitle = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(14)}px;
  font-weight: 400;
`;
const PlanCostView = styled.View`
    width: 100%;
    padding-right : ${widthPercentage(12)}px;
    margin-top : ${heightPercentage(10)}px;
    flex-direction: row;
    justify-content: flex-end;
`;
const PlanCostTitle = styled.Text``;
const styles = StyleSheet.create({
  planTextContainer: {
    marginLeft: 10,
    marginTop: 10,
    width: "70%",
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  planDuringText: {
    color: "black",
    marginTop: 10,
    fontSize: 15,
  },
  planPriceWrapper: {
    width: "100%",
    paddingRight: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  planPriceText: {
    color: "black",
  },
});

import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import CloseButton from "../../assets/travelBudget/CloseButton.png";
import AddButton from "../../assets/travelBudget/add.png";
import Delete from "../../assets/travelBudget/delete.png";

const RootScrollView = styled.ScrollView`
  /* margin-top: ${getStatusBarHeight}px; */
  min-height: ${phoneHeight}px;
  width: 100%;
  flex-direction: column;
  /* align-items: flex-start; */
  background-color: #f2f4f6;
`;

// const HeaderContainer = styled.View`
//   justify-content: space-between;
//   align-items: flex-start;
//   align-self: stretch;
//   background-color: #fff;
//   flex-direction: row;
//   padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
// `;

const Header = styled.View`
  width: 100%;
  height: ${heightPercentage(50)}px;
  justify-content: space-between;
  background-color: white;
  flex-direction: row;
  padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
`;
const HeaderRight = styled.View`
  align-items: flex-start;
  gap: 10px;
  flex-direction: row;
`;
const TitleText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const BodyContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const BodyHeader = styled.View`
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
`;

const YearText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(20)}px;
  font-style: normal;
  font-weight: 400;
`;

const PeriodText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(10)}px;
  font-style: normal;
  font-weight: 400;
`;

const TravelTitle = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const CityText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 400;
`;

const BodyMain = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  align-self: stretch;
`;

const YearContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  align-self: stretch;
  background-color: #fff;
  padding: ${heightPercentage(20)}px ${widthPercentage(20)}px;
`;

const TravelCard = styled.View`
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(85)}px;
  justify-content: space-between;
  align-items: flex-end;
  border-width: 1px;
  border-color: #55acee;
  border-style: solid;
  background-color: #fff;
  /* box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); */
  flex-direction: row;
  padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
  border-radius: 15px;
`;

const TitleTextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

const RemainCostText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 400;
`;

const TravelBudgetPage = () => {
  const navigation = useNavigation();

  const handleTravelCardPress = () => {
    navigation.navigate("TravelBudgetDetailPage");
  };

  const handleGoBack = () => {
    navigation.navigate("MainPage");
  };

  const handleGoToTravelSchedule = () => {
    navigation.navigate("TravelSchedulePage");
  };

  const handleGoBackToMainPage = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "MainPage" }],
    });
  };

  const handleDeleteImageClick = () => {
    Alert.alert(
      "경비 계획 삭제하기",
      "경비 계획을 삭제하면  여행 계획과 카테고리별 경비 계획이 모두 삭제됩니다.",
      [
        {
          text: "취소",
          style: "cancel",
        },
        {
          text: "삭제하기",
          onPress: () => {},
          style: "destructive",
        },
      ]
    );
  };
  /*yarn add react-native-dialog 

  import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Dialog from "react-native-dialog";

const CustomAlertDialog = ({ visible, onCancel, onDelete }) => {
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>경비 계획 삭제하기</Dialog.Title>
      <Dialog.Description>
        경비 계획을 삭제하면 여행 계획과 카테고리별 경비 계획이 모두 삭제됩니다.
      </Dialog.Description>
      <Dialog.Button label="취소" onPress={onCancel} />
      <Dialog.Button label="삭제하기" onPress={onDelete} />
    </Dialog.Container>
  );
};

export default CustomAlertDialog;

import CustomAlertDialog from "../../components/travelBudgetPageComponent/CustomAlertDialog";

const TravelBudgetPage = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);

  const handleDeleteImageClick = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleDelete = () => {
    // 실제 삭제 동작 수행
    setDialogVisible(false);
  };

   <TouchableOpacity onPress={handleDeleteImageClick}>
        <Image source={Delete} />
      </TouchableOpacity>
      <CustomAlertDialog
        visible={isDialogVisible}
        onCancel={handleCancel}
        onDelete={handleDelete}
      />
*/
  return (
    <RootScrollView>
      <Header>
        <TouchableOpacity onPress={handleGoBackToMainPage}>
          <Image source={CloseButton} />
        </TouchableOpacity>
        <HeaderRight>
          <TouchableOpacity onPress={handleDeleteImageClick}>
            <Image source={Delete} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleGoToTravelSchedule}>
            <Image source={AddButton} />
          </TouchableOpacity>
        </HeaderRight>
      </Header>
      {/* <Header type="DELETE" navigation={navigation} to="MainPage" /> */}
      <BodyContainer>
        <BodyHeader>
          <TitleText>내 경비 계획</TitleText>
        </BodyHeader>
        <BodyMain>
          <YearContainer>
            <YearText>2023</YearText>
            <TouchableOpacity onPress={handleTravelCardPress}>
              <TravelCard>
                <TitleTextContainer>
                  <PeriodText>2023.07.01 ~ 2023.07.10</PeriodText>
                  <View>
                    <TravelTitle>첫 도쿄 여행</TravelTitle>
                    <CityText>일본, 도쿄</CityText>
                  </View>
                </TitleTextContainer>
                <View>
                  <RemainCostText>총 비용 ￥100,000</RemainCostText>
                  <RemainCostText>남은 비용 ￥100,000</RemainCostText>
                </View>
              </TravelCard>
            </TouchableOpacity>
            <TravelCard>
              <TitleTextContainer>
                <PeriodText>2023.02.01 ~ 2023.02.10</PeriodText>
                <View>
                  <TravelTitle>친구들이랑 부산 여행</TravelTitle>
                  <CityText>대한민국, 부산</CityText>
                </View>
              </TitleTextContainer>
              <View>
                <RemainCostText>총 비용 ￦100,000</RemainCostText>
                <RemainCostText>남은 비용 ￦100,000</RemainCostText>
              </View>
            </TravelCard>
          </YearContainer>
          <YearContainer>
            <YearText>2022</YearText>
            <TravelCard>
              <TitleTextContainer>
                <PeriodText>2023.07.01 ~ 2023.07.10</PeriodText>
                <View>
                  <TravelTitle>첫 도쿄 여행</TravelTitle>
                  <CityText>일본, 도쿄</CityText>
                </View>
              </TitleTextContainer>
              <View>
                <RemainCostText>총 비용 ￥100,000</RemainCostText>
                <RemainCostText>남은 비용 ￥100,000</RemainCostText>
              </View>
            </TravelCard>
            <TravelCard>
              <TitleTextContainer>
                <PeriodText>2023.02.01 ~ 2023.02.10</PeriodText>
                <View>
                  <TravelTitle>친구들이랑 부산 여행</TravelTitle>
                  <CityText>대한민국, 부산</CityText>
                </View>
              </TitleTextContainer>
              <View>
                <RemainCostText>총 비용 ￦100,000</RemainCostText>
                <RemainCostText>남은 비용 ￦100,000</RemainCostText>
              </View>
            </TravelCard>
          </YearContainer>
        </BodyMain>
      </BodyContainer>
    </RootScrollView>
  );
};

export default TravelBudgetPage;

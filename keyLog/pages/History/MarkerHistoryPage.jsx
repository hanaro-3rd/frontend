import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
} from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../../components/Header/DeleteHeader";
import MarkerPickUp from "../../assets/History/MarkerPickUp.png";

const TitleView = styled.View`
  width: 100%;
  height: ${heightPercentage(50)}px;
  justify-content: center;
`;
const TitleText = styled.Text`
  margin-left: ${widthPercentage(20)}px;
  color: #191f29;
  font-size: ${fontPercentage(23)}px;
  font-weight: 700;
`;
const MainComponent = styled.View`
  height: ${heightPercentage(250)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const NameText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(20)}px;
  font-weight: 700;
  margin-top: ${heightPercentage(10)}px;
`;
const PriceText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;
const CostText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(30)}px;
  font-weight: 700;
`;
const DateText = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(14)}px;
  font-weight: 400;
`;

const CategoryTitleImage = styled.Image`
  width: ${widthPercentage(100)}px;
  height: ${heightPercentage(100)}px;
  object-fit: scale-down;
`;
const InfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: ${widthPercentage(100)}px;
  height: ${heightPercentage(134)}px;
`;

const DetailContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: ${heightPercentage(30)}px;
`;

const MarkerHistoryPage = ({ route, navigation }) => {
  const { keymoney, unit, time, historyId, subject, unitSymbol } = route.params;
  console.log(subject);

  return (
    <Main>
      <View>
        <DeleteHeader navigation={navigation} to="KeyMoneyHistoryPage" />
        <TitleView>
          <TitleText>마커 줍기 내역</TitleText>
        </TitleView>
        <MainComponent>
          <InfoContainer>
            <CategoryTitleImage source={MarkerPickUp} />
            <NameText>{subject}</NameText>
          </InfoContainer>
          <DetailContainer>
            <PriceText>주운 금액</PriceText>
            <CostText>
              {unitSymbol} {keymoney}
            </CostText>
            <DateText>
              {time[0]}.{time[1]}.{time[2]} {time[3]}:{time[4]}
            </DateText>
          </DetailContainer>
        </MainComponent>
      </View>
      {/* <SubmitButton
        onPress={() => {
          handlePatchKeymoneyHistory(),
            navigation.navigate("ForeignPayHistoryPage", { unit });
        }}
      >
        <SubmitView>
          <SubmitText>저장하기</SubmitText>
        </SubmitView>
      </SubmitButton> */}
      <View style={styles.bodyFooter}>
        <TouchableOpacity
          style={styles.frame17}
          onPress={() => {
              navigation.navigate("ForeignPayHistoryPage", { unit });
          }}
        >
          <Text style={styles.____3}>확인</Text>
        </TouchableOpacity>
      </View>
    </Main>
  );
};

export default MarkerHistoryPage;

const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight}px;
  margin-bottom: ${heightPercentage(18)}px;
  background-color: transparent;
`;
const Main = styled.SafeAreaView`
  /* padding-top: ${getStatusBarHeight}px; */
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.categoryMode ? "rgba(0, 0, 0, 0.5)" : "white"};
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentage(55)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const SubmitView = styled.View`
  width: ${heightPercentage(340)}px;
  background-color: #55acee;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const styles = StyleSheet.create({
  ____3: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  bodyFooter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  frame17: {
    height: heightPercentage(55),
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

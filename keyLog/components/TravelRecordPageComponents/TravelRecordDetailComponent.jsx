import {
  Text,
  View,
  StatusBar,
} from "react-native";
import React from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../Header/DeleteHeader";

const Main = styled.SafeAreaView`
  margin-top: ${getStatusBarHeight}px;
  background-color: white;
  min-height: ${phoneHeight}px;
  align-items: center;
  width: 100%;
  background-color: white;
`;
const Header = styled.View`
  width: ${phoneWidth}px;
  height: ${heightPercentage(50)}px;
  justify-content: center;
`;
const HeaderImage = styled.Image`
  margin-left: ${widthPercentage(20)}px;
  width: ${widthPercentage(24)}px;
  height: ${heightPercentage(24)}px;
`
const TitleView = styled.View`
  width: ${phoneWidth}px;
  align-items: center;
  justify-content: center;
  height: ${heightPercentage(49)}px;
`;
const DateText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
`;
const MapImage = styled.Image`
  height: ${heightPercentage(271)}px;
`;
const MapView = styled.View`
  height: ${heightPercentage(55)}px;
  justify-content: space-evenly;
  align-items: center;
  width: ${phoneWidth}px;
`;
const ListIcon = styled.View`
  width: ${widthPercentage(40)}px;
  height: ${heightPercentage(3)}px;
  background-color: #d9d9d9;
  border-radius: 2px;
`;
const TotalBudget = styled.Text`
  font-size: ${fontPercentage(16)}px;
  color: #191f29;
`;
const DateComponent = styled.View`
  width: ${phoneWidth};
  align-items: center;
`;
const DateTextView = styled.View`
  width: ${widthPercentage(350)};
  height: ${heightPercentage(20)};
  margin-bottom: ${heightPercentage(15)}px;
`;
const PlanDateText = styled.Text`
  font-size: ${fontPercentage(12)}px;
  color: #191f29;
`;
const ListView = styled.View`
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(40)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${heightPercentage(20)}px;
`;
const ListTitleView = styled.View`
  width: ${widthPercentage(140)}px;
  height: ${heightPercentage(40)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ListTitle = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
`;
const ListSubTitle = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(12)}px;
`;
const PriceSubTitle = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(14)}px;
`;
const ListImage = styled.Image`
  width: ${widthPercentage(40)}px;
  height: ${heightPercentage(40)}px;
`;
const PriceView = styled.View`
  align-items: flex-end;
  margin-right: 10;
`;
const TravelRecordDetailComponent = ({ navigation }) => {
  StatusBar.setTranslucent(true);
  return (
    <Main>
      <DeleteHeader navigation={navigation} to="TravelRecordMainComponent"/>
      <TitleView>
        <DateText>2023.07.01 ~ 2023.07.10</DateText>
      </TitleView>

      <MapImage source={require("../../Images/지도.png")} />
      <MapView>
        <ListIcon></ListIcon>
        <TotalBudget>총 ￥100,000</TotalBudget>
      </MapView>
      <DateComponent>
        <DateTextView>
          <PlanDateText>7월 1일</PlanDateText>
        </DateTextView>
        <ListView>
          <ListTitleView>
            <ListImage
              source={require("../../Images/세븐일레븐.png")}
              resizeMode="contain"
            />

            <View>
              <ListTitle>세븐일레븐</ListTitle>
              <Text>13:58</Text>
            </View>
          </ListTitleView>
          <PriceView>
            <ListTitle>￥10,000</ListTitle>
            <PriceSubTitle>총 ￥20,000</PriceSubTitle>
          </PriceView>
        </ListView>
        <ListView>
          <ListTitleView>
            <ListImage
              source={require("../../Images/세븐일레븐.png")}
              resizeMode="contain"
            />

            <View>
              <ListTitle>세븐일레븐</ListTitle>
              <Text>13:58</Text>
            </View>
          </ListTitleView>
          <PriceView>
            <ListTitle>￥10,000</ListTitle>
            <PriceSubTitle>총 ￥20,000</PriceSubTitle>
          </PriceView>
        </ListView>
        <ListView>
          <ListTitleView>
            <ListImage
              source={require("../../Images/세븐일레븐.png")}
              resizeMode="contain"
            />

            <View>
              <ListTitle>세븐일레븐</ListTitle>
              <Text>13:58</Text>
            </View>
          </ListTitleView>
          <PriceView>
            <ListTitle>￥10,000</ListTitle>
            <PriceSubTitle>총 ￥20,000</PriceSubTitle>
          </PriceView>
        </ListView>
      </DateComponent>
    </Main>
  );
};

export default TravelRecordDetailComponent;

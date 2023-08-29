import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
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
import { useQuery, useQueryClient } from "react-query";
import { getTravelBudget } from "../../api/api";

//gesture

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
  elevation: 3;
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

const TravelBudgetPage = ({ route, navigation }) => {
  const handleTravelCardPress = (planId, totalBudget) => {
    navigation.navigate("TravelBudgetDetailPage", { planId, totalBudget });
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

  const queryClient = useQueryClient();

  // const [data, setData] = useState({});
  const [data, setData] = useState([]);

  const { travelBudgetData } = useQuery(
    "travelBudgetData",
    () => getTravelBudget(),
    {
      onSuccess: (response) => {
        let dataArray = response.data.result;
        console.log(dataArray);
        // let obj = {};
        // for (let i = 0; i < dataArray.length; i++) {
        //   if (obj[dataArray[i].startDate[0]] == undefined) {
        //     obj[dataArray[i].startDate[0]] = [dataArray[i]];
        //   } else {
        //     obj[dataArray[i].startDate[0]].push(dataArray[i]);
        //   }
        // }
        // console.log(obj);
        // obj = Object.fromEntries(
        //   Object.entries(obj).sort(([a], [b]) => (b > a ? 1 : -1))
        // );
        // console.log(obj);
        // setData(obj);
        // console.log(obj);
        let sortedData = dataArray.reduce((acc, curr) => {
          const year = curr.startDate[0];
          const index = acc.findIndex((item) => item.year === year);
          if (index !== -1) {
            acc[index].trips.push(curr);
          } else {
            acc.push({ year: year, trips: [curr] });
          }
          return acc;
        }, []);

        sortedData.sort((a, b) => b.year - a.year);

        console.log(sortedData);
        setData(sortedData);
        // queryClient.invalidateQueries("travelBudgetData");
      },
      onError: () => {},
    }
  );

  return (
    <RootScrollView>
      <Header>
        <TouchableOpacity onPress={handleGoBack}>
          <HeaderImage source={require("../../Images/삭제.png")} />
        </TouchableOpacity>
        <HeaderRight>
          <TouchableOpacity onPress={handleGoToTravelSchedule}>
            <HeaderImage source={AddButton} />
          </TouchableOpacity>
        </HeaderRight>
      </Header>
      {/* <Header type="DELETE" navigation={navigation} to="MainPage" /> */}
      <BodyContainer>
        <BodyHeader>
          <TitleText>내 경비 계획</TitleText>
        </BodyHeader>
        <BodyMain>
          {/* {Object.keys(data).length !== 0 ? (
            Object?.keys(data).map((key, idx) => {
              return (
                <YearContainer key={idx}>
                  <YearText>{key}</YearText>
                  {data[key]?.map((e, idx) => { */}
          {data.length !== 0 ? (
            data.map((yearData, yearIdx) => {
              return (
                <YearContainer key={yearIdx}>
                  <YearText>{yearData.year}</YearText>
                  {yearData.trips.map((e, tripIdx) => {
                    let unit = "";
                    let countryName = "";
                    if (e.country === "USA") {
                      unit = "$";
                      countryName = "미국";
                    } else if (e.country === "Japan") {
                      unit = "￥";
                      countryName = "일본";
                    } else if (e.country === "Europe") {
                      unit = "€";
                      countryName = "유럽";
                    } else {
                      unit = "₩ ";
                      countryName = "대한민국";
                    }
                    return (
                      <TouchableOpacity
                        // key={idx}
                        key={tripIdx}
                        onPress={() =>
                          handleTravelCardPress(e.planId, e.totalBudget)
                        }
                      >
                        <TravelCard>
                          <TitleTextContainer>
                            <PeriodText>
                              {e.startDate.slice(0, 3).join(".")} ~{" "}
                              {e.endDate.slice(0, 3).join(".")}
                            </PeriodText>
                            <View>
                              <TravelTitle>{e.title}</TravelTitle>
                              <CityText>
                                {countryName}
                                {e.city && <Text>,</Text>} {e.city}
                              </CityText>
                            </View>
                          </TitleTextContainer>
                          <View>
                            <RemainCostText>
                              총 비용 {unit}
                              {e.totalBudget.toLocaleString()}
                            </RemainCostText>
                          </View>
                        </TravelCard>
                      </TouchableOpacity>
                    );
                  })}
                </YearContainer>
              );
            })
          ) : (
            <NoPlanContainer>
              <NoPlanTitleText>내 여행 기록이 없어요</NoPlanTitleText>
              <NoPlanText>
                상단의 + 버튼을 눌러 여행 기록을 추가해 보세요
              </NoPlanText>
            </NoPlanContainer>
          )}
        </BodyMain>
      </BodyContainer>
    </RootScrollView>
  );
};

const NoPlanContainer = styled.View`
  display: flex;
  height: ${heightPercentage(460)}px;
  padding: ${heightPercentage(20)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  align-self: stretch;
`;

const NoPlanTitleText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 700;
`;

const NoPlanText = styled.Text`
  color: #4e5968;
  font-family: Inter;
  font-size: ${fontPercentage(13)}px;
  font-style: normal;
  font-weight: 400;
`;

const HeaderImage = styled.Image`
  width: ${widthPercentage(24)}px;
  height: ${heightPercentage(24)}px;
`;
export default TravelBudgetPage;

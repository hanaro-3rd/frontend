import React, { useState, useEffect } from "react";
import {
  fontPercentage,
  getCountryUnit,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import {
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import SelectButton from "../../assets/travelBudget/SelectButton.png";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getTravelBudgetCategory,
  getTravelBudgetDetail,
  deleteTravelBudget,
} from "../../api/api";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import TravelBudgetPaymentHistoryComponent from "../../components/TravelBudgetPageComponents/TravelBudgetPaymentHistoryComponent";
import { formatDate } from "../../utils/formatDate";

const TravelBudgetDetailPage = ({ navigation, route }) => {
  const { planId, totalBudget } = route.params;
  const [category, setCategory] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [transCategory, setTransCategory] = useState([]);
  const [sleepCategory, setSleepCategory] = useState([]);
  const [shoppingCategory, setShoppingCategory] = useState([]);
  const [cultureCategory, setCultureCategory] = useState([]);
  const [etcCategory, setEtcCategory] = useState([]);
  const [foodMarker, setFoodMarker] = useState([]);
  const [transMarker, setTransMarker] = useState([]);
  const [sleepMarker, setSleepMarker] = useState([]);
  const [shoppingMarker, setShoppingMarker] = useState([]);
  const [cultureMarker, setCultureMarker] = useState([]);
  const [etcMarker, setEtcMarker] = useState([]);
  const queryClient = useQueryClient();
  const [isMarker, setIsMarker] = useState(false);
  const [location, setLocation] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [travelBudget, setTravelBudget] = useState();
  const [timePaymentHistory, setTimePaymentHistory] = useState({});
  const [totalPayment, setTotalPayment] = useState(0);
  const [travelData, setTravelData] = useState(null);

  const deleteTravelBudgetMutation = useMutation(
    (planId) => deleteTravelBudget(planId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("travelBudgetList");
      },
    }
  );

  const { recentData } = useQuery(
    "getRecentPlan",
    () => getTravelBudgetDetail(planId),
    {
      onSuccess: (response) => {
        console.log("getRecentPlan", response.data);
        if (response.data.result.timePaymentHistory) {
          const obj = response.data.result.timePaymentHistory;
          const subObj = {};
          for (key in obj) {
            if (subObj[formatDate(key)] == undefined) {
              subObj[formatDate(key)] = obj[key];
            } else {
              subObj[formatDate(key)] = [
                ...subObj[formatDate(key)],
                ...obj[key],
              ];
            }
          }
          setTimePaymentHistory(subObj);
        }
      },
      onError: (error) => {
        console.log(error.response);
      },
    }
  );

  const { categoryData } = useQuery(
    "getDetailCategoryPlan",
    () => getTravelBudgetCategory(planId),
    {
      onSuccess: (response) => {
        console.log(response.data.result, "getDetailPlanCategory");
        console.log("잘 들어있어?", response.data.result.travelBudget);
        setCategory(response.data.result.category);
        setTravelBudget(
          getCountryUnit(response.data.result.travelBudget.country)
        );
        setTravelData(response.data.result);
        if (response.data.result.categoryPaymentHistory) {
          const obj = response.data.result.categoryPaymentHistory;

          for (key in obj) {
            if (obj[key].length > 0) {
              setLocation({
                longitude: obj[key][0].lng,
                latitude: obj[key][0].lat,
                latitudeDelta: 3,
                longitudeDelta: 3,
              });
              setIsMarker(true);
              break;
            }
          }
          for (key in obj) {
            switch (key) {
              case "교통":
                setTransCategory(obj[key]);
                break;
              case "식비":
                setFoodCategory(obj[key]);
                break;
              case "숙박":
                setSleepCategory(obj[key]);
                break;
              case "쇼핑":
                setShoppingCategory(obj[key]);
                break;
              case "문화":
                setCultureCategory(obj[key]);
                break;
              default:
                setEtcCategory(obj[key]);
                break;
            }
          }
        }
      },
      onError: () => {},
    }
  );

  const handlePressCategory = () => {
    setSelectedTab("category");
    setClickCount((prev) => prev + 1);
    console.log(clickCount);
  };

  const [selectedTab, setSelectedTab] = useState("category");
  const [clickCount, setClickCount] = useState(0);
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
          onPress: async () => {
            try {
              await deleteTravelBudgetMutation.mutateAsync(planId);
              console.log("잘 지워짐!");
              navigation.navigate("TravelBudgetPage");
              queryClient.invalidateQueries("travelBudgetData");
            } catch (error) {
              console.error("실패", error);
            }
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleEditButtonClick = () => {
    navigation.navigate("TravelScheduleEditPage", {
      planId: planId,
      travelData: travelData,
    });
    console.log(travelData, "잘 가는거야?");
  };

  return (
    <RootScrollView>
      <Header>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("TravelBudgetPage");
          }}
        >
          <HeaderImage source={require("../../Images/삭제.png")} />
        </TouchableOpacity>
        <HeaderRight>
          <TouchableOpacity onPress={handleDeleteImageClick}>
            <HeaderImage
              source={require("../../assets/travelBudget/delete.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEditButtonClick}>
            <HeaderImage
              source={require("../../assets/travelBudget/edit.png")}
            />
          </TouchableOpacity>
        </HeaderRight>
      </Header>
      <BodyContainer>
        <MapImage>
          {isMarker ? (
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: location.lat,
                longitude: location.lng,
                latitudeDelta: 10,
                longitudeDelta: 10,
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}
              region={location}
            >
              {foodCategory.length > 0 &&
                [
                  ...foodCategory,
                  ...transCategory,
                  ...etcCategory,
                  ...shoppingCategory,
                  ...sleepCategory,
                  ...cultureCategory,
                ]?.map((e, idx) => {
                  return (
                    <Marker
                      key={idx}
                      opacity={1.5}
                      coordinate={{
                        latitude: e.lat,
                        longitude: e.lng,
                      }}
                      onPress={() => {
                        setLocation({
                          longitude: e.lng,
                          latitude: e.lat,
                          latitudeDelta: 0.1,
                          longitudeDelta: 0.1,
                        });
                      }}
                    >
                      <Callout>
                        <CantGoMarkerView>
                          <MarkerKeymoneyText>{e.store}</MarkerKeymoneyText>
                          <MarkerKeymoneyText>{e.price}JPY</MarkerKeymoneyText>
                        </CantGoMarkerView>
                        <PolygonView>
                          <PolygonImage
                            source={require("../../Images/polygon.png")}
                          />
                        </PolygonView>
                      </Callout>
                    </Marker>
                  );
                })}
            </MapView>
          ) : (
            <MapView
              style={{ flex: 1 }}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 37.545315,
                longitude: 127.057088,
                latitudeDelta: 0.001,
                longitudeDelta: 0.001,
              }}
              showsUserLocation={true}
              showsMyLocationButton={true}
            />
          )}
        </MapImage>
        <DropImage
          source={require("../../assets/travelBudget/Header-Back.png")}
        />
        <BodyMain>
          <TotalBudgetContainer>
            <View style={styles.planpayContainer}>
              <View style={styles.frame154}>
                <Text style={styles.planText}>계획한 총 비용</Text>
                <Text style={styles.planText}>
                  {travelBudget}
                  {totalBudget}
                </Text>
              </View>
              <View style={styles.frame155}>
                <Text style={styles.planText}>결제한 총 금액</Text>
                <Text style={styles.planText}>
                  {travelBudget}
                  {totalPayment}
                </Text>
              </View>
              <View style={styles.line} />
              <View style={styles.frame156}>
                <Text style={styles.leftPayment}>남은 비용</Text>
                <Text
                  style={
                    totalBudget - totalPayment > 0
                      ? styles._20000
                      : styles.minusBudget
                  }
                >
                  {travelBudget}
                  {totalBudget - totalPayment}
                </Text>
              </View>
            </View>
          </TotalBudgetContainer>
          <SelectMenuContainer>
            <CategoryOrDateContainer
              style={{
                borderBottomColor:
                  selectedTab === "category" ? "#55acee" : "white",
              }}
            >
              <TouchableOpacity onPress={handlePressCategory}>
                <CategoryOrDateText>카테고리별</CategoryOrDateText>
              </TouchableOpacity>
            </CategoryOrDateContainer>
            <CategoryOrDateContainer
              style={{
                borderBottomColor: selectedTab === "date" ? "#55acee" : "white",
              }}
            >
              <TouchableOpacity onPress={() => setSelectedTab("date")}>
                <CategoryOrDateText>날짜별</CategoryOrDateText>
              </TouchableOpacity>
            </CategoryOrDateContainer>
          </SelectMenuContainer>
          {selectedTab === "category" ? (
            <MainContainer>
              {
                //categoryId=1, 식비
                category.length > 0 && (
                  <TravelBudgetPaymentHistoryComponent
                    setLocation={setLocation}
                    category={category[0]}
                    categoryList={foodCategory}
                    categoryIcon="foodIcon"
                    categoryTitle="식비"
                    travelBudgetUnit={travelBudget}
                    setTotalPayment={setTotalPayment}
                    clickCount={clickCount}
                  />
                )
              }
              {category.length > 0 && ( //카테고리명 교통, 카테고리아이디 2
                <TravelBudgetPaymentHistoryComponent
                  setLocation={setLocation}
                  category={category[1]}
                  categoryList={transCategory}
                  categoryIcon="transIcon"
                  categoryTitle="교통"
                  travelBudgetUnit={travelBudget}
                  setTotalPayment={setTotalPayment}
                  clickCount={clickCount}
                />
              )}
              {category.length > 0 && ( //카테고리명 숙박, 카테고리아이디 3
                <TravelBudgetPaymentHistoryComponent
                  setLocation={setLocation}
                  category={category[2]}
                  categoryList={sleepCategory}
                  categoryIcon="houseIcon"
                  categoryTitle="숙박"
                  travelBudgetUnit={travelBudget}
                  setTotalPayment={setTotalPayment}
                  clickCount={clickCount}
                />
              )}
              {category.length > 0 && ( //카테고리명 교통, 카테고리아이디 4
                <TravelBudgetPaymentHistoryComponent
                  setLocation={setLocation}
                  category={category[3]}
                  categoryList={shoppingCategory}
                  categoryIcon="shopIcon"
                  categoryTitle="쇼핑 · 편의점 · 마트"
                  travelBudgetUnit={travelBudget}
                  setTotalPayment={setTotalPayment}
                  clickCount={clickCount}
                />
              )}
              {category.length > 0 && ( //카테고리명 문화 · 여가, 카테고리아이디 5
                <TravelBudgetPaymentHistoryComponent
                  setLocation={setLocation}
                  category={category[4]}
                  categoryList={cultureCategory}
                  categoryIcon="playIcon"
                  categoryTitle="문화 · 여가"
                  travelBudgetUnit={travelBudget}
                  setTotalPayment={setTotalPayment}
                  clickCount={clickCount}
                />
              )}
              {category.length > 0 && ( //카테고리명 문화 · 여가, 카테고리아이디 5
                <TravelBudgetPaymentHistoryComponent
                  setLocation={setLocation}
                  category={category[5]}
                  categoryList={etcCategory}
                  categoryIcon="etcIcon"
                  categoryTitle="기타"
                  travelBudgetUnit={travelBudget}
                  setTotalPayment={setTotalPayment}
                  clickCount={clickCount}
                />
              )}
            </MainContainer>
          ) : (
            <MainContainer>
              {Object.keys(timePaymentHistory).map((key, idx) => {
                return (
                  <CategoryPaymentContainer key={idx}>
                    <CategoryCardContainer>
                      <CategoryContainer>
                        <CategoryText>{key}</CategoryText>
                      </CategoryContainer>
                      <RemainCostContainer>
                        <SelectButtonImage source={SelectButton} />
                      </RemainCostContainer>
                    </CategoryCardContainer>
                    <PaymentListContainer>
                      {timePaymentHistory[key].map((e, idx) => {
                        console.log(e);
                        return (
                          <PaymentContainer
                            onPress={() => {
                              setLocation({
                                longitude: e.lng,
                                latitude: e.lat,
                                latitudeDelta: 0.1,
                                longitudeDelta: 0.1,
                              });
                            }}
                          >
                            <CategoryDetailContainer>
                              <Icon>
                                {(e.category == "식비" && (
                                  <Image
                                    source={require(`../../assets/travelBudget/FoodIcon.png`)}
                                  />
                                )) ||
                                  (e.category == "교통" && (
                                    <Image
                                      source={require(`../../assets/travelBudget/TransIcon.png`)}
                                    />
                                  )) ||
                                  (e.category == "숙박" && (
                                    <Image
                                      source={require(`../../assets/travelBudget/HouseIcon.png`)}
                                    />
                                  )) ||
                                  (e.category == "쇼핑" && (
                                    <Image
                                      source={require(`../../assets/travelBudget/ShopIcon.png`)}
                                    />
                                  )) ||
                                  (e.category == "문화" && (
                                    <Image
                                      source={require(`../../assets/travelBudget/PlayIcon.png`)}
                                    />
                                  )) ||
                                  (e.category == "기타" && (
                                    <Image
                                      source={require(`../../assets/travelBudget/EtcIcon.png`)}
                                    />
                                  ))}
                              </Icon>
                              <CategoryDetailTextContainer>
                                <CategoryDetailText>
                                  {e.store}
                                </CategoryDetailText>
                                <DateAndTimeText>
                                  {e.createdAt[1]}월 {e.createdAt[2]}일{" "}
                                  {e.createdAt[3]}:{e.createdAt[4]}
                                </DateAndTimeText>
                              </CategoryDetailTextContainer>
                            </CategoryDetailContainer>
                            <PayCostText>
                              {getCountryUnit(e.unit)}
                              {e.price}
                            </PayCostText>
                          </PaymentContainer>
                        );
                      })}
                    </PaymentListContainer>
                  </CategoryPaymentContainer>
                );
              })}

              {/* <CategoryPaymentContainer>
                <CategoryCardContainer>
                  <CategoryContainer>
                    <CategoryText>7월 2일</CategoryText>
                  </CategoryContainer>
                  <RemainCostContainer>
                    <SelectButtonImage source={SelectButton} />
                  </RemainCostContainer>
                </CategoryCardContainer>
                <PaymentListContainer>
                  <PaymentContainer>
                    <CategoryDetailContainer>
                      <Icon>
                        <Image source={FoodIcon} />
                      </Icon>
                      <CategoryDetailTextContainer>
                        <CategoryDetailText>오코노미야끼</CategoryDetailText>
                        <DateAndTimeText>7월 2일 13:59</DateAndTimeText>
                      </CategoryDetailTextContainer>
                    </CategoryDetailContainer>
                    <PayCostText> ￥10,000</PayCostText>
                  </PaymentContainer>
                  <PaymentContainer>
                    <CategoryDetailContainer>
                      <Icon>
                        <Image source={TransIcon} />
                      </Icon>
                      <CategoryDetailTextContainer>
                        <CategoryDetailText>신칸센</CategoryDetailText>
                        <DateAndTimeText>7월 2일 13:59</DateAndTimeText>
                      </CategoryDetailTextContainer>
                    </CategoryDetailContainer>
                    <PayCostText> ￥10,000</PayCostText>
                  </PaymentContainer>
                  <PaymentTotalContainer>
                    <UsedCostText>총 ￥20,000</UsedCostText>
                  </PaymentTotalContainer>
                </PaymentListContainer>
              </CategoryPaymentContainer> */}
            </MainContainer>
          )}
        </BodyMain>
      </BodyContainer>
    </RootScrollView>
  );
};

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
const RootScrollView = styled.View`
  /* margin-top: ${getStatusBarHeight}px; */
  min-height: ${phoneHeight}px;
  width: 100%;
  flex-direction: column;
  background-color: #f2f4f6;
`;

const BodyContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

const BodyMain = styled.ScrollView`
  flex-direction: column;
  /* align-items: center; */
  /* gap: 20px; */
  align-self: stretch;
  background-color: #fff;
`;

const MainContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  margin-bottom: ${heightPercentage(20)}px;
`;

const CategoryPaymentContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: #f2f4f6;
`;

const CategoryCardContainer = styled.View`
  height: ${heightPercentage(40)}px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
  padding: ${heightPercentage(8)}px ${widthPercentage(15)}px;
`;

const CategoryContainer = styled.View`
  align-items: center;
  gap: 10px;
  flex-direction: row;
`;

const Icon = styled.View`
  width: ${widthPercentage(30)}px;
  height: ${heightPercentage(30)}px;
  align-items: center;
  gap: 10px;
  flex-direction: row;
  padding: 0px ${widthPercentage(5)}px;
  margin-right: ${widthPercentage(8)}px;
`;

const CategoryText = styled.Text`
  height: ${heightPercentage(24)}px;
  width: ${widthPercentage(151)}px;
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const RemainText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;

const CostText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 700;
`;

const RemainCostContainer = styled.View`
  /* width: ${widthPercentage(150)}px; */
  height: ${heightPercentage(20)}px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-direction: row;
`;

const SelectButtonImage = styled.Image`
  height: ${heightPercentage(19)}px;
  margin-top: ${heightPercentage(4)}px;
`;

const CategoryDetailText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const PaymentListContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const PaymentContainer = styled.TouchableOpacity`
  height: ${heightPercentage(58)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  gap: 15px;
  background-color: #f2f4f6;
  flex-direction: row;
  padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
`;

const CategoryDetailContainer = styled.View`
  align-items: center;
  gap: 5px;
  flex-direction: row;
`;

const PayCostText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const CategoryRemainText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 700;
`;

const UsedCostText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const UsedPlusCostText = styled.Text`
  color: #55acee;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;
const UsedMinusCostText = styled.Text`
  color: red;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;
const MapImage = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(300)}px;
`;

const DropImage = styled.Image`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(23)}px;
`;

const TotalBudgetContainer = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(130)}px;
  display: flex;
  padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-bottom-width: 1px;
  border-bottom-color: #f2f4f6;
  /* border-bottom: 1px solid #f2f4f6; */
  /* background: #fff; */
`;

const TotalBudgetText = styled.Text`
  width: ${widthPercentage(97)}px;
  height: ${heightPercentage(23)}px;
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const SelectMenuContainer = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(49)}px;
  display: flex;
  padding: ${heightPercentage(5)}px ${widthPercentage(12)}px;
  justify-content: center;
  align-items: center;
  /* gap: 10px; */
  align-self: stretch;
  flex-direction: row;
`;

const CategoryOrDateContainer = styled.View`
  width: ${widthPercentage(178)}px;
  height: ${heightPercentage(39)}px;
  border-bottom-width: 2px;
  /* border-bottom-color: #55acee; */
  /* border-bottom: 2px solid #55acee; */
  display: flex;
  padding: ${heightPercentage(10)}px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const CategoryOrDateText = styled.Text`
  width: ${widthPercentage(80)}px;
  height: ${heightPercentage(24)}px;
  color: #191f29;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const CategoryDetailTextContainer = styled.View`
  display: flex;
  width: ${widthPercentage(200)}px;
  padding: ${heightPercentage(2)}px 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
`;

const DateAndTimeText = styled.Text`
  color: #4e5968;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;

const PaymentTotalContainer = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1 0 0;
  align-self: stretch;
  display: flex;
  padding: ${heightPercentage(8)}px ${widthPercentage(15)}px;
  height: ${heightPercentage(43)}px;
  gap: 15px;
  align-self: stretch;
`;

const CantGoMarkerView = styled.View`
  elevation: 15;
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 15px;
  background: white;
  width: auto;
  height: ${heightPercentage(35)}px;
`;
const CantSelectGoMarkerView = styled.View`
  elevation: 15;
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 10px;
  background: white;
  width: auto;
  height: ${heightPercentage(35)}px;
  border-color: blue;
  z-index: 9999;
`;
const MarkerTitleText = styled.Text`
  color: #191f29;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
const MarkerKeymoneyText = styled.Text`
  color: #191f29;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;
const LeftPeopleText = styled.Text`
  color: #4e5968;
  text-align: center;
  font-size: 8px;
  font-weight: 400;
`;
const PolygonImage = styled.Image`
  width: ${widthPercentage(15)}px;
  height: ${heightPercentage(6)}px;
`;
const PolygonView = styled.View`
  width: ${widthPercentage(95)}px;
  flex-direction: row;
  justify-content: center;
`;

const HeaderImage = styled.Image`
  width: ${widthPercentage(24)}px;
  height: ${heightPercentage(24)}px;
`;
const styles = StyleSheet.create({
  planpayContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    borderBottom: "1px solid #F2F4F6",
    backgroundColor: "#FFF",
    paddingHorizontal: 40,
  },
  planText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  leftPayment: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
    marginLeft: 10,
  },
  frame154: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  frame155: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  ____: {
    width: 93,
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  _20000: {
    color: "#55ACEE",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  minusBudget: {
    color: "red",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  frame156: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  line: {
    borderBottomColor: "#878787",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 5,
  },
});
export default TravelBudgetDetailPage;

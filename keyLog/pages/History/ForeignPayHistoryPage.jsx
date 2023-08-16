import styled from "styled-components/native";
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import React, { useState, useEffect } from "react";
import PrevHeader from "../../components/Header/PrevHeader";
import { useQuery, useQueryClient } from "react-query";
import { getMyKeymoneyUnit } from "../../api/api";

const Root = styled.SafeAreaView`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  z-index: 9999;
  background-color: ${(props) =>
    props.categoryMode ? "rgba(0, 0, 0, 0.5)" : "#F2F4F6"};
  justify-content: space-between;
`;

const BodyContainer = styled.View`
  width: 100%;
  height: ${heightPercentage(794)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  background-color: #fff;
`;

const BodyHeaderContainer = styled.View`
  width: 100%;
  height: ${heightPercentage(183)}px;
  display: flex;
  padding: ${heightPercentage(0)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
  /* background-color: red; */
`;

const TitleText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const CountryContainer = styled.View`
  display: flex;
  align-items: center;
  gap: 20px;
  width: ${widthPercentage(214)}px;
  height: ${heightPercentage(65)}px;
  flex-direction: row;
`;

const TotalPayCostText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const ExchangeButton = styled.TouchableOpacity`
  width: ${widthPercentage(170)}px;
  height: ${heightPercentage(40)}px;
  display: flex;
  padding: ${heightPercentage(10)}px ${widthPercentage(10)}px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* flex: 1 0 0; */
  border-radius: 10px;
  background-color: #55acee;
  flex-direction: row;
`;

const RevertToWonButton = styled.TouchableOpacity`
  width: ${widthPercentage(170)}px;
  height: ${heightPercentage(40)}px;
  display: flex;
  padding: ${heightPercentage(10)}px ${widthPercentage(10)}px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* flex: 1 0 0; */
  border-radius: 10px;
  background-color: rgba(85, 172, 238, 0.15);
  flex-direction: row;
`;

const ButtonText = styled.Text`
  width: ${widthPercentage(30)}px;
  height: ${heightPercentage(23)}px;
  color: #55acee;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const ExchangeButtonText = styled.Text`
  width: ${widthPercentage(59)}px;
  height: ${heightPercentage(23)}px;
  color: #ffffff;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const SelectContainer = styled.View`
  width: ${widthPercentage(390)}px;
  background-color: #fff;
`;

const SelectTextContainer = styled.TouchableOpacity`
  display: flex;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  align-items: center;
  gap: 5px;
  align-self: stretch;

  flex-direction: row;
`;

const SelectText = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const SelectImage = styled.Image`
  width: ${widthPercentage(15)}px;
  height: ${heightPercentage(9.262)}px;
  margin-top: ${heightPercentage(5)}px;
`;

const HistoryContainer = styled.View`
  width: 100%;
  height: ${heightPercentage(217)}px;
  display: flex;
  padding: ${heightPercentage(20)}px ${widthPercentage(20)}px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  background-color: #fff;
  margin-bottom: ${heightPercentage(20)}px;
`;

const DateText = styled.Text`
  width: ${widthPercentage(350)}px;
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;

const ListContainer = styled.TouchableOpacity`
  width: ${widthPercentage(350)}px;
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex-direction: row;
`;

const ListInfoContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  flex-direction: row;
`;
const ListTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ListText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const TimeText = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;

const CostTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;

const CostText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const RemainCostText = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;

const CostPlusText = styled.Text`
  color: #55acee;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const CategoryComponent = styled.View`
  background-color: white;
  height: ${heightPercentage(210)}px;
  padding: ${heightPercentage(20)}px ${widthPercentage(20)}px;
  width: 100%;
  bottom: 0;
  position: absolute;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  z-index: 9999;
`;
const CategoryTitleList = styled.View`
  align-self: stretch;
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(34)}pxx;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: #8b95a1;
  border-bottom-width: 1px;
  padding-bottom: ${heightPercentage(10)}px;
  /* margin-top: 10px; */
`;
const CategoryListContainer = styled.View`
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(112)}px;
  margin: ${heightPercentage(20)}px 0px;
`;
const CategoryList = styled.TouchableOpacity`
  width: ${widthPercentage(350)}px;
  flex-direction: row;
  height: ${heightPercentage(24)}px;
  display: flex;
  padding: 0px ${widthPercentage(10)}px;
  margin-bottom: ${heightPercentage(20)}px;
  justify-content: space-between;
  align-items: center;
`;

const CategoryTitleText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;
const CategoryText = styled.Text`
  display: flex;
  width: ${widthPercentage(30)}px;
  height: ${heightPercentage(24)}px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  color: #8b95a1;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const DeleteImage = styled.Image`
  width: ${widthPercentage(24)}px;
  height: ${heightPercentage(24)}px;
`;

const SelectButton = styled.TouchableOpacity`
  display: flex;
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(55)}px;
  padding: ${heightPercentage(10)}px ${widthPercentage(10)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 10px;
  background-color: #55acee;
`;

const SelectButtonText = styled.Text`
  color: #fff;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;
const CountrySelectedImage = styled.Image`
  width: ${widthPercentage(60)}px;
  height: ${heightPercentage(64.615)}px;
`;

const ModalBackground = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998; /* CategoryComponent보다 낮은 z-index 설정 */
`;

const ContentContainer = styled.View`
  position: relative; /* 반드시 필요합니다! */
`;

const ForeignPayHistoryPage = ({ route, navigation }) => {
  const { unit, balance } = route?.params;
  const [filter, setFilter] = useState("all");
  const [historyList, setHistoryList] = useState([]);

  const queryClient = useQueryClient();
  const { unitdata } = useQuery(
    "unitdata",
    async () => getMyKeymoneyUnit({ unit, filter }),
    {
      onSuccess: (response) => {
        console.log(response.data);
        console.log("filter제대로 있니", filter);
        console.log(response.data.result.keymoneyHistory);
        let keymoneyHistoryArr = response?.data?.result?.keymoneyHistory;
        // let obj = {};
        // for (let i = 0; i < keymoneyHistoryArr.length; i++) {
        //   if (
        //     !obj[
        //       `${keymoneyHistoryArr[i].createdAt[1]}월${keymoneyHistoryArr[i].createdAt[2]}일`
        //     ]
        //   ) {
        //     obj[
        //       `${keymoneyHistoryArr[i].createdAt[1]}월${keymoneyHistoryArr[i].createdAt[2]}일`
        //     ] = [keymoneyHistoryArr[i]];
        //   } else {
        //     obj[
        //       `${keymoneyHistoryArr[i].createdAt[1]}월${keymoneyHistoryArr[i].createdAt[2]}일`
        //     ].push(keymoneyHistoryArr[i]);
        //   }
        // }
        const historyDateList = keymoneyHistoryArr.reduce((acc, item) => {
          const formattedDate = `${item.createdAt[0]}년 ${String(
            item.createdAt[1]
          ).padStart(2, "0")}월 ${String(item.createdAt[2]).padStart(
            2,
            "0"
          )}일`;

          if (!acc[formattedDate]) {
            acc[formattedDate] = [];
          }
          acc[formattedDate].push(item);
          return acc;
        }, {});

        setHistoryList(historyDateList);
      },
      onError: () => {},
    }
  );

  const handleReloadQuery = () => {
    queryClient.invalidateQueries("unitdata");
  };
  StatusBar.setTranslucent(true);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // useEffect(() => {
  //   setSelectedCategory("전체");
  // }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "전체") {
      setFilter("all");
    } else if (category === "입금") {
      setFilter("exchange");
    } else if (category === "출금") {
      setFilter("payment");
    }
    setOpenSelect(false);
    handleReloadQuery();
  };

  // const handleSelectCategory = () => {
  //   if (selectedCategory == "전체") {
  //     setFilter("all");
  //   } else if (selectedCategory == "입금") {
  //     setFilter("exchange");
  //   } else {
  //     setFilter("payment");
  //   }
  //   setOpenSelect(false);
  //   handleReloadQuery();
  // };

  const UnitImageMap = {
    KRW: require("../../assets/Setting/KoreaCountryIcon.png"),
    USD: require("../../assets/History/USD.png"),
    JPY: require("../../assets/Setting/JapanCountryIcon.png"),
    EUR: require("../../assets/History/EUR.png"),
  };

  const selectedImage = UnitImageMap[unit];

  return (
    <Root categoryMode={openSelect}>
      <PrevHeader navigation={navigation} to="KeyMoneyHistoryPage" />
      <BodyContainer>
        <BodyHeaderContainer>
          <TitleText>입출금 내역</TitleText>
          <CountryContainer>
            <CountrySelectedImage source={selectedImage} />
            <TotalPayCostText>
              {balance} {unit}
            </TotalPayCostText>
          </CountryContainer>
          <ButtonContainer>
            <RevertToWonButton>
              <Image source={require("../../assets/Setting/loop.png")} />
              <ButtonText>원화</ButtonText>
            </RevertToWonButton>
            <ExchangeButton>
              <ExchangeButtonText
                onPress={() => {
                  navigation.navigate("ExchangePage");
                }}
              >
                충전하기
              </ExchangeButtonText>
            </ExchangeButton>
          </ButtonContainer>
        </BodyHeaderContainer>
        <SelectContainer>
          <SelectTextContainer onPress={() => setOpenSelect(true)}>
            <SelectText>{selectedCategory}</SelectText>
            <SelectImage
              source={require("../../assets/travelBudget/SelectButtonBefore.png")}
            />
          </SelectTextContainer>
        </SelectContainer>
        <HistoryContainer>
          {Object.entries(historyList).map(([formattedDate, items]) => (
            <React.Fragment key={formattedDate}>
              {items.filter(
                (item) =>
                  filter === "all" ||
                  (filter === "payment" && item.type === "payment") ||
                  (filter === "exchange" && item.type === "exchange")
              ).length > 0 && (
                <>
                  <DateText>{formattedDate}</DateText>
                  {items.map((item, idx) => {
                    if (
                      (filter === "payment" && item.type === "exchange") ||
                      (filter === "exchange" && item.type === "payment")
                    ) {
                      return null;
                    }
                    const createdAt = item.createdAt;
                    const hour = createdAt[3];
                    const minute = createdAt[4];
                    const formattedTime = `${String(hour).padStart(
                      2,
                      "0"
                    )}:${String(minute).padStart(2, "0")}`;

                    const type = item.type === "payment" ? "-" : "+";
                    const textColor =
                      item.type === "payment" ? "black" : "#55ACEE";
                    const categoryIconMap = {
                      식비: require("../../assets/travelBudget/FoodIcon.png"),
                      교통: require("../../assets/travelBudget/TransIcon.png"),
                      숙박: require("../../assets/travelBudget/HouseIcon.png"),
                      "쇼핑 · 편의점 · 마트": require("../../assets/travelBudget/ShopIcon.png"),
                      "문화 · 여가": require("../../assets/travelBudget/PlayIcon.png"),
                      기타: require("../../assets/travelBudget/EtcIcon.png"),
                    };

                    const categoryIcon =
                      categoryIconMap[item.category] ||
                      require("../../assets/travelBudget/환전.png");

                    return (
                      <ListContainer
                        key={idx}
                        onPress={() => {
                          navigation.navigate("PaymentPageInputComponent", {
                            category: item.category,
                            keymoney: item.keymoney,
                            unit: item.unit,
                            formattedDate: formattedDate,
                            formattedTime: formattedTime,
                            subject: item.subject,
                            categoryImage: categoryIconMap[item.category],
                            historyId: item.historyId,
                            type: item.type,
                          });
                        }}
                      >
                        <Image source={categoryIcon} />
                        <ListInfoContainer>
                          <ListTextContainer>
                            <ListText>{item.subject}</ListText>
                            <TimeText>{formattedTime}</TimeText>
                          </ListTextContainer>
                          <CostTextContainer>
                            <CostText
                              style={{ color: textColor }}
                            >{`${type}${item.keymoney} ${item.unit}`}</CostText>
                            <RemainCostText>
                              {item.balance} {item.unit}
                            </RemainCostText>
                          </CostTextContainer>
                        </ListInfoContainer>
                      </ListContainer>
                    );
                  })}
                </>
              )}
              {items.filter(
                (item) =>
                  filter === "all" ||
                  (filter === "payment" && item.type === "payment") ||
                  (filter === "exchange" && item.type === "exchange")
              ).length === 0 && <Text>내역이 없습니다.</Text>}
            </React.Fragment>
          ))}
        </HistoryContainer>
      </BodyContainer>
      {openSelect && (
        <>
          <ModalBackground onPress={() => setOpenSelect(false)} />
          <CategoryComponent>
            <CategoryTitleList>
              <CategoryTitleText>내역 선택</CategoryTitleText>
              <TouchableOpacity
                onPress={() => {
                  setOpenSelect(false);
                  setSelectedCategory("전체");
                }}
              >
                <DeleteImage source={require("../../Images/삭제.png")} />
              </TouchableOpacity>
            </CategoryTitleList>
            <CategoryListContainer>
              <CategoryList onPress={() => handleCategorySelect("전체")}>
                <CategoryText
                  style={
                    selectedCategory === "전체" ? { color: "#55acee" } : {}
                  }
                >
                  전체
                </CategoryText>
                {selectedCategory === "전체" && (
                  <Image source={require("../../assets/Setting/check.png")} />
                )}
              </CategoryList>
              <CategoryList onPress={() => handleCategorySelect("입금")}>
                <CategoryText
                  style={
                    selectedCategory === "입금" ? { color: "#55acee" } : {}
                  }
                >
                  입금
                </CategoryText>
                {selectedCategory === "입금" && (
                  <Image source={require("../../assets/Setting/check.png")} />
                )}
              </CategoryList>
              <CategoryList onPress={() => handleCategorySelect("출금")}>
                <CategoryText
                  style={
                    selectedCategory === "출금" ? { color: "#55acee" } : {}
                  }
                >
                  출금
                </CategoryText>
                {selectedCategory === "출금" && (
                  <Image source={require("../../assets/Setting/check.png")} />
                )}
              </CategoryList>
            </CategoryListContainer>
            {/* <SelectButton onPress={() => handleSelectCategory()}>
            <SelectButtonText>확인</SelectButtonText>
          </SelectButton> */}
          </CategoryComponent>
        </>
      )}
    </Root>
  );
};

export default ForeignPayHistoryPage;
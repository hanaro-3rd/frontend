import React, { useState, useEffect } from "react";
import { Image, TouchableOpacity } from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
  getMoneyUnit,
} from "../../utils/ResponseSize";
import styled from "styled-components/native";
import FoodIcon from "../../assets/travelBudget/FoodIcon.png";
import TransIcon from "../../assets/travelBudget/TransIcon.png";
import HouseIcon from "../../assets/travelBudget/HouseIcon.png";
import ShopIcon from "../../assets/travelBudget/ShopIcon.png";
import PlayIcon from "../../assets/travelBudget/PlayIcon.png";
import EtcIcon from "../../assets/travelBudget/EtcIcon.png";
import arrow_back from "../../assets/travelBudget/arrow_back.png";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { patchTravelPlan, patchTravelBudget } from "../../api/api";

const RootScrollView = styled.ScrollView`
  /* margin-top: ${getStatusBarHeight}px; */
  /* min-height: ${phoneHeight}px; */
  height: ${heightPercentage(844)}px;
  width: 100%;
  flex-direction: column;
  background-color: #f2f4f6;
  /* align-items: flex-start; */
`;

const Header = styled.View`
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
  padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
`;

const Title = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(23)}px;
  font-weight: 700;
`;

const Subtitle = styled.Text`
  color: #8b95a1;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;

const Body = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const BodyHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: #fff;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
`;

const BodyMain = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
  background-color: #fff;
  padding: ${heightPercentage(10)}px ${widthPercentage(30)}px;
`;

const BudgetListContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

const BudgetContainer = styled.View`
  width: ${widthPercentage(330)}px;
  height: ${heightPercentage(79)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  padding: ${heightPercentage(5)}px 0px;
`;

const CategoryContainer = styled.View`
  align-items: center;
  gap: 5px;
  flex-direction: row;
`;

const Icon = styled.View`
  align-items: center;
  gap: 10px;
  flex-direction: row;
  padding: 0px ${widthPercentage(5)}px;
`;

const CategoryText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;

const BudgetInput = styled.TextInput`
  font-size: ${fontPercentage(16)}px;
  color: #191f29;
  font-style: normal;
  text-align: right;
  font-weight: 400;
  flex: 1 0 0;
  padding: 0px;
`;
const MoneyUnitText = styled.Text`
  width: ${widthPercentage(16)}px;
  height: ${heightPercentage(19)}px;
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
  /* margin-bottom: ${heightPercentage(6)}px; */
`;

const Input = styled.View`
  width: ${widthPercentage(330)}px;
  height: ${heightPercentage(39)}px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-color: ${(props) => (props.isFilled ? "#55ACEE" : "#f2f4f6")};
  border-bottom-width: 2px;
  flex-direction: row;
  padding: ${heightPercentage(10)}px 0px;
`;

const TotalText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  text-align: center;
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
  padding-bottom: ${heightPercentage(5)}px;
`;

const BudgetTotalContainer = styled.View`
  width: ${widthPercentage(330)}px;
  height: ${heightPercentage(69)}px;
  align-items: center;
  /* gap: 20px; */
  align-self: stretch;
  border-radius: 10px;
  border: 1px solid #8b95a1;
  flex-direction: row;
  padding: ${heightPercentage(10)}px ${widthPercentage(20)}px;
  margin-top: ${heightPercentage(19)}px;
`;

const BudgetTotalText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
  height: ${heightPercentage(29)}px;
  /* padding-bottom: ${heightPercentage(3)}px; */
`;

const MoneyTotalUnitText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(24)}px;
  font-weight: 700;
  height: ${heightPercentage(29)}px;
  margin-bottom: ${heightPercentage(0)}px;
`;

const InputTotal = styled.View`
  width: ${widthPercentage(247)}px;
  height: ${heightPercentage(49)}px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  flex-direction: row;
  /* padding: ${heightPercentage(10)}px 0px; */
`;

const ButtonText = styled.Text`
  color: #fff;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-weight: 700;
`;

const Footer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20;
  align-self: stretch;
  background-color: #fff;
  padding: ${heightPercentage(15)}px ${widthPercentage(25)}px;
`;

const SubmitButton = styled.TouchableOpacity`
  height: ${heightPercentage(55)}px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background-color: ${(props) => (props.disabled ? "#f2f4f6" : "#55ACEE")};
  flex-direction: row;
  flex-direction: row;
  padding: ${heightPercentage(10)}px ${widthPercentage(10)}px;
  border-radius: 10px;
`;

const TravelBudgetPlanEditPage = ({ navigation, route }) => {
  const handleGoBackToSchedulePage = () => {
    navigation.goBack();
  };

  const queryClient = useQueryClient();

  const {
    planId,
    travelTitle,
    travelCountry,
    travelCountryOption,
    startDate,
    endDate,
    category,
  } = route.params;

  console.log("바뀐거 제대로 오는거지", travelTitle, travelCountry, startDate);
  const patchEditTravelPlanMutation = useMutation(patchTravelPlan, {
    onSuccess: (response) => {
      console.log(response.data);
      queryClient.invalidateQueries("travelBudgetData");
    },
    onError: () => {
      console.log("실행이 안되니");
    },
  });

  const patchEditTravelBudgetPlanMutation = useMutation(patchTravelBudget, {
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: () => {
      console.log("실행이 안되니");
    },
  });

  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    let initialTotalBudget = 0;
    category.forEach((item) => {
      initialTotalBudget += item.categoryBudget;
    });
    setTotalBudget(initialTotalBudget);
    setCategoryData(category);
  }, [category]);

  const [moneyUnit, setMoneyunit] = useState(getMoneyUnit(travelCountry));
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    let newMoneyUnit = "₩";

    if (travelCountry === "USA") {
      newMoneyUnit = "$";
    } else if (travelCountry === "JPY") {
      newMoneyUnit = "¥";
    } else if (travelCountry === "EUR") {
      newMoneyUnit = "€";
    }

    setMoneyunit(newMoneyUnit);
  }, [travelCountry]);

  const categoryNames = {
    1: "식비",
    2: "교통",
    3: "숙박",
    4: "쇼핑 · 편의점 · 마트",
    5: "문화 · 여가",
    6: "기타",
  };

  const categoryIcons = {
    1: FoodIcon,
    2: TransIcon,
    3: HouseIcon,
    4: ShopIcon,
    5: PlayIcon,
    6: EtcIcon,
  };

  const handleSaveButtonPress = () => {
    const updateTravelPlanData = {
      city: travelCountryOption,
      country: travelCountry,
      endDate: endDate,
      startDate: startDate,
      title: travelTitle,
    };

    patchEditTravelPlanMutation.mutate({
      planId: planId,
      patchTravelPlanData: updateTravelPlanData,
    });

    const updateTravelBudgetData = {
      category: categoryData.map((category) => ({
        categoryBudget: category.categoryBudget,
        categoryId: category.categoryId,
      })),
    };

    patchEditTravelBudgetPlanMutation.mutate({
      plan_id: planId,
      patchTravelBudgetData: updateTravelBudgetData,
    });

    console.log(
      "제대로 다 됐을까?",
      updateTravelPlanData,
      updateTravelBudgetData
    );
    navigation.navigate("TravelBudgetPage");
  };

  const handleCategoryBudgetChange = (categoryId, value) => {
    const updatedCategoryData = categoryData.map((item) =>
      item.categoryId === categoryId
        ? { ...item, categoryBudget: parseInt(value) || 0, isFilled: !!value }
        : item
    );
    setCategoryData(updatedCategoryData);

    const newTotalBudget = updatedCategoryData.reduce(
      (total, category) => total + category.categoryBudget,
      0
    );
    setTotalBudget(newTotalBudget);

    console.log("총 금액 변경됐니? :", newTotalBudget);
  };

  const isAnyCategoryFilled =
    categoryData.some((category) => category.isFilled) ||
    categoryData.some((category) => category.categoryBudget > 0);

  return (
    <RootScrollView>
      <Header>
        <TouchableOpacity onPress={handleGoBackToSchedulePage}>
          <Image source={arrow_back} />
        </TouchableOpacity>
      </Header>
      <Body>
        <BodyHeader>
          <Title>경비 작성</Title>
          <Subtitle>카테고리별 여행 경비를 작성해주세요.</Subtitle>
        </BodyHeader>
        <BodyMain>
          <BudgetListContainer>
            {categoryData.map((category) => (
              <BudgetContainer key={category.categoryId}>
                <CategoryContainer>
                  <Icon>
                    <Image source={categoryIcons[category.categoryId]} />
                  </Icon>
                  <CategoryText>
                    {categoryNames[category.categoryId]}
                  </CategoryText>
                </CategoryContainer>
                <Input
                  isFilled={category.isFilled || category.categoryBudget > 0}
                >
                  <BudgetInput
                    keyboardType="numeric"
                    placeholder="0"
                    value={category.categoryBudget.toString()}
                    onChangeText={(text) => {
                      handleCategoryBudgetChange(category.categoryId, text);
                    }}
                    onFocus={() => {
                      const updatedCategoryData = categoryData.map((item) =>
                        item.categoryId === category.categoryId
                          ? { ...item, isInputFocused: true }
                          : item
                      );
                      setCategoryData(updatedCategoryData);
                    }}
                    onBlur={() => {
                      const updatedCategoryData = categoryData.map((item) =>
                        item.categoryId === category.categoryId
                          ? { ...item, isInputFocused: false }
                          : item
                      );
                      setCategoryData(updatedCategoryData);
                    }}
                  />
                  <MoneyUnitText>{moneyUnit}</MoneyUnitText>
                </Input>
              </BudgetContainer>
            ))}
          </BudgetListContainer>
          <BudgetTotalContainer>
            <TotalText>총</TotalText>
            <InputTotal>
              <BudgetTotalText>{totalBudget}</BudgetTotalText>
              <MoneyTotalUnitText>{moneyUnit}</MoneyTotalUnitText>
            </InputTotal>
          </BudgetTotalContainer>
        </BodyMain>
      </Body>
      <Footer>
        <SubmitButton
          disabled={!isAnyCategoryFilled}
          onPress={handleSaveButtonPress}
        >
          <ButtonText>저장하기</ButtonText>
        </SubmitButton>
      </Footer>
    </RootScrollView>
  );
};

export default TravelBudgetPlanEditPage;

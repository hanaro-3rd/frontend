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
import { useMutation, useQueryClient } from "react-query";
import { postTravelBudget } from "../../api/api";

const RootScrollView = styled.ScrollView`
  margin-top: ${getStatusBarHeight}px;
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
  margin-bottom: ${heightPercentage(6)}px;
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

const TravelBudgetPlanPage = ({ navigation, route }) => {
  const handleGoBackToSchedulePage = () => {
    navigation.goBack();
  };

  const postTravelBudgetMutation = useMutation(postTravelBudget, {
    onSuccess: (response) => {
      console.log(response.data);
      queryClient.invalidateQueries("travelBudgetData");
      navigation.navigate("TravelBudgetPage")
    },
    onError: (error) => {
      console.log(error.response);
    },
  });
  console.log(route.params);
  const queryClient = useQueryClient();
  const {
    travelTitle,
    travelCountry,
    travelCountryOption,
    startDate,
    endDate,
  } = route.params;
  const handleSaveButtonPress = () => {
    postTravelBudgetMutation.mutate({
      category: [
        {
          categoryBudget: foodBudget,
          categoryId: 1,
        },
        {
          categoryBudget: transBudget,
          categoryId: 2,
        },
        {
          categoryBudget: houseBudget,
          categoryId: 3,
        },
        {
          categoryBudget: shopBudget,
          categoryId: 4,
        },
        {
          categoryBudget: playBudget,
          categoryId: 5,
        },
        {
          categoryBudget: etcBudget,
          categoryId: 6,
        },
      ],
      title: travelTitle,
      totalBudget: totalBudget,
      startDate: startDate,
      endDate: endDate,
      city: travelCountryOption,
      country: travelCountry,
    });
  };

  const [foodBudget, setFoodBudget] = useState(0);
  const [transBudget, setTransBudget] = useState(0);
  const [houseBudget, setHouseBudget] = useState(0);
  const [shopBudget, setShopBudget] = useState(0);
  const [playBudget, setPlayBudget] = useState(0);
  const [etcBudget, setEtcBudget] = useState(0);
  const [moneyUnit, setMoneyunit] = useState(getMoneyUnit(travelCountry));
  console.log(moneyUnit);
  useEffect(() => {
    const totalBudget =
      foodBudget +
      transBudget +
      houseBudget +
      shopBudget +
      playBudget +
      etcBudget;
    setTotalBudget(totalBudget);
  }, [foodBudget, transBudget, houseBudget, shopBudget, playBudget, etcBudget]);

  // State for the total budget
  const [totalBudget, setTotalBudget] = useState(0);

  useEffect(() => {
    setTotalBudget(0);
  }, []);

  const [isBudgetInputFilled, setIsBudgetInputFilled] = useState(false);
  const [isFoodBudgetInputFilled, setIsFoodBudgetInputFilled] = useState(false);
  const [isTransBudgetInputFilled, setIsTransBudgetInputFilled] =
    useState(false);
  const [isHouseBudgetInputFilled, setIsHouseBudgetInputFilled] =
    useState(false);
  const [isShopBudgetInputFilled, setIsShopBudgetInputFilled] = useState(false);
  const [isPlayBudgetInputFilled, setIsPlayBudgetInputFilled] = useState(false);
  const [isEtcBudgetInputFilled, setIsEtcBudgetInputFilled] = useState(false);

  {
    /* 저장하기 버튼 활성화 */
  }
  const isAnyBudgetInputFilled =
    isFoodBudgetInputFilled ||
    isTransBudgetInputFilled ||
    isHouseBudgetInputFilled ||
    isShopBudgetInputFilled ||
    isPlayBudgetInputFilled ||
    isEtcBudgetInputFilled;

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
            <BudgetContainer>
              <CategoryContainer>
                <Icon>
                  <Image source={FoodIcon} />
                </Icon>
                <CategoryText>식비</CategoryText>
              </CategoryContainer>
              <Input isFilled={isFoodBudgetInputFilled}>
                <BudgetInput
                  keyboardType="numeric"
                  placeholder="0"
                  onChangeText={(text) => {
                    setFoodBudget(parseInt(text) || 0);
                    setIsFoodBudgetInputFilled(!!text);
                  }}
                  onFocus={() => setIsFoodBudgetInputFilled(true)}
                  onBlur={() => setIsFoodBudgetInputFilled(!!foodBudget)}
                />
                <MoneyUnitText>{moneyUnit}</MoneyUnitText>
              </Input>
            </BudgetContainer>
            <BudgetContainer>
              <CategoryContainer>
                <Icon>
                  <Image source={TransIcon} />
                </Icon>
                <CategoryText>교통</CategoryText>
              </CategoryContainer>
              <Input isFilled={isTransBudgetInputFilled}>
                <BudgetInput
                  keyboardType="numeric"
                  placeholder="0"
                  onChangeText={(text) => {
                    setTransBudget(parseInt(text) || 0);
                    setIsTransBudgetInputFilled(!!text);
                  }}
                  onFocus={() => setIsTransBudgetInputFilled(true)}
                  onBlur={() => setIsTransBudgetInputFilled(!!transBudget)}
                />
                <MoneyUnitText>{moneyUnit}</MoneyUnitText>
              </Input>
            </BudgetContainer>
            <BudgetContainer>
              <CategoryContainer>
                <Icon>
                  <Image source={HouseIcon} />
                </Icon>
                <CategoryText>숙박</CategoryText>
              </CategoryContainer>
              <Input isFilled={isHouseBudgetInputFilled}>
                <BudgetInput
                  keyboardType="numeric"
                  placeholder="0"
                  onChangeText={(text) => {
                    setHouseBudget(parseInt(text) || 0);
                    setIsHouseBudgetInputFilled(!!text);
                  }}
                  onFocus={() => setIsHouseBudgetInputFilled(true)}
                  onBlur={() => setIsHouseBudgetInputFilled(!!houseBudget)}
                />
                <MoneyUnitText>{moneyUnit}</MoneyUnitText>
              </Input>
            </BudgetContainer>
            <BudgetContainer>
              <CategoryContainer>
                <Icon>
                  <Image source={ShopIcon} />
                </Icon>
                <CategoryText>쇼핑 · 편의점 · 마트</CategoryText>
              </CategoryContainer>
              <Input isFilled={isShopBudgetInputFilled}>
                <BudgetInput
                  keyboardType="numeric"
                  placeholder="0"
                  onChangeText={(text) => {
                    setShopBudget(parseInt(text) || 0);
                    setIsShopBudgetInputFilled(!!text);
                  }}
                  onFocus={() => setIsShopBudgetInputFilled(true)}
                  onBlur={() => setIsShopBudgetInputFilled(!!shopBudget)}
                />
                <MoneyUnitText>{moneyUnit}</MoneyUnitText>
              </Input>
            </BudgetContainer>
            <BudgetContainer>
              <CategoryContainer>
                <Icon>
                  <Image source={PlayIcon} />
                </Icon>
                <CategoryText>문화 · 여가</CategoryText>
              </CategoryContainer>
              <Input isFilled={isPlayBudgetInputFilled}>
                <BudgetInput
                  keyboardType="numeric"
                  placeholder="0"
                  onChangeText={(text) => {
                    setPlayBudget(parseInt(text) || 0);
                    setIsPlayBudgetInputFilled(!!text);
                  }}
                  onFocus={() => setIsPlayBudgetInputFilled(true)}
                  onBlur={() => setIsPlayBudgetInputFilled(!!playBudget)}
                />
                <MoneyUnitText>{moneyUnit}</MoneyUnitText>
              </Input>
            </BudgetContainer>
            <BudgetContainer>
              <CategoryContainer>
                <Icon>
                  <Image source={EtcIcon} />
                </Icon>
                <CategoryText>기타</CategoryText>
              </CategoryContainer>
              <Input isFilled={isEtcBudgetInputFilled}>
                <BudgetInput
                  keyboardType="numeric"
                  placeholder="0"
                  onChangeText={(text) => {
                    setEtcBudget(parseInt(text) || 0);
                    setIsEtcBudgetInputFilled(!!text);
                  }}
                  onFocus={() => setIsEtcBudgetInputFilled(true)}
                  onBlur={() => setIsEtcBudgetInputFilled(!!etcBudget)}
                />
                <MoneyUnitText>{moneyUnit}</MoneyUnitText>
              </Input>
            </BudgetContainer>
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
          disabled={!isAnyBudgetInputFilled}
          onPress={handleSaveButtonPress}
        >
          <ButtonText>저장하기</ButtonText>
        </SubmitButton>
      </Footer>
    </RootScrollView>
  );
};

export default TravelBudgetPlanPage;

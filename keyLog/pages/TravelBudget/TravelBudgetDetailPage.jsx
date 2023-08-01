import React from "react";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import { Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CloseButton from "../../assets/travelBudget/CloseButton.png";
import DeleteButton from "../../assets/travelBudget/delete.png";
import EditButton from "../../assets/travelBudget/edit.png";
import FoodIcon from "../../assets/travelBudget/FoodIcon.png";
import TransIcon from "../../assets/travelBudget/TransIcon.png";
import HouseIcon from "../../assets/travelBudget/HouseIcon.png";
import ShopIcon from "../../assets/travelBudget/ShopIcon.png";
import SelectButton from "../../assets/travelBudget/SelectButton.png";

const RootScrollView = styled.ScrollView`
  margin-top: ${getStatusBarHeight}px;
  min-height: ${phoneHeight}px;
  width: 100%;
  flex-direction: column;
  background-color: #f2f4f6;
`;

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
  flex: 1 0 0;
  align-self: stretch;
`;

const BodyHeader = styled.View`
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
`;

const PeriodText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const TitleTextMain = styled.Text`
  color: #000;
  font-family: "Inter";
  font-size: ${fontPercentage(30)}px;
  font-style: normal;
  font-weight: 700;
`;

const CityText = styled.Text`
  color: #191f29;
  font-family: "Inter";
  font-size: ${fontPercentage(20)}px;
  font-style: normal;
  font-weight: 400;
`;

const BodyMain = styled.View`
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  background-color: #fff;
`;

const MainTextContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding: ${heightPercentage(10)}px 0px;
  gap: 5px;
`;

const MainContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const CategoryPaymentContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background-color: #f2f4f6;
`;

const CategoryCardContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: #fff;
  flex-direction: row;
  padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
`;

const CategoryContainer = styled.View`
  align-items: center;
  gap: 10px;
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
  font-style: normal;
  font-weight: 400;
`;

const RemainText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 400;
`;

const CostText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const RemainCostContainer = styled.View`
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
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 400;
`;

const PaymentListContainer = styled.View`
  flex-direction: column;
  align-items: center;
  align-self: stretch;
`;

const PaymentContainer = styled.View`
  height: ${heightPercentage(50)}px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
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
  font-size: ${fontPercentage(14)}px;
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

const RemainCostText = styled.Text`
  color: #191f29;
  text-align: right;
  font-family: "Inter";
  font-size: ${fontPercentage(14)}px;
  font-style: normal;
  font-weight: 700;
`;

const TravelBudgetDetailPage = ({ navigation }) => {
  const handleGoBackToBudgetPage = () => {
    navigation.goBack();
  };

  return (
    <RootScrollView>
      <Header>
        <TouchableOpacity onPress={handleGoBackToBudgetPage}>
          <Image source={CloseButton} />
        </TouchableOpacity>
        <HeaderRight>
          <Image source={DeleteButton} />
          <Image source={EditButton} />
        </HeaderRight>
      </Header>
      <BodyContainer>
        <BodyHeader>
          <TitleText>경비 계획 상세</TitleText>
        </BodyHeader>
        <BodyMain>
          <MainTextContainer>
            <PeriodText>2023.07.01 ~ 2023.07.10</PeriodText>
            <TitleTextMain>첫 도쿄 여행</TitleTextMain>
            <CityText>일본, 도쿄</CityText>
          </MainTextContainer>
          <MainContainer>
            <CategoryPaymentContainer>
              <CategoryCardContainer>
                <CategoryContainer>
                  <Icon>
                    <Image source={FoodIcon} />
                  </Icon>
                  <CategoryText>식비</CategoryText>
                </CategoryContainer>
                <RemainCostContainer>
                  <RemainText>계획한 비용</RemainText>
                  <CostText>￥80,000</CostText>
                  <SelectButtonImage source={SelectButton} />
                </RemainCostContainer>
              </CategoryCardContainer>
              <PaymentListContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryDetailText>스테이크</CategoryDetailText>
                  </CategoryDetailContainer>
                  <PayCostText>- ￥10,000</PayCostText>
                </PaymentContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryDetailText>오코노미야키</CategoryDetailText>
                  </CategoryDetailContainer>
                  <PayCostText>- ￥10,000</PayCostText>
                </PaymentContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryRemainText>남은 비용</CategoryRemainText>
                  </CategoryDetailContainer>
                  <RemainCostText>￥60,000</RemainCostText>
                </PaymentContainer>
              </PaymentListContainer>
            </CategoryPaymentContainer>
            <CategoryPaymentContainer>
              <CategoryCardContainer>
                <CategoryContainer>
                  <Icon>
                    <Image source={TransIcon} />
                  </Icon>
                  <CategoryText>교통</CategoryText>
                </CategoryContainer>
                <RemainCostContainer>
                  <RemainText>계획한 비용</RemainText>
                  <CostText>￥80,000</CostText>
                  <SelectButtonImage source={SelectButton} />
                </RemainCostContainer>
              </CategoryCardContainer>
              <PaymentListContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryDetailText>지하철</CategoryDetailText>
                  </CategoryDetailContainer>
                  <PayCostText>- ￥10,000</PayCostText>
                </PaymentContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryDetailText>신칸센</CategoryDetailText>
                  </CategoryDetailContainer>
                  <PayCostText>- ￥10,000</PayCostText>
                </PaymentContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryRemainText>남은 비용</CategoryRemainText>
                  </CategoryDetailContainer>
                  <RemainCostText>￥60,000</RemainCostText>
                </PaymentContainer>
              </PaymentListContainer>
            </CategoryPaymentContainer>
            <CategoryPaymentContainer>
              <CategoryCardContainer>
                <CategoryContainer>
                  <Icon>
                    <Image source={HouseIcon} />
                  </Icon>
                  <CategoryText>숙박</CategoryText>
                </CategoryContainer>
                <RemainCostContainer>
                  <RemainText>계획한 비용</RemainText>
                  <CostText>￥80,000</CostText>
                  <SelectButtonImage source={SelectButton} />
                </RemainCostContainer>
              </CategoryCardContainer>
              <PaymentListContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryDetailText>호텔</CategoryDetailText>
                  </CategoryDetailContainer>
                  <PayCostText>- ￥10,000</PayCostText>
                </PaymentContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryRemainText>남은 비용</CategoryRemainText>
                  </CategoryDetailContainer>
                  <RemainCostText>￥70,000</RemainCostText>
                </PaymentContainer>
              </PaymentListContainer>
            </CategoryPaymentContainer>
            <CategoryPaymentContainer>
              <CategoryCardContainer>
                <CategoryContainer>
                  <Icon>
                    <Image source={ShopIcon} />
                  </Icon>
                  <CategoryText>쇼핑 · 편의점 · 마트</CategoryText>
                </CategoryContainer>
                <RemainCostContainer>
                  <RemainText>계획한 비용</RemainText>
                  <CostText>￥80,000</CostText>
                  <SelectButtonImage source={SelectButton} />
                </RemainCostContainer>
              </CategoryCardContainer>
              <PaymentListContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryDetailText>스테이크</CategoryDetailText>
                  </CategoryDetailContainer>
                  <PayCostText>- ￥10,000</PayCostText>
                </PaymentContainer>
                <PaymentContainer>
                  <CategoryDetailContainer>
                    <CategoryRemainText>남은 비용</CategoryRemainText>
                  </CategoryDetailContainer>
                  <RemainCostText>￥70,000</RemainCostText>
                </PaymentContainer>
              </PaymentListContainer>
            </CategoryPaymentContainer>
          </MainContainer>
        </BodyMain>
      </BodyContainer>
    </RootScrollView>
  );
};

export default TravelBudgetDetailPage;

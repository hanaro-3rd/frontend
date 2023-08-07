import React, { useState } from "react";
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
import DeleteHeader from "../../components/Header/DeleteHeader";
import HeaderBack from "../../assets/travelBudget/Header-Back.png";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import { he } from "date-fns/locale";

const RootScrollView = styled.ScrollView`
  /* margin-top: ${getStatusBarHeight}px; */
  min-height: ${phoneHeight}px;
  width: 100%;
  flex-direction: column;
  background-color: #f2f4f6;
`;

const BodyContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const BodyMain = styled.View`
  flex-direction: column;
  align-items: center;
  /* gap: 20px; */
  align-self: stretch;
  background-color: #fff;
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
  width: ${widthPercentage(51)}px;
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

const PaymentContainer = styled.View`
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

const MapImage = styled.Image`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(300)}px;
`;

const DropImage = styled.Image`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(23)}px;
`;

const TotalBudgetContainer = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(45)}px;
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
  width: ${widthPercentage(74)}px;
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

const TravelBudgetDetailPage = ({ navigation }) => {
  const handleGoBackToBudgetPage = () => {
    navigation.goBack();
  };

  const [selectedTab, setSelectedTab] = useState("category");

  return (
    <RootScrollView>
      <DeleteHeader navigation={navigation} to="TravelBudgetPage" />
      <BodyContainer>
        <MapImage source={require("../../Images/지도.png")} />
        <DropImage
          source={require("../../assets/travelBudget/Header-Back.png")}
        />
        <BodyMain>
          <TotalBudgetContainer>
            <TotalBudgetText>총 ￥100,000</TotalBudgetText>
          </TotalBudgetContainer>
          <SelectMenuContainer>
            <CategoryOrDateContainer
              style={{
                borderBottomColor:
                  selectedTab === "category" ? "#55acee" : "white",
              }}
            >
              <TouchableOpacity onPress={() => setSelectedTab("category")}>
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
              <CategoryPaymentContainer>
                <CategoryCardContainer>
                  <CategoryContainer>
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
                      <Icon>
                        <Image source={FoodIcon} />
                      </Icon>
                      <CategoryDetailTextContainer>
                        <CategoryDetailText>스테이크</CategoryDetailText>
                        <DateAndTimeText>7월 1일 13:59</DateAndTimeText>
                      </CategoryDetailTextContainer>
                    </CategoryDetailContainer>
                    <PayCostText> ￥10,000</PayCostText>
                  </PaymentContainer>
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
                  <PaymentTotalContainer>
                    <UsedCostText>총 ￥20,000</UsedCostText>
                  </PaymentTotalContainer>
                </PaymentListContainer>
              </CategoryPaymentContainer>
              <CategoryPaymentContainer>
                <CategoryCardContainer>
                  <CategoryContainer>
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
                      <Icon>
                        <Image source={TransIcon} />
                      </Icon>
                      <CategoryDetailTextContainer>
                        <CategoryDetailText>지하철</CategoryDetailText>
                        <DateAndTimeText>7월 1일 13:59</DateAndTimeText>
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
              </CategoryPaymentContainer>
            </MainContainer>
          ) : (
            <MainContainer>
              <CategoryPaymentContainer>
                <CategoryCardContainer>
                  <CategoryContainer>
                    <CategoryText>7월 1일</CategoryText>
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
                        <CategoryDetailText>스테이크</CategoryDetailText>
                        <DateAndTimeText>7월 1일 13:59</DateAndTimeText>
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
                        <CategoryDetailText>지하철</CategoryDetailText>
                        <DateAndTimeText>7월 1일 13:59</DateAndTimeText>
                      </CategoryDetailTextContainer>
                    </CategoryDetailContainer>
                    <PayCostText> ￥10,000</PayCostText>
                  </PaymentContainer>
                  <PaymentTotalContainer>
                    <UsedCostText>총 ￥20,000</UsedCostText>
                  </PaymentTotalContainer>
                </PaymentListContainer>
              </CategoryPaymentContainer>
              <CategoryPaymentContainer>
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
              </CategoryPaymentContainer>
            </MainContainer>
          )}
        </BodyMain>
      </BodyContainer>
    </RootScrollView>
  );
};

export default TravelBudgetDetailPage;

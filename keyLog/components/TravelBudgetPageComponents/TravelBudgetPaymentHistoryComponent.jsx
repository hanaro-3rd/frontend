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
import { Image, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import CloseButton from "../../assets/travelBudget/CloseButton.png";
import DeleteButton from "../../assets/travelBudget/delete.png";
import EditButton from "../../assets/travelBudget/edit.png";
import FoodIcon from "../../assets/travelBudget/FoodIcon.png";
import TransIcon from "../../assets/travelBudget/TransIcon.png";
import HouseIcon from "../../assets/travelBudget/HouseIcon.png";
import ShopIcon from "../../assets/travelBudget/ShopIcon.png";
import EtcIcon from "../../assets/travelBudget/EtcIcon.png";
import PlayIcon from "../../assets/travelBudget/PlayIcon.png";
import SelectButton from "../../assets/travelBudget/SelectButton.png";
import DeleteHeader from "../../components/Header/DeleteHeader";
import HeaderBack from "../../assets/travelBudget/Header-Back.png";
import { useQuery, useQueryClient } from "react-query";
import { getTravelBudgetCategory, getTravelBudgetDetail } from "../../api/api";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
const TravelBudgetPaymentHistoryComponent = ({
  category,
  categoryList,
  setLocation,
  categoryIcon,
  categoryTitle,
  travelBudgetUnit,
  setTotalPayment,
  clickCount,
}) => {
  const calculateOneCategoryTotal = () => {
    return categoryList.reduce((acc, cur) => acc + cur.price, 0);
  };

  useEffect(() => {
    if (clickCount < 1) {
      setTotalPayment(
        (prevTotalPayment) => prevTotalPayment + calculateOneCategoryTotal()
      );
    }
  }, []);

  return (
    //categoryId=1, 식비
    <CategoryPaymentContainer>
      <CategoryCardContainer>
        <CategoryContainer>
          <CategoryText>{categoryTitle}</CategoryText>
        </CategoryContainer>
        <RemainCostContainer>
          <RemainText>계획한 비용</RemainText>
          <CostText>
            {travelBudgetUnit}
            {category.categoryBudget}
          </CostText>
          <SelectButtonImage source={SelectButton} />
        </RemainCostContainer>
      </CategoryCardContainer>
      <PaymentListContainer>
        {categoryList?.map((e, idx) => {
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
              key={idx}
            >
              <CategoryDetailContainer>
                <Icon>
                  {(categoryIcon == "foodIcon" && (
                    <Image
                      source={require(`../../assets/travelBudget/FoodIcon.png`)}
                    />
                  )) ||
                    (categoryIcon == "transIcon" && (
                      <Image
                        source={require(`../../assets/travelBudget/TransIcon.png`)}
                      />
                    )) ||
                    (categoryIcon == "houseIcon" && (
                      <Image
                        source={require(`../../assets/travelBudget/HouseIcon.png`)}
                      />
                    )) ||
                    (categoryIcon == "shopIcon" && (
                      <Image
                        source={require(`../../assets/travelBudget/ShopIcon.png`)}
                      />
                    )) ||
                    (categoryIcon == "playIcon" && (
                      <Image
                        source={require(`../../assets/travelBudget/PlayIcon.png`)}
                      />
                    )) ||
                    (categoryIcon == "etcIcon" && (
                      <Image
                        source={require(`../../assets/travelBudget/EtcIcon.png`)}
                      />
                    ))}
                </Icon>
                <CategoryDetailTextContainer>
                  <CategoryDetailText>{e.store}</CategoryDetailText>
                  <DateAndTimeText>
                    {e.createdAt[1]}월 {e.createdAt[2]}일 {e.createdAt[3]}:
                    {e.createdAt[4]}
                  </DateAndTimeText>
                </CategoryDetailTextContainer>
              </CategoryDetailContainer>
              <PayCostText>
                {" "}
                {getCountryUnit(e.unit)}
                {e.price}
              </PayCostText>
            </PaymentContainer>
          );
        })}

        <PaymentTotalContainer>
          <UsedCostText>
            결제금액   {travelBudgetUnit}
            {categoryList.reduce((acc, cur) => {
              return (acc += cur.price);
            }, 0)}
          </UsedCostText>
        </PaymentTotalContainer>
        <PaymentTotalContainer>
          {category.categoryBudget >
          categoryList.reduce((acc, cur) => {
            return (acc += cur.price);
          }, 0) ? ( //예산이 더 많을때
            <UsedPlusCostText>
              경비잔액 {travelBudgetUnit}
              {category.categoryBudget -
                categoryList.reduce((acc, cur) => {
                  return (acc += cur.price);
                }, 0)}
            </UsedPlusCostText>
          ) : (
            <UsedMinusCostText>
              경비잔액 {travelBudgetUnit}
              {category.categoryBudget -
                categoryList.reduce((acc, cur) => {
                  return (acc += cur.price);
                }, 0)}
            </UsedMinusCostText>
          )}
        </PaymentTotalContainer>
      </PaymentListContainer>
    </CategoryPaymentContainer>
  );
};
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
export default TravelBudgetPaymentHistoryComponent;

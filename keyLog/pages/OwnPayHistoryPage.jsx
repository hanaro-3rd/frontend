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
} from "../utils/ResponseSize";
import React, { useState, useEffect } from "react";
import PrevHeader from "../components/Header/PrevHeader";


const Root = styled.View`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;

  background-color: white;
  justify-content: space-between;
  z-index: 99999;
`;

const BodyContainer = styled.View`
  width: 100%;
  height: ${heightPercentage(794)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
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
  /* background-color: #fff; */
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

const ExchangeButton = styled.View`
  width: ${widthPercentage(170)}px;
  height: ${heightPercentage(40)}px;
  display: flex;
  padding: ${heightPercentage(10)}px ${widthPercentage(10)}px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  /* flex: 1 0 0; */
  border-radius: 10px;
  /* background-color: #f2f4f6; */
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
  /* background-color: #fff; */
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
  /* background-color: #fff; */
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

const ListContainer = styled.View`
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
  height: ${heightPercentage(275)}px;
  padding: ${heightPercentage(20)}px ${widthPercentage(20)}px;
  width: 100%;
  bottom: 5px;

  position: fixed;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
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
const CategoryList = styled.View`
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

const GrayView = styled.View`
  position: absolute;
  top: 0;
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  background-color: gray;
  opacity: 0.8;
`;
const OwnPayHistoryPage = ({ navigation }) => {
  StatusBar.setTranslucent(true);
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("전체");

  useEffect(() => {
    setSelectedCategory("전체");
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };
  console.log(openSelect);
  return (
    <Root categoryMode={openSelect}>
      {openSelect && <GrayView></GrayView>}
      <PrevHeader navigation={navigation} to="MainPage" />
      <BodyContainer>
        <BodyHeaderContainer>
          <TitleText>입출금 내역</TitleText>
          <CountryContainer>
            {openSelect ? (
              <Image
                source={require("../assets/Setting/KoreaCountryIcon.png")}
                style={{ opacity: 0.3 }}
              />
            ) : (
              <Image
                source={require("../assets/Setting/KoreaCountryIcon.png")}
              />
            )}

            <TotalPayCostText>32,000 KRW</TotalPayCostText>
          </CountryContainer>
          <ButtonContainer>
            <RevertToWonButton>
              <Image source={require("../assets/Setting/loop.png")} />
              <ButtonText>원화</ButtonText>
            </RevertToWonButton>
            <ExchangeButton>
              <ExchangeButtonText>충전하기</ExchangeButtonText>
            </ExchangeButton>
          </ButtonContainer>
        </BodyHeaderContainer>
        <SelectContainer>
          <SelectTextContainer onPress={() => setOpenSelect(true)}>
            <SelectText>전체</SelectText>
            <SelectImage
              source={require("../assets/travelBudget/SelectButtonBefore.png")}
            />
          </SelectTextContainer>
        </SelectContainer>

        <HistoryContainer>
          <DateText>7월 30일</DateText>
          <ListContainer>
            <Image source={require("../assets/Setting/환전.png")} />
            <ListInfoContainer>
              <ListTextContainer>
                <ListText>엔화 환전</ListText>
                <TimeText>08:58</TimeText>
              </ListTextContainer>
              <CostTextContainer>
                <CostPlusText>+80,000 JPY</CostPlusText>
                <RemainCostText>80,000 JPY</RemainCostText>
              </CostTextContainer>
            </ListInfoContainer>
          </ListContainer>
        </HistoryContainer>
      </BodyContainer>
      {openSelect && (
        <CategoryComponent>
          <CategoryTitleList>
            <CategoryTitleText>내역 선택</CategoryTitleText>
            <TouchableOpacity
              onPress={() => {
                setOpenSelect(false);
                setSelectedCategory("전체");
              }}
            >
              <DeleteImage source={require("../Images/삭제.png")} />
            </TouchableOpacity>
          </CategoryTitleList>
          <CategoryListContainer>
            <CategoryList>
              <TouchableOpacity onPress={() => handleCategorySelect("전체")}>
                <CategoryText
                  style={
                    selectedCategory === "전체" ? { color: "#55acee" } : {}
                  }
                >
                  전체
                </CategoryText>
              </TouchableOpacity>
              {selectedCategory === "전체" && (
                <Image source={require("../assets/Setting/check.png")} />
              )}
            </CategoryList>
            <CategoryList>
              <TouchableOpacity onPress={() => handleCategorySelect("입금")}>
                <CategoryText
                  style={
                    selectedCategory === "입금" ? { color: "#55acee" } : {}
                  }
                >
                  입금
                </CategoryText>
              </TouchableOpacity>
              {selectedCategory === "입금" && (
                <Image source={require("../assets/Setting/check.png")} />
              )}
            </CategoryList>
            <CategoryList>
              <TouchableOpacity onPress={() => handleCategorySelect("출금")}>
                <CategoryText
                  style={
                    selectedCategory === "출금" ? { color: "#55acee" } : {}
                  }
                >
                  출금
                </CategoryText>
              </TouchableOpacity>
              {selectedCategory === "출금" && (
                <Image source={require("../assets/Setting/check.png")} />
              )}
            </CategoryList>
          </CategoryListContainer>
          <SelectButton>
            <SelectButtonText>확인</SelectButtonText>
          </SelectButton>
        </CategoryComponent>
      )}
    </Root>
  );
};

export default OwnPayHistoryPage;

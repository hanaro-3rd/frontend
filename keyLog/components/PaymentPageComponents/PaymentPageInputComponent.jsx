import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";
import React, { useState } from "react";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import DeleteHeader from "../Header/DeleteHeader";
const CategoryComponent = styled.View`
  background-color: white;
  height: ${heightPercentage(384)}px;
  width: 100%;
  bottom: 0;
  position: absolute;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
`;
const CategoryTitleList = styled.View`
  width: ${widthPercentage(350)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
const CategoryList = styled.View`
  width: ${widthPercentage(350)}px;
  flex-direction: row;
  align-items: center;
  margin-top: 3px;
  height: ${heightPercentage(50)}px;
`;
const CategoryText = styled.Text`
  font-size: ${fontPercentage(16)}px;
  color: black;
`;
const CategoryImage = styled.Image`
  margin-right: 15px;
  width: ${widthPercentage(30)};
`;
const TitleView = styled.View`
  width: 100%;
  height: ${heightPercentage(50)}px;
  justify-content: center;
`;
const TitleText = styled.Text`
  margin-left: ${widthPercentage(20)}px;
  color: #191f29;
  font-size: ${fontPercentage(23)}px;
  font-weight: 700;
`;
const MainComponent = styled.View`
  height: ${heightPercentage(300)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const NameText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 700;
  margin-top: ${heightPercentage(10)}px;
`;
const PriceText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(30)}px;
`;
const CostText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(30)}px;
  font-weight: 700;
`;
const DateText = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(14)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(10)}px;
`;

const CategoryWrapper = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(50)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  margin-top: ${heightPercentage(18)}px;
`;

const CategoryWord = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 700;
`;
const CategoryPickWord = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;
const MemoWrapper = styled.View`
  width: ${widthPercentage(390)}px;
  height: ${heightPercentage(50)}px;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  margin-top: ${heightPercentage(18)}px;
`;
const MemoText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 700;
`;
const MemoTextInput = styled.TextInput`
  height: ${heightPercentage(49)}px;
  border-radius: 5px;
  border: 1px solid #b0b8c1;
  height: 100%;
  margin-top: ${heightPercentage(10)}px;
`;

const PaymentPageInputComponent = ({ navigation }) => {
  StatusBar.setTranslucent(true);
  const [openCategory, setOpenCategory] = useState(false);
  return (
    <Main categoryMode={openCategory}>
      <View>
        <DeleteHeader navigation={navigation} to="TravelRecordMainComponent" />
        <TitleView>
          <TitleText>결제내역</TitleText>
        </TitleView>

        <MainComponent>
          <Image
            source={require("../../Images/세븐일레븐.png")}
            style={{ opacity: 0.3 }}
          />
          <NameText>세븐일레븐</NameText>
          <PriceText>결제금액</PriceText>
          <CostText>￥10,000</CostText>
          <DateText>2023.07.01 13:59</DateText>
        </MainComponent>
        <CategoryWrapper>
          <CategoryWord>카테고리</CategoryWord>
          <TouchableOpacity onPress={() => setOpenCategory(true)}>
            <View>
              <CategoryPickWord>쇼핑 · 편의점 · 마트</CategoryPickWord>
            </View>
          </TouchableOpacity>
        </CategoryWrapper>
        <MemoWrapper>
          <MemoText>메모</MemoText>
          <MemoTextInput placeholder="메모를 작성해보세요" />
        </MemoWrapper>
      </View>
      <SubmitButton>
        <SubmitView>
          <SubmitText>저장하기</SubmitText>
        </SubmitView>
      </SubmitButton>
      {openCategory && (
        <CategoryComponent>
          <CategoryTitleList>
            <CategoryText>카테고리 선택</CategoryText>
            <TouchableOpacity onPress={() => setOpenCategory(false)}>
              <Image
                source={require("../../Images/삭제.png")}
                style={styles.image}
              />
            </TouchableOpacity>
          </CategoryTitleList>
          <CategoryList>
            <CategoryImage
              source={require("../../Images/식비.png")}
              resizeMode="contain"
            />
            <CategoryText>식비</CategoryText>
          </CategoryList>
          <CategoryList>
            <CategoryImage source={require("../../Images/교통.png")} />
            <CategoryText>교통</CategoryText>
          </CategoryList>
          <CategoryList>
            <CategoryImage source={require("../../Images/숙박.png")} />
            <CategoryText>숙박</CategoryText>
          </CategoryList>
          <CategoryList>
            <CategoryImage source={require("../../Images/쇼핑.png")} />
            <CategoryText>쇼핑 · 편의점 · 마트</CategoryText>
          </CategoryList>
          <CategoryList>
            <CategoryImage source={require("../../Images/문화.png")} />
            <CategoryText>문화 · 여가</CategoryText>
          </CategoryList>
          <CategoryList>
            <CategoryImage source={require("../../Images/기타.png")} />
            <CategoryText>기타</CategoryText>
          </CategoryList>
        </CategoryComponent>
      )}
    </Main>
  );
};

export default PaymentPageInputComponent;

const Header = styled.View`
  width: 100%;
  margin-top: ${getStatusBarHeight}px;
  margin-bottom: ${heightPercentage(18)}px;
  background-color: transparent;
`;
const Main = styled.SafeAreaView`
  padding-top: ${getStatusBarHeight}px;
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
  background-color: ${(props) =>
    props.categoryMode ? "rgba(0, 0, 0, 0.5)" : "white"};
  /* background-color: rgba(0, 0, 0, 0.5); */
`;
const SubmitButton = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentage(55)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;
const SubmitView = styled.View`
  width: ${heightPercentage(340)}px;
  background-color: #55acee;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
const SubmitText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const styles = StyleSheet.create({});

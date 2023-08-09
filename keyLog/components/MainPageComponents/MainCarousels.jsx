import React, { useState, useEffect } from "react";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import styled from "styled-components/native";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";

const MainCarousels = ({ navigation, content, onPress }) => {
  const [mainCardContent, setMainCardContent] = useState(content);

  useEffect(() => {
    setMainCardContent(content);
  }, [content]);

  const MainCarouselCard = styled.View`
    display: flex;
    width: ${widthPercentage(300)}px;
    margin-top: ${heightPercentage(20)}px;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #fff;
    elevation: 7;
    /* box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.10); */
  `;
  const TitleText = styled.Text`
    color: #191f29;
    font-family: "Inter";
    font-size: ${fontPercentage(24)}px;
    font-weight: 700;
  `;
  const CarouselCardTextContainer = styled.View`
    align-items: center;
    padding: ${heightPercentage(20)}px 0px;
  `;
  const SubTitleText = styled.Text`
    color: #6b7684;
    font-family: Inter;
    font-size: ${fontPercentage(16)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const CarouselButton = styled.View`
    display: flex;
    height: ${heightPercentage(64)}px;
    margin-top: ${heightPercentage(2)}px;
    padding: ${heightPercentage(20)}px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const CarouselButtonText = styled.Text`
    color: #55acee;
    font-family: Inter;
    font-size: ${fontPercentage(20)}px;
    height: ${heightPercentage(24)}px;
    font-weight: 700;
  `;

  const CarouselImage = styled.Image`
    width: ${widthPercentage(100)}px;
    height: ${heightPercentage(100)}px;
  `;

  const handleCarouselCardPress = () => {
    if (mainCardContent.buttonText === "키머니 확인하기") {
      // navigation.navigate("");
    } else if (mainCardContent.buttonText === "계좌연결하기") {
      navigation.navigate("AccountConnectPage");
    } else if (mainCardContent.buttonText === "키머니 환전하기") {
      navigation.navigate("ExchangePage");
    } else if (mainCardContent.buttonText === "여행 기록 확인하기") {
      navigation.navigate("TravelBudgetPage");
    } else if (mainCardContent.buttonText === "키머니 줍기") {
      navigation.navigate("PickUpKeyPage");
    }
  };

  return (
    <MainCarouselCard>
      <CarouselCardTextContainer>
        <SubTitleText>{mainCardContent.subTitle}</SubTitleText>
        <TitleText>{mainCardContent.title}</TitleText>
      </CarouselCardTextContainer>
      <CarouselImage source={mainCardContent.imageSource} />
      <CarouselButton>
        <TouchableOpacity onPress={handleCarouselCardPress}>
          <CarouselButtonText>{mainCardContent.buttonText}</CarouselButtonText>
        </TouchableOpacity>
      </CarouselButton>
    </MainCarouselCard>
  );
};

export default MainCarousels;

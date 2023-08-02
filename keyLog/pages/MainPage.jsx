import { Image, TouchableOpacity } from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../utils/ResponseSize";
import styled from "styled-components/native";

import MainCarousels from "../components/MainPageComponents/MainCarousels";
import arrow_next from "../assets/Main/arrow_next.png";
import SettingButton from "../assets/Main/SettingButton.png";
import arrow_prev from "../assets/Main/arrow_prev.png";
import CarouselMoneyIcon from "../assets/Main/CarouselIcon.png";
import CarouselAccountIcon from "../assets/Main/CarouselAccountIcon.png";
import CarouselHanaMoneyIcon from "../assets/Main/CarouselHanaMoneyIcon.png";
import CountryIcon from "../assets/Main/CountryIcon.png";
import KeyPickIcon from "../assets/Main/MenuIcon1.png";
import PlanTravelBudgetIcon from "../assets/Main/MenuIcon2.png";
import RecordTravleIcon from "../assets/Main/MenuIcon3.png";
import MoneyIcon from "../assets/Main/MenuIcon4.png";
import ExchangeIcon from "../assets/Main/MenuIcon5.png";
import AccountConnectIcon from "../assets/Main/MenuIcon6.png";
import HanaBankIcon from "../assets/Main/HanaServiceIcon1.png";
import HanaCardIcon from "../assets/Main/HanaServiceIcon2.png";
import HanaCapitalIcon from "../assets/Main/HanaServiceIcon3.png";
import HanaLifeIcon from "../assets/Main/HanaServiceIcon4.png";
import HanaStockIcon from "../assets/Main/HanaServiceIcon5.png";
import HanaSavingIcon from "../assets/Main/HanaServiceIcon6.png";
import React, { useState, useEffect } from "react";

const MainPage = ({ navigation }) => {
  {
    /* carousel 관련 */
  }
  const originalMainCardContent = {
    subTitle: "어디서든 쓸 수 있는",
    title: "하나머니",
    imageSource: CarouselMoneyIcon,
    buttonText: "하나머니 확인하기",
  };
  const updatedMainCardContent = {
    subTitle: "계좌연결",
    title: "어쩌구저쩌구",
    imageSource: CarouselAccountIcon,
    buttonText: "계좌연결하기",
  };
  const thirdMainCardContent = {
    subTitle: "어디서든 쓸 수 있는",
    title: "하나머니",
    imageSource: CarouselHanaMoneyIcon,
    buttonText: "하나머니 환전하기",
  };

  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const contents = [
    originalMainCardContent,
    updatedMainCardContent,
    thirdMainCardContent,
  ];
  const mainCardContent = contents[activeContentIndex];

  const handleCarouselCardPress = () => {
    setActiveContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
  };

  {
    /* styled-components */
  }
  const Main = styled.ScrollView`
    margin-top: ${getStatusBarHeight}px;
    min-height: ${phoneHeight}px;
    width: 100%;
    background-color: #f2f4f6;
    flex-direction: column;
  `;
  const Header = styled.View`
    width: ${phoneWidth}px;
    height: ${heightPercentage(50)}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    align-self: stretch;
  `;
  const LogoText = styled.Text`
    color: #191f29;
    font-family: "Inter";
    font-size: ${fontPercentage(16)}px;
    margin-left: ${widthPercentage(12)}px;
    /* margin-top: ${heightPercentage(15.5)}px; */
    font-weight: 400;
  `;
  const SettingImage = styled.Image`
    margin-right: ${widthPercentage(13)}px;
  `;
  const BodyHeader = styled.View`
    padding: ${heightPercentage(10)}px ${widthPercentage(20)}px;
  `;
  const TitleText = styled.Text`
    color: #191f29;
    font-family: "Inter";
    font-size: ${fontPercentage(24)}px;
    font-weight: 700;
  `;
  const BodyMain = styled.View`
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  `;
  const MenuCarousels = styled.View`
    display: flex;
    padding-top: ${heightPercentage(20)}px;
    padding-bottom: ${heightPercentage(30)}px;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    flex-direction: row;
    gap: 20px;
  `;
  const CarouselCard = styled.View`
    width: ${widthPercentage(300)}px;
    height: ${heightPercentage(250)}px;
    background-color: #f9fafb;
    elevation: 5;
    /* box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1); */
    border-radius: 15px;
  `;
  const ExchangeRateContainer = styled.View`
    width: ${widthPercentage(390)}px;
    height: ${heightPercentage(80)}px;
    align-items: center;
    align-self: stretch;
    background-color: #fff;
    flex-direction: row;
  `;
  const PrevOrNextButton = styled.View`
    display: flex;
    width: ${widthPercentage(40)}px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
  `;
  const RateTextContainer = styled.View`
    width: ${widthPercentage(70)}px;
    height: ${heightPercentage(36)}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    /* gap: 10px; */
  `;
  const CountryContainer = styled.View`
    width: ${widthPercentage(65)}px;
    height: ${heightPercentage(18)}px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 5px;
  `;
  const CountryExchangeRateContainer = styled.View`
    width: ${widthPercentage(310)}px;
    height: ${heightPercentage(70)};
    display: flex;
    padding: ${heightPercentage(5)}px 0px;
    align-items: center;
    gap: 15px;
    flex-direction: row;
    flex: 1 0 0;
  `;
  const CountryTextContainer = styled.View`
    width: ${widthPercentage(65)}px;
    height: ${heightPercentage(40)}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `;
  const TextContainer = styled.View`
    width: ${widthPercentage(230)}px;
    height: ${heightPercentage(40)}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 0;
    flex-direction: row;
  `;
  const Country = styled.Text`
    width: ${widthPercentage(34)}px;
    height: ${heightPercentage(22)}px;
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(18)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const MoneytaryUnit = styled.Text`
    width: ${widthPercentage(26)}px;
    height: ${heightPercentage(14)}px;
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(12)}px;
    font-style: normal;
    font-weight: 400;
  `;
  const DateTime = styled.Text`
    color: #8b95a1;
    font-family: Inter;
    font-size: ${fontPercentage(12)}px;
    font-style: normal;
    font-weight: 400;
  `;
  const ExchangeRate = styled.Text`
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(16)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const ChangeRate = styled.Text`
    color: #0a7df2;
    font-family: Inter;
    font-size: ${fontPercentage(12)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const MenuTitle = styled.Text`
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(20)}px;
    font-style: normal;
    font-weight: 700;
  `;

  const MenuSubtitle = styled.Text`
    color: #8b95a1;
    font-family: Inter;
    font-size: ${fontPercentage(14)}px;
    font-style: normal;
    font-weight: 700;
  `;

  const MenuContainer = styled.View`
    width: ${widthPercentage(390)}px;
    height: ${heightPercentage(1000)}px;
    padding: ${heightPercentage(30)}px ${widthPercentage(20)}px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    display: flex;
    background-color: #f2f4f6;
  `;

  const MenuCard = styled.View`
    width: ${widthPercentage(350)}px;
    height: ${heightPercentage(140)}px;
    align-items: center;
    gap: 20px;
    background-color: #fff;
    /* box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.10); */
    elevation: 3;
    flex-direction: row;
    padding: ${heightPercentage(10)}px ${widthPercentage(20)}px;
    border-radius: 15px;
  `;

  const MenuSubContainer = styled.View`
    width: ${widthPercentage(210)}px;
    height: ${heightPercentage(120)}px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    flex: 1 0 0;
    align-self: stretch;
  `;

  const MenuTextContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  `;

  const MenuButtonText = styled.Text`
    color: #fff;
    font-family: Inter;
    font-size: ${fontPercentage(12)}px;
    font-style: normal;
    font-weight: 700;
  `;

  const MenuButton = styled(TouchableOpacity)`
    width: ${widthPercentage(210)}px;
    height: ${heightPercentage(30)}px;
    flex-direction: column;
    padding-top: ${heightPercentage(5)}px;
    align-items: center;
    align-self: stretch;
    background-color: #55acee;
    border-radius: 5px;
  `;

  const HanaServiceText = styled.Text`
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(14)}px;
    font-style: normal;
    font-weight: 700;
  `;

  const HanaServiceContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    background-color: #f2f4f6;
    padding: 0px ${widthPercentage(20)}px;
    margin-bottom: ${heightPercentage(20)}px;
  `;

  const ButtonContainer = styled.View`
    width: ${widthPercentage(350)}px;
    height: ${heightPercentage(220)}px;
    margin-bottom: ${heightPercentage(40)}px;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    row-gap: 20px;
    align-self: stretch;
    flex-wrap: wrap;
    flex-direction: row;
  `;

  const HanaServiceButton = styled(TouchableOpacity)`
    width: ${widthPercentage(100)}px;
    height: ${heightPercentage(90)}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: #fff;
    elevation: 2;
    padding: ${heightPercentage(19)}px ${widthPercentage(4)}px;
    border-radius: 5px;
  `;

  return (
    <Main>
      <Header>
        <LogoText>트래블 하나로</LogoText>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpPage")}>
          <SettingImage source={SettingButton} />
        </TouchableOpacity>
      </Header>

      {/*사용자*/}
      <BodyHeader>
        <TitleText>안녕하세요, 이상준님!</TitleText>
      </BodyHeader>

      {/*메뉴 carousel card*/}
      <BodyMain>
        <MenuCarousels>
          <TouchableOpacity onPress={handleCarouselCardPress}>
            <CarouselCard />
          </TouchableOpacity>
          <MainCarousels content={mainCardContent}></MainCarousels>
          <TouchableOpacity onPress={handleCarouselCardPress}>
            <CarouselCard />
          </TouchableOpacity>
        </MenuCarousels>

        {/* 환율 */}
        <ExchangeRateContainer>
          <PrevOrNextButton>
            <Image source={arrow_prev} />
          </PrevOrNextButton>
          <CountryExchangeRateContainer>
            <Image source={CountryIcon} />
            <TextContainer>
              <CountryTextContainer>
                <CountryContainer>
                  <Country>미국</Country>
                  <MoneytaryUnit>USD</MoneytaryUnit>
                </CountryContainer>
                <DateTime>07.11. 18:19</DateTime>
              </CountryTextContainer>

              <RateTextContainer>
                <ExchangeRate>1,294.50</ExchangeRate>
                <ChangeRate>▼ 12.00</ChangeRate>
              </RateTextContainer>
            </TextContainer>
          </CountryExchangeRateContainer>
          <PrevOrNextButton>
            <Image source={arrow_next} />
          </PrevOrNextButton>
        </ExchangeRateContainer>

        {/* 메뉴들 */}
        <MenuContainer>
          <MenuCard>
            <Image source={KeyPickIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>하나머니 줍기</MenuTitle>
                <MenuSubtitle>여행을 떠나서 하나머니를 주워봐용</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton onPress={() => navigation.navigate("PickUpKeyPage")}>
                <MenuButtonText>주우러 가기</MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <Image source={PlanTravelBudgetIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>여행 경비 계획하기</MenuTitle>
                <MenuSubtitle>여행 경비를 계획해보아용</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
                onPress={() => navigation.navigate("TravelBudgetPage")}
              >
                <MenuButtonText>계획하러 가기</MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <Image source={RecordTravleIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>여행 기록 확인하기</MenuTitle>
                <MenuSubtitle>여행 기록을 확인해보아용</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
                onPress={() => navigation.navigate("TravelRecordMainComponent")}
              >
                <MenuButtonText fontPercentage={fontPercentage}>
                  확인하러 가기
                </MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <Image source={MoneyIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>하나머니 확인하기</MenuTitle>
                <MenuSubtitle>내 하나머니를 확인해보아용</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
              // onPress={() => }
              >
                <MenuButtonText>확인하러 가기</MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <Image source={ExchangeIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>하나머니 환전하기</MenuTitle>
                <MenuSubtitle>하나머니를 환전해보아용</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
              // onPress={() => navigation.navigate("")}
              >
                <MenuButtonText fontPercentage={fontPercentage}>
                  환전하러 가기
                </MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <Image source={AccountConnectIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>계좌 연결하기</MenuTitle>
                <MenuSubtitle>계좌를 연결해보아용</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
                onPress={() => navigation.navigate("AccountConnectPage")}
              >
                <MenuButtonText fontPercentage={fontPercentage}>
                  연결하러 가기
                </MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
        </MenuContainer>
        <HanaServiceContainer>
          <MenuTitle>하나금융그룹 서비스</MenuTitle>
          <ButtonContainer>
            <HanaServiceButton>
              <Image source={HanaBankIcon} />
              <HanaServiceText>하나은행</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton>
              <Image source={HanaCardIcon} />
              <HanaServiceText>하나카드</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton>
              <Image source={HanaCapitalIcon} />
              <HanaServiceText>하나캐피탈</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton>
              <Image source={HanaLifeIcon} />
              <HanaServiceText>하나생명</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton>
              <Image source={HanaStockIcon} />
              <HanaServiceText>하나증권</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton>
              <Image source={HanaSavingIcon} />
              <HanaServiceText>하나저축은행</HanaServiceText>
            </HanaServiceButton>
          </ButtonContainer>
        </HanaServiceContainer>
      </BodyMain>
    </Main>
  );
};

export default MainPage;

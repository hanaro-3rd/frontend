import { Image, TouchableOpacity, ScrollView, Linking } from "react-native";
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
import Scan from "../assets/Main/scan.png";
import SettingButton from "../assets/Main/SettingButton.png";
import arrow_prev from "../assets/Main/arrow_prev.png";
import CarouselMoneyIcon from "../assets/Main/CarouselIcon.png";
import CarouselIconKeymoney from "../assets/Main/CarouselIconKeymoney.png";
import CarouselAccountIcon from "../assets/Main/CarouselAccountIcon.png";
import CarouselKeyMoneyIcon from "../assets/Main/CarouselKeyMoneyIcon.png";
import CarouselRecordIcon from "../assets/Main/CarouselRecordIcon.png";
import CarouselPickUpIcon from "../assets/Main/CarouselPickUpIcon.png";
import USIcon from "../assets/Main/CountryIcon.png";
import JapanIcon from "../assets/Setting/JapanCountryIcon.png";
import EuroIcon from "../assets/exchangeImg/EUR.png";
import KeyPickIcon from "../assets/Main/MenuIcon1.png";
import PlanTravelBudgetIcon from "../assets/Main/MenuIcon2.png";
import RecordTravleIcon from "../assets/Main/MenuIcon3.png";
import MoneyIcon from "../assets/Main/MenuIcon4.png";
import ExchangeIcon from "../assets/Main/ExchangeIcon.png";
import AccountConnectIcon from "../assets/Main/MenuIcon6.png";
import HanaBankIcon from "../assets/Main/HanaServiceIcon1.png";
import HanaCardIcon from "../assets/Main/HanaServiceIcon2.png";
import HanaCapitalIcon from "../assets/Main/HanaServiceIcon3.png";
import HanaLifeIcon from "../assets/Main/HanaServiceIcon4.png";
import HanaStockIcon from "../assets/Main/HanaServiceIcon5.png";
import HanaSavingIcon from "../assets/Main/HanaServiceIcon6.png";
import React, { useState, useEffect } from "react";
import Swiper from "react-native-swiper";
import { useRecoilState } from "recoil";
import { usernameAtom } from "../recoil/usernameAtom";
import { useQuery, useQueryClient } from "react-query";
import { getExchange } from "../api/api";
import { he } from "date-fns/locale";

const MainPage = ({ navigation }) => {
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [USD, setUSD] = useState();
  const [EUR, setEUR] = useState();
  const [JPY, setJPY] = useState();
  const [exchangeDate, setExchangeDate] = useState();
  const firstMainCardContent = {
    subTitle: "바로 사용할 수 있는",
    title: "키머니 확인",
    imageSource: CarouselIconKeymoney,
    buttonText: "키머니 확인하기",
  };
  const secondMainCardContent = {
    subTitle: "3초만에 간편하게",
    title: "계좌연결",
    imageSource: CarouselAccountIcon,
    buttonText: "계좌연결하기",
  };
  const thirdMainCardContent = {
    subTitle: "수수료 걱정없는",
    title: "키머니 환전",
    imageSource: CarouselKeyMoneyIcon,
    buttonText: "키머니 환전하기",
  };
  const fourthMainCardContent = {
    subTitle: "한눈에 알아볼 수 있는",
    title: "여행 경비 계획",
    imageSource: CarouselRecordIcon,
    buttonText: "여행 계획하기",
  };
  const fifthMainCardContent = {
    subTitle: "여행도 하고 돈도 줍고",
    title: "키머니 줍기",
    imageSource: CarouselPickUpIcon,
    buttonText: "키머니 주우러 가기",
  };

  const contents = [
    firstMainCardContent,
    secondMainCardContent,
    thirdMainCardContent,
    fourthMainCardContent,
    fifthMainCardContent,
  ];

  const Main = styled.ScrollView`
    /* margin-top: ${getStatusBarHeight}px; */
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
    padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
  `;

  const LogoImg = styled.View`
    /* margin-left: ${widthPercentage(12)}px;
    height: ${heightPercentage(16)}px;
    width: ${widthPercentage(45)}px; */
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
    width: ${widthPercentage(24)}px;
    height: ${heightPercentage(24)}px;
    /* margin-right: ${widthPercentage(13)}px; */
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
  const BodyMain = styled.ScrollView`
    flex-direction: column;
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
    height: ${heightPercentage(70)}px;
    display: flex;
    padding: ${heightPercentage(5)}px 0px;
    align-items: center;
    gap: 15px;
    flex-direction: row;
    flex: 1 0 0;
  `;
  const CountryTextContainer = styled.View`
    width: ${widthPercentage(100)}px;
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
    height: ${heightPercentage(18)}px;
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(18)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const MoneytaryUnit = styled.Text`
    width: ${widthPercentage(26)}px;
    height: ${heightPercentage(12)}px;
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
  const ChangeUpRate = styled.Text`
    color: #ee3739;
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
    height: ${heightPercentage(840)}px;
    padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
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
    width: ${widthPercentage(80)}px;
    height: ${heightPercentage(15)}px;
  `;

  const MenuButton = styled(TouchableOpacity)`
    width: ${widthPercentage(210)}px;
    height: ${heightPercentage(30)}px;
    flex-direction: column;
    padding-top: ${heightPercentage(7.5)}px;
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

  const Setting = styled.View`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-direction: row;
  `;

  const KeyMoneyImage = styled.Image`
    width: ${widthPercentage(80)}px;
    height: ${heightPercentage(80)}px;
    object-fit: scale-down;
  `;

  const CustomSwiper = styled(Swiper)`
    display: flex;
    height: ${heightPercentage(320)}px;
    padding-top: ${heightPercentage(20)}px;
    padding-bottom: ${heightPercentage(30)}px;
    margin: 0px ${widthPercentage(45)}px;
    /* margin-bottom: ${heightPercentage(30)}px; */
    justify-content: center;
    align-items: center;
    align-self: stretch;
    flex-direction: row;
  `;

  const queryClient = useQueryClient();
  const { data } = useQuery("exchange", async () => getExchange(), {
    onSuccess: (response) => {
      console.log(response.data, "메인환율");
      setUSD(response.data.result.usd);
      setEUR(response.data.result.eur);
      setJPY(response.data.result.jpy);
      let today = new Date(); // today 객체에 Date()의 결과를 넣어줬다
      let time = {
        year: today.getFullYear(), //현재 년도
        month: today.getMonth() + 1, // 현재 월
        date: today.getDate(), // 현제 날짜
        hours: today.getHours(), //현재 시간
        minutes: today.getMinutes(), //현재 분
      };
      setExchangeDate(
        `${time.year}/${time.month}/${time.date} ${time.hours}:${time.minutes}`
      );
    },
    onError: (error) => {
      console.log(error.response.data);
    },
  });

  const handleHanaServiceLink = (serviceName) => {
    let url;

    switch (serviceName) {
      case "하나은행":
        url = "https://www.kebhana.com/";
        break;
      case "하나카드":
        url = "https://www.hanacard.co.kr/";
        break;
      case "하나캐피탈":
        url = "https://www.hanacapital.co.kr/";
        break;
      case "하나생명":
        url = "https://hanalife.co.kr/";
        break;
      case "하나증권":
        url = "https://www.hanaw.com/";
        break;
      case "하나저축은행":
        url = "https://www.hanasavings.com/";
        break;

      default:
        return;
    }

    Linking.openURL(url).catch((error) =>
      console.error("An error occurred:", error)
    );
  };

  return (
    <Main>
      <Header>
        {/* <LogoText>키로그</LogoText> */}
        <Image
          source={require("../assets/Main/KEYLOG.png")}
          style={{ marginTop: 5 }}
        />
        <Setting>
          <TouchableOpacity
            onPress={() => navigation.navigate("TestPaymentPage")}
          >
            <SettingImage source={Scan} />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() => navigation.navigate("SettingPage")}>
            <SettingImage source={SettingButton} />
          </TouchableOpacity> */}
        </Setting>
      </Header>

      {/*사용자*/}
      <BodyHeader>
        <TitleText>안녕하세요, {username}님!</TitleText>
      </BodyHeader>

      {/*메뉴 carousel card*/}
      <BodyMain>
        <CustomSwiper
          loop={true} // 무한 루프로 스와이프할 수 있도록 설정
          autoplay={true} // 자동 재생 비활성화
        >
          {/* <CarouselCard /> */}
          {contents.map((content, index) => (
            <MainCarousels
              key={index}
              navigation={navigation}
              content={content}
            />
          ))}
        </CustomSwiper>
        {/* 환율 */}
        <Swiper
          loop={true} // 무한 루프로 스와이프할 수 있도록 설정
          autoplay={true} // 자동 재생 비활성화
          width={`100%`}
          height={100}
          showsButtons={false}
          showsPagination={false}
        >
          {[USD, JPY, EUR].map((e, idx) => {
            return (
              <ExchangeRateContainer key={idx}>
                <PrevOrNextButton>
                  <Image source={arrow_prev} />
                </PrevOrNextButton>
                <CountryExchangeRateContainer>
                  {idx == 0 && <Image source={USIcon} />}
                  {idx == 1 && <Image source={JapanIcon} />}
                  {idx == 2 && <Image source={EuroIcon} />}
                  <TextContainer>
                    <CountryTextContainer>
                      <CountryContainer>
                        {idx == 0 && <Country>미국</Country>}
                        {idx == 1 && <Country>일본</Country>}
                        {idx == 2 && <Country>유럽</Country>}

                        {idx == 0 && <MoneytaryUnit>USD</MoneytaryUnit>}
                        {idx == 1 && <MoneytaryUnit>JPY</MoneytaryUnit>}
                        {idx == 2 && <MoneytaryUnit>EUR</MoneytaryUnit>}
                      </CountryContainer>
                      {exchangeDate && <DateTime>{exchangeDate}</DateTime>}
                    </CountryTextContainer>

                    {USD && (
                      <RateTextContainer>
                        <ExchangeRate>{e.exchangeRate}</ExchangeRate>
                        {e.changePrice > 0 ? (
                          <ChangeUpRate>▲ {e.changePrice}</ChangeUpRate>
                        ) : (
                          <ChangeRate>▼ {e.changePrice}</ChangeRate>
                        )}
                      </RateTextContainer>
                    )}
                  </TextContainer>
                </CountryExchangeRateContainer>
                <PrevOrNextButton>
                  <Image source={arrow_next} />
                </PrevOrNextButton>
              </ExchangeRateContainer>
            );
          })}
        </Swiper>

        {/* 메뉴들 */}
        <MenuContainer>
          <MenuCard>
            <KeyMoneyImage source={ExchangeIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>키머니 환전하기</MenuTitle>
                <MenuSubtitle>여행에 사용할 키머니로 환전해요</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton onPress={() => navigation.navigate("ExchangePage")}>
                <MenuButtonText fontPercentage={fontPercentage}>
                  환전하러 가기
                </MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <KeyMoneyImage source={AccountConnectIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>계좌 연결하기</MenuTitle>
                <MenuSubtitle>환전할 계좌를 연결해 보세요</MenuSubtitle>
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
          <MenuCard>
            <KeyMoneyImage source={KeyPickIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>키머니 줍기</MenuTitle>
                <MenuSubtitle>여행 안에서 키머니를 주워보세요</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton onPress={() => navigation.navigate("PickUpKeyPage")}>
                <MenuButtonText>주우러 가기</MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <KeyMoneyImage source={RecordTravleIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>여행 계획하기</MenuTitle>
                <MenuSubtitle>나만의 여행을 계획해보세요</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
                onPress={() => navigation.navigate("TravelBudgetPage")}
              >
                <MenuButtonText fontPercentage={fontPercentage}>
                  확인하러 가기
                </MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
          <MenuCard>
            <KeyMoneyImage source={CarouselIconKeymoney} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitle>키머니 확인하기</MenuTitle>
                <MenuSubtitle>환전된 키머니를 확인해보세요</MenuSubtitle>
              </MenuTextContainer>
              <MenuButton
                onPress={() => navigation.navigate("KeyMoneyHistoryPage")}
              >
                <MenuButtonText>확인하러 가기</MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard>
        </MenuContainer>
        {/* <HanaServiceContainer>
          <MenuTitle>하나금융그룹 서비스</MenuTitle>
          <ButtonContainer>
            <HanaServiceButton
              onPress={() => handleHanaServiceLink("하나은행")}
            >
              <Image source={HanaBankIcon} />
              <HanaServiceText>하나은행</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton
              onPress={() => handleHanaServiceLink("하나카드")}
            >
              <Image source={HanaCardIcon} />
              <HanaServiceText>하나카드</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton
              onPress={() => handleHanaServiceLink("하나캐피탈")}
            >
              <Image source={HanaCapitalIcon} />
              <HanaServiceText>하나캐피탈</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton
              onPress={() => handleHanaServiceLink("하나생명")}
            >
              <Image source={HanaLifeIcon} />
              <HanaServiceText>하나생명</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton
              onPress={() => handleHanaServiceLink("하나증권")}
            >
              <Image source={HanaStockIcon} />
              <HanaServiceText>하나증권</HanaServiceText>
            </HanaServiceButton>
            <HanaServiceButton
              onPress={() => handleHanaServiceLink("하나저축은행")}
            >
              <Image source={HanaSavingIcon} />
              <HanaServiceText>하나저축은행</HanaServiceText>
            </HanaServiceButton>
          </ButtonContainer>
        </HanaServiceContainer> */}
      </BodyMain>
    </Main>
  );
};

export default MainPage;

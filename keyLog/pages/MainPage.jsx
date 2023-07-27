import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../utils/ResponseSize";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

import arrow_next from "../assets/Main/arrow_next.png";
import SettingButton from "../assets/Main/SettingButton.png";
import arrow_prev from "../assets/Main/arrow_prev.png";
import CarouselMoneyIcon from "../assets/Main/CarouselIcon.png";
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
import React, { useEffect } from "react";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

const MainPage = ({ navigation }) => {
  // const navigation = useNavigation();

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
  const MainCarouselCard = styled.View`
    display: flex;
    width: ${widthPercentage(300)}px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #fff;
    elevation: 7;
    /* box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.10); */
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
    padding: ${heightPercentage(20)}px 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const CarouselButtonText = styled.Text`
    color: #55acee;
    font-family: Inter;
    font-size: ${fontPercentage(20)}px;
    font-weight: 700;
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    /* gap: 10px; */
  `;
  const CountryContainer = styled.View`
    height: ${heightPercentage(24)}px;
    width: ${widthPercentage(65)}px;
    display: flex;
    align-items: flex-end;
    gap: 5px;
    flex-direction: row;
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
    display: flex;
    width: ${widthPercentage(65)}px;
    height: ${heightPercentage(48)}px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  `;
  const TextContainer = styled.View`
    width: ${widthPercentage(230)}px;
    height: ${heightPercentage(40)}px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;
    flex-direction: row;
    background-color: red;
  `;
  const Country = styled.Text`
    width: ${widthPercentage(34)}px;
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(18)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const MoneytaryUnit = styled.Text`
    width: ${widthPercentage(26)}px;
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(12)}px;
    font-style: normal;
    font-weight: 400;
  `;
  const DateTime = styled.Text`
    width: ${widthPercentage(72)}px;
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

  const MenuContainer = styled.View`
    display: flex;
    padding: ${heightPercentage(30)}px ${widthPercentage(20)}px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    align-self: stretch;
  `;
  const MenuCard = styled.View`
    display: flex;
    width: ${widthPercentage(350)}px;
    height: ${heightPercentage(140)}px;
    padding: ${heightPercentage(10)}px ${widthPercentage(20)}px;
    align-items: center;
    gap: 20px;
    border-radius: 15px;
    background: #fff;
    elevation: 1;
    flex-direction: row;
  `;
  const MenuSubContainer = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
    flex: 1 0 0;
    align-self: stretch;
  `;
  const MenuTextContainer = styled.View`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  `;
  const MenuTitleText = styled.Text`
    color: #191f29;
    font-family: Inter;
    font-size: ${fontPercentage(20)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const MenuSubTitleText = styled.Text`
    color: #8b95a1;
    font-family: Inter;
    font-size: ${fontPercentage(14)}px;
    font-style: normal;
    font-weight: 700;
  `;
  const MenuButton = styled.TouchableOpacity`
    display: flex;
    height: ${heightPercentage(30)}px;
    flex-direction: column;
    margin-top: ${heightPercentage(7.5)}px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 5px;
    background: #55acee;
  `;
  const MenuButtonText = styled.Text`
    color: #fff;
    font-family: Inter;
    font-size: ${fontPercentage(12)}px;
    font-style: normal;
    font-weight: 700;
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
          <CarouselCard />
          <MainCarouselCard>
            <CarouselCardTextContainer>
              <SubTitleText>어디서든 쓸 수 있는</SubTitleText>
              <TitleText>하나머니</TitleText>
            </CarouselCardTextContainer>
            <Image source={CarouselMoneyIcon} />
            <CarouselButton>
              <CarouselButtonText>하나머니 확인하기</CarouselButtonText>
            </CarouselButton>
          </MainCarouselCard>
          <CarouselCard />
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
            </TextContainer>
            <RateTextContainer>
              <ExchangeRate>1,294.50</ExchangeRate>
              <ChangeRate>▼ 12.00</ChangeRate>
            </RateTextContainer>
          </CountryExchangeRateContainer>
          <PrevOrNextButton>
            <Image source={arrow_next} />
          </PrevOrNextButton>
        </ExchangeRateContainer>

        {/* 메뉴들 */}
        {/* <MenuContainer>
          <MenuCard>
            <Image source={KeyPickIcon} />
            <MenuSubContainer>
              <MenuTextContainer>
                <MenuTitleText>하나머니 줍기</MenuTitleText>
                <MenuSubTitleText>
                  여행을 떠나서 하나머니를 주워봐용
                </MenuSubTitleText>
              </MenuTextContainer>
              <MenuButton onPress={() => navigation.navigate("PickUpKeyPage")}>
                <MenuButtonText>주우러 가기</MenuButtonText>
              </MenuButton>
            </MenuSubContainer>
          </MenuCard> */}
        <View style={styles.menuContainer}>
          <View style={styles.menuCard}>
            <Image source={KeyPickIcon} />
            <View style={styles.menuSubContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>하나머니 줍기</Text>
                <Text style={styles.menuSubtitle}>
                  여행을 떠나서 하나머니를 주워봐용
                </Text>
              </View>
              <View style={styles.menuButton}>
                <Text style={styles.menuButtonText}>주우러 가기</Text>
              </View>
            </View>
          </View>
          <View style={styles.menuCard}>
            <Image source={PlanTravelBudgetIcon} />
            <View style={styles.menuSubContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>여행 경비 계획하기</Text>
                <Text style={styles.menuSubtitle}>
                  여행 경비를 계획해보아용
                </Text>
              </View>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate("TravelBudgetPage")}
              >
                <Text style={styles.menuButtonText}>계획하러 가기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.menuCard}>
            <Image source={RecordTravleIcon} />
            <View style={styles.menuSubContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>여행 기록 확인하기</Text>
                <Text style={styles.menuSubtitle}>
                  여행 기록을 확인해보아용
                </Text>
              </View>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate("TravelRecordMainComponent")}
              >
                <Text style={styles.menuButtonText}>확인하러 가기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.menuCard}>
            <Image source={MoneyIcon} />
            <View style={styles.menuSubContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>하나머니 확인하기</Text>
                <Text style={styles.menuSubtitle}>
                  내 하나머니를 확인해보아용
                </Text>
              </View>
              <View style={styles.menuButton}>
                <Text style={styles.menuButtonText}>확인하러 가기</Text>
              </View>
            </View>
          </View>
          <View style={styles.menuCard}>
            <Image source={ExchangeIcon} />
            <View style={styles.menuSubContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>하나머니 환전하기</Text>
                <Text style={styles.menuSubtitle}>하나머니를 환전해보아용</Text>
              </View>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => {
                  navigation.navigate("ExchangePage");
                }}
              >
                <Text style={styles.menuButtonText}>환전하러 가기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.menuCard}>
            <Image source={AccountConnectIcon} />
            <View style={styles.menuSubContainer}>
              <View style={styles.menuTextContainer}>
                <Text style={styles.menuTitle}>계좌 연결하기</Text>
                <Text style={styles.menuSubtitle}>계좌를 연결해보아용</Text>
              </View>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate("AccountConnectPage")}
              >
                <Text style={styles.menuButtonText}>연결하러 가기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.hanaServiceContainer}>
          <Text style={styles.menuTitle}>하나금융그룹 서비스</Text>
          <View style={styles.buttonContainer}>
            <View style={styles.hanaServiceButton}>
              <Image source={HanaBankIcon} />
              <Text style={styles.hanaServiceText}>하나은행</Text>
            </View>
            <View style={styles.hanaServiceButton}>
              <Image source={HanaCardIcon} />
              <Text style={styles.hanaServiceText}>하나카드</Text>
            </View>
            <View style={styles.hanaServiceButton}>
              <Image source={HanaCapitalIcon} />
              <Text style={styles.hanaServiceText}>하나캐피탈</Text>
            </View>
            <View style={styles.hanaServiceButton}>
              <Image source={HanaLifeIcon} />
              <Text style={styles.hanaServiceText}>하나생명</Text>
            </View>
            <View style={styles.hanaServiceButton}>
              <Image source={HanaStockIcon} />
              <Text style={styles.hanaServiceText}>하나증권</Text>
            </View>
            <View style={styles.hanaServiceButton}>
              <Image source={HanaSavingIcon} />
              <Text style={styles.hanaServiceText}>하나저축은행</Text>
            </View>
          </View>
        </View>
      </BodyMain>
    </Main>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  menuTitle: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(20),
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: fontPercentage(14),
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    paddingVertical: heightPercentage(30),
    paddingHorizontal: widthPercentage(20),
  },
  menuCard: {
    width: widthPercentage(350),
    height: heightPercentage(140),
    alignItems: "center",
    gap: 20,
    backgroundColor: "#FFF",
    boxShadow: "1px 1px 10px 0px rgba(0, 0, 0, 0.10)",
    flexDirection: "row",
    paddingVertical: heightPercentage(10),
    paddingHorizontal: widthPercentage(20),
    borderRadius: 15,
    elevation: 3,
  },
  menuSubContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  menuTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  menuButtonText: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: fontPercentage(12),
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton: {
    height: heightPercentage(30),
    flexDirection: "column",
    paddingVertical: heightPercentage(5),
    // justifyContent: "center",
    alignItems: "center",
    // gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  hanaServiceText: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: fontPercentage(14),
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    paddingHorizontal: heightPercentage(30),
  },
  buttonContainer: {
    paddingBottom: heightPercentage(20),
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    rowGap: 20,
    alignSelf: "stretch",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  hanaServiceButton: {
    width: widthPercentage(100),
    height: heightPercentage(90),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFF",
    elevation: 1,
    paddingVertical: heightPercentage(19),
    paddingHorizontal: widthPercentage(4),
    borderRadius: 5,
  },
});

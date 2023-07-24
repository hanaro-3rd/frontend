import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import arrow_next from "../assets/arrow_next.png";
import SettingButton from "../assets/SettingButton.png";
import arrow_prev from "../assets/arrow_prev.png";
import CarouselMoneyIcon from "../assets/CarouselIcon.png";
import CountryIcon from "../assets/CountryIcon.png";
import KeyPickIcon from "../assets/MenuIcon1.png";
import PlanTravelBudgetIcon from "../assets/MenuIcon2.png";
import RecordTravleIcon from "../assets/MenuIcon3.png";
import MoneyIcon from "../assets/MenuIcon4.png";
import ExchangeIcon from "../assets/MenuIcon5.png";
import AccountConnectIcon from "../assets/MenuIcon6.png";
import HanaBankIcon from "../assets/HanaServiceIcon1.png";
import HanaCardIcon from "../assets/HanaServiceIcon2.png";
import HanaCapitalIcon from "../assets/HanaServiceIcon3.png";
import HanaLifeIcon from "../assets/HanaServiceIcon4.png";
import HanaStockIcon from "../assets/HanaServiceIcon5.png";
import HanaSavingIcon from "../assets/HanaServiceIcon6.png";
import React, { useEffect } from "react";

const MainPage = () => {
  const navigation = useNavigation();

  const handlePlanButtonPress = () => {
    navigation.navigate("TravelBudgetPage");
  };
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.header}>
        <Text style={styles.logo}>트래블 하나로</Text>
        <Image source={SettingButton} />
      </View>
      {/*사용자*/}
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>안녕하세요, 이상준님!</Text>
        </View>
        {/*메뉴 carousel card*/}
        <View style={styles.bodyMain}>
          <View style={styles.menuCarousel}>
            <View style={styles.carouselCard}></View>
            <View style={styles.carouselCardMain}>
              <View style={styles.carouselTextContainer}>
                <Text style={styles.subtitle}>어디서든 쓸 수 있는</Text>
                <Text style={styles.title}>하나머니</Text>
              </View>
              <Image source={CarouselMoneyIcon} />
              <View style={styles.carouselButton}>
                <Text style={styles.carouselButtonText}>하나머니 확인하기</Text>
              </View>
            </View>
            <View style={styles.carouselCard}></View>
          </View>
          {/* 환율 */}
          <View style={styles.todayExchangeRate}>
            <View style={styles.prevOrNextButton}>
              <Image source={arrow_prev} />
            </View>
            <View style={styles.countryExchangeRate}>
              <Image source={CountryIcon} />
              <View style={styles.textContainer}>
                <View style={styles.countryContainer}>
                  <View style={styles.dateTextContainer}>
                    <Text style={styles.country}>미국</Text>
                    <Text style={styles.monetaryUnit}>USD</Text>
                  </View>
                  <Text style={styles.datetime}>07.11. 18:19</Text>
                </View>
                <View style={styles.exchangeRateContainer}>
                  <Text style={styles.exchangeRate}>1,294.50</Text>
                  <Text style={styles.changeRate}>▼ 12.00</Text>
                </View>
              </View>
            </View>
            <View style={styles.prevOrNextButton}>
              <Image source={arrow_next} />
            </View>
          </View>
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
                  onPress={handlePlanButtonPress}
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
                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>확인하러 가기</Text>
                </View>
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
                  <Text style={styles.menuSubtitle}>
                    하나머니를 환전해보아용
                  </Text>
                </View>
                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>환전하러 가기</Text>
                </View>
              </View>
            </View>
            <View style={styles.menuCard}>
              <Image source={AccountConnectIcon} />
              <View style={styles.menuSubContainer}>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>계좌 연결하기</Text>
                  <Text style={styles.menuSubtitle}>계좌를 연결해보아용</Text>
                </View>
                <View style={styles.menuButton}>
                  <Text style={styles.menuButtonText}>연결하러 가기</Text>
                </View>
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
        </View>
      </View>
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  root: {
    // flexGrow: 1,
    width: '100%',
    flexDirection: "column",
    // alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
  },
  logo: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  header: {
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 13,
    paddingHorizontal: 12,
  },
  title: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 23,
    fontStyle: "normal",
    fontWeight: "700",
  },
  body: {
    flexDirection: "column",
    alignSelf: "stretch",
  },
  bodyHeader: {
    // alignItems: "flex-start",
    // gap: 10,
    // flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },
  menuCarousel: {
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  carouselCard: {
    width: 300,
    height: 250,
    backgroundColor: "#F9FAFB",
    boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: 15,
  },  
  carouselCardMain: {
    width: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: 15,
  },
  subtitle: {
    color: "#6B7684",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  title: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
  },
  carouselTextContainer: {
    // flexDirection: "column",
    alignItems: "center",
    gap: 5,
    paddingVertical: 20,
    paddingHorizontal: 0,
  },
  carouselIcon: {
    width: 100,
    height: 100,
  },
  carouselButtonText: {
    color: "#55ACEE",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  carouselButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 20,
    paddingHorizontal: 0,
  },

  todayExchangeRate: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  prevOrNextButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    // gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
    // padding: 10,
  },
  country: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 18,
    fontStyle: "normal",
    fontWeight: "700",
  },
  monetaryUnit: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  countryExchangeRate: {
    alignItems: "center",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 0,
  },
  textContainer: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    flexDirection: "row",
  },
  countryContainer: {
    height: 40,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  dateTextContainer: {
    alignItems: "flex-end",
    gap: 5,
    flexDirection: "row",
  },
  datetime: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  exchangeRate: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "700",
  },
  changeRate: {
    color: "#0A7DF2",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  exchangeRateContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
  },
 

  menuTitle: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  menuCard: {
    width: 350,
    height: 140,
    alignItems: "center",
    gap: 20,
    backgroundColor: "#FFF",
    boxShadow: "1px 1px 10px 0px rgba(0, 0, 0, 0.10)",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
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
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton: {
    height: 30,
    flexDirection: "column",
    paddingVertical: 5,
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
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    paddingBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    rowGap: 20,
    alignSelf: "stretch",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  hanaServiceButton: {
    width: 100,
    height: 90,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#FFF",
    boxShadow: "1px 1px 10px 0px rgba(0, 0, 0, 0.10)",
    paddingVertical: 19,
    paddingHorizontal: 4,
    borderRadius: 5,
  },
});
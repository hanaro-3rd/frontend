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
import arrow_prev from "../assets/arrow_prev.png";
import CarouselIcon from "../assets/CarouselIcon.png";
import CountryIcon from "../assets/CountryIcon.png";
import MenuIcon1 from "../assets/MenuIcon1.png";
import MenuIcon2 from "../assets/MenuIcon2.png";
import MenuIcon3 from "../assets/MenuIcon3.png";
import MenuIcon4 from "../assets/MenuIcon4.png";
import MenuIcon5 from "../assets/MenuIcon5.png";
import MenuIcon6 from "../assets/MenuIcon6.png";
import HanaServiceIcon1 from "../assets/HanaServiceIcon1.png";
import HanaServiceIcon2 from "../assets/HanaServiceIcon2.png";
import HanaServiceIcon3 from "../assets/HanaServiceIcon3.png";
import HanaServiceIcon4 from "../assets/HanaServiceIcon4.png";
import HanaServiceIcon5 from "../assets/HanaServiceIcon5.png";
import HanaServiceIcon6 from "../assets/HanaServiceIcon6.png";
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
      </View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>안녕하세요, 이상준님!</Text>
        </View>
        <View style={styles.bodyMain}>
          <View style={styles.menuCarousel}>
            <View style={styles.carouselCard}></View>
            <View style={styles.carouselCard2}>
              <View style={styles.carouselTextContainer}>
                <Text style={styles.subtitle}>어디서든 쓸 수 있는</Text>
                <Text style={styles.title}>하나머니</Text>
              </View>
              <Image source={CarouselIcon} />
              <View style={styles.carouselButton}>
                <Text style={styles.buttonText}>하나머니 확인하기</Text>
              </View>
            </View>
            <View style={styles.carouselCard3}></View>
          </View>
          <View style={styles.todayExchangeRate}>
            <View style={styles.prevButton}>
              <Image source={arrow_prev} />
            </View>
            <View style={styles.countryExchangeRate}>
              <Image source={CountryIcon} />
              <View style={styles.textContainer}>
                <View style={styles.countryContainer}>
                  <View style={styles.textContainer2}>
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
            <View style={styles.nextButton}>
              <Image source={arrow_next} />
            </View>
          </View>
          <View style={styles.menuContainer}>
            <View style={styles.menuCard}>
              <Image source={MenuIcon1} />
              <View style={styles.menuContainer2}>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>하나머니 줍기</Text>
                  <Text style={styles.menuSubtitle}>
                    여행을 떠나서 하나머니를 주워봐용
                  </Text>
                </View>
                <View style={styles.menuButton}>
                  <Text style={styles.buttonText2}>주우러 가기</Text>
                </View>
              </View>
            </View>
            <View style={styles.menuCard2}>
              <Image source={MenuIcon2} />
              <View style={styles.menuContainer3}>
                <View style={styles.menuTextContainer2}>
                  <Text style={styles.menuTitle2}>여행 경비 계획하기</Text>
                  <Text style={styles.menuSubtitle2}>
                    여행 경비를 계획해보아용
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.menuButton2}
                  onPress={handlePlanButtonPress}
                >
                  <Text style={styles.buttonText3}>계획하러 가기</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.menuCard3}>
              <Image source={MenuIcon3} />
              <View style={styles.menuContainer4}>
                <View style={styles.menuTextContainer3}>
                  <Text style={styles.menuTitle3}>여행 기록 확인하기</Text>
                  <Text style={styles.menuSubtitle3}>
                    여행 기록을 확인해보아용
                  </Text>
                </View>
                <View style={styles.menuButton3}>
                  <Text style={styles.buttonText4}>확인하러 가기</Text>
                </View>
              </View>
            </View>
            <View style={styles.menuCard4}>
              <Image source={MenuIcon4} />
              <View style={styles.menuContainer5}>
                <View style={styles.menuTextContainer4}>
                  <Text style={styles.menuTitle4}>하나머니 확인하기</Text>
                  <Text style={styles.menuSubtitle4}>
                    내 하나머니를 확인해보아용
                  </Text>
                </View>
                <View style={styles.menuButton4}>
                  <Text style={styles.buttonText5}>확인하러 가기</Text>
                </View>
              </View>
            </View>
            <View style={styles.menuCard5}>
              <Image source={MenuIcon5} />
              <View style={styles.menuContainer6}>
                <View style={styles.menuTextContainer5}>
                  <Text style={styles.menuTitle5}>하나머니 환전하기</Text>
                  <Text style={styles.menuSubtitle5}>
                    하나머니를 환전해보아용
                  </Text>
                </View>
                <View style={styles.menuButton5}>
                  <Text style={styles.buttonText6}>환전하러 가기</Text>
                </View>
              </View>
            </View>
            <View style={styles.menuCard6}>
              <Image source={MenuIcon6} />
              <View style={styles.menuContainer7}>
                <View style={styles.menuTextContainer6}>
                  <Text style={styles.menuTitle6}>계좌 연결하기</Text>
                  <Text style={styles.menuSubtitle6}>계좌를 연결해보아용</Text>
                </View>
                <View style={styles.menuButton6}>
                  <Text style={styles.buttonText7}>연결하러 가기</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.hanaServiceContainer}>
            <Text style={styles.menuTitle7}>하나금융그룹 서비스</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.hanaServiceButton}>
                <Image source={HanaServiceIcon1} />
                <Text style={styles.hanaServiceText}>하나은행</Text>
              </View>
              <View style={styles.hanaServiceButton2}>
                <Image source={HanaServiceIcon2} />
                <Text style={styles.hanaServiceText2}>하나카드</Text>
              </View>
              <View style={styles.hanaServiceButton3}>
                <Image source={HanaServiceIcon3} />
                <Text style={styles.hanaServiceText3}>하나캐피탈</Text>
              </View>
              <View style={styles.hanaServiceButton4}>
                <Image source={HanaServiceIcon4} />
                <Text style={styles.hanaServiceText4}>하나생명</Text>
              </View>
              <View style={styles.hanaServiceButton5}>
                <Image source={HanaServiceIcon5} />
                <Text style={styles.hanaServiceText5}>하나증권</Text>
              </View>
              <View style={styles.hanaServiceButton6}>
                <Image source={HanaServiceIcon6} />
                <Text style={styles.hanaServiceText6}>하나저축은행</Text>
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
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 390,
    flexDirection: "column",
    alignItems: "flex-start",
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
    backgroundColor: "#F2F4F6",
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
    alignItems: "center",
    alignSelf: "stretch",
  },
  bodyHeader: {
    alignItems: "flex-start",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
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
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  carouselCard: {
    width: 300,
    height: 250,
    backgroundColor: "#F9FAFB",
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
  carouselCard2: {
    width: 300,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: 15,
  },
  carouselTextContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 20,
    paddingHorizontal: 0,
  },
  carouselIcon: {
    width: 100,
    height: 100,
  },
  buttonText: {
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
  carouselCard3: {
    width: 300,
    height: 250,
    backgroundColor: "#F9FAFB",
    boxShadow: "2px 2px 10px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: 15,
  },
  todayExchangeRate: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  prevButton: {
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
  },
  countryIcon: {
    width: 65,
    height: 70,
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
  textContainer2: {
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
    fontFeatureSettings: "'clig' off, 'liga' off",
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
    gap: 10,
  },
  nextButton: {
    width: 40,
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    flexDirection: "row",
    padding: 10,
  },
  menuIcon: {
    width: 80,
    height: 80,
    flexShrink: 0,
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
  menuContainer2: {
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
  buttonText2: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton: {
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  menuIcon2: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  menuTitle2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle2: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuCard2: {
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
  menuContainer3: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  menuTextContainer2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 5,
  },
  buttonText3: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton2: {
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  menuIcon3: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  menuTitle3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle3: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuCard3: {
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
  menuContainer4: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  menuTextContainer3: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  buttonText4: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton3: {
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  menuIcon4: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  menuTitle4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle4: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuCard4: {
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
  menuContainer5: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  menuTextContainer4: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  buttonText5: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton4: {
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  menuIcon5: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  menuTitle5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle5: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuCard5: {
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
  menuContainer6: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  menuTextContainer5: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  buttonText6: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton5: {
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  menuIcon6: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  menuTitle6: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuSubtitle6: {
    color: "#8B95A1",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuCard6: {
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
  menuContainer7: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 15,
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  menuTextContainer6: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 5,
  },
  buttonText7: {
    color: "#FFF",
    fontFamily: "Inter",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "700",
  },
  menuButton6: {
    height: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    borderRadius: 5,
  },
  menuTitle7: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceIcon: {
    width: 36,
    height: 36,
    flexShrink: 0,
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
    paddingVertical: 0,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    paddingBottom: 0,
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
  hanaServiceIcon2: {
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  hanaServiceText2: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceButton2: {
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
  hanaServiceIcon3: {
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  hanaServiceText3: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceButton3: {
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
  hanaServiceIcon4: {
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  hanaServiceText4: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceButton4: {
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
  hanaServiceIcon5: {
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  hanaServiceText5: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceButton5: {
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
  hanaServiceIcon6: {
    width: 36,
    height: 36,
    flexShrink: 0,
  },
  hanaServiceText6: {
    color: "#191F29",
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "700",
  },
  hanaServiceButton6: {
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

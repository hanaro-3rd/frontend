import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";

const TravelRecordMainComponent = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.bgWhite}>
        <Image source={require("../../Images/삭제.png")} style={styles.image} />
      </View>
      <Text style={[styles.title, styles.bgWhite]}>내 여행 기록</Text>
      <View style={[styles.planContainer, styles.bgWhite]}>
        <View style={styles.titleWrapper}>
          <Text style={styles.planYear}>2023</Text>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('TravelRecordDetailComponent')}>
          <View style={styles.planDateContainer}>
            <Image
              resizeMode="contain"
              style={styles.planImageContainer}
              source={require("../../Images/도쿄.png")}
            ></Image>
            <View style={styles.planTextContainer}>
              <Text style={styles.planTitle}>일본,도쿄</Text>
              <Text style={styles.planDuringText}>2023.07.01~2023.07.10</Text>
              <View style={styles.planPriceWrapper}>
                <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.planDateContainer}>
          <Image
            resizeMode="contain"
            style={styles.planImageContainer}
            source={require("../../Images/도쿄.png")}
          ></Image>
          <View style={styles.planTextContainer}>
            <Text style={styles.planTitle}>일본,도쿄</Text>
            <Text style={styles.planDuringText}>2023.07.01~2023.07.10</Text>
            <View style={styles.planPriceWrapper}>
              <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.planContainer, styles.bgWhite]}>
        <View style={styles.titleWrapper}>
          <Text style={styles.planYear}>2023</Text>
        </View>
        <View style={styles.planDateContainer}>
          <Image
            resizeMode="contain"
            style={styles.planImageContainer}
            source={require("../../Images/도쿄.png")}
          ></Image>
          <View style={styles.planTextContainer}>
            <Text style={styles.planTitle}>일본,도쿄</Text>
            <Text style={styles.planDuringText}>2023.07.01~2023.07.10</Text>
            <View style={styles.planPriceWrapper}>
              <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
            </View>
          </View>
        </View>
        <View style={styles.planDateContainer}>
          <Image
            resizeMode="contain"
            style={styles.planImageContainer}
            source={require("../../Images/도쿄.png")}
          ></Image>
          <View style={styles.planTextContainer}>
            <Text style={styles.planTitle}>일본,도쿄</Text>
            <Text style={styles.planDuringText}>2023.07.01~2023.07.10</Text>
            <View style={styles.planPriceWrapper}>
              <Text style={styles.planPriceText}>총 비용 ￥100,000</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TravelRecordMainComponent;

const styles = StyleSheet.create({
  main: {
    alignContent: "center",
    justifyContent: "center",
  },
  bgWhite: {
    backgroundColor: "white",
  },
  image: {
    marginTop: 10,
    marginLeft: 10,
    width: 25,
    height: 25,
    paddingLeft: 10,
  },
  titleWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    width: "100%",
    paddingTop: 10,
    alignItems: "flex-end",
    paddingLeft: 10,
    color: "black",
    fontSize: 25,
    fontWeight: "600",
    textAlign: "left",
  },
  planContainer: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
  },
  planYear: {
    paddingTop: 30,
    backgroundColor: "white",
    color: "black",
    fontSize: 20,
    paddingLeft: 10,
    textAlign: "left",
    alignItems: "flex-left",
  },
  planDateContainer: {
    flexDirection: "row",
    marginVertical: "2%",
    height: 110,
    width: "95%",
    borderRadius: 10,
    borderWidth: 1,
  },
  planImageContainer: {
    height: 110,
    width: "30%",
    borderTopLeftRadius: 10, // 왼쪽 위 모서리를 둥글게 설정
    borderBottomLeftRadius: 10, // 왼쪽 아래 모서리를 둥글게 설정
  },
  planTextContainer: {
    marginLeft: 10,
    marginTop: 10,
    width: "70%",
  },
  planTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
  },
  planDuringText: {
    color: "black",
    marginTop: 10,
    fontSize: 15,
  },
  planPriceWrapper: {
    width: "100%",
    paddingRight: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  planPriceText: {
    color: "black",
  },
});

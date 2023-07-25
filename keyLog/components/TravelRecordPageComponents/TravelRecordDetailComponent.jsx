import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { vw, vh } from "react-native-viewport-units";
const TravelRecordDetailComponent = ({ navigation }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate("TravelRecordMainComponent")}
      >
        <View
          style={{
            width: 400,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Image
            source={require("../../Images/삭제.png")}
            style={styles.image}
          />
        </View>
      </TouchableOpacity>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          height: 350,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
        }}
      >
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            height: 40,
          }}
        >
          <Text style={{ fontSize: 17, color: "black" }}>
            2023.07.01 ~ 2023.07.10
          </Text>
        </View>

        <Image
          source={require("../../Images/지도.png")}
          style={{ height: 250 }}
        />
        <View
          style={{
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: 60,
          }}
        >
          <View
            style={{
              backgroundColor: "lightgray",
              borderRadius: 5,
              width: 60,
              height: 5,
            }}
          ></View>
          <Text style={{ fontSize: 17, color: "black" }}>총 ￥100,000</Text>
        </View>
      </View>
      <View
        style={{
          width: "95%",
          height: 600,
        }}
      >
        <View>
          <Text style={{ marginTop: 5, marginBottom: 20 }}>7월 1일</Text>
          <View
            style={{
              height: "auto",
              flexDirection: "row",
              alignItems:"center",
              justifyContent:'space-between',
              marginBottom: 10
            }}
          >
            <View
              style={{
                height: 50,
                flexDirection: "row",
                width: "35%",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
              <Image
                source={require("../../Images/세븐일레븐.png")}
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                }}
              />

              <View>
                <Text>세븐일레븐</Text>
                <Text>13:58</Text>
              </View>
            </View>
            <View style={{alignItems:"flex-end", marginRight:10}}>
              <Text>￥10,000</Text>
              <Text>총 ￥20,000</Text>
            </View>
          </View>
          <View
            style={{
              height: "auto",
              flexDirection: "row",
              alignItems:"center",
              justifyContent:'space-between',
              marginBottom: 10
            }}
          >
            <View
              style={{
                height: 50,
                flexDirection: "row",
                width: "35%",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
              <Image
                source={require("../../Images/세븐일레븐.png")}
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                }}
              />

              <View>
                <Text>세븐일레븐</Text>
                <Text>13:58</Text>
              </View>
            </View>
            <View style={{alignItems:"flex-end", marginRight:10}}>
              <Text>￥10,000</Text>
              <Text>총 ￥20,000</Text>
            </View>
          </View>
          <View
            style={{
              height: "auto",
              flexDirection: "row",
              alignItems:"center",
              justifyContent:'space-between',
              marginBottom: 10
            }}
          >
            <View
              style={{
                height: 50,
                flexDirection: "row",
                width: "35%",
                justifyContent:"space-between",
                alignItems:"center"
              }}
            >
              <Image
                source={require("../../Images/세븐일레븐.png")}
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 50,
                }}
              />

              <View>
                <Text>세븐일레븐</Text>
                <Text>13:58</Text>
              </View>
            </View>
            <View style={{alignItems:"flex-end", marginRight:10}}>
              <Text>￥10,000</Text>
              <Text>총 ￥20,000</Text>
            </View>
          </View>
          
        </View>
      </View>
      <Text>TravelRecordPageDetailComponent</Text>
      <Text>TravelRecordPageDetailComponent</Text>
    </View>
  );
};

export default TravelRecordDetailComponent;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    height: 1000,
    alignItems: "center",
    width: "100vw",
  },
});

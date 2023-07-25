import {
  Button,
  Image,
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const PaymentPageInputComponent = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "white", height: 1000 }}>
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
      <Text
        style={{
          fontSize: 25,
          color: "black",
          fontWeight: "900",
        }}
      >
        결제내역
      </Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          height: 300,
          width: "100%",
        }}
      >
        <Image source={require("../../Images/세븐일레븐.png")} />
        <Text
          style={{
            fontSize: 15,
            color: "black",
            fontWeight: "700",
            marginTop: 10,
          }}
        >
          세븐일레븐
        </Text>
        <Text style={{ marginTop: 20, fontSize: 15 }}>결제금액</Text>
        <Text style={{ fontSize: 30, color: "black", fontWeight: "700" }}>
          ￥10,000
        </Text>
        <Text style={{ marginTop: 10 }}>2023.07.01 13:59</Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 40,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 20 }}>카테고리</Text>
        <View>
          <Text style={{ fontSize: 18 }}>쇼핑 · 편의점 · 마트</Text>
        </View>
      </View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 20,
            width: "100%",
            textAlign: "left",
            paddingLeft: 10,
            fontSize: 18,
            marginBottom: 15,
          }}
        >
          메모
        </Text>
        <TextInput
          style={{
            width: "95%",
            backgroundColor: "white",
            borderColor: "lightgray",
            borderWidth: 1,
          }}
        />
      </View>
    </View>
  );
};

export default PaymentPageInputComponent;

const styles = StyleSheet.create({});

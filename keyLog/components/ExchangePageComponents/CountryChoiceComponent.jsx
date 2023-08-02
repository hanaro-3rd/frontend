import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { List } from "react-native-paper";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";

export const CountryChoiceComponent = () => {
  const list = [
    {
      name: "USD",
      country_url: "../../assets/exchangeImg/USD.png",
    },
    {
      name: "Japan",
      country_url: "../../assets/exchangeImg/Japan.png",
    },
  ];
  return (
    <TouchableOpacity style={styles.countrySelect}>
      <Image
        source={require("../../assets/exchangeImg/USD.png")}
        resizeMode="contain"
      />
      <Text style={styles.unitText}>USD</Text>
      <Image source={require("../../assets/exchangeImg/SelectButton.png")} />
    </TouchableOpacity>

    // <View>
    //   <List.Section style={styles.countrySelect}>
    //     <List.Accordion title="USD" style={styles.unitText}>
    //       <List.Item title="Japan" />
    //       <List.Item title="EUR" />
    //     </List.Accordion>
    //   </List.Section>
    // </View>
  );
};
export default CountryChoiceComponent;

const styles = StyleSheet.create({
  countrySelect: {
    height: heightPercentage(65),
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#191F29",
    borderStyle: "solid",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingHorizontal: widthPercentage(20),
    borderRadius: 10,
  },
  unitText: {
    color: "#191F29",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
});

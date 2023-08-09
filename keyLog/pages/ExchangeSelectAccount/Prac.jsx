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
import { ListItem } from "@rneui/themed";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";

export const Prac = () => {
  const list = [
    {
      name: "USD",
      country_url: require("../../assets/exchangeImg/USD.png"),
    },
    {
      name: "Japan",
      country_url: require("../../assets/exchangeImg/Japan.png"),
    },
    {
      name: "EUR",
      country_url: require("../../assets/exchangeImg/EUR.png"),
    },
  ];

  const [expanded, setExpanded] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState(list[0]);

  const handleCountryPress = (country) => {
    setExpanded(false);
    setSelectedCountry(country);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handleCountryPress(selectedCountry)}>
        <Collapse isCollapsed={!expanded}>
          <CollapseHeader>
            <View style={styles.countrySelect}>
              <Image
                source={selectedCountry.country_url}
                style={{
                  width: widthPercentage(32),
                  height: heightPercentage(30),
                }}
              />
              <Text style={styles.unitText}>{selectedCountry.name}</Text>
            </View>
          </CollapseHeader>
          <CollapseBody>
            {list.map((item) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => handleCountryPress(item)}
              >
                <View style={styles.countrySelect}>
                  <Image
                    source={item.country_url}
                    style={{
                      width: widthPercentage(32),
                      height: heightPercentage(30),
                    }}
                  />
                  <Text style={styles.unitText}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </CollapseBody>
        </Collapse>
      </TouchableOpacity>
    </View>
  );
};
export default Prac;

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
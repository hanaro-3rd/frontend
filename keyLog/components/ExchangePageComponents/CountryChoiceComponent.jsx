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
    {
      name: "EUR",
      country_url: "../../assets/exchangeImg/EUR.png",
    },
  ];

  const [expanded, setExpanded] = React.useState(false);

  return (
    // <TouchableOpacity style={styles.countrySelect}>
    //   <Image
    //     source={require("../../assets/exchangeImg/USD.png")}
    //     resizeMode="contain"
    //   />
    //   <Text style={styles.unitText}>USD</Text>
    //   <Image source={require("../../assets/exchangeImg/SelectButton.png")} />
    // </TouchableOpacity>

    // <View>
    //   <List.Section style={styles.countrySelect}>
    //     <List.Accordion title="USD" style={styles.unitText}>
    //       <List.Item title="Japan" />
    //       <List.Item title="EUR" />
    //     </List.Accordion>
    //   </List.Section>
    // </View>

    <View>
      <Collapse>
        <CollapseHeader>
          <View style={styles.countrySelect}>
            <Image source={require("../../assets/exchangeImg/USD.png")} />
            <Text style={styles.unitText}>USD</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {/* Listitem */}
          <View style={styles.countrySelect}>
            <Image
              source={require("../../assets/exchangeImg/Japan.png")}
              style={{
                width: widthPercentage(32),
                height: heightPercentage(30),
              }}
            />
            <Text style={styles.unitText}>Japan</Text>
          </View>
          <View style={styles.countrySelect}>
            <Image
              source={require("../../assets/exchangeImg/EUR.png")}
              style={{
                width: widthPercentage(32),
                height: heightPercentage(30),
              }}
            />
            <Text style={styles.unitText}>EUR</Text>
          </View>
        </CollapseBody>
      </Collapse>
    </View>
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

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
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    // <TouchableOpacity style={styles.countrySelect}>
    //   <Image
    //     source={require("../../assets/exchangeImg/USD.png")}
    //     resizeMode="contain"
    //   />
    //   <Text style={styles.unitText}>USD</Text>
    //   <Image source={require("../../assets/exchangeImg/SelectButton.png")} />
    // </TouchableOpacity>
    <List.Section title="Accordions">
      <List.Accordion
        title="Uncontrolled Accordion"
        left={(props) => <List.Icon {...props} />}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
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

// const MyComponent = () => {
//   const [expanded, setExpanded] = React.useState(true);

//   const handlePress = () => setExpanded(!expanded);

//   return (
<List.Section title="Accordions">
  <List.Accordion
    title="Uncontrolled Accordion"
    left={(props) => <List.Icon {...props} icon="folder" />}
  >
    <List.Item title="First item" />
    <List.Item title="Second item" />
  </List.Accordion>

  <List.Accordion
    title="Controlled Accordion"
    left={(props) => <List.Icon {...props} icon="folder" />}
    expanded={expanded}
    onPress={handlePress}
  >
    <List.Item title="First item" />
    <List.Item title="Second item" />
  </List.Accordion>
</List.Section>;
//   );
// };

// export default MyComponent;

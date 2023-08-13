import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackSpace from "../../assets/SignUp/BackSpace.svg";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "../../utils/ResponseSize";

const AccountPWNumberPad = ({ onNumPress, onBackspacePress }) => {
  return (
    <View style={styles.numberPad}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
        <TouchableOpacity key={num} onPress={() => onNumPress(num.toString())}>
          <View style={styles.number}>
            <Text style={styles.num}>{num}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.number}>
        <Text style={styles.num}></Text>
      </View>
      <TouchableOpacity onPress={() => onNumPress("0")}>
        <View style={styles.number}>
          <Text style={styles.num}>0</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onBackspacePress}>
        <View style={styles.number}>
          <Text style={styles.num}>
            <BackSpace />
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPWNumberPad;

const styles = StyleSheet.create({
  numberPad: {
    alignItems: "center",
    alignContent: "center",
    alignSelf: "stretch",
    flexWrap: "wrap",
    backgroundColor: "#FFF",
    flexDirection: "row",
    marginTop: heightPercentage(20),
  },
  number: {
    width: widthPercentage(110),
    height: heightPercentage(50),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  num: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: fontPercentage(24),
    fontStyle: "normal",
    fontWeight: "400",
  },
});

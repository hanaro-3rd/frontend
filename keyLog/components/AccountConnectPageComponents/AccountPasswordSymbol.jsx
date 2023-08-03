import React from "react";
import { StyleSheet, View } from "react-native";
import { heightPercentage, widthPercentage } from "../../utils/ResponseSize";
import Ellipse from "../SignUpPageComponents/Ellipse";

const AccountPasswordSymbol = ({ password }) => {
  return (
    <View style={styles.passwordSymbol}>
      {[...Array(4)].map((_, index) => (
        <Ellipse
          key={index}
          fill={password.length > index ? "#55ACEE" : "#B0B8C1"}
        />
      ))}
    </View>
  );
};
export default AccountPasswordSymbol;

const styles = StyleSheet.create({
  passwordSymbol: {
    justifyContent: "center",
    alignItems: "center",
    gap: widthPercentage(10),
    flexDirection: "row",
    marginVertical: heightPercentage(10),
  },
});

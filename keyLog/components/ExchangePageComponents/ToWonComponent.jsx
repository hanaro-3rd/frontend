import React from "react";
import { TextInput } from "react-native";

const ToWonComponent = ({ value, onChangeText }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType="numeric"
      style={{ textAlign: "right" }}
    />
  );
};

export default ToWonComponent;

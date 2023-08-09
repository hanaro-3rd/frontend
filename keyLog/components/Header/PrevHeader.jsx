import { TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import {
  heightPercentage,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
const PrevHeader = ({ navigation, to }) => {
  const Header = styled.View`
    width: ${phoneWidth}px;
    height: ${heightPercentage(50)}px;
    justify-content: center;
    background-color: white;
  `;
  const HeaderImage = styled.Image`
    margin-left: ${widthPercentage(12)}px;
    width: ${widthPercentage(24)}px;
    height: ${heightPercentage(24)}px;
  `;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(to)}>
      <Header>
        <HeaderImage
          source={require("../../assets/travelBudget/arrow_back.png")}
        />
      </Header>
    </TouchableOpacity>
  );
};

export default PrevHeader;

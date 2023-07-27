import { TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import {
  heightPercentage,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
const DeleteHeader = ({ type, navigation, to }) => {
  const Header = styled.View`
    width: ${phoneWidth}px;
    height: ${heightPercentage(50)}px;
    justify-content: center;
    background-color: white;
  `;
  const HeaderImage = styled.Image`
    margin-left: ${widthPercentage(12)}px;
    margin-top: ${heightPercentage(13)}px;
    width: ${widthPercentage(24)}px;
    height: ${heightPercentage(24)}px;
  `;

  if ({ type: "DELETE" }) {
    return (
      <Header>
        <TouchableOpacity onPress={() => navigation.navigate(to)}>
          <HeaderImage source={require("../../Images/삭제.png")} />
        </TouchableOpacity>
      </Header>
    );
  } else if ({ type: "DELETE_PLUS" }) {
    return (
      <View>
        <Header style={{ justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <HeaderImage source={require("../../Images/삭제.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(to)}>
            <HeaderImage
              source={require("../../assets/travelBudget/add.png")}
            />
          </TouchableOpacity>
        </Header>
      </View>
    );
  }
  //   else if (type: "PREV") {

  //   }
};

export default DeleteHeader;

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../utils/ResponseSize";
import styled from "styled-components/native";
import arrow_back from "../assets/travelBudget/arrow_back.png";
import search from "../assets/PickUp/Search.png";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Map from "../components/PickUpKeyPageComponents/MapComponent";

const Header = styled.View`
  align-items: yarcenter;
  width: 100%;
  height: ${heightPercentage(50)}px;
  gap: 10px;
  position: absolute;
  flex-direction: row;
  padding: ${heightPercentage(5)}px ${widthPercentage(12)}px;
`;

const SearchInput = styled.View`
  display: flex;
  height: ${heightPercentage(40)}px;
  width: ${widthPercentage(332)}px;
  padding: ${heightPercentage(11.25)}px ${widthPercentage(15)}px;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 20px;
  background: #fff;
`;

const SearchImage = styled.Image`
  height: ${heightPercentage(17.5)}px;
  width: ${widthPercentage(17.5)}px;
`;

const PickUpKeyPage = ({ navigation }) => {
  const handleGoBackToPrevPage = () => {
    navigation.goBack();
  };
=======
import { View, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React from 'react';
>>>>>>> ceaf923045bca06c3f91f736b8a0f1740c067dd1

  return (
<<<<<<< HEAD
    // <View>
    //   <Header>
    //     <TouchableOpacity onPress={handleGoBackToPrevPage}>
    //       <Image source={arrow_back} />
    //     </TouchableOpacity>
    //     <SearchInput>
    //       <Image source={search} />
    //     </SearchInput>
    //   </Header>

    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: 37.541,
        longitude: 80.986,
=======
    <View style={{ flex: 1 }}>
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
>>>>>>> ceaf923045bca06c3f91f736b8a0f1740c067dd1
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
<<<<<<< HEAD

    // </View>
=======
  </View>
>>>>>>> ceaf923045bca06c3f91f736b8a0f1740c067dd1
  );
};

export default PickUpKeyPage;
<<<<<<< HEAD
=======


>>>>>>> ceaf923045bca06c3f91f736b8a0f1740c067dd1

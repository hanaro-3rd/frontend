import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "../utils/ResponseSize";
import Geolocation from "react-native-geolocation-service";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMarkers, postMarkers } from "../api/api";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { calculateDistance } from "../utils/calculateDistance";
import leftArrow from "../assets/accountImg/Vector.png";
import { NavigationContainer } from "@react-navigation/native";
const TestPaymentSearchPage = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 37.545315,
    longitude: 127.057088,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [showElementView, setShowElementView] = useState(true);
  const [showModalView, setShowModalView] = useState(false);
  const [showSuccessModalView, setShowSuccessModalView] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [markerPostion, setMarkerPostion] = useState({
    latitude: 36,
    longitude: 36,
  });
  const [markerInformation, setMarkerInformation] = useState({
    lat: 0,
    lng: 0,
    address: "string",
    store: "string",
  });
  const queryClient = useQueryClient();
  const mapRef = useRef(null);
  const placesRef = useRef();

  //마커 정보 가져오기
  //1. 검색할 시에 마커만들기
  //2. 검색한 장소에 대한 제목,위도,경도,평점 가져와서 인풋창에 route.params로 넘기기
  //structured_formatting.main_text
  //rating
  //
  const postMarkersMutation = useMutation(postMarkers, {
    onSuccess: (response) => {
      console.log(response.data);
      queryClient.invalidateQueries("getMarkers");
      setShowModalView(false);
      setShowElementView(true);
      setShowSuccessModalView(true);
    },
    onError: (error) => {
      console.log("markerpost" + error);
    },
  });
  console.log("informationMarker", markerInformation);
  const handlePostMarkers = (markerId, markerData) => {
    console.log(markerId, markerData);
    postMarkersMutation.mutate({ markerId, markerData });
  };
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          minHeight: 40,
          zIndex: 1111,
          width: "100%",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            width: "10%",
            height: 45,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            navigation.navigate("MainPage");
          }}
        >
          <Image source={leftArrow} />
        </TouchableOpacity>
        <View style={{ width: "90%" }}>
          <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
              console.log(details);
              console.log(data);
              console.log(details.geometry.location.lat);
              setLocation({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              });
              setIsSearched(true);
              setMarkerPostion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
              });
              setMarkerInformation({
                lat: details.geometry.location.lat,
                lng: details.geometry.location.lng,
                address: data.structured_formatting.main_text,
                store: data.structured_formatting.main_text,
                rating: details.rating,
              });
            }}
            onFail={(err) => console.log(err)}
            fetchDetails={true}
            query={{
              key: "AIzaSyB3FylnsAH0okgewFANqscAn6J0q2td0MY",
              language: "ko",
            }}
            ref={placesRef}
          />
        </View>
      </View>

      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.545315,
          longitude: 127.057088,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        region={location}
      >
        {isSearched && (
          <Marker
            opacity={1.5}
            coordinate={{
              latitude: markerPostion.latitude,
              longitude: markerPostion.longitude,
            }}
          ></Marker>
        )}
      </MapView>
      {isSearched && (
        <MarkerList>
          <UpButtonView onPress={() => setShowElementView(!showElementView)}>
            <UpButton></UpButton>
          </UpButtonView>
          <ModalGetMoneyButton onPress={() => {
            navigation.navigate("TestPaymentPage", markerInformation)
          }}>
            <ModalGetMoneyText>선택하기</ModalGetMoneyText>
          </ModalGetMoneyButton>
        </MarkerList>
      )}
    </View>
  );
};
const ModalWrapper = styled.View`
  width: 100%;
  height: ${heightPercentage(144)}px;
  align-items: center;
`;
const ModalTextView = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;
const ModalDeleteButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;
const ModalKeyMoneyView = styled.View`
  width: 100%;
  height: ${heightPercentage(24)}px;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;
const ModalGetMoneyText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
`;
const ModalGetMoneyButton = styled.TouchableOpacity`
  height: ${heightPercentage(40)}px;
  border-radius: 5px;
  background: #55acee;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 100px;
`;
const ModalKeyMoneyText = styled.Text`
  color: #191f29;
  font-size: 20px;
  font-weight: 700;
`;
const ModalDeleteImage = styled.Image`
  width: ${widthPercentage(15)}px;
  height: ${heightPercentage(15)}px;
  align-items: center;
  justify-content: center;
`;
const ModalLeftText = styled.Text`
  margin-right: ${widthPercentage(10)}px;
  color: #191f29;
  font-size: 18px;
  font-weight: 400;
`;
const ModalRightText = styled.Text`
  color: #4e5968;
  font-size: 12px;
  font-weight: 400;
`;
const ModalView = styled.View`
  width: ${widthPercentage(368)}px;
  height: ${heightPercentage(120)}px;
  background-color: white;
  position: absolute;
  bottom: 5px;
  align-items: center;
  border-radius: 15px;
  padding: 15px;
`;
const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  align-items: center;
`;
const ElementView = styled.View`
  flex-direction: column;
  width: 100%;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  align-items: center;
  justify-content: space-between;
`;
const MarkerElementView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: ${heightPercentage(10)}px 0;
`;
const PolygonImage = styled.Image`
  width: ${widthPercentage(15)}px;
  height: ${heightPercentage(6)}px;
`;
const PolygonView = styled.View`
  width: ${widthPercentage(95)}px;
  flex-direction: row;
  justify-content: center;
`;
const MarkerView = styled.View`
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 10px;
  background: #fff;
  width: ${widthPercentage(95)}px;
  height: ${heightPercentage(55)}px;
`;
const CantGoMarkerView = styled.View`
  elevation: 15;
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 10px;
  background: white;
  width: ${widthPercentage(95)}px;
  height: ${heightPercentage(55)}px;
`;
const MarkerTitleText = styled.Text`
  color: #191f29;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`;
const MarkerKeymoneyText = styled.Text`
  color: #191f29;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;
const LeftPeopleText = styled.Text`
  color: #4e5968;
  text-align: center;
  font-size: 8px;
  font-weight: 400;
`;
const MarkerList = styled.View`
  align-items: center;
  width: 100%;
  min-height: ${heightPercentage()}px;
`;
const UpButtonView = styled.TouchableOpacity`
  width: 100%;
  height: ${heightPercentage(23)}px;
  align-items: center;
  justify-content: center;
`;
const UpButton = styled.View`
  height: ${heightPercentage(3)}px;
  width: ${widthPercentage(40)}px;
  border-radius: 2px;
  background: #d9d9d9;
`;
const MainTextList = styled.View`
  width: 100%;
  height: ${heightPercentage(25)}px;
  align-items: center;
  justify-content: center;
`;
const MainText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;

const ElementTitle = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(18)}px;
  font-weight: 400;
`;
const PeopleText = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(12)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(4)}px;
`;
const MoneyText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(20)}px;
  font-weight: 700;
`;
export default TestPaymentSearchPage;
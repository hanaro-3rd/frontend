import { View, Text, Image, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "../../utils/ResponseSize";
import Geolocation from "react-native-geolocation-service";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMarkers, postMarkers } from "../../api/api";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { calculateDistance } from "../../utils/calculateDistance";
import leftArrow from "../../assets/accountImg/Vector.png";
import { NavigationContainer } from "@react-navigation/native";
import Swiper from "react-native-swiper";
import arrowBack from "../../assets/travelBudget/arrow_back.png";
import { star, starHalf } from "../../utils/image";
const TestPaymentSearchPage = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 37.545315,
    longitude: 127.057088,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  console.log("photos", photos);
  const [showElementView, setShowElementView] = useState(true);
  const [showModalView, setShowModalView] = useState(false);
  const [showSuccessModalView, setShowSuccessModalView] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [photos, setPhotos] = useState([]);
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
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(position.coords, "position가져오니");
        setLocation({
          latitude,
          longitude,

          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      },

      (error) => {
        console.log(error);
        console.log(error.code, error.message, "geolocation에러");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    console.log("location" + location);
  }, []);
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
  const handlePostMarkers = (markerId, markerData) => {
    console.log(markerId, markerData);
    postMarkersMutation.mutate({ markerId, markerData });
  };

  const generateStarIcons = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    const fullStarImage = { uri: star };
    const halfStarImage = { uri: starHalf };

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Image key={i} source={fullStarImage} style={{
        width: widthPercentage(22),
        height: heightPercentage(22),
        marginRight:widthPercentage(2)
      }}/>);
    }

    if (hasHalfStar) {
      stars.push(<Image key="half" source={halfStarImage} style={{
        width: widthPercentage(22),
        height: heightPercentage(22),
        marginRight:widthPercentage(2)
      }}/>);
    }

    return stars;
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
            navigation.navigate("TestPaymentPage");
          }}
        >
          <Image source={arrowBack} />
        </TouchableOpacity>
        <View style={{ width: "90%" }}>
          <GooglePlacesAutocomplete
            placeholder="장소명을 검색하여 등록해주세요!"
            onPress={(data, details) => {
              console.log(details.photos, "details");
              const imagePairs = [];
              if (details.photos) {
                for (let i = 0; i < details.photos.length; i += 2) {
                  // 이미지를 두 개씩 묶어서 배열에 추가
                  const pair = details.photos.slice(i, i + 2);
                  imagePairs.push(pair);
                }
                setPhotos(imagePairs);
              }

              // console.log(data);
              // console.log(details.geometry.location.lat);
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
              key: "AIzaSyB_nxmsBL4iSwU9dniKHw4GWOXONVfCUZw",
              language: "ko" || "en",
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
          <SelectStoreContainer>
            <SelectStoreText>{markerInformation.store}</SelectStoreText>
            <RankTextContainer>
              <RankText>{markerInformation.rating} </RankText>
              <StarImageContainer>
                {generateStarIcons(markerInformation.rating)}
              </StarImageContainer>
            </RankTextContainer>
            <View style={{ width: "100%", height: 150 }}>
              <Swiper
                loop={true} // 무한 루프로 스와이프할 수 있도록 설정
                autoplay={false} // 자동 재생 비활성화
                showsButtons={false}
                showsPagination={false}
                style={{ zIndex: 1 }}
              >
                {photos.map((pair, idx) => {
                  return (
                    <View style={{ flexDirection: "row" }}>
                      {pair.map((e, idx) => {
                        return (
                          <Image
                            style={{
                              width: "49%",
                              height: 150,
                              marginRight: 5,
                              borderRadius: 10,
                            }}
                            source={{
                              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${e.photo_reference}&key=AIzaSyB_nxmsBL4iSwU9dniKHw4GWOXONVfCUZw`,
                            }}
                          />
                        );
                      })}
                    </View>
                  );
                })}
              </Swiper>
            </View>
          </SelectStoreContainer>

          <ModalGetMoneyButton
            onPress={() => {
              navigation.navigate("TestPaymentPage", markerInformation);
            }}
          >
            <ModalGetMoneyText>선택하기</ModalGetMoneyText>
          </ModalGetMoneyButton>
        </MarkerList>
      )}
    </View>
  );
};

const SelectStoreContainer = styled.View`
  display: flex;
  padding: ${heightPercentage(5)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  align-self: stretch;
`;

const SelectStoreText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 400;
`;

const StarImageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: ${widthPercentage(126)}px;
  height: ${heightPercentage(22)}px;
`;
const ModalWrapper = styled.View`
  width: 100%;
  height: ${heightPercentage(144)}px;
  align-items: center;
`;

const RankTextContainer = styled.View`
  display: flex;
  padding-right: 0px;
  align-items: center;
  flex-direction: row;
`;

const RankText = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(18)}px;
  font-style: normal;
  font-weight: 400;
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
  height: ${heightPercentage(50)}px;
  border-radius: 10px;
  background: #55acee;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: 10px;
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
  min-height: ${heightPercentage(50)}px;
  background-color: #fff;
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

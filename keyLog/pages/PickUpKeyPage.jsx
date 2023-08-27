import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from "react-native";
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  getCountryUnit,
  getMoneyUnit,
  getStatusBarHeight,
  heightPercentage,
  widthPercentage,
} from "../utils/ResponseSize";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getMarkers, postMarker, postMarkers } from "../api/api";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { calculateDistance } from "../utils/calculateDistance";
import leftArrow from "../assets/accountImg/Vector.png";
import { NavigationContainer } from "@react-navigation/native";
import { navigateToLoginPage } from "../utils/NavigateToLoginPage";
import Geolocation from "react-native-geolocation-service";
import arrowBack from "../assets/travelBudget/arrow_back.png";
import selectDown from "../assets/exchangeImg/SelectButton.png";
import closeButton from "../assets/travelBudget/CloseButton.png";
import markerMap from "../Images/마커지도.png";
import markerAddress from "../Images/마커주소.png";
import markerPin from "../Images/마커.png";
import CountryModalComponent from "../components/PickUpPageComponents/CountryModalComponent";
import MarkerModalComponent from "../components/PickUpPageComponents/MarkerModalComponent";
import SortModalComponent from "../components/PickUpPageComponents/SortModalComponent";
const PickUpKeyPage = ({ navigation }) => {
  const [location, setLocation] = useState({
    latitude: 37.545315,
    longitude: 127.057088,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [markerList, setMarkerList] = useState([]);
  const [showElementView, setShowElementView] = useState(true);
  const [showModalView, setShowModalView] = useState(false);
  const [showSuccessModalView, setShowSuccessModalView] = useState(false);
  const [successUnit, setSuccessUnit] = useState();
  const [successBalance, setSuccessBalance] = useState();
  const [countryModal, setCountryModal] = useState(["all", "나라 전체"]);
  const [markerModal, setMarkerModal] = useState(["all", "마커 전체"]);
  const [sortModal, setSortModal] = useState(["distance", "거리순"]);
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [isMarkerModalVisible, setIsMarkerModalVisible] = useState(false);
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [currentLocation,setCurrentLocation] = useState({})
  //KRW,JPY,USD,EUR,all
  //all,false,true
  //distance,amount,limitAmount

  const [upDown, setUpDown] = useState(false);
  const [canGetPrice, setCanGetPrice] = useState();
  const [maxHeight, setMaxHeight] = useState(300);
  const queryClient = useQueryClient();
  const mapRef = useRef(null);
  const placesRef = useRef();

  //마커 정보 가져오기
  const getMarker = useMutation(postMarker, {
    onSuccess: async (response) => {
      console.log(response.data);
      let markerMoney = response.data.result.markers.filter(
        (e) => e.isPickUp == false
      );

      const markerBalance = markerMoney.reduce((acc, cur) => {
        return (acc += cur.amount);
      }, 0);
      console.log(markerBalance);
      setCanGetPrice(markerBalance);
      setMarkerList(response.data.result.markers);
      console.log(response.data.result.markers[0]);
      console.log(response.data.result.markers[1]);
    },

    onError: async (error) => {
      console.log(error.response, "error나다");
      // navigation.navigate("LoginPage");
    },
  });

  const postMarkersMutation = useMutation(postMarkers, {
    onSuccess: (response) => {
      console.log(response.data);
      queryClient.invalidateQueries("getMarkers");
      setShowModalView(false);
      setShowElementView(true);
      setShowSuccessModalView(true);
      setSuccessUnit(response.data.result.unit);
      setSuccessBalance(response.data.result?.price);
    },
    onError: (error) => {
      console.log("markerpost" + error);
    },
  });

  useEffect(() => {
    if (showSuccessModalView == true) {
      setTimeout(() => {
        setShowSuccessModalView(false);
      }, 3000);
    }
  }, [showSuccessModalView]);
  const handlePostMarkers = (markerId, markerData) => {
    console.log(markerId, markerData);
    postMarkersMutation.mutate({ markerId, markerData });
  };
  const toggleCountryModal = () => {
    setIsCountryModalVisible(!isCountryModalVisible);
    if (isCountryModalVisible) {
      getMarker.mutate({
        unit: countryModal[0],
        isPickup: markerModal[0],
        sort: sortModal[0],
        markerData: { lat: 37.545315, lng: 127.057088 },
      });
      setUpDown(false);
    }
  };

  const toggleMarkerModal = () => {
    setIsMarkerModalVisible(!isMarkerModalVisible);
    if (isMarkerModalVisible) {
      getMarker.mutate({
        unit: countryModal[0],
        isPickup: markerModal[0],
        sort: sortModal[0],
        markerData: { lat: 37.545315, lng: 127.057088 },
      });
      setUpDown(false);
    }
  };
  const toggleSortModal = () => {
    setIsSortModalVisible(!isSortModalVisible);
    if (isSortModalVisible) {
      getMarker.mutate({
        unit: countryModal[0],
        isPickup: markerModal[0],
        sort: sortModal[0],
        markerData: { lat: 37.545315, lng: 127.057088 },
      });
      setUpDown(false);
    }
  };
  const toggleUpDown = () => {
    setUpDown(!upDown);
    setMarkerList((prevMarkerList) => {
      // Sort the prevMarkerList based on sortModal
      let sortedList = [];
      if (!upDown)
        sortedList = [...prevMarkerList].sort(
          (a, b) => b[`${sortModal[0]}`] - a[`${sortModal[0]}`]
        );
      else
        sortedList = [...prevMarkerList].sort(
          (a, b) => a[`${sortModal[0]}`] - b[`${sortModal[0]}`]
        );
      console.log("정렬", prevMarkerList[0][`${sortModal[0]}`]);
      return sortedList;
    });
  };
  const [isSearched, setIsSearched] = useState(false);
  //현재 위치 표시
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
        getMarker.mutate({
          unit: countryModal[0],
          isPickup: markerModal[0],
          sort: sortModal[0],
          markerData: { lat: latitude, lng: longitude },
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

  const [markerInfo, setMarkerInfo] = useState(null);

  const handleMarkerPress = (event, marker) => {
    // 마커를 클릭하면 해당 마커의 정보를 가져옵니다.
    setMarkerInfo(marker);
  };
  const handleMapPress = () => {
    // 지도를 클릭하면 마커 정보를 리셋합니다.
    setMarkerInfo(null);
  };
  return (
    <View style={{ flex: 1, marginTop: `${getStatusBarHeight()}` }}>
      <View
        style={{
          position: "absolute",
          top: 0,
          minHeight: 40,
          zIndex: 1,
          width: "100%",
          flexDirection: "row",
          marginTop: `${getStatusBarHeight()}`,
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
          <Image source={arrowBack} />
        </TouchableOpacity>
        <View style={{ width: "90%" }}>
          <GooglePlacesAutocomplete
            placeholder="장소명을 검색해보세요"
            onPress={(data, details = null) => {
              // 'details' is provided when fetchDetails = true

              // console.log(data, details);
              // console.log(data)
              setIsSearched(true);
              console.log(details);
              console.log(data);
              console.log(details.geometry.location.lat);
              setLocation({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
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
      {showSuccessModalView && (
        <View
          style={{
            position: "absolute",
            top: 50,
            flex: 1,
            zIndex: 1111,
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#55ACEE",
              width: "97%",
              height: 40,
              borderRadius: 5,
              elevation: 2,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Text style={{ color: "white", fontSize: 13 }}>
              {getCountryUnit(successUnit)} {successBalance} 키머니 받기 완료!
              해당 외화 키머니를 확인해주세요!{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setShowSuccessModalView(false);
              }}
            >
              <Image
                source={require("../Images/삭제_흰.png")}
                style={{ zIndex: 1111, width: 10, height: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}

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
        onPress={(event) => console.log(event.nativeEvent.coordinate)}
      >
        {isSearched && (
          <Marker
            opacity={1.5}
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          ></Marker>
        )}

        {markerList?.map((marker, idx) => {
          return (
            <Marker
              key={idx}
              coordinate={{ latitude: marker.lat, longitude: marker.lng }}
              onPress={() => {
                setLocation({
                  latitude: marker.lat,
                  longitude: marker.lng,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                });
                setShowElementView(false);
                setShowModalView({
                  place: marker.place,
                  limitAmount: marker.limitAmount,
                  amount: marker.amount,
                  markerId: marker.id,
                  lat: marker.lat,
                  lng: marker.lng,
                  isPickUp: marker.isPickUp,
                  unit: marker.unit,
                });
              }}
            >
              <Image
                source={markerPin} // 마커 이미지 경로
                style={{
                  width: 50, // 원하는 너비
                  height: 50, // 원하는 높이
                  resizeMode: 'contain', // 가로세로 비율 유지하며 조절
                }}
              
              />
              <Callout >
              
                  <MarkerView>
                    <MarkerTitleText>{marker.place}</MarkerTitleText>
                    <MarkerKeymoneyText>
                      ￥{marker.amount} 키머니
                    </MarkerKeymoneyText>
                    <LeftPeopleText>
                      {marker.limitAmount}명 남았어요
                    </LeftPeopleText>
                  </MarkerView>
                

                <PolygonView>
                  <PolygonImage source={require("../Images/polygon.png")} />
                </PolygonView>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
      {showModalView && (
        <ModalWrapper>
          <ModalView>
            <ModalHeader>
              <ModalTextView>
                <ModalLeftText>{showModalView.place}</ModalLeftText>
                <ModalRightText>
                  {showModalView.limitAmount}명 남음
                </ModalRightText>
              </ModalTextView>
              <ModalDeleteButton onPress={() => setShowModalView(false)}>
                <ModalDeleteImage
                  source={require("../Images/삭제.png")}
                  resizeMode="contain"
                />
              </ModalDeleteButton>
            </ModalHeader>
            <ModalKeyMoneyView>
              <ModalKeyMoneyText>
                {showModalView.unit}
                {"  "}
                {showModalView.amount}
                {getCountryUnit(showModalView.unit)}
              </ModalKeyMoneyText>
            </ModalKeyMoneyView>
            {!showModalView.isPickUp ? (
      
             showModalView.distance < 0.1 ? (
                <ModalGetMoneyButton
                  onPress={() => {
                    handlePostMarkers(showModalView.markerId, {
                      lat: showModalView.lat,
                      lng: showModalView.lng,
                    });
                  }}
                >
                  <ModalGetMoneyText>키머니 받기</ModalGetMoneyText>
                </ModalGetMoneyButton>
              ) : (
                <ModalGetNotMoneyView disabled={true}>
                  <ModalGetMoneyText>
                    마커를 주울 수 있는 위치가 아닙니다.
                  </ModalGetMoneyText>
                </ModalGetNotMoneyView>
              )
            ) : (
              <ModalGetNotMoneyView disabled={true}>
              <ModalGetMoneyText>
                주운 마커입니다.
              </ModalGetMoneyText>
            </ModalGetNotMoneyView>
            )}
          </ModalView>
        </ModalWrapper>
      )}

      <MarkerList maxHeight={maxHeight}>
        <UpButtonView onPress={() => setShowElementView(!showElementView)}>
          <UpButton></UpButton>
        </UpButtonView>
        {
          <MainTextList>
            <View
              style={{
                flexDirection: "row",
                width: "47%",
                justifyContent: "flex-start",
                alignItems: "center",
                height: 41,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={toggleCountryModal}
              >
                <Text style={{ fontSize: 13, color: "#191F29" }}>
                  {countryModal[1]}
                </Text>
                <Image
                  style={{ marginLeft: 5, marginTop: 3 }}
                  source={selectDown}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
                onPress={toggleMarkerModal}
              >
                <Text style={{ fontSize: 13, color: "#191F29" }}>
                  {markerModal[1]}
                </Text>
                <Image
                  style={{ marginLeft: 5, marginTop: 3 }}
                  source={selectDown}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "47%",
                justifyContent: "flex-end",
                alignItems: "center",
                height: 41,
              }}
            >
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  fontSize: 15,
                  marginRight: 10,
                }}
                onPress={toggleSortModal}
              >
                <Text style={{ fontSize: 13, color: "#191F29" }}>
                  {sortModal[1]}
                </Text>
                <Image
                  style={{ marginLeft: 5, marginTop: 3 }}
                  source={selectDown}
                />
              </TouchableOpacity>
              {upDown == false ? (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 15,
                  }}
                  activeOpacity={1}
                  onPress={toggleUpDown}
                >
                  <Text style={{ fontSize: 13, color: "#191F29" }}>
                    오름차순
                  </Text>
                  <View
                    style={{ marginLeft: 5, marginTop: 3 }}
                    source={selectDown}
                  >
                    <Text>▲</Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    fontSize: 15,
                  }}
                  onPress={toggleUpDown}
                >
                  <Text style={{ fontSize: 13 }}>내림차순</Text>
                  <View
                    style={{ marginLeft: 5, marginTop: 3 }}
                    source={selectDown}
                  >
                    <Text>▼</Text>
                  </View>
                </TouchableOpacity>
              )}
            </View>
          </MainTextList>
        }

        {showElementView == true ? (
          <ElementView>
            {markerList.length > 0 ? (
              markerList?.map((marker, idx) => {
                return (
                  <MarkerElementView
                    key={idx}
                    onPress={() => {
                      setLocation({
                        latitude: marker.lat,
                        longitude: marker.lng,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                      });
                      setShowElementView(false);
                      setShowModalView({
                        place: marker.place,
                        limitAmount: marker.limitAmount,
                        amount: marker.amount,
                        markerId: marker.id,
                        lat: marker.lat,
                        lng: marker.lng,
                        isPickUp: marker.isPickUp,
                        distance: marker.distance,
                        unit: marker.unit,
                      });
                    }}
                  >
                    <View>
                      <View
                        style={{ flexDirection: "row", alignItems: "flex-end" }}
                      >
                        <ElementTitle>{marker.place}</ElementTitle>
                        <DistanceText>{marker.distance}km</DistanceText>
                      </View>

                      {/* <PeopleText>{marker.limitAmount} 키머니</PeopleText> */}
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          width: 100,
                        }}
                      >
                        <Image
                          source={markerMap}
                          style={{ marginTop: 7, marginRight: 5 }}
                        />
                        <PeopleText>
                          {getCountryUnit(marker.unit)}
                          {marker.amount} 키머니
                        </PeopleText>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          width: 100,
                        }}
                      >
                        <Image
                          source={markerAddress}
                          style={{ marginTop: 7, marginRight: 5 }}
                        />
                        <PeopleText>{marker.address}</PeopleText>
                      </View>
                    </View>
                    <View>
                      <MoneyText>{marker.limitAmount}명 남았어요</MoneyText>
                    </View>
                  </MarkerElementView>
                );
              })
            ) : (
              <View
                style={{
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>해당 정렬에 마커가 존재하지 않습니다.</Text>
              </View>
            )}
          </ElementView>
        ) : (
          <View></View>
        )}
      </MarkerList>
      {isCountryModalVisible && (
        <CountryModalComponent
          closeModal={toggleCountryModal}
          countryModal={countryModal}
          setCountryModal={setCountryModal}
        />
      )}
      {isMarkerModalVisible && (
        <MarkerModalComponent
          closeModal={toggleMarkerModal}
          markerModal={markerModal}
          setMarkerModal={setMarkerModal}
        />
      )}
      {isSortModalVisible && (
        <SortModalComponent
          closeModal={toggleSortModal}
          sortModal={sortModal}
          setSortModal={setSortModal}
        />
      )}
    </View>
  );
};
const CountryText = styled.Text`
  color: #191f29;
  font-size: 16px;
  font-weight: 700;
`;
const ModalWrapper = styled.View`
  width: 100%;
  /* height: ${heightPercentage(140)}px; */
  align-items: center;
  background-color: transparent;
  position: fixed;
  bottom: 10;
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
  height: ${heightPercentage(40)}px;
  align-items: center;
  justify-content: center;
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
  margin-bottom: ${heightPercentage(100)}px;
`;
const ModalGetNotMoneyView = styled.TouchableOpacity`
  height: ${heightPercentage(40)}px;
  border-radius: 5px;
  background: lightgray;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-bottom: ${heightPercentage(100)}px;
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
  height: ${heightPercentage(130)}px;
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
const ElementView = styled.ScrollView`
  flex-direction: column;
  width: 100%;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  /* align-items: center;
  justify-content: space-between; */
`;
const MarkerElementView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;

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
const PickupMarkerView = styled.View`
  display: flex;
  padding: 5px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  elevation: 5;
  border-radius: 10px;
  background: gray;
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
  width: 100%;
  max-height: ${(props) => props.maxHeight}px;
  background-color: white;
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
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  height: ${heightPercentage(25)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${heightPercentage(5)}px;
`;
const MainText = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(16)}px;
  font-weight: 400;
`;

const ElementTitle = styled.Text`
  color: #191f29;
  font-size: ${fontPercentage(18)}px;
  font-weight: 700;
`;
const PeopleText = styled.Text`
  color: #4e5968;
  font-size: ${fontPercentage(13)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(2)}px;
`;
const DistanceText = styled.Text`
  color: #008485;
  font-size: ${fontPercentage(13)}px;
  font-weight: 400;
  margin-top: ${heightPercentage(2)}px;
  margin-left: 3px;
`;
const MoneyText = styled.Text`
  color: #55acee;
  margin-top: 1px;
  font-size: ${fontPercentage(17)}px;
  font-weight: 700;
`;
const customCalloutStyle = StyleSheet.create({
  /* Define your custom Callout styles here */
  // For example:
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
  },
  text: {
    fontSize: 16,
  },
});
export default PickUpKeyPage;

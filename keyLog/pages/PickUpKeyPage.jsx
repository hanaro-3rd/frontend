import { View, Text, Image } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "../utils/ResponseSize";
import Geolocation from "react-native-geolocation-service";
import { useQuery, useQueryClient } from "react-query";
import { getMarkers } from "../api/api";

const PickUpKeyPage = () => {
  const [location, setLocation] = useState();
  const [markerList, setMarkerList] = useState([]);
  const queryClient = useQueryClient();

  //마커 정보 가져오기
  const { data } = useQuery("getMarkers", async () => getMarkers(), {
    onSuccess: async (response) => {
      console.log(JSON.stringify(response.data));
      setMarkerList(response.data.result.markers);
    },
    onError: async (error) => {
      console.log("error" + error);
    },
  });

  //현재 위치 표시
  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({
          latitude,
          longitude,
        });
        console.log(latitude, longitude);
      },

      (error) => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
    console.log(location);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.545315,
          longitude: 127.057088,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        <Marker coordinate={{ latitude: 37.545315, longitude: 127.057088 }}>
          {markerList?.map((marker, idx) => {
            return (
              <View key={idx}>
                <MarkerView>
                  <MarkerTitleText>{marker.place}</MarkerTitleText>
                  <MarkerKeymoneyText>
                    ￥{marker.amount} 키머니
                  </MarkerKeymoneyText>
                  <LeftPeopleText>{marker.limitAmount} 남았어요</LeftPeopleText>
                </MarkerView>
                <PolygonView>
                  <PolygonImage source={require("../Images/polygon.png")} />
                </PolygonView>
              </View>
            );
          })}
        </Marker>
      </MapView>
      <MarkerList>
        <UpButtonView>
          <UpButton></UpButton>
        </UpButtonView>
        <MainTextList>
          <MainText>총 ￥200 하나머니를 주울 수 있어요!</MainText>
        </MainTextList>
        <ElementView>
          {markerList?.map((marker, idx) => {
            return (
              <MarkerElementView key={idx}>
                <View>
                  <ElementTitle>{marker.place}</ElementTitle>
                  <PeopleText>{marker.limitAmount} 남았어요</PeopleText>
                </View>
                <View>
                  <MoneyText>￥{marker.amount} 키머니</MoneyText>
                </View>
              </MarkerElementView>
            );
          })}
        </ElementView>
      </MarkerList>
    </View>
  );
};
const ElementView = styled.View`
  flex-direction: column;
  width: 100%;
  padding-left: ${widthPercentage(20)}px;
  padding-right: ${widthPercentage(20)}px;
  align-items: center;
  justify-content: space-between;
`;
const MarkerElementView = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: ${heightPercentage(10)}px 0;
`
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
  min-height: ${heightPercentage(200)}px;
`;
const UpButtonView = styled.View`
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
export default PickUpKeyPage;

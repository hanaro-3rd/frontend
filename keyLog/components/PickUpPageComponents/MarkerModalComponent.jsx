import { View, Text, TouchableOpacity,Image } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import closeButton from "../../assets/travelBudget/CloseButton.png";
const MarkerModalComponent = ({closeModal,markerModal,setMarkerModal}) => {
    return (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
        >
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경 블러 처리
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={closeModal}
          ></TouchableOpacity>
          <View
            style={{
              backgroundColor: "white",
              width: "100%",
    
              position: "absolute",
              bottom: 0,
              zIndex: 23,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              padding: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <CountryText>마커 선택</CountryText>
              <TouchableOpacity onPress={closeModal}>
                <Image source={closeButton} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: "100%",
                height: 0.5,
                backgroundColor: "gray",
                marginTop: 10,
              }}
            ></View>
            <View style={{ paddingTop: 20 }}>
              <TouchableOpacity
                style={[{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  height: 40,
                },markerModal[0]&&{color:"#55ACEE"}]}
                activeOpacity={1}
                onPress={()=>setMarkerModal(["all","마커 전체"])}
              >
                <Text style={markerModal[0]=="all"&&{color:"#55ACEE"}}>마커 전체</Text>
                {markerModal[0]=="all"&&<Image source={require("../../assets/Setting/check.png")} />}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  height: 40,
                }}
                activeOpacity={1}
                onPress={()=>setMarkerModal(["false","안주운 마커"])}
              >
                <Text style={markerModal[0]=="false"&&{color:"#55ACEE"}}>인주운 마커</Text>
                {markerModal[0]=="false"&&<Image source={require("../../assets/Setting/check.png")} />}
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  height: 40,
                }}
                activeOpacity={1}
                onPress={()=>setMarkerModal(["true","주운 마커"])}
              >
                <Text style={markerModal[0]=="true"&&{color:"#55ACEE"}}>주운 마커</Text>
                {markerModal[0]=="true"&&<Image source={require("../../assets/Setting/check.png")} />}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                width: "100%",
                backgroundColor: "#55ACEE",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                height: 50,
              }}
              onPress={closeModal}
            >
              <Text style={{ fontSize: 16, color: "#FFF" }}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    const CountryText = styled.Text`
      color: #191f29;
      font-size: 16px;
      font-weight: 700;
    `;
export default MarkerModalComponent;

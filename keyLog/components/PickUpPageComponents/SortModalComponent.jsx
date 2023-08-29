import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { heightPercentage, widthPercentage } from "../../utils/ResponseSize";
import { check, close } from "../../utils/image";
const SortModalComponent = ({ closeModal, sortModal, setSortModal }) => {
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
          <CountryText>정렬 선택</CountryText>
          <TouchableOpacity onPress={closeModal}>
            <Image
              source={{ uri: close }}
              style={{
                width: widthPercentage(24),
                height: heightPercentage(24),
              }}
            />
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
            style={[
              {
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                height: 40,
              },
              sortModal[0] && { color: "#55ACEE" },
            ]}
            activeOpacity={1}
            onPress={() => setSortModal(["distance", "거리순"])}
          >
            <Text style={sortModal[0] == "distance" && { color: "#55ACEE" }}>
              거리순
            </Text>
            {sortModal[0] == "distance" && (
              <Image
                source={{ uri: check }}
                style={{
                  width: widthPercentage(24),
                  height: heightPercentage(24),
                  resizeMode: "contain",
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              height: 40,
            }}
            activeOpacity={1}
            onPress={() => setSortModal(["amount", "금액순"])}
          >
            <Text style={sortModal[0] == "amount" && { color: "#55ACEE" }}>
              금액순
            </Text>
            {sortModal[0] == "amount" && (
              <Image
                source={{ uri: check }}
                style={{
                  width: widthPercentage(24),
                  height: heightPercentage(24),
                  resizeMode: "contain",
                }}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              height: 40,
            }}
            activeOpacity={1}
            onPress={() => setSortModal(["limitAmount", "남은 인원순"])}
          >
            <Text style={sortModal[0] == "limitAmount" && { color: "#55ACEE" }}>
              남은 인원순
            </Text>
            {sortModal[0] == "limitAmount" && (
              <Image
                source={{ uri: check }}
                style={{
                  width: widthPercentage(24),
                  height: heightPercentage(24),
                  resizeMode: "contain",
                }}
              />
            )}
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
export default SortModalComponent;

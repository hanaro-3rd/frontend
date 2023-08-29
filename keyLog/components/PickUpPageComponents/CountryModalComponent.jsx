import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { styled } from "styled-components/native";
import { heightPercentage, widthPercentage } from "../../utils/ResponseSize";
import {
  check,
  close
} from "../../utils/image";
const CountryModalComponent = ({
  closeModal,
  countryModal,
  setCountryModal,
}) => {
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
          <CountryText>나라 선택</CountryText>
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
              countryModal[0] && { color: "#55ACEE" },
            ]}
            activeOpacity={1}
            onPress={() => setCountryModal(["all", "나라 전체"])}
          >
            <Text style={countryModal[0] == "all" && { color: "#55ACEE" }}>
              전체
            </Text>
            {countryModal[0] == "all" && (
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
            onPress={() => setCountryModal(["KRW", "한국"])}
          >
            <Text style={countryModal[0] == "KRW" && { color: "#55ACEE" }}>
              한국
            </Text>
            {countryModal[0] == "KRW" && (
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
            onPress={() => setCountryModal(["USD", "미국"])}
          >
            <Text style={countryModal[0] == "USD" && { color: "#55ACEE" }}>
              미국
            </Text>
            {countryModal[0] == "USD" && (
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
            onPress={() => setCountryModal(["EUR", "유럽"])}
          >
            <Text style={countryModal[0] == "EUR" && { color: "#55ACEE" }}>
              유럽
            </Text>
            {countryModal[0] == "EUR" && (
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
            onPress={() => setCountryModal(["JPY", "일본"])}
          >
            <Text style={countryModal[0] == "JPY" && { color: "#55ACEE" }}>
              일본
            </Text>
            {countryModal[0] == "JPY" && (
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
export default CountryModalComponent;

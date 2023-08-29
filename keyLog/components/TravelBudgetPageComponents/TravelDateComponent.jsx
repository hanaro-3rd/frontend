import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styled from "styled-components/native";
import SelectButtonBefore from "../../assets/travelBudget/SelectButtonBefore.png";
import SelectButton from "../../assets/travelBudget/SelectButton.png";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { expandGray } from "../../utils/image";

const SelectedFrame = styled.View`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-direction: row;
`;

const TravelPeriodTextContainer = styled.View`
  width: ${widthPercentage(170)}px;
  height: ${heightPercentage(39)}px;
  display: flex;
  padding: ${heightPercentage(7)}px ${widthPercentage(15)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000000;
  border-radius: 5px;
  gap: 15px;
  background-color: ${(props) => (props.hasValue ? "white;" : "#f9fafb")};
  border: 1px solid ${(props) => (props.hasValue ? "#000" : "#f9fafb")};
`;

const TravelPeriodText = styled.Text`
  color: #191f29;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
  color: ${(props) => (props.hasValue ? "#000" : "#b0b8c1")};
`;

const PlaceholderText = styled.Text`
  color: #b0b8c1;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  text-align: left;
`;

const TravelDateComponent = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  formatDate,
}) => {
  const [isStartDateVisible, setStartDateVisible] = useState(false);
  const [isEndDateVisible, setEndDateVisible] = useState(false);
  const [mode, setMode] = useState("datetime");
  const [isStartDateSelected, setStartDateSelected] = useState(false);
  const [isEndDateSelected, setEndDateSelected] = useState(false);

  useEffect(() => {
    setStartDateSelected(startDate instanceof Date);
    setEndDateSelected(endDate instanceof Date);
  }, [startDate, endDate]);

  useEffect(() => {
    if (formatDate) {
      if (Array.isArray(startDate) && startDate.length === 5) {
        const [startYear, startMonth, startDay, startHour, startMinute] =
          startDate;
        const isoFormattedStartDate = format(
          new Date(startYear, startMonth - 1, startDay, startHour, startMinute),
          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          {
            locale: ko,
          }
        );
        setStartDate(isoFormattedStartDate);
      }

      if (Array.isArray(endDate) && endDate.length === 5) {
        const [endYear, endMonth, endDay, endHour, endMinute] = endDate;
        const isoFormattedEndDate = format(
          new Date(endYear, endMonth - 1, endDay, endHour, endMinute),
          "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
          {
            locale: ko,
          }
        );
        setEndDate(isoFormattedEndDate);
      }
    }
  }, [formatDate, startDate, setStartDate, endDate, setEndDate]);

  const onPressStartDate = () => {
    setMode("datetime");
    setStartDateVisible(true);
  };
  const onPressEndDate = () => {
    setMode("datetime");
    setEndDateVisible(true);
  };

  const onConfirmStartDate = (selectedDate) => {
    setStartDateVisible(false);
    setStartDate(selectedDate);
    setStartDateSelected(true);
  };

  const onConfirmEndDate = (selectedDate) => {
    setEndDateVisible(false);
    if (selectedDate >= startDate) {
      setEndDate(selectedDate);
      setEndDateSelected(true);
    }
    // setEndDateVisible(false);
  };

  const onCancel = () => {
    setStartDateVisible(false);
    setEndDateVisible(false);
  };

  console.log(startDate);
  return (
    <View>
      <SelectedFrame>
        <Pressable onPress={onPressStartDate}>
          <TravelPeriodTextContainer
            selected={isStartDateSelected}
            placeholderTextColor="#b0b8c1"
            hasValue={startDate !== null}
          >
            {isStartDateSelected ? (
              <>
                <TravelPeriodText hasValue={startDate !== ""}>
                  {startDate
                    ? format(new Date(startDate), "yyyy.MM.dd HH:mm", {
                        locale: ko,
                      })
                    : ""}
                </TravelPeriodText>
                {/* <Image source={SelectButton} /> */}
              </>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <PlaceholderText>시작일</PlaceholderText>
                <Image
                  source={{ uri: expandGray }}
                  style={{
                    width: widthPercentage(25),
                    height: heightPercentage(15),
                  }}
                />
              </View>
            )}
          </TravelPeriodTextContainer>
        </Pressable>
        <Pressable onPress={onPressEndDate}>
          <TravelPeriodTextContainer
            selected={isEndDateSelected}
            placeholderTextColor="#b0b8c1"
            hasValue={endDate !== null}
          >
            {isEndDateSelected ? (
              <>
                <TravelPeriodText hasValue={endDate !== ""}>
                  {endDate
                    ? format(new Date(endDate), "yyyy.MM.dd HH:mm", {
                        locale: ko,
                      })
                    : ""}
                </TravelPeriodText>
                {/* <Image source={SelectButton} /> */}
              </>
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <PlaceholderText>종료일</PlaceholderText>
                <Image
                  source={{ uri: expandGray }}
                  style={{
                    width: widthPercentage(25),
                    height: heightPercentage(15),
                  }}
                />
              </View>
            )}
          </TravelPeriodTextContainer>
        </Pressable>
      </SelectedFrame>
      <DateTimePickerModal
        onConfirm={onConfirmStartDate}
        onCancel={onCancel}
        mode={mode}
        date={startDate ? new Date(startDate) : new Date()}
        minimumDate={startDate ? new Date(startDate) : new Date()}
        isVisible={isStartDateVisible}
      />
      <DateTimePickerModal
        onConfirm={onConfirmEndDate}
        onCancel={onCancel}
        mode={mode}
        date={endDate ? new Date(endDate) : new Date()}
        isVisible={isEndDateVisible}
        minimumDate={startDate ? new Date(startDate) : new Date()}
      />
    </View>
  );
};

export default TravelDateComponent;

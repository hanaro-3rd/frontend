import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
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
  justify-content: flex-end;
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

const TravelDateComponent = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [isStartDateVisible, setStartDateVisible] = useState(false);
  const [isEndDateVisible, setEndDateVisible] = useState(false);

  const [isStartDateSelected, setStartDateSelected] = useState(false);
  const [isEndDateSelected, setEndDateSelected] = useState(false);

  const onPressStartDate = () => {
    setStartDateVisible(true);
  };

  const onPressEndDate = () => {
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

  return (
    <View>
      <SelectedFrame>
        <Pressable onPress={onPressStartDate}>
          <TravelPeriodTextContainer
            selected={isStartDateSelected}
            placeholderTextColor="#b0b8c1"
            hasValue={startDate !== null}
          >
            {!isStartDateSelected && <View style={{ flex: 1 }} />}
            {isStartDateSelected ? (
              <>
                <TravelPeriodText hasValue={startDate !== ""}>
                  {startDate
                    ? format(new Date(startDate), "yyyy.MM.dd", { locale: ko })
                    : ""}
                </TravelPeriodText>
                <Image source={SelectButton} />
              </>
            ) : (
              <Image source={SelectButtonBefore} />
            )}
          </TravelPeriodTextContainer>
        </Pressable>
        <Pressable onPress={onPressEndDate}>
          <TravelPeriodTextContainer
            selected={isEndDateSelected}
            placeholderTextColor="#b0b8c1"
            hasValue={endDate !== null}
          >
            {!isEndDateSelected && <View style={{ flex: 1 }} />}
            {isEndDateSelected ? (
              <>
                <TravelPeriodText hasValue={endDate !== ""}>
                  {endDate
                    ? format(new Date(endDate), "yyyy.MM.dd", { locale: ko })
                    : ""}
                </TravelPeriodText>
                <Image source={SelectButton} />
              </>
            ) : (
              <Image source={SelectButtonBefore} />
            )}
          </TravelPeriodTextContainer>
        </Pressable>
      </SelectedFrame>
      <DateTimePickerModal
        onConfirm={onConfirmStartDate}
        onCancel={onCancel}
        date={startDate ? new Date(startDate) : new Date()}
        isVisible={isStartDateVisible}
      />
      <DateTimePickerModal
        onConfirm={onConfirmEndDate}
        onCancel={onCancel}
        date={endDate ? new Date(endDate) : new Date()}
        isVisible={isEndDateVisible}
        minimumDate={startDate ? new Date(startDate) : new Date()}
      />
    </View>
  );
};

export default TravelDateComponent;

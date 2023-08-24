import styled from "styled-components/native";
import { TouchableOpacity, Text, View, Alert } from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import React, { useEffect, useRef, useState } from "react";
import TravelDateComponent from "../../components/TravelBudgetPageComponents/TravelDateComponent";
import { Picker } from "@react-native-picker/picker";
import { patchTravelPlan, } from "../../api/api";
import { useMutation, useQuery } from "react-query";

const Root = styled.SafeAreaView`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
`;

const Body = styled.SafeAreaView`
  background-color: white;
  width: 100%;
  min-height: ${phoneHeight}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

const BodyHeader = styled.View`
  display: flex;
  padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

const Title = styled.Text`
  color: #191f29;
  font-family: Inter;
  font-size: ${fontPercentage(23)}px;
  font-style: normal;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const BodyMain = styled.View`
  display: flex;
  padding: ${heightPercentage(20)}px ${widthPercentage(20)}px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  align-self: stretch;
`;

const TravelTitleContainer = styled.View`
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(68)}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  margin-bottom: ${heightPercentage(10)}px;
`;

const TitleContainer = styled.View`
  display: flex;
  padding: 0px ${widthPercentage(5)}px;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  align-self: stretch;
`;
const TravelTitle = styled.Text`
  color: #191f29;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const TextSize = styled.Text`
  color: #191f29;
  text-align: center;
  font-family: Inter;
  font-size: ${fontPercentage(12)}px;
  font-style: normal;
  font-weight: 400;
`;

const TravelTextinput = styled.TextInput`
  display: flex;
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(39)}px;
  padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  align-self: stretch;
  background-color: ${(props) => (props.hasValue ? "white;" : "#f9fafb")};
  color: ${(props) => (props.hasValue ? "#000" : "#b0b8c1")};
  border: 1px solid ${(props) => (props.hasValue ? "#000" : "#f9fafb")};
  border-radius: 5px;
  text-align: right;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const TravelCountryTextinput = styled.TextInput`
  width: ${widthPercentage(170)}px;
  height: ${heightPercentage(39)}px;
  display: flex;
  padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
  flex: 1 0 0;
  align-self: stretch;
  background-color: ${(props) => (props.hasValue ? "white;" : "#f9fafb")};
  color: ${(props) => (props.hasValue ? "#000" : "#b0b8c1")};
  border: 1px solid ${(props) => (props.hasValue ? "#000" : "#f9fafb")};
  border-radius: 5px;
  text-align: right;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 400;
`;

const SelectedFrame = styled.View`
  width: ${widthPercentage(350)}px;
  height: ${heightPercentage(39)}px;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  flex-direction: row;
`;

const Footer = styled.TouchableOpacity`
  width: 100%;
  display: flex;
  padding: ${heightPercentage(15)}px ${widthPercentage(25)}px;
  height: ${heightPercentage(85)}px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  /* margin-bottom: ${heightPercentage(25)}px; */
  position: absolute;
  bottom: 0;
`;
const NextButton = styled.TouchableOpacity`
  display: flex;
  width: ${widthPercentage(340)}px;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
`;
const NextButtonText = styled.Text`
  color: #fff;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const PickerContainer = styled.View`
  width: ${widthPercentage(170)}px;
  height: ${heightPercentage(39)}px;
  background-color: ${(props) => (props.hasValue ? "white;" : "#f9fafb")};
  border: 1px solid ${(props) => (props.hasValue ? "#000" : "#f9fafb")};
  border-radius: 5px;
`;

const MAX_TITLE_LENGTH = 20;
const MAX_COUNTRY_LENGTH = 10;

const TravelScheduleEditPage = ({ route, navigation }) => {
  const { planId, travelData } = route.params;

  console.log("여기서 쓸거!", travelData.travelBudget);

  const formatDateToString = (dateArray) => {
    const year = dateArray[0];
    const month = String(dateArray[1]).padStart(2, "0");
    const day = String(dateArray[2]).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const startDateString = formatDateToString(travelData.travelBudget.startDate);
  const endDateString = formatDateToString(travelData.travelBudget.endDate);

  const [title, setTitle] = useState(travelData.travelBudget.title);
  const [country, setCountry] = useState(travelData.travelBudget.country);
  const [city, setCity] = useState(travelData.travelBudget.city);
  const [startDate, setStartDate] = useState(startDateString);
  const [endDate, setEndDate] = useState(endDateString);

  const patchEditTravelPlanMutation = useMutation(patchTravelPlan, {
    onSuccess: (response) => {
      console.log(response.data);
    },
    onError: () => {},
  });

  const handlePatchEditTravelPlan = () => {
    console.log(selectedChangeCategory, changeMemo);
    const updatePaymentData = {
      category: selectedChangeCategory,
      memo: changeMemo,
    };
    console.log(updatePaymentData);
    patchKeymoneyHistoryMutation.mutate({ historyId, updatePaymentData });
  };

  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [isTravelCountryClick, setIsTravelCountryClick] = useState(false);

  const updateIsAllFieldsFilled = () => {
    const isStartDateSelected = startDate !== null;
    const isEndDateSelected = endDate !== null;
    const isTravelCountryOptionSelected = city !== "";

    setIsAllFieldsFilled(
      (title !== "" &&
        country !== "" &&
        isStartDateSelected &&
        isEndDateSelected) ||
        (isTravelCountryOptionSelected &&
          isStartDateSelected &&
          isEndDateSelected)
    );
  };

  const handleTravelTitleChange = (text) => {
    if (text.length <= MAX_TITLE_LENGTH) {
      setTitle(text);
      updateIsAllFieldsFilled();
    }
  };

  const handleTravelCountryChange = (text) => {
    setCountry(text);
    updateIsAllFieldsFilled();
  };

  const handleTravelCountryOptionChange = (text) => {
    if (text.length <= MAX_COUNTRY_LENGTH) {
      setCity(text);
      updateIsAllFieldsFilled();
    }
  };

  const handleStartDateChange = (text) => {
    const selectedDate = new Date(text);
    setStartDate(selectedDate);
    updateIsAllFieldsFilled();
  };

  const handleEndDateChange = (text) => {
    const selectedDate = new Date(text);
    setEndDate(selectedDate);
    updateIsAllFieldsFilled();
  };

  const handleEditClose = () => {
    Alert.alert(
      "경비 계획 수정 취소하기",
      "경비 계획 수정을 취소하시겠습니까?",
      [
        {
          text: "예",
          onPress: () => {
            navigation.navigate("TravelBudgetPage");
          },
        },
        {
          text: "아니요",
          style: "cancel",
        },
      ]
    );
  };
  useEffect(() => {
    updateIsAllFieldsFilled();
  }, [title, country, city, startDate, endDate]);

  const handleNextButtonPress = () => {
    if (isAllFieldsFilled) {
      navigation.navigate("TravelBudgetPlanEditPage", {
        country,
        title,
        city,
        startDate,
        endDate,
        //  category: travelData.category,
        planId,
      });
    }
    // else {

    // }
  };

  return (
    <Root>
      <TouchableOpacity
        onPress={() => {
          handleEditClose();
        }}
      >
        <Header>
          <HeaderImage source={require("../../Images/삭제.png")} />
        </Header>
      </TouchableOpacity>
      <Body>
        <BodyHeader>
          <Title>계획 작성</Title>
          <SubTitle>계획중인 여행의 정보를 작성해주세요.</SubTitle>
        </BodyHeader>
        <BodyMain>
          <TravelTitleContainer>
            <TitleContainer>
              <TravelTitle>여행제목</TravelTitle>
              <TextSize>
                {title.length} / {MAX_TITLE_LENGTH}
              </TextSize>
            </TitleContainer>
            <TravelTextinput
              placeholderTextColor="#b0b8c1"
              value={title}
              onChangeText={handleTravelTitleChange}
              maxLength={MAX_TITLE_LENGTH}
              hasValue={title !== ""}
            />
          </TravelTitleContainer>
          <TravelTitleContainer>
            <TitleContainer>
              <TravelTitle>여행지</TravelTitle>
              <TextSize>{city.length} / 10</TextSize>
            </TitleContainer>
            <SelectedFrame>
              <PickerContainer hasValue={country !== ""}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Picker
                    selectedValue={country}
                    onValueChange={(itemValue, itemIndex) => {
                      setCountry(itemValue);
                      updateIsAllFieldsFilled();
                    }}
                    onFocus={() => setCountry(1)}
                    style={{
                      width: widthPercentage(170),
                      color: country ? "#000" : "#b0b8c1",
                      textAlign: "right",
                    }}
                  >
                    {country == "" && <Picker.Item label="나라" value="" />}
                    <Picker.Item label="한국" value="KRW" />
                    <Picker.Item label="미국" value="USA" />
                    <Picker.Item label="일본" value="JPY" />
                    <Picker.Item label="유럽" value="EUR" />
                  </Picker>
                </View>
              </PickerContainer>
              <TravelCountryTextinput
                placeholder="도시 (선택)"
                placeholderTextColor="#b0b8c1"
                value={city}
                onChangeText={handleTravelCountryOptionChange}
                maxLength={MAX_TITLE_LENGTH}
                hasValue={city !== ""}
              />
            </SelectedFrame>
          </TravelTitleContainer>
          <TravelTitleContainer>
            <TitleContainer>
              <TravelTitle>여행기간</TravelTitle>
            </TitleContainer>
            <TravelDateComponent
              startDate={startDate}
              setStartDate={handleStartDateChange}
              endDate={endDate}
              setEndDate={handleEndDateChange}
            />
          </TravelTitleContainer>
        </BodyMain>
      </Body>
      <Footer>
        <NextButton
          style={{ backgroundColor: isAllFieldsFilled ? "#55acee" : "#f2f4f6" }}
          onPress={handleNextButtonPress}
        >
          <NextButtonText>다음</NextButtonText>
        </NextButton>
      </Footer>
    </Root>
  );
};

const Header = styled.View`
  width: ${phoneWidth}px;
  height: ${heightPercentage(50)}px;
  justify-content: center;
  background-color: white;
`;
const HeaderImage = styled.Image`
  margin-left: ${widthPercentage(12)}px;
  width: ${widthPercentage(24)}px;
  height: ${heightPercentage(24)}px;
`;
export default TravelScheduleEditPage;

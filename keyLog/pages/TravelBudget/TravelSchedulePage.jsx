import styled from "styled-components/native";
import { TouchableOpacity, Text, View } from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import CloseButton from "../../assets/travelBudget/CloseButton.png";
import SelectButton from "../../assets/travelBudget/SelectButton.png";
import SelectButtonBefore from "../../assets/travelBudget/SelectButtonBefore.png";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import DeleteHeader from "../../components/Header/DeleteHeader";
import TravelDateComponent from "../../components/TravelBudgetPageComponents/TravelDateComponent";
import { Picker } from "@react-native-picker/picker";

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
  margin-bottom: ${heightPercentage(25)}px;
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

const TravelSchedulePage = ({ navigation }) => {
  const [travelTitle, setTravelTitle] = useState("");
  const [travelCountry, setTravelCountry] = useState("");
  const [travelCountryOption, setTravelCountryOption] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [isTravelCountryClick, setIsTravelCountryClick] = useState(false);
  const updateIsAllFieldsFilled = () => {
    const isStartDateSelected = startDate !== null;
    const isEndDateSelected = endDate !== null;
    const isTravelCountryOptionSelected = travelCountryOption !== "";

    setIsAllFieldsFilled(
      (travelTitle !== "" &&
        travelCountry !== "" &&
        isStartDateSelected &&
        isEndDateSelected) ||
        (isTravelCountryOptionSelected &&
          isStartDateSelected &&
          isEndDateSelected)
    );
  };

  const handleTravelTitleChange = (text) => {
    if (text.length <= MAX_TITLE_LENGTH) {
      setTravelTitle(text);
      updateIsAllFieldsFilled();
    }
  };

  const handleTravelCountryChange = (text) => {
    setTravelCountry(text);
    updateIsAllFieldsFilled();
  };

  const handleTravelCountryOptionChange = (text) => {
    if (text.length <= MAX_COUNTRY_LENGTH) {
      setTravelCountryOption(text);
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

  useEffect(() => {
    updateIsAllFieldsFilled();
  }, [travelTitle, travelCountry, travelCountryOption, startDate, endDate]);

  const handleNextButtonPress = () => {

    if (isAllFieldsFilled) {
      navigation.navigate("TravelBudgetPlanPage", {
        travelCountry,travelTitle,travelCountryOption,startDate,endDate
      });
    }
    // else {

    // }
  };

  return (
    <Root>
      <DeleteHeader navigation={navigation} to="TravelBudgetPage" />
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
                {travelTitle.length} / {MAX_TITLE_LENGTH}
              </TextSize>
            </TitleContainer>
            <TravelTextinput
              placeholder="이름없는 여행1"
              placeholderTextColor="#b0b8c1"
              value={travelTitle}
              onChangeText={handleTravelTitleChange}
              maxLength={MAX_TITLE_LENGTH}
              hasValue={travelTitle !== ""}
            />
          </TravelTitleContainer>
          <TravelTitleContainer>
            <TitleContainer>
              <TravelTitle>여행지</TravelTitle>
              <TextSize>
                {travelCountryOption.length} / {MAX_TITLE_LENGTH}
              </TextSize>
            </TitleContainer>
            <SelectedFrame>
              <PickerContainer hasValue={travelCountry !== ""}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Picker
                    selectedValue={travelCountry}
                    onValueChange={(itemValue, itemIndex) => {
                      setTravelCountry(itemValue);
                      updateIsAllFieldsFilled();
                    }}
                    onFocus={() => setTravelCountry(1)}
                    style={{
                      width: widthPercentage(170),
                      color: travelCountry ? "#000" : "#b0b8c1",
                      textAlign: "right",
                    }}
                  >
                    {travelCountry == "" && (
                      <Picker.Item label="나라" value="" />
                    )}
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
                value={travelCountryOption}
                onChangeText={handleTravelCountryOptionChange}
                maxLength={MAX_TITLE_LENGTH}
                hasValue={travelCountryOption !== ""}
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

export default TravelSchedulePage;

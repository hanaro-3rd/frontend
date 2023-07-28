import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  fontPercentage,
  getStatusBarHeight,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import styled from "styled-components/native";
import CloseButton from "../../assets/travelBudget/CloseButton.png";
import SelectButton from "../../assets/travelBudget/SelectButton.png";
import SelectButtonBefore from "../../assets/travelBudget/SelectButtonBefore.png";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const TravelSchedulePage = () => {
  const navigation = useNavigation();

  const handleNextButtonPress = () => {
    navigation.navigate("TravelBudgetPlanPage");
  };

  const handleGoBackToBudgetPage = () => {
    navigation.goBack();
  };

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("나라");

  const handleDropdownPress = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    setDropdownVisible(false);
  };

  const RootContainer = styled.ScrollView`
    width: 100%;
    height: 844px;
    flex-direction: column;
    align-items: flex-start;
    background-color: #f2f4f6;
  `;

  const HeaderContainer = styled.View`
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    background-color: #fff;
    flex-direction: row;
    padding: ${heightPercentage(13)}px ${widthPercentage(12)}px;
  `;

  const TitleText = styled.Text`
    color: #191f29;
    font-family: "Inter";
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
  `;

  const SubtitleText = styled.Text`
    color: #8b95a1;
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;

  const BodyContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    align-self: stretch;
  `;

  const BodyHeaderContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    background-color: #fff;

    padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  `;

  const ContainerTitleText = styled.Text`
    color: #191f29;
    text-align: center;
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  `;

  const TextSizeText = styled.Text`
    color: #191f29;
    text-align: center;
    font-family: "Inter";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  `;

  const BodyMainContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    align-self: stretch;
    background-color: #fff;
    padding: 20px;
  `;

  const TravelTitleContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  `;

  const TitleContainer = styled.View`
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    flex-direction: row;

    padding: 0px ${widthPercentage(5)}px;
  `;

  const PlaceHolderInput = styled(TextInput)`
    height: 39px;
    color: #191f29;
    font-family: "Inter";
    font-size: 16px;
    font-weight: 400;
  `;

  const PlaceHolderText = styled.Text`
    color: #b0b8c1;
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  `;

  const InputTitleContainer = styled.View`
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    align-self: stretch;
    background-color: #f9fafb;
    flex-direction: row;

    padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
    border-radius: 5px;
  `;

  const TravelPlaceContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  `;

  const SelectTravelCountryContainer = styled.View`
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    flex-direction: row;
  `;

  const InputCountryContainer = styled.View`
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    background-color: #f9fafb;
    flex-direction: row;

    padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
    border-radius: 5px;
  `;

  const SelectButtonContainer = styled.View`
    height: 19px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  `;

  const TravelPeriodContainer = styled.View`
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  `;

  const SelectContainer = styled.View`
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    flex-direction: row;
  `;

  const StartSelectContainer = styled.View`
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    align-self: stretch;
    background-color: #f9fafb;
    flex-direction: row;

    padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
    border-radius: 5px;
  `;

  const EndSelectContainer = styled.View`
    justify-content: flex-end;
    align-items: center;
    gap: 15px;
    flex: 1 0 0;
    background-color: #f9fafb;
    flex-direction: row;

    padding: ${heightPercentage(10)}px ${widthPercentage(15)}px;
    border-radius: 5px;
  `;

  const ButtonText = styled.Text`
    color: #fff;
    font-family: "Inter";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
  `;

  const FooterContainer = styled.View`
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    align-self: stretch;
    background-color: #fff;

    padding: ${heightPercentage(15)}px ${widthPercentage(20)}px;
  `;

  const SubmitButton = styled.TouchableOpacity`
    height: 55px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    background-color: #f2f4f6;
    flex-direction: row;
    padding: 10px;
    border-radius: 10px;
  `;

  return (
    <RootContainer>
      <HeaderContainer>
        <TouchableOpacity onPress={handleGoBackToBudgetPage}>
          <Image source={CloseButton} />
        </TouchableOpacity>
      </HeaderContainer>
      <BodyContainer>
        <BodyHeaderContainer>
          <TitleText>계획 작성</TitleText>
          <SubtitleText>계획중인 여행의 정보를 작성해주세요.</SubtitleText>
        </BodyHeaderContainer>
        <BodyMainContainer>
          <TravelTitleContainer>
            <TitleContainer>
              <ContainerTitleText>여행 제목</ContainerTitleText>
              <TextSizeText>0 / 20</TextSizeText>
            </TitleContainer>
            <InputTitleContainer>
              <PlaceHolderInput
                placeholder="이름없는 여행1"
                placeholderTextColor="#B0B8C1"
              />
            </InputTitleContainer>
          </TravelTitleContainer>
          <TravelPlaceContainer>
            <TitleContainer>
              <ContainerTitleText>여행지</ContainerTitleText>
              <TextSizeText>0 / 10</TextSizeText>
            </TitleContainer>
            <SelectTravelCountryContainer>
              <InputCountryContainer>
                <TouchableOpacity onPress={handleDropdownPress}>
                  <PlaceHolderText>{selectedValue}</PlaceHolderText>
                </TouchableOpacity>
                <Modal visible={isDropdownVisible} animationType="slide">
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleOptionSelect("대한민국")}
                    >
                      <Text>대한민국</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleOptionSelect("미국")}
                    >
                      <Text>미국</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleOptionSelect("일본")}
                    >
                      <Text>일본</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </InputCountryContainer>
              <InputCountryContainer>
                <PlaceHolderInput
                  placeholder="도시 (선택)"
                  placeholderTextColor="#B0B8C1"
                />
              </InputCountryContainer>
            </SelectTravelCountryContainer>
          </TravelPlaceContainer>
          <TravelPeriodContainer>
            <TitleContainer>
              <ContainerTitleText>여행 기간</ContainerTitleText>
            </TitleContainer>
            <SelectContainer>
              <StartSelectContainer>
                <SelectButtonContainer>
                  <Image source={SelectButtonBefore} />
                </SelectButtonContainer>
              </StartSelectContainer>
              <EndSelectContainer>
                <SelectButtonContainer>
                  <Image source={SelectButtonBefore} />
                </SelectButtonContainer>
              </EndSelectContainer>
            </SelectContainer>
          </TravelPeriodContainer>
        </BodyMainContainer>
        <FooterContainer>
          <SubmitButton onPress={handleNextButtonPress}>
            <ButtonText>다음</ButtonText>
          </SubmitButton>
        </FooterContainer>
      </BodyContainer>
    </RootContainer>
  );
};

export default TravelSchedulePage;

//   return (
//     <ScrollView contentContainerStyle={styles.root}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={handleGoBackToBudgetPage}>
//           <Image source={CloseButton} />
//         </TouchableOpacity>
//       </View>
//       <View style={styles.body}>
//         <View style={styles.bodyHeader}>
//           <Text style={styles.title}>계획 작성</Text>
//           <Text style={styles.subtitle}>
//             계획중인 여행의 정보를 작성해주세요.
//           </Text>
//         </View>
//         <View style={styles.bodyMain}>
//           <View style={styles.travelTitleContainer}>
//             <View style={styles.titleContainer}>
//               <Text style={styles.containerTitle}>여행 제목</Text>
//               <Text style={styles.textSize}>0 / 20</Text>
//             </View>
//             <View style={styles.inputTitle}>
//               <TextInput
//                 style={styles.placeHolderInput}
//                 placeholder="이름없는 여행1"
//                 placeholderTextColor="#B0B8C1"
//               />
//             </View>
//           </View>
//           <View style={styles.travelPlaceContainer}>
//             <View style={styles.titleContainer}>
//               <Text style={styles.containerTitle}>여행지</Text>
//               <Text style={styles.textSize}>0 / 10</Text>
//             </View>
//             <View style={styles.selectTravelCountry}>
//               {/* <View style={styles.inputCountry}>
//                 <Text style={styles.placeHolder}>나라</Text>
//                 <View style={styles.selectButton}>
//                   <Image source={SelectButtonBefore} />
//                 </View>
//               </View> */}
//               <View style={styles.inputCountry}>
//                 <TouchableOpacity onPress={handleDropdownPress}>
//                   <Text>{selectedValue}</Text>
//                 </TouchableOpacity>
//                 <Modal visible={isDropdownVisible} animationType="slide">
//                   <View
//                     style={{
//                       flex: 1,
//                       justifyContent: "center",
//                       alignItems: "center",
//                     }}
//                   >
//                     <TouchableOpacity
//                       onPress={() => handleOptionSelect("대한민국")}
//                     >
//                       <Text>대한민국</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       onPress={() => handleOptionSelect("미국")}
//                     >
//                       <Text>미국</Text>
//                     </TouchableOpacity>
//                     {/* 추가적인 옵션들을 원하는대로 추가할 수 있습니다. */}
//                     <TouchableOpacity
//                       onPress={() => handleOptionSelect("일본")}
//                     >
//                       <Text>일본</Text>
//                     </TouchableOpacity>
//                     {/* 추가적인 옵션들을 원하는대로 추가할 수 있습니다. */}
//                   </View>
//                 </Modal>
//               </View>
//               <View style={styles.inputCountry}>
//                 <TextInput
//                   style={styles.placeHolderInput}
//                   placeholder="도시 (선택)"
//                   placeholderTextColor="#B0B8C1"
//                 />
//               </View>
//             </View>
//           </View>
//           <View style={styles.travelPeriodContainer}>
//             <View style={styles.titleContainer}>
//               <Text style={styles.containerTitle}>여행 기간</Text>
//             </View>
//             <View style={styles.selectContainer}>
//               <View style={styles.startSelect}>
//                 <View style={styles.selectButton}>
//                   <Image source={SelectButtonBefore} />
//                 </View>
//               </View>
//               <View style={styles.endSelect}>
//                 <View style={styles.selectButton}>
//                   <Image source={SelectButtonBefore} />
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.footer}>
//           <TouchableOpacity
//             style={styles.submitButton}
//             onPress={handleNextButtonPress}
//           >
//             <Text style={styles.buttonText}>다음</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default TravelSchedulePage;

// const styles = StyleSheet.create({
//   root: {
//     width: "100%",
//     height: 844,
//     flexDirection: "column",
//     alignItems: "flex-start",
//     backgroundColor: "#F2F4F6",
//   },
//   header: {
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//     backgroundColor: "#FFF",
//     flexDirection: "row",
//     paddingVertical: 13,
//     paddingHorizontal: 12,
//   },
//   title: {
//     color: "#191F29",
//     fontFamily: "Inter",
//     fontSize: 23,
//     fontStyle: "normal",
//     fontWeight: "700",
//   },
//   subtitle: {
//     color: "#8B95A1",
//     fontFamily: "Inter",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: "400",
//   },
//   body: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     flexGrow: 1,
//     flexShrink: 0,
//     flexBasis: 0,
//     alignSelf: "stretch",
//   },
//   bodyHeader: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//     backgroundColor: "#FFF",
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//   },
//   containerTitle: {
//     color: "#191F29",
//     textAlign: "center",
//     fontFamily: "Inter",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: "700",
//   },
//   textSize: {
//     color: "#191F29",
//     textAlign: "center",
//     fontFamily: "Inter",
//     fontSize: 12,
//     fontStyle: "normal",
//     fontWeight: "400",
//   },
//   bodyMain: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     gap: 10,
//     flexGrow: 1,
//     flexShrink: 0,
//     flexBasis: 0,
//     alignSelf: "stretch",
//     backgroundColor: "#FFF",
//     padding: 20,
//   },
//   travelTitleContainer: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//   },
//   titleContainer: {
//     justifyContent: "space-between",
//     alignItems: "flex-end",
//     alignSelf: "stretch",
//     flexDirection: "row",
//     paddingVertical: 0,
//     paddingHorizontal: 5,
//   },
//   placeHolderInput: {
//     height: 39,
//     color: "#191F29",
//     fontFamily: "Inter",
//     fontSize: 16,
//     fontWeight: "400",
//   },
//   placeHolder: {
//     color: "#B0B8C1",
//     fontFamily: "Inter",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: "400",
//   },
//   inputTitle: {
//     justifyContent: "flex-end",
//     alignItems: "center",
//     gap: 15,
//     alignSelf: "stretch",
//     backgroundColor: "#F9FAFB",
//     flexDirection: "row",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   travelPlaceContainer: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//   },
//   selectTravelCountry: {
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//     flexDirection: "row",
//   },
//   inputCountry: {
//     justifyContent: "flex-end",
//     alignItems: "center",
//     gap: 15,
//     flexGrow: 1,
//     flexShrink: 0,
//     flexBasis: 0,
//     backgroundColor: "#F9FAFB",
//     flexDirection: "row",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   selectButton: {
//     height: 19,
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//   },
//   travelPeriodContainer: {
//     flexDirection: "column",
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//   },
//   selectContainer: {
//     alignItems: "flex-start",
//     gap: 10,
//     alignSelf: "stretch",
//     flexDirection: "row",
//   },
//   startSelect: {
//     justifyContent: "flex-end",
//     alignItems: "center",
//     gap: 15,
//     flexGrow: 1,
//     flexShrink: 0,
//     flexBasis: 0,
//     alignSelf: "stretch",
//     backgroundColor: "#F9FAFB",
//     flexDirection: "row",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   endSelect: {
//     justifyContent: "flex-end",
//     alignItems: "center",
//     gap: 15,
//     flexGrow: 1,
//     flexShrink: 0,
//     flexBasis: 0,
//     backgroundColor: "#F9FAFB",
//     flexDirection: "row",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: "#FFF",
//     fontFamily: "Inter",
//     fontSize: 16,
//     fontStyle: "normal",
//     fontWeight: "700",
//   },
//   footer: {
//     flexDirection: "column",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     gap: 20,
//     alignSelf: "stretch",
//     backgroundColor: "#FFF",
//     paddingVertical: 15,
//     paddingHorizontal: 25,
//   },
//   submitButton: {
//     height: 55,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 10,
//     alignSelf: "stretch",
//     backgroundColor: "#F2F4F6",
//     flexDirection: "row",
//     padding: 10,
//     borderRadius: 10,
//   },
// });

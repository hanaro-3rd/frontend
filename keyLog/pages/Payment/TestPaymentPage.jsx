import styled from "styled-components/native";
import {
  Button,
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  ReactNative,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  fontPercentage,
  heightPercentage,
  phoneHeight,
  phoneWidth,
  widthPercentage,
} from "../../utils/ResponseSize";
import React, { useEffect, useState, useRef } from "react";
import DeleteHeader from "../../components/Header/DeleteHeader";
import { Picker } from "@react-native-picker/picker";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { postPayment, getMyKeymoney } from "../../api/api";

const Root = styled.SafeAreaView`
  width: ${phoneWidth}px;
  height: ${phoneHeight}px;
  justify-content: space-between;
  flex: 1;
  background-color: ${(props) =>
    props.showModal ? "rgba(0, 0, 0, 0.5)" : "transparent"};
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

const PaymentTitleContainer = styled.KeyboardAvoidingView`
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
const PaymentTitle = styled.Text`
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

const StoreTextinput = styled.Text`
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
const MemoTextinput = styled.TextInput`
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
const CostTextinput = styled.TextInput`
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

const Footer = styled.View`
  width: 100%;
  display: flex;
  padding: ${heightPercentage(15)}px ${widthPercentage(25)}px;
  height: ${heightPercentage(85)}px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  align-self: stretch;
  position: relative;
  bottom: 80px;
`;
const NextButton = styled.TouchableOpacity`
  display: flex;
  width: ${widthPercentage(340)}px;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: #55acee;
`;

const DisabledButton = styled.View`
  display: flex;
  width: ${widthPercentage(340)}px;
  height: ${heightPercentage(55)}px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  background-color: #f2f4f6;
`;
const NextButtonText = styled.Text`
  color: #fff;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;

const PickerContainer = styled.View`
  /* width: ${widthPercentage(350)}px; */
  height: ${heightPercentage(39)}px;
  background-color: ${(props) => (props.hasValue ? "white;" : "#f9fafb")};
  border: 1px solid ${(props) => (props.hasValue ? "#000" : "#f9fafb")};
  border-radius: 5px;
`;

const MAX_MONEY_LENGTH = 10;

const TestPaymentPage = ({ navigation, route }) => {
  const [storeTitle, setStoreTitle] = useState("");
  const [memoText, setMemoText] = useState("");
  const [category, setCategory] = useState("");
  const [moneyText, setMoneyText] = useState("");
  const [unit, setUnit] = useState("");
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [markerInformation, setMarkerInformation] = useState(false);
  const [units, setUnits] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (route?.params) setMarkerInformation(route.params);
  }, [route]);
  console.log("setMarkerInfo", markerInformation);

  const queryClient = useQueryClient();

  const postPayMutation = useMutation(postPayment, {
    onSuccess: (response) => {
      console.log("response들어감?", response.data);

      navigation.navigate("PaymentSuccessPage", {
        storeTitle: response.data.result.store,
        category: response.data.result.category,
        moneyText: response.data.result.price,
        unit: unit,
        memoText: response.data.result.memo,
      });
    },
    onError: (error) => {
      console.log(error);
      navigation.navigate("PaymentFailPage");
    },
  });

  const { data: keyMoneyData } = useQuery(
    "keymoney",
    async () => getMyKeymoney(),
    {
      onSuccess: (response) => {
        console.log(response.data.result);

        const units = response.data.result;
        console.log("외환 계좌" + units);
        setUnits(units);

        if (units.length === 0) {
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false);
            navigation.navigate("ExchangePage");
          }, 1000);
        }

        // if (units.length === 0) {
        //   Alert.alert("키머니 계좌가 없어요", "환전하기 페이지로 이동합니다.", {
        //     text: "1초후 이동",
        //     onPress: () => {
        //       setTimeout(() => {
        //         setShowModal(false);
        //         navigation.navigate("ExchangePage");
        //       }, 1000);
        //     },
        //   });
        // }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const handleSubmitPay = () => {
    console.log(
      "들어가긴하니",
      markerInformation.address,
      category,
      markerInformation.lat,
      markerInformation.lng,
      memoText,
      moneyText,
      markerInformation.store,
      unit
    );
    setStoreTitle(markerInformation.store);
    postPayMutation.mutate({
      address: markerInformation.address,
      category: category,
      lat: markerInformation.lat,
      lng: markerInformation.lng,
      memo: memoText,
      price: moneyText,
      store: markerInformation.store,
      unit: unit,
    });
  };

  const updateIsAllFieldsFilled = () => {
    const isMemoSelected = memoText !== "";

    setIsAllFieldsFilled(
      markerInformation !== "" &&
        category !== "" &&
        moneyText !== "" &&
        unit !== "" &&
        isMemoSelected !== ""
    );
  };

  const handleStoreTitleChange = (text) => {
    setStoreTitle(text);
    updateIsAllFieldsFilled();
  };

  const handleMemoChange = (text) => {
    setMemoText(text);
    updateIsAllFieldsFilled();
  };

  const handleMoneyChange = (text) => {
    if (text.length <= MAX_MONEY_LENGTH) {
      setMoneyText(text);
      updateIsAllFieldsFilled();
    }
  };

  useEffect(() => {
    updateIsAllFieldsFilled();
  }, [storeTitle, memoText, category, moneyText]);

  const scrollRef = useRef();

  _scrollToInput = (reactNode) => {
    scrollRef.current.scrollToFocusedInput(reactNode);
  };
  const [balance, setBalance] = useState("금액 입력");
  console.log(unit);
  return (
    <KeyboardAwareScrollView ref={scrollRef}>
      <Root showModal={showModal}>
        <DeleteHeader navigation={navigation} to="MainPage" />
        <Body>
          <BodyHeader>
            <Title>결제하기</Title>
            <SubTitle>테스트용 결제를 하는 페이지입니다.</SubTitle>
          </BodyHeader>
          <BodyMain>
            <PaymentTitleContainer>
              <TitleContainer>
                <PaymentTitle>가게</PaymentTitle>
                {/* <TextSize>
                {storeTitle.length} / {MAX_TITLE_LENGTH}
              </TextSize> */}
              </TitleContainer>
              {markerInformation ? (
                <StoreTextinput
                  value={storeTitle}
                  onChangeText={handleStoreTitleChange}
                  hasValue={markerInformation.store !== ""}
                  onPress={() => navigation.navigate("TestPaymentSearchPage")}
                >
                  {markerInformation.store}
                </StoreTextinput>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate("TestPaymentSearchPage")}
                >
                  <StoreTextinput
                    value={storeTitle}
                    onChangeText={handleStoreTitleChange}
                    hasValue={storeTitle !== ""}
                  />
                </TouchableOpacity>
              )}
            </PaymentTitleContainer>
            <PaymentTitleContainer>
              <TitleContainer>
                <PaymentTitle>카테고리</PaymentTitle>
              </TitleContainer>
              <PickerContainer hasValue={category !== ""}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                  }}
                >
                  <Picker
                    selectedValue={category}
                    onValueChange={(itemValue, itemIndex) => {
                      setCategory(itemValue);
                      updateIsAllFieldsFilled();
                    }}
                    style={{
<<<<<<< HEAD
                      width: widthPercentage(145),
                      color: unit ? "#000" : "#b0b8c1",
=======
                      width: widthPercentage(350),
                      color: category ? "#000" : "#b0b8c1",
>>>>>>> e3f5112d031391b50088f6dd2d76bcf4f4f406ad
                      textAlign: "right",
                    }}
                  >
                    {category == "" && <Picker.Item label="선택" value="" />}
                    <Picker.Item label="식비" value="식비" />
                    <Picker.Item label="교통" value="교통" />
                    <Picker.Item label="숙박" value="숙박" />
                    <Picker.Item label="쇼핑 · 편의점 · 마트" value="쇼핑" />
                    <Picker.Item label="문화 · 여가" value="문화" />
                    <Picker.Item label="기타" value="Etc" />
                  </Picker>
                </View>
              </PickerContainer>
            </PaymentTitleContainer>
            <PaymentTitleContainer>
              <TitleContainer>
                <PaymentTitle>금액</PaymentTitle>
                <TextSize>
                  {moneyText.length} / {MAX_MONEY_LENGTH}
                </TextSize>
              </TitleContainer>
              <SelectedFrame>
                <PickerContainer hasValue={unit !== ""}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                    }}
                  >
                    <Picker
                      selectedValue={unit}
                      onValueChange={(itemValue, itemIndex) => {
                        setUnit(itemValue);
                        console.log(itemValue, "itemValue");
                        if (itemValue == "USD") {
                          for (x of units) {
                            console.log("ss");
                            if (x.unit == "USD")
                              setBalance("잔액: " + String(x.balance) + "USD");
                          }
                        } else if (itemValue == "JPY") {
                          for (x of units) {
                            if (x.unit == "JPY")
                              setBalance("잔액: " + String(x.balance) + "JPY");
                          }
                        } else {
                          for (x of units) {
                            if (x.unit == "EUR")
                              setBalance("잔액: " + String(x.balance) + "EUR");
                          }
                        }
                        updateIsAllFieldsFilled();
                      }}
                      onFocus={() => {}}
                      style={{
                        width: widthPercentage(110),
                        color: unit ? "#000" : "#b0b8c1",
                        textAlign: "right",
                      }}
                    >
                      {unit == "" && <Picker.Item label="선택" value="" />}
                      {units.length > 0 &&
                        units.map((e, idx) => {
                          return (
                            <Picker.Item
                              label={e.unit}
                              value={e.unit}
                              key={idx}
                            />
                          );
                        })}
                      {/* {units.includes("KRW") && (
                      <Picker.Item label="KRW" value="KRW" />
                    )}
                    {units.includes("USD") && (
                      <Picker.Item label="USD" value="USD" />
                    )}
                    {units.includes("JPY") && (
                      <Picker.Item label="JPY" value="JPY" />
                    )}
                    {units.includes("EUR") && (
                      <Picker.Item label="EUR" value="EUR" />
                    )} */}
                    </Picker>
                  </View>
                </PickerContainer>
                <CostTextinput
                  placeholder={balance}
                  keyboardType="numeric"
                  placeholderTextColor="#b0b8c1"
                  value={moneyText}
                  onChangeText={handleMoneyChange}
                  maxLength={MAX_MONEY_LENGTH}
                  hasValue={moneyText !== ""}
                />
              </SelectedFrame>
            </PaymentTitleContainer>
            <PaymentTitleContainer>
              <TitleContainer>
                <PaymentTitle>메모</PaymentTitle>
              </TitleContainer>
              <MemoTextinput
                value={memoText}
                onChangeText={handleMemoChange}
                hasValue={memoText !== ""}
                onFocus={(event) => {
                  this._scrollToInput(event.target);
                }}
              />
            </PaymentTitleContainer>
          </BodyMain>
          <Footer>
            {isAllFieldsFilled ? (
              <NextButton
                onPress={() => {
                  handleSubmitPay();
                }}
              >
                <NextButtonText>결제하기</NextButtonText>
              </NextButton>
            ) : (
              <DisabledButton>
                <NextButtonText>결제하기</NextButtonText>
              </DisabledButton>
            )}
          </Footer>
        </Body>
        {showModal && (
          <Modal visible={showModal} animationType="slide">
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: showModal
                  ? "rgba(0, 0, 0, 0.5)"
                  : "transparent",
              }}
            >
              <View
                style={{
                  width: 300,
                  height: 200,
                  backgroundColor: "white",
                  padding: 20,
                  borderWidth: 1,
                  borderColor: "#e5e8eb",
                  borderRadius: 20,
                  elevation: 7,
                }}
              >
                <ModalTextContainer
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ModalText>연결된 외환 계좌가 없습니다.</ModalText>
                </ModalTextContainer>
              </View>
            </View>
          </Modal>
        )}
      </Root>
    </KeyboardAwareScrollView>
  );
};

const ModalTextContainer = styled.View`
  align-items: center;
`;

const ModalText = styled.Text`
  color: #6b7684;
  font-family: Inter;
  font-size: ${fontPercentage(16)}px;
  font-style: normal;
  font-weight: 700;
`;
export default TestPaymentPage;

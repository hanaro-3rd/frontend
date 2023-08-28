import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useMutation, useQueryClient } from "react-query";
import { postVerification } from "../../api/api";
import InfoText from "../../components/SignUpPageComponents/InfoText";
import InputField from "../../components/SignUpPageComponents/InputField";
import ModalContent from "../../components/SignUpPageComponents/ModalContent";
import { useDebouncedEffect } from "../../hooks/useDebouncedEffect";
import phoneNumberIcon from "../../Images/phoneNumber.png";
import {
  isValidName,
  isValidPersonalNumber,
} from "../../utils/CheckValidation";
import {
  checkKoreanName,
  checkNumberSet,
  checkPersonalNumberChange,
  checkPhoneChange,
  checkResidentNumber,
} from "../../utils/Regexp";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "../../utils/ResponseSize";

const SignUpPage = ({ navigation,route }) => {
  const queryClient = useQueryClient();
  const isFindPassword = route?.params?.isFindPassword
  console.log(isFindPassword)
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [name, setName] = useState("");
  const [turnName,setTurnName] = useState(false)
  const [oneNumber, setOneNumber] = useState("");
  const [isOneNumberValid, setIsOneNumberValid] = useState("");

  const [personalNumber, setPersonalNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isNameValid, setIsNameValid] = useState(true);
  const [isNameValidSuccess, setIsNameValidSuccess] = useState(false);

  const [isPersonalNumberValidSuccess, setIsPersonalNumberValidSuccess] =
    useState(false);
  const [isPersonalNumberValid, setIsPersonalNumberValid] = useState(true);

  const [isPhoneNumberValidSuccess, setIsPhoneNumberValidSucess] =
    useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const nameInputRef = useRef(null);
  const phoneNumberInputRef = useRef(null);
  const personalNumberInputRef = useRef(null);

  const validateName = (inputName) => {
    const hasIncompleteCharacters = /[ㄱ-ㅎㅏ-ㅣ]/.test(inputName);
    setIsNameValid(!hasIncompleteCharacters);
  };

  const handleNameBlur = () => {
    validateName(name);
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const infoTexts = [
    // "주말 및 공휴일은 수수료가 붙습니다.. 어쩌구",
    // "주말 및 공휴일은 수수료가 붙습니다.. 어쩌구",
    // "주말 및 공휴일은 수수료가 붙습니다.. 어쩌구",
  ];

  const handlePersonalNumberChange = (text) => {
    setPersonalNumber(text);
  };

  const handleDebouncedPersonalNumberChange = () => {
    if (checkResidentNumber(personalNumber) && checkNumberSet(oneNumber)) {
      setIsPersonalNumberValid(true);
      setIsPersonalNumberValidSuccess(true);
    } else {
      if (personalNumber == "" && oneNumber == "") return;
      setIsPersonalNumberValid(false);
      setIsPersonalNumberValidSuccess(false);
    }
  };

  const handleNumberChange = (text) => {
    setOneNumber(text);
  };
  // const handleDebouncedNumberChange = () => {
  //   const match = checkNumberSet(oneNumber);
  //   if (match && oneNumber != "") {
  //     setOneNumber(true);
  //   }
  // };
  useDebouncedEffect(handleDebouncedPersonalNumberChange, 1000, [
    personalNumber,
    oneNumber,
  ]);

  const handlePhoneChange = (number) => {
    setPhoneNumber(number);
  };

  const handleDebouncedPhoneChange = () => {
    const match = checkPhoneChange(phoneNumber);
    if (match && phoneNumber != "") {
      setIsPhoneNumberValid(true);
      setIsPhoneNumberValidSucess(true);
    } else {
      if (phoneNumber == "") return;
      setIsPhoneNumberValid(false);
      setIsPhoneNumberValidSucess(false);
    }
  };

  useDebouncedEffect(handleDebouncedPhoneChange, 1000, [phoneNumber]);
  //이름
  const handleNameChange = (text) => {
    setName(text);
  };

  const handleDebouncedNameChange = () => {
    if (checkKoreanName(name)) {
      setTurnName(true)
      setIsNameValid(true);
      setIsNameValidSuccess(true);
    } else {
      if (turnName == false) return;
      setIsNameValid(false);
      setIsNameValidSuccess(false);
    }
  };
  useDebouncedEffect(handleDebouncedNameChange, 1000, [name]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const postVerificationMutation = useMutation(postVerification, {
    onSuccess: (data) => {
      // INvalidates cache and refetch
      queryClient.invalidateQueries("verification");
      console.log("Response Data:", data);
    },
  });

  const handleVerification = (e) => {
    e.preventDefault();
    postVerificationMutation.mutate({ phonenum: phoneNumber });
    setModalVisible(true);
  };
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  return (
    <ScrollView
      contentContainerStyle={styles.root}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyHeader}>
          <Text style={styles.title}>휴대폰 본인인증</Text>
          <Text style={styles.subtitle}>
            회원여부 확인 및 가입을 진행합니다.
          </Text>
        </View>
        <View style={styles.bodyMain}>
          <InputField
            ref={nameInputRef}
            placeholder="이름"
            value={name}
            onChangeText={handleNameChange}
            onBlur={handleNameBlur}
            handlePress={() => nameInputRef.current?.focus()}
            hasError={!isNameValid}
            hasSuccess={isNameValidSuccess}
            maxLength={5}
            keyboardType= "default"
          />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              height: heightPercentage(65),
            }}
          >
            <TouchableOpacity
              style={[
                !isPersonalNumberValid && styles.errorInputField,
                isPersonalNumberValidSuccess && styles.successInputField,
              ]}
            >
              <TextInput
                style={{
                  width: "100%",
                  height: heightPercentage(65),
                  backgroundColor: "#F9FAFB",
                  paddingHorizontal: widthPercentage(20),
                  fontSize: fontPercentage(16),
                  fontWeight: "700",
                  borderRadius: 10,
                }}
                value={personalNumber}
                onChangeText={handlePersonalNumberChange}
                placeholder="주민번호6자리"
                placeholderTextColor="#B0B8C1"
                maxLength={6}
                keyboardType="numeric"
                ref={firstTextInputRef}
                onSubmitEditing={() => secondTextInputRef.current.focus()}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 50, fontWeight: 200, marginBottom: 6 }}>
              -
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "45%",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={[
                  !isPersonalNumberValid && styles.errorInputField,
                  isPersonalNumberValidSuccess && styles.successInputField,
                ]}
              >
                <TextInput
                  style={{
                    width: "100%",
                    height: heightPercentage(65),
                    backgroundColor: "#F9FAFB",
                    borderRadius: 10,

                    fontSize: fontPercentage(16),
                    fontWeight: "700",
                  }}
                  ref={secondTextInputRef}
                  placeholderTextColor="#B0B8C1"
                  value={oneNumber}
                  onChangeText={handleNumberChange}
                  maxLength={1}
                  keyboardType="numeric"
                />
              </TouchableOpacity>

              {/* <Image source={phoneNumberIcon}/> */}
              <Text style={{ fontSize: 25, fontWeight: 400, marginTop: 9 }}>
                *
              </Text>
              <Text style={{ fontSize: 25, fontWeight: 700, marginTop: 9 }}>
                *
              </Text>
              <Text style={{ fontSize: 25, fontWeight: 700, marginTop: 9 }}>
                *
              </Text>
              <Text style={{ fontSize: 25, fontWeight: 700, marginTop: 9 }}>
                *
              </Text>
              <Text style={{ fontSize: 25, fontWeight: 700, marginTop: 9 }}>
                *
              </Text>
              <Text style={{ fontSize: 25, fontWeight: 700, marginTop: 9 }}>
                *
              </Text>
            </View>
          </View>
          {!isPersonalNumberValid ? (
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  textAlign: "left",
                  color: "#E90061",
                  fontSize: fontPercentage(12),
                  marginBottom:heightPercentage(15)
                }}
              >
                입력하신 정보를 확인해주세요.
              </Text>
            </View>
          ) : (
            <View style={{ width: "100%" }}>
              <Text
                style={{
                  textAlign: "left",
                  color: "red",
                  fontSize: fontPercentage(12),
                }}
              ></Text>
            </View>
          )}
          <InputField
            ref={phoneNumberInputRef}
            placeholder="휴대폰번호"
            value={phoneNumber}
            onChangeText={handlePhoneChange}
            handlePress={() => phoneNumberInputRef.current?.focus()}
            hasError={!isPhoneNumberValid}
            hasSuccess={isPhoneNumberValidSuccess}
            maxLength={11}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.bodyFooter}>
          {!isKeyboardVisible && (
            <View style={styles.informationContainer}>
              <InfoText texts={infoTexts} />
            </View>
          )}
          <TouchableOpacity
            style={[
              styles.submitButton,
              (isNameValidSuccess==false ||
                isPersonalNumberValidSuccess==false ||
                isPhoneNumberValidSuccess==false )&&
                styles.disabledButton,
            ]}
            onPress={(e) => handleVerification(e)}
            disabled={
              isNameValidSuccess==false || isPersonalNumberValidSuccess==false || isPhoneNumberValidSuccess==false
            }
          >
            <Text style={styles.buttonText}>인증 요청</Text>
          </TouchableOpacity>
        </View>
        <ModalContent
          modalVisible={modalVisible}
          toggleModal={toggleModal}
          phoneNumber={phoneNumber}
          personalNumber={personalNumber + oneNumber}
          name={name}
          setModalVisible={setModalVisible}
          navigation={navigation}
          isFindPassword={isFindPassword}
          setPersonalNumber={setPersonalNumber}
          setPhoneNumber={setPhoneNumber}
          setName={setName}
          setOneNumber={setOneNumber}
        />
      </View>
    </ScrollView>
  );
};

const commonTextStyle = {
  fontFamily: "Inter",
  fontStyle: "normal",
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#F2F4F6",
  },
  header: {
    alignItems: "flex-start",
    flexShrink: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    flexDirection: "row",
    paddingVertical: heightPercentage(13),
  },
  title: {
    ...commonTextStyle,
    color: "#191F29",
    fontSize: fontPercentage(23),
    fontWeight: "700",
  },
  subtitle: {
    ...commonTextStyle,
    color: "#8B95A1",
    fontSize: fontPercentage(16),
    fontWeight: "400",
  },
  body: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
  },
  bodyHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(16),
    paddingHorizontal: widthPercentage(20),
  },
  bodyMain: {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  bodyFooter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: heightPercentage(10),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
    paddingHorizontal: widthPercentage(25),
  },
  informationContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(5),
    alignSelf: "stretch",
  },
  buttonText: {
    ...commonTextStyle,
    color: "white",
    fontSize: fontPercentage(16),
    fontWeight: "700",
  },
  submitButton: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#55ACEE",
    flexDirection: "row",
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: "#F2F4F6",
  },
  errorInputField: {
    borderColor: "#E90061",
    borderWidth: 1,
    borderRadius: 10,
  },
  successInputField: {
    borderColor: "#55acee",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default SignUpPage;

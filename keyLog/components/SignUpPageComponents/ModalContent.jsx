import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { useMutation, useQueryClient } from "react-query";
import { postVerification, postVerificationAuth } from "../../api/api";
import CloseButton from "../../assets/SignUp/CloseButton.svg";
import {
  fontPercentage,
  heightPercentage,
  widthPercentage,
} from "../../utils/ResponseSize";

const ModalContent = ({
  modalVisible,
  toggleModal,
  phoneNumber,
  personalNumber,
  name,
  setModalVisible,
  isFindPassword,
  setOneNumber,
  setName,
  setPhoneNumber,
  setPersonalNumber,
}) => {
  const [errorCode, setErrorCode] = useState();
  const queryClient = useQueryClient();
  const postVerificationAuthMutation = useMutation(postVerificationAuth, {
    onSuccess: (response) => {
      setInputText("")
      setOneNumber("")
      setName("")
      setPersonalNumber("")
      setPhoneNumber("")
      if (response.data.result.isExistUser) {
        if (isFindPassword == true) {
          console.log("isFindPassword true");
          navigation.navigate("FindPasswordPage", {
            phoneNumber,
            personalNumber, 
            name,
          });
        } else {
          console.log(response.data.result.userResponseDto);
          navigation.navigate(
            "AlreadySignUpPage",
            response.data.result.userResponseDto
          );
        }
      } else {
        queryClient.invalidateQueries("verificationAuth");
        setModalVisible(false);
        goToLoginPasswordPage();
      }
    },
    onError: (error) => {
      console.log(error.response);
      console.log(error + "verificationAuth");
      setErrorCode(error.response.data.errorMessage);
    },
  });

  const handleVerificationAuth = async (e) => {
    e.preventDefault();
    postVerificationAuthMutation.mutate({
      code: inputText,
      phonenum: phoneNumber,
    });
  };
  const handleTogglemodal = () => {
    setInputText("");
    toggleModal();
  };
  const navigation = useNavigation();
  const goToLoginPasswordPage = () => {
    navigation.navigate("LoginPasswordPage", {
      phoneNumber,
      personalNumber,
      name,
    });
  };

  const [inputText, setInputText] = useState("");
  const [remainTime, setRemainTime] = useState(180);
  const [extended, setExtended] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const inputRef = useRef(null);
  // TODO: acceess,refresh 둘 다 발급
  useEffect(() => {
    if (!modalVisible) {
      setRemainTime(180);
      setExtended(false);
    }
  }, [modalVisible]);

  useEffect(() => {
    if (!modalVisible) return;

    const countdown = setInterval(() => {
      if (remainTime > 0) {
        setRemainTime(remainTime - 1);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [modalVisible, remainTime]);

  useEffect(() => {
    if (remainTime > 0) {
      setButtonEnabled(true);
    } else {
      setButtonEnabled(false);
    }
  }, [remainTime]);

  const displayTime = () => {
    const minutes = Math.floor(remainTime / 60);
    const seconds = remainTime % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const extendTime = () => {
    if (!extended) {
      setRemainTime(180);
      setExtended(true);
    } else {
      console.log("시간 연장은 최초 1회만 가능합니다.");
    }
  };

  const postVerificationMutation = useMutation(postVerification, {
    onSuccess: (data) => {
      queryClient.invalidateQueries("verification");
      console.log("Response Data:", data);
    },
  });

  const resendCode = (e) => {
    e.preventDefault();
    extendTime();
    postVerificationMutation.mutate({ phonenum: phoneNumber });
  };

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={toggleModal}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropTransitionOutTiming={0}
      backdropOpacity={0.5}
      style={styles.modalContainer}
    >
      <View style={styles.modalContent}>
        <View style={styles.popup}>
          <View style={styles.popupHeader}>
            <View style={styles.popupHeaderRight}>
              <View style={styles.popupTitle}>
                <Text style={styles.title2}>인증번호 입력</Text>
              </View>
              <View style={styles.popupSubtitle}>
                <Text style={styles.subtitle2}>{phoneNumber}</Text>
              </View>
            </View>
            <View style={styles.popupHeaderLeft}>
              <CloseButton onPress={toggleModal} />
              <View style={styles.popupRemainTime}>
                <Text style={styles.remainTime}>{displayTime()}</Text>
                <View style={styles.extendTimeButton}>
                  <TouchableOpacity>
                    <Text style={styles.buttonText2}>남은시간</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.popupMain}>
            <View
              style={styles.input3}
              onStartShouldSetResponder={() => inputRef.current.focus()}
            >
              <TextInput
                ref={inputRef}
                style={[
                  styles.certificationNumber,
                  { color: inputText.length > 0 ? "#000000" : "#B0B8C1" },
                ]}
                value={inputText}
                onChangeText={(text) =>
                  setInputText(text.replace(/[^0-9]/g, ""))
                }
                maxLength={6}
                keyboardType="numeric"
                placeholder="인증번호"
              />
              <TouchableOpacity onPress={resendCode}>
                <View style={styles.resendButton}>
                  <Text style={styles.buttonText3}>재전송</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.errorMessage}>{errorCode}</Text>
          <View style={styles.popupFooter}>
            <TouchableOpacity
              onPress={handleVerificationAuth}
              disabled={!buttonEnabled || inputText.length !== 6}
            >
              <View
                style={[
                  styles.submitButton2,
                  {
                    backgroundColor:
                      buttonEnabled && inputText.length === 6
                        ? "#55ACEE"
                        : "#F2F4F6",
                  },
                ]}
              >
                <Text
                  style={[
                    styles.buttonText4,
                    {
                      color:
                        buttonEnabled && inputText.length === 6
                          ? "#FFFFFF"
                          : "#B0B8C1",
                    },
                  ]}
                >
                  확인
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    margin: 0,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: widthPercentage(20),
    height: heightPercentage(310),
  },
  popup: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: heightPercentage(20),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    backgroundColor: "#FFF",
    padding: widthPercentage(20),
  },
  popupHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  popupHeaderRight: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: heightPercentage(10),
    alignSelf: "stretch",
  },
  popupTitle: {
    alignItems: "center",
    flexDirection: "row",
  },
  subtitle2: {
    color: "#4E5968",
    fontFamily: "Inter",
    fontSize: fontPercentage(12),
    fontStyle: "normal",
    fontWeight: "700",
  },
  popupSubtitle: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  remainTime: {
    color: "#55ACEE",
    fontFamily: "Inter",
    fontSize: fontPercentage(12),
    fontStyle: "normal",
    fontWeight: "700",
  },
  buttonText2: {
    color: "#55ACEE",
    fontFamily: "Inter",
    fontSize: fontPercentage(10),
    fontStyle: "normal",
    fontWeight: "400",
  },
  popupHeaderLeft: {
    flexDirection: "column",
    alignItems: "flex-end",
    gap: heightPercentage(8),
  },
  popupRemainTime: {
    alignItems: "center",
    gap: widthPercentage(5),
    flexDirection: "row",
  },
  extendTimeButton: {
    alignItems: "flex-end",
    borderWidth: 1,
    borderColor: "#55ACEE",
    borderStyle: "solid",
    flexDirection: "row",
    paddingVertical: heightPercentage(3),
    paddingHorizontal: widthPercentage(4),
    borderRadius: 2,
  },
  certificationNumber: {
    color: "#B0B8C1",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  buttonText3: {
    color: "#F9FAFB",
    fontFamily: "Inter",
    fontSize: fontPercentage(14),
    fontStyle: "normal",
    fontWeight: "700",
  },
  popupMain: {
    height: heightPercentage(65),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  input3: {
    width: widthPercentage(350),
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F9FAFB",
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  resendButton: {
    width: widthPercentage(59),
    justifyContent: "space-between",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "#333D4B",
    flexDirection: "row",
    paddingVertical: heightPercentage(7),
    paddingHorizontal: widthPercentage(10),
    borderRadius: 5,
  },
  buttonText4: {
    color: "#B0B8C1",
    fontFamily: "Inter",
    fontSize: fontPercentage(16),
    fontStyle: "normal",
    fontWeight: "700",
  },
  popupFooter: {
    height: heightPercentage(55),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flexDirection: "row",
  },
  submitButton2: {
    width: widthPercentage(350),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#F2F4F6",
    flexDirection: "row",
    padding: widthPercentage(10),
    borderRadius: 10,
  },
  errorMessage: {
    color: "#E90061",
    fontSize: fontPercentage(12),
  },
});

export default ModalContent;

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberPad from "../../components/SignUpPageComponents/NumberPad";
import PasswordSymbol from "../../components/SignUpPageComponents/PasswordSymbol";
import { fontPercentage, heightPercentage } from "../../utils/ResponseSize";
import { useMutation, useQueryClient } from "react-query";
import DeviceInfo from "react-native-device-info";
import {
  patchUpdatePassword,
  postSigninPassword,
  postSignup,
} from "../../api/api";
import { usernameAtom } from "../../recoil/usernameAtom";
import { useRecoilState } from "recoil";
import AsyncStorage from "@react-native-async-storage/async-storage";
const FindPasswordPage = ({ route }) => {
  const navigation = useNavigation();

    const {
      name ,
      phoneNumber ,
      personalNumber ,
    } = route?.params;

 

  console.log("routeParams", route.params);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [alertInconsistencyPassword, setAlertInconsistencyPassword] =
    useState(false);
  const [username, setUsername] = useRecoilState(usernameAtom);
  const [errorCode, setErrorCode] = useState(false);
  const queryClient = useQueryClient();

  const patchUpdateMutation = useMutation(patchUpdatePassword, {
    onSuccess: async (response) => {
      console.log("성공?");
      console.log(response.data);
      setErrorCode(false);
      navigation.navigate("LoginPage");
    },
    onError: (error) => {
      console.log(error.response, "patchError");
      setPassword("");
      setConfirmPassword("");
      setIsPasswordMismatch(false)
   
      setErrorCode(true);
    },
  });

  const handlePostSignup = async () => {
    console.log(name, phoneNumber, password, personalNumber, "뭐지");
    console.log(await DeviceInfo.getUniqueId());
    patchUpdateMutation.mutate({
      name: name,
      phoneNum: phoneNumber,
      newPassword: password,
      registrateNum: personalNumber,
      deviceId: await DeviceInfo.getUniqueId(),
    });
  };
  const handleNumPress = (num) => {
    if (alertInconsistencyPassword) {
      resetPasswordProcess();
      setAlertInconsistencyPassword(false);
    }

    if (isConfirming) {
      if (confirmPassword.length < 6) {
        setConfirmPassword(confirmPassword + num);
      }
    } else {
      if (password.length < 6) {
        setPassword(password + num);
      }
    }
  };

  const handleBackspacePress = () => {
    if (isConfirming) {
      setConfirmPassword(confirmPassword.slice(0, -1));
    } else {
      setPassword(password.slice(0, -1));
    }
  };

  const resetPasswordProcess = () => {
    setConfirmPassword("");
    setPassword("");
    setIsConfirming(false);
    setIsPasswordMismatch(false);

  };

  useEffect(() => {
    if (password === "" && confirmPassword === "") {
      setAlertInconsistencyPassword(true);
    }
  }, [password, confirmPassword]);

  useEffect(() => {
    console.log("password state", password);
    if (password.length === 6 && !isConfirming) {
      setIsConfirming(true);
    }

    console.log(confirmPassword);

    if (confirmPassword.length === 6) {
      if (password === confirmPassword) {
        console.log("Passwords match");
        setIsPasswordMismatch(false);
        handlePostSignup();
      } else {
        console.log("Passwords do not match");
  
        setIsConfirming(false);
        setIsPasswordMismatch(true);
        setPassword("");
        setConfirmPassword("");
      }
    }
  }, [password, confirmPassword, setIsPasswordMismatch]);

  useEffect(() => {
    if (isPasswordMismatch) {
      setAlertInconsistencyPassword(true);
    }
  }, [isPasswordMismatch]);

  const goToMainPage = () => {
    navigation.navigate("MainPage");
  };

  const goToLoginPatternPage = () => {
    navigation.navigate("LoginPatternPage", {
      name,
      phoneNumber,
      personalNumber,
      password,
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>
              {isConfirming && !isPasswordMismatch
                ? "확인을 위해 비밀번호를 한 번 더 입력해주세요"
                : "새로운 비밀번호를 설정해주세요"}
            </Text>

            <PasswordSymbol
              isConfirming={isConfirming}
              confirmPassword={confirmPassword}
              password={password}
            />
            {isPasswordMismatch && (
              <Text style={styles.errorText}>
                비밀번호가 일치하지 않습니다.
              </Text>
            )}
            {errorCode && (
              <Text style={styles.errorText}>
                이전 비밀번호와 다른 비밀번호로 설정해주세요
              </Text>
            )}
          </View>
          <NumberPad
            onNumPress={handleNumPress}
            onBackspacePress={handleBackspacePress}
          />
        </View>
        <View style={styles.bodyFooter}>
          {/* <TouchableOpacity onPress={goToLoginPatternPage}>
            <Text>Go to Login Pattern Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToLoginPatternPage}>
            <Text>Go to Main Page</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default FindPasswordPage;

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
  mainText: {
    color: "#191F29",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: fontPercentage(20),
    fontStyle: "normal",
    fontWeight: "700",
  },
  body: {
    flexDirection: "column",
    alignItems: "flex-start",
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 0,
    alignSelf: "stretch",
    backgroundColor: "#FFF",
  },
  bodyMain: {
    flex: 1,
    paddingTop: heightPercentage(150),
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#FFF",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: heightPercentage(30),
  },
  bodyFooter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: heightPercentage(10),
    height: heightPercentage(71),
    alignSelf: "stretch",
    backgroundColor: "#FFF",
    paddingVertical: heightPercentage(15),
  },
  errorText:{
    color:"red"
  }
});

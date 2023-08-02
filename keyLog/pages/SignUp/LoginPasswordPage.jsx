import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberPad from "../../components/SignUpPageComponents/NumberPad";
import PasswordSymbol from "../../components/SignUpPageComponents/PasswordSymbol";
import { fontPercentage, heightPercentage } from "../../utils/ResponseSize";

const LoginPasswordPage = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [alertInconsistencyPassword, setAlertInconsistencyPassword] =
    useState(false);

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
    setIsConfirming(false);
    setIsPasswordMismatch(false);
    setConfirmPassword("");
    setPassword("");
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
        navigation.replace("MainPage");
      } else {
        console.log("Passwords do not match");
        setIsPasswordMismatch(true);
        setIsConfirming(true);
      }
    }
  }, [password, confirmPassword, setIsPasswordMismatch]);

  useEffect(() => {
    if (isPasswordMismatch) {
      setAlertInconsistencyPassword(true);
    }
  }, [isPasswordMismatch]);

  const goToMainPage = () => {
    navigation.replace("MainPage");
  };

  const goToLoginPatternPage = () => {
    navigation.replace("LoginPatternPage");
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
                : "잠금해제 비밀번호를 설정해주세요"}
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
          </View>
          <NumberPad
            onNumPress={handleNumPress}
            onBackspacePress={handleBackspacePress}
          />
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity onPress={goToLoginPatternPage}>
            <Text>Go to Login Pattern Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToMainPage}>
            <Text>Go to Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPasswordPage;

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
});

import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberPad from "../../components/SignUpPageComponents/NumberPad";
import PasswordSymbol from "../../components/SignUpPageComponents/PasswordSymbol";
import { fontPercentage, heightPercentage } from "../../utils/ResponseSize";
import { useMutation, useQueryClient } from "react-query";
import { postSigninPassword } from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUniqueId } from "react-native-device-info";
const LoginPage = () => {
  const navigation = useNavigation();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirming, setIsConfirming] = useState(false);
  const [isPasswordMismatch, setIsPasswordMismatch] = useState(false);
  const [alertInconsistencyPassword, setAlertInconsistencyPassword] =
    useState(false);

  const queryClient = useQueryClient();
  const postSignInPasswordMutation = useMutation(postSigninPassword, {
    onSuccess: async (response) => {
      queryClient.invalidateQueries("postSigninPassword");
      setIsPasswordMismatch(false);
      await AsyncStorage.setItem(
        "token",
        JSON.stringify(response.headers.access_token)
      );
      navigation.navigate("MainPage");
    },
  });

  const handleNumPress = async (num) => {
    if (alertInconsistencyPassword) {
      resetPasswordProcess();
      setAlertInconsistencyPassword(false);
    }

      if (password.length < 6) {
        if(password.length==5) {
            postSignInPasswordMutation.mutate({
                deviceId: await getUniqueId(),
                password: password+num,
            })
        }
        setPassword(password + num);
        console.log(num + "num");
      } else {
        console.log(password)
        postSignInPasswordMutation.mutate({
            deviceId: await getUniqueId(),
            password: password,
        })
      }
    }

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

  //   useEffect(() => {
  //     console.log("password state", password);

  //     }
  //   }, [password, confirmPassword, setIsPasswordMismatch]);

  useEffect(() => {
    if (isPasswordMismatch) {
      setAlertInconsistencyPassword(true);
    }
  }, [isPasswordMismatch]);

  const goToMainPage = () => {
    navigation.replace("MainPage");
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
            <Text style={styles.mainText}>잠금해제 해주세요</Text>
            <PasswordSymbol
              isConfirming={isConfirming}
              confirmPassword={confirmPassword}
              password={password}
            />
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
          <TouchableOpacity onPress={goToLoginPatternPage}>
            <Text>Go to Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

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

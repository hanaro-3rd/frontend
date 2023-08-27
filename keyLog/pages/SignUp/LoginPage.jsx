import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getUniqueId } from "react-native-device-info";
import { useMutation, useQueryClient } from "react-query";
import { postSigninPassword } from "../../api/api";
import NumberPad from "../../components/SignUpPageComponents/NumberPad";
import PasswordSymbol from "../../components/SignUpPageComponents/PasswordSymbol";
import { fontPercentage, heightPercentage } from "../../utils/ResponseSize";
import styled from "styled-components/native";

const LoginPage = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const queryClient = useQueryClient();

  const postSignInPasswordMutation = useMutation(postSigninPassword, {
    onSuccess: async (response) => {
      await storeAccessToken(response.headers.access_token);
      await storeRefreshToken(response.headers.refresh_token);
      queryClient.invalidateQueries("postSigninPassword");
      navigation.navigate("MainPage");
    },
    onError: (error) => {
      try {
        if (error.response && error.response.data.errorCode === 401) {
          setLoginError(true);
        }
        resetPasswordProcess();
      } catch (err) {
        console.error("Something went wrong:", err);
      }
    },
  });

  const handleNumPress = async (num) => {
    const newPwd = password + num;
    if (newPwd.length === 6) {
      attemptLogin(newPwd);
    } else {
      setPassword(newPwd);
    }
  };

  const attemptLogin = async (pwd) => {
    postSignInPasswordMutation.mutate({
      deviceId: await getUniqueId(),
      password: pwd,
    });
  };

  const handleBackspacePress = () => {
    setPassword(password.slice(0, -1));
  };

  const resetPasswordProcess = () => {
    setPassword("");
  };

  useEffect(() => {
    if (password === "") resetPasswordProcess();
  }, [password]);

  const storeAccessToken = async (token) => {
    console.log("access_token", JSON.stringify(token));
    await AsyncStorage.setItem("access_token", JSON.stringify(token));
  };

  const storeRefreshToken = async (token) => {
    console.log("refresh_token", JSON.stringify(token));
    await AsyncStorage.setItem("refresh_token", JSON.stringify(token));
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>비밀번호를 입력해주세요</Text>
            <PasswordSymbol password={password} />
            {loginError && (
              <Text style={{ color: "red" }}>비밀번호를 다시 입력해주세요</Text>
            )}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUpPage")}
          >
            <ForgetText>비밀번호를 잊어버렸어요</ForgetText>
            </TouchableOpacity>
          <NumberPad
            onNumPress={handleNumPress}
            onBackspacePress={handleBackspacePress}
          />
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginPatternPage")}
          >
            <Text>패턴으로 로그인하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPage;

const ForgetText = styled.Text`
  color: #8b95a1;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-decoration-line: underline;
`;
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

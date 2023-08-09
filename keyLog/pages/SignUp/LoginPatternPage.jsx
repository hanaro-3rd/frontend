import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from "react-native-device-info";
import { useMutation, useQueryClient } from "react-query";
import { postSigninPassword, postSignup } from "../../api/api";
import Pattern from "../../components/SignUpPageComponents/Pattern";
import { fontPercentage, heightPercentage } from "../../utils/ResponseSize";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginAtom } from "../../recoil/loginAtom";
const LoginPatternPage = ({ route }) => {
  const navigation = useNavigation();

  const { name, phoneNumber, personalNumber, password } = route.params;
  const [login,setLogin] = useRecoilState(loginAtom);
  const goToLoginPasswordPage = () => {
    navigation.replace("LoginPasswordPage");
  };

  const goToMainPage = () => {
    navigation.replace("MainPage");
  };

  const queryClient = useQueryClient();

  const postSignupMutation = useMutation(postSignup, {
    onSuccess: async (response) => {
      console.log(response.data);
      queryClient.invalidateQueries("postSignup");
      const deviceId = await DeviceInfo.getUniqueId();
      postSigninPasswordMutation.mutate({
        deviceId: await DeviceInfo.getUniqueId(),
        password,
      });
      // postSigninPasswordMutation.mutate({
      //   deviceId: "1",
      //   password:"111111",
      // });
    },
    onError: (error) => {
      console.log("signup" + error);
    },
  });



  const postSigninPasswordMutation = useMutation(postSigninPassword, {
    onSuccess: async (response) => {
     

      console.log("postSigninPassword Data: " + JSON.stringify(response.data));
      console.log("Response Headers: " + JSON.stringify(response.headers));

      queryClient.invalidateQueries("postSigninPassword");
      // 결과 데이터 및 헤더 정보 처리 로직

      // AsyncStorage에 데이터 저장 예시

      await AsyncStorage.setItem('token', JSON.stringify(response.headers.access_token));
      await setLogin(true)
    },
    onError: (error) => {
      console.log("signin" + error);
    },
  });

  const handlePostSignup = async (e) => {
    e.preventDefault();
    // console.log(await DeviceInfo.getUniqueId() )
    postSignupMutation.mutate({
      name: name,
      phonenum: phoneNumber,
      password: password,
      pattern: "12346",
      registrationNum: personalNumber,
      deviceId: await DeviceInfo.getUniqueId(),
    });
    // postSignupMutation.mutate({
    //   name: "이수창",
    //   phonenum: "01063572816",
    //   password: 111111,
    //   pattern: "12346",
    //   registrationNum: "970917-1234567",
    //   deviceId: 1,
    // });
    goToMainPage();
 
  };

  return (
    <View style={styles.root}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <View style={styles.bodyMain}>
          <View style={styles.textContainer}>
            <Text style={styles.mainText}>잠금해제 패턴을 설정해주세요</Text>
          </View>
          <Pattern />
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity onPress={handlePostSignup}>
            <Text>Go to Login Password Page</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handlePostSignup}>
            <Text>Go to Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginPatternPage;

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
  ellipse: {
    fill: "#B0B8C1",
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

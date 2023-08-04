import {
  NavigationContainer,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import PaymentPageInputComponent from "./components/PaymentPageComponents/PaymentPageInputComponent";
import TravelRecordDetailComponent from "./components/TravelRecordPageComponents/TravelRecordDetailComponent";
import TravelRecordMainComponent from "./components/TravelRecordPageComponents/TravelRecordMainComponent";
import AccountConnectPage from "./pages/AccountConnectPage";
import ChooseAccount from "./pages/ExchangeSelectAccount/ChooseAccount";
import ExchangeFail from "./pages/ExchangeSelectAccount/ExchangeFail";
import ExchangePage from "./pages/ExchangeSelectAccount/ExchangePage";
import ExchangeSuccess from "./pages/ExchangeSelectAccount/ExchangeSuccess";
import MainPage from "./pages/MainPage";
import PickUpKeyPage from "./pages/PickUpKeyPage";
import LoginPasswordPage from "./pages/SignUp/LoginPasswordPage";
import LoginPatternPage from "./pages/SignUp/LoginPatternPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import TravelBudgetDetailPage from "./pages/TravelBudget/TravelBudgetDetailPage";
import TravelBudgetPage from "./pages/TravelBudget/TravelBudgetPage";
import TravelBudgetPlanPage from "./pages/TravelBudget/TravelBudgetPlanPage";
import TravelSchedulePage from "./pages/TravelBudget/TravelSchedulePage";
import TravelRecordPage from "./pages/TravelRecordPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getRegistrationDeviceId } from "./api/api";
import DeviceInfo, { getDeviceId } from "react-native-device-info";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginAtom } from "./recoil/loginAtom";
const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();
  const [login, setLogin] = useRecoilState(loginAtom);
  const [isLoading, setLoading] = useState(true);
  const [haveDeviceId, setHaveDeviceId] = useState(false);

  const checkToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      await AsyncStorage.removeItem("token")
      console.log(token);
      if (token) {
        // token이 있으면 MainPage로 이동
        setLogin(true);
      } else {
        // token이 없으면 SignUpPage로 이동
        setLogin(false);
      }
    } catch (error) {
      // 에러 처리
      console.log("AsyncStorage error:", error);
      setLogin(false); // 에러 발생 시 로그인을 하지 않은 상태로 설정
    } finally {
      setLoading(false); // 로딩 상태를 false로 설정하여 초기 렌더링이 완료
    }
  };



  const { data } = useQuery(
    "registration",
    async () => getRegistrationDeviceId(await DeviceInfo.getUniqueId()),
    {
      //DeviceId가 존재할떄
      onSuccess: async (response) => {
        console.log(await DeviceInfo.getUniqueId());
        console.log(JSON.stringify(response.data));
        setHaveDeviceId(true);
      },
      //DeviceId가 존재하지 않을 때
      onError: async (error) => {
        console.log(await DeviceInfo.getUniqueId());
        console.log("error");
        setHaveDeviceId(false);
      },
    }
  );
  console.log("74" + login);
  useEffect(() => {
    console.log("useeffect" + "돌아가긴하니" + login);
    checkToken();
  }, [login]);

  if (isLoading) {
    // 로딩 상태일 동안에는 아무것도 렌더링X
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={
          login ? "MainPage" : haveDeviceId ? "LoginPasswordPage" : "SignUpPage"
        }
      >
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AccountConnectPage"
          component={AccountConnectPage}
        />
        <Stack.Screen name="ExchangePage" component={ExchangePage} />
        <Stack.Screen name="ExchangeSuccess" component={ExchangeSuccess} />
        <Stack.Screen name="ExchangeFail" component={ExchangeFail} />
        <Stack.Screen name="ChooseAccount" component={ChooseAccount} />
        <Stack.Screen name="PickUpKeyPage" component={PickUpKeyPage} />
        <Stack.Screen
          name="SignUpPage"
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPasswordPage"
          component={LoginPasswordPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginPatternPage"
          component={LoginPatternPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelRecordMainComponent"
          component={TravelRecordMainComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelRecordDetailComponent"
          component={TravelRecordDetailComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentPageInputComponent"
          component={PaymentPageInputComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelRecordPage"
          component={TravelRecordPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelBudgetPage"
          component={TravelBudgetPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelBudgetDetailPage"
          component={TravelBudgetDetailPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelSchedulePage"
          component={TravelSchedulePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TravelBudgetPlanPage"
          component={TravelBudgetPlanPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

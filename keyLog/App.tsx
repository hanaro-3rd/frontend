import AccountConnectSuccess from "./pages/AccountConnect/AccountConnectSuccess";
import AccountConnectFail from "./pages/AccountConnect/AccountConnectFail";
import ChooseAccountComponent from "./components/ExchangePageComponents/ChooseAccountComponent";
import CountryChoiceComponent from "./components/ExchangePageComponents/CountryChoiceComponent";
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
import AccountConnectPage from "./pages/AccountConnect/AccountConnectPage";
import ExchangeFail from "./pages/ExchangeSelectAccount/ExchangeFail";
import ExchangePage from "./pages/ExchangeSelectAccount/ExchangePage";
import ExchangeSuccess from "./pages/ExchangeSelectAccount/ExchangeSuccess";
import MainPage from "./pages/MainPage";
import TestPaymentPage from "./pages/Payment/TestPaymentPage";
import PaymentSuccessPage from "./pages/Payment/PaymentSuccessPage";
import PaymentFailPage from "./pages/Payment/PaymentFailPage";
import PickUpKeyPage from "./pages/PickUpKeyPage";
import LoginPasswordPage from "./pages/SignUp/LoginPasswordPage";
import LoginPatternPage from "./pages/SignUp/LoginPatternPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import ForeignPayHistoryPage from "./pages/History/ForeignPayHistoryPage";
import MarkerHistoryPage from "./pages/History/MarkerHistoryPage";
import OwnPayHistoryPage from "./pages/History/OwnPayHistoryPage";
import KeyMoneyHistoryPage from "./pages/History/KeyMoneyHistoryPage";
import ExchangeHistoryResult from "./components/PaymentPageComponents/ExchangeHistoryResult";
import TravelBudgetDetailPage from "./pages/TravelBudget/TravelBudgetDetailPage";
import TravelBudgetPage from "./pages/TravelBudget/TravelBudgetPage";
import TravelBudgetPlanPage from "./pages/TravelBudget/TravelBudgetPlanPage";
import TravelSchedulePage from "./pages/TravelBudget/TravelSchedulePage";
import TravelRecordPage from "./pages/TravelRecordPage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getRefresh, getRegistrationDeviceId } from "./api/api";
import DeviceInfo, { getDeviceId } from "react-native-device-info";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginAtom } from "./recoil/loginAtom";
import usePermissions from "./hooks/usePermissions";
import LoginPage from "./pages/SignUp/LoginPage";
import ScanPage from "./pages/Payment/ScanPage";
import SettingPage from "./pages/SettingPage";
import TestPaymentSearchPage from "./pages/Payment/TestPaymentSearchPage";
import AccountConnectPageComponents from "./components/AccountConnectPageComponents/AccountConnectPageComponents";
import { usernameAtom } from "./recoil/usernameAtom";
import { SafeAreaView } from "react-native-safe-area-context";
import AlreadySignUpPage from "./pages/SignUp/AlreadySignUpPage";
const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();
  const [login, setLogin] = useRecoilState(loginAtom);
  const [isLoading, setLoading] = useState(true);
  const [haveDeviceId, setHaveDeviceId] = useState(false);
  const [username, setUsername] = useRecoilState(usernameAtom);
  // usePermissions();
  const { data } = useQuery(
    "registration",
    async () => getRegistrationDeviceId(await DeviceInfo.getUniqueId()),
    {
      //DeviceId가 존재할떄
      onSuccess: async (response) => {
        // console.log(JSON.stringify(response));
        console.log(response.data);
        setUsername(response.data?.result?.name);
        setHaveDeviceId(true);
        console.log(response?.data?.errorCode);
        if (response?.data?.errorCode == 500) setHaveDeviceId(false);
        try {
          const token = await AsyncStorage.getItem("access_token");
          console.log("access_token" + token);
          console.log(
            "refresh_token",
            await AsyncStorage.getItem("refresh_token")
          );
          console.log(response.data);
          if (response.data?.errorCode == 500) {
            setLogin(false);
            setHaveDeviceId(false);
            setLoading(false);
            return;
          }
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
      },
      //DeviceId가 존재하지 않을 때
      onError: async (error) => {
        try {
          console.log("error");
          setHaveDeviceId(false);
          setLogin(false);
          console.log("뭐가문제야");
        } catch (error) {
          // 에러 처리
          setLogin(false); // 에러 발생 시 로그인을 하지 않은 상태로 설정
        } finally {
          setLoading(false); // 로딩 상태를 false로 설정하여 초기 렌더링이 완료
        }
      },
    }
  );

  if (isLoading) {
    // 로딩 상태일 동안에는 아무것도 렌더링X
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            login ? "MainPage" : haveDeviceId ? "LoginPage" : "SignUpPage"
          }
        >
          <Stack.Screen
            name="AlreadySignUpPage"
            component={AlreadySignUpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TestPaymentSearchPage"
            component={TestPaymentSearchPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ForeignPayHistoryPage"
            component={ForeignPayHistoryPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="OwnPayHistoryPage"
            component={OwnPayHistoryPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExchangeHistoryResult"
            component={ExchangeHistoryResult}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ScanPage"
            component={ScanPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TestPaymentPage"
            component={TestPaymentPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentSuccessPage"
            component={PaymentSuccessPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PaymentFailPage"
            component={PaymentFailPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="KeyMoneyHistoryPage"
            component={KeyMoneyHistoryPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SettingPage"
            component={SettingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountConnectPage"
            component={AccountConnectPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountConnectSuccess"
            component={AccountConnectSuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AccountConnectFail"
            component={AccountConnectFail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChooseAccountComponent"
            component={ChooseAccountComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExchangePage"
            component={ExchangePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CountryChoiceComponent"
            component={CountryChoiceComponent}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExchangeSuccess"
            component={ExchangeSuccess}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExchangeFail"
            component={ExchangeFail}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PickUpKeyPage"
            component={PickUpKeyPage}
            options={{ headerShown: false }}
          />
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
            name="LoginPage"
            component={LoginPage}
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
          <Stack.Screen
            name="MarkerHistoryPage"
            component={MarkerHistoryPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

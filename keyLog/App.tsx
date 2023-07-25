import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainPage from "./pages/MainPage";
import AccountConnectPage from "./pages/AccountConnectPage";
import ExchangePage from "./pages/ExchangeSelectAccount/ExchangePage";
import ExchangeSuccess from "./pages/ExchangeSelectAccount/ExchangeSuccess";
import ExchangeFail from "./pages/ExchangeSelectAccount/ExchangeFail";
import ChooseAccount from "./pages/ExchangeSelectAccount/ChooseAccount";
import PickUpKeyPage from "./pages/PickUpKeyPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import TravelBudgetPage from "./pages/TravelBudgetPage";
import TravelRecordPage from "./pages/TravelRecordPage";
import PaymentPageInputComponent from "./components/PaymentPageComponents/PaymentPageInputComponent";
import TravelRecordDetailComponent from "./components/TravelRecordPageComponents/TravelRecordDetailComponent";
import TravelRecordMainComponent from "./components/TravelRecordPageComponents/TravelRecordMainComponent";
import LoginPasswordPage from "./pages/SignUp/LoginPasswordPage";
import LoginPatternPage from "./pages/SignUp/LoginPatternPage";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentPageInputComponent">
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
        <Stack.Screen name="TravelRecordPage" component={TravelRecordPage} />
        <Stack.Screen name="TravelBudgetPage" component={TravelBudgetPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

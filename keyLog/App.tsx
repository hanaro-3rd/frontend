import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainPage from "./pages/MainPage";
import AccountConnectPage from "./pages/AccountConnect/AccountConnectPage";
import AccountConnectSuccess from "./pages/AccountConnect/AccountConnectSuccess";
import AccountConnectFail from "./pages/AccountConnect/AccountConnectFail";
import ChooseAccountComponent from "./components/ExchangePageComponents/ChooseAccountComponent";
import ExchangePage from "./pages/ExchangeSelectAccount/ExchangePage";
import ExchangeSuccess from "./pages/ExchangeSelectAccount/ExchangeSuccess";
import ExchangeFail from "./pages/ExchangeSelectAccount/ExchangeFail";
import PickUpKeyPage from "./pages/PickUpKeyPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import TravelBudgetPage from "./pages/TravelBudgetPage";
import TravelRecordPage from "./pages/TravelRecordPage";
import PaymentPageInputComponent from "./components/PaymentPageComponents/PaymentPageInputComponent";
import TravelRecordDetailComponent from "./components/TravelRecordPageComponents/TravelRecordDetailComponent";
import TravelRecordMainComponent from "./components/TravelRecordPageComponents/TravelRecordMainComponent";
import LoginPasswordPage from "./pages/SignUp/LoginPasswordPage";
import LoginPatternPage from "./pages/SignUp/LoginPatternPage";
import TravelBudgetDetailPage from "./pages/TravelBudget/TravelBudgetDetailPage";
import TravelBudgetPlanPage from "./pages/TravelBudget/TravelBudgetPlanPage";
import TravelSchedulePage from "./pages/TravelBudget/TravelSchedulePage";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ExchangePage">
        <Stack.Screen
          name="MainPage"
          component={MainPage}
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

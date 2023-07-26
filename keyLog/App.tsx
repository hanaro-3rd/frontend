import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
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
import TravelRecordPage from "./pages/TravelRecordPage";
import TravelBudgetPage from "./pages/TravelBudget/TravelBudgetPage";
import TravelBudgetDetailPage from "./pages/TravelBudget/TravelBudgetDetailPage";
import TravelSchedulePage from "./pages/TravelBudget/TravelSchedulePage";
import TravelBudgetPlanPage from "./pages/TravelBudget/TravelBudgetPlanPage";

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
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

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MainPage from "./pages/MainPage";
import AccountConnectPage from "./pages/AccountConnectPage";
import ExchangePage from "./pages/ExchangePage";
import PickUpKeyPage from "./pages/PickUpKeyPage";
import SignUpPage from "./pages/SignUpPage";
import TravelBudgetPage from "./pages/TravelBudget/TravelBudgetPage";
import TravelRecordPage from "./pages/TravelRecordPage";
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
        {/* <Stack.Screen
          name="AccountConnectPage"
          component={AccountConnectPage}
        />
        <Stack.Screen name="ExchangePage" component={ExchangePage} />
        <Stack.Screen name="PickUpKeyPage" component={PickUpKeyPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        */}
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
        {/* <Stack.Screen name="TravelRecordPage" component={TravelRecordPage} /> */}
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

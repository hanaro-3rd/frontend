import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PaymentPageInputComponent from './components/PaymentPageComponents/PaymentPageInputComponent';
import TravelRecordDetailComponent from './components/TravelRecordPageComponents/TravelRecordDetailComponent';
import TravelRecordMainComponent from './components/TravelRecordPageComponents/TravelRecordMainComponent';
import AccountConnectPage from './pages/AccountConnectPage';
import ExchangePage from './pages/ExchangePage';
import MainPage from './pages/MainPage';
import PickUpKeyPage from './pages/PickUpKeyPage';
import LoginPasswordPage from './pages/SignUp/LoginPasswordPage';
import LoginPatternPage from './pages/SignUp/LoginPatternPage';
import SignUpPage from './pages/SignUp/SignUpPage';
import TravelBudgetPage from './pages/TravelBudgetPage';
import TravelRecordPage from './pages/TravelRecordPage';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUpPage'>
        <Stack.Screen
          name='MainPage'
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='AccountConnectPage'
          component={AccountConnectPage}
        />
        <Stack.Screen name='ExchangePage' component={ExchangePage} />
        <Stack.Screen name='PickUpKeyPage' component={PickUpKeyPage} />
        <Stack.Screen
          name='SignUpPage'
          component={SignUpPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginPasswordPage'
          component={LoginPasswordPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginPatternPage'
          component={LoginPatternPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='TravelRecordMainComponent'
          component={TravelRecordMainComponent}
        />
        <Stack.Screen
          name='TravelRecordDetailComponent'
          component={TravelRecordDetailComponent}
        />
        <Stack.Screen
          name='PaymentPageInputComponent'
          component={PaymentPageInputComponent}
        />
        <Stack.Screen name='TravelRecordPage' component={TravelRecordPage} />
        <Stack.Screen name='TravelBudgetPage' component={TravelBudgetPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

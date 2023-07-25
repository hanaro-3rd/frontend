import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainPage from './pages/MainPage';
import AccountConnectPage from './pages/AccountConnectPage';
import ExchangePage from './pages/ExchangePage';
import PickUpKeyPage from './pages/PickUpKeyPage';
import SignUpPage from './pages/SignUpPage';
import TravelBudgetPage from './pages/TravelBudgetPage';
import TravelRecordPage from './pages/TravelRecordPage';
import TravelRecordMainComponent from './components/TravelRecordPageComponents/TravelRecordMainComponent';
import TravelRecordPageDetailComponent from './components/TravelRecordPageComponents/TravelRecordDetailComponent';
import TravelRecordDetailComponent from './components/TravelRecordPageComponents/TravelRecordDetailComponent';
import PaymentPageInputComponent from './components/PaymentPageComponents/PaymentPageInputComponent';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentPageInputComponent" screenOptions={{headerShown:false}}>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen
          name="AccountConnectPage"
          component={AccountConnectPage}
        />
        <Stack.Screen name="ExchangePage" component={ExchangePage} />
        <Stack.Screen name="PickUpKeyPage" component={PickUpKeyPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
        <Stack.Screen name="TravelRecordMainComponent" component={TravelRecordMainComponent} />
        <Stack.Screen name="TravelRecordDetailComponent" component={TravelRecordDetailComponent} />
        <Stack.Screen name="PaymentPageInputComponent" component = {PaymentPageInputComponent} />
        <Stack.Screen name="TravelRecordPage" component={TravelRecordPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

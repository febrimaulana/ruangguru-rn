import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {BottomNavigation} from '../components';
import {
  DetailOrder,
  FormSubmit,
  Home,
  Profile,
  Splash,
  Verifikasi,
  TentangKami,
  UbahProfile,
} from '../pages';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomNavigation {...props} />}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  );
};

const Routing = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Verifikasi" component={Verifikasi} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="DetailOrder" component={DetailOrder} />
      <Stack.Screen name="UbahProfile" component={UbahProfile} />
      <Stack.Screen name="TentangKami" component={TentangKami} />
      <Stack.Screen name="FormSubmit" component={FormSubmit} />
    </Stack.Navigator>
  );
};

export default Routing;

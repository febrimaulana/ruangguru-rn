import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Splash,
  Home,
  Profile,
  Submit,
  UbahProfile,
  UbahAlamat,
  TentangKami,
  DetailOrder,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation} from '../components';

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
      <Stack.Screen name="Submit" component={Submit} />
      <Stack.Screen name="MainApp" component={MainApp} />
      <Stack.Screen name="DetailOrder" component={DetailOrder} />
      <Stack.Screen name="UbahProfile" component={UbahProfile} />
      <Stack.Screen name="UbahAlamat" component={UbahAlamat} />
      <Stack.Screen name="TentangKami" component={TentangKami} />
    </Stack.Navigator>
  );
};

export default Routing;

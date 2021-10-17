import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash, Home, Profile} from '../pages';
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
      initialRouteName="MainApp"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
  );
};

export default Routing;

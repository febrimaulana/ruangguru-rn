import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Splash} from '../pages';

const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();

// const MainApp = () => {
//   return (
//     <BottomTab.Navigator
//       screenOptions={{headerShown: false}}
//       tabBar={props => <BottomNavigation {...props} />}>
//       <BottomTab.Screen name="Home" component={Home} />
//       <BottomTab.Screen name="Profile" component={Store} />
//     </BottomTab.Navigator>
//   );
// };

const Routing = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
};

export default Routing;

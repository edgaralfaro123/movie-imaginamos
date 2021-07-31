import React, { useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { Provider as StoreProvider } from 'react-redux';
import Home from './src/containers/Home';

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppPrincipal () {
  return (
    <NavigationContainer>
        <>
          <Stack.Navigator headerMode="none" initialRouteName={"Home"}>
          <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </>
    </NavigationContainer>
  );
}
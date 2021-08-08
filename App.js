import React, { useEffect, useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/containers/Home';
import Detail from './src/components/Detail';
import store from './src/store';
import { Provider as StoreProvider } from 'react-redux';
const Stack = createStackNavigator();

export default function AppPrincipal () {

  return (

      <NavigationContainer>
          <StoreProvider store={store}>
            <Stack.Navigator headerMode="none" initialRouteName={"Home"}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Detail" component={Detail} />
            </Stack.Navigator>
          </StoreProvider>
      </NavigationContainer>
  
  );
}
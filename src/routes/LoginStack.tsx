import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Login,
  WelcomeScreen,
  CreateAccountPF,
  CreateAccountPJ,
} from '../pages';

const { Navigator, Screen } = createStackNavigator();

const LoginStack = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#000',
          elevation: 0,
        },
        headerTintColor: '#ffffff',
      }}
      initialRouteName="WelcomeScreen"
    >
      <Screen
        name="WelcomeScreen"
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Screen name="Login" options={{ headerShown: false }} component={Login} />
      <Screen name="CreateAccountPJ" component={CreateAccountPJ} />
      <Screen name="CreateAccountPF" component={CreateAccountPF} />
    </Navigator>
  );
};

export default LoginStack;

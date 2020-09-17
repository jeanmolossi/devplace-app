import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateAccountPF from '../pages/CreateAccountPF';
import CreateAccountPJ from '../pages/CreateAccountPJ';
import WelcomeScreen from '../pages/WelcomeScreen';

const { Navigator, Screen } = createStackNavigator();

const LoginStack = (): JSX.Element => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="WelcomeScreen"
    >
      <Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Screen name="CreateAccountPJ" component={CreateAccountPJ} />
      <Screen name="CreateAccountPF" component={CreateAccountPF} />
    </Navigator>
  );
};

export default LoginStack;

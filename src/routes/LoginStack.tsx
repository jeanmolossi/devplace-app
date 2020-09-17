import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../pages/WelcomeScreen';

const { Navigator, Screen } = createStackNavigator();

const LoginStack: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerTitle: 'Screen',
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}
      initialRouteName="WelcomeScreen"
    >
      <Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Screen name="CreateAccount" component={WelcomeScreen} />
    </Navigator>
  );
};

export default LoginStack;

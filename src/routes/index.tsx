import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import LoginStack from './LoginStack';

enableScreens();

const Routes: React.FC = () => {
  const user = 'undefined';

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Routes;

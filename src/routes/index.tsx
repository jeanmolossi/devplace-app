import React from 'react';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/Auth';
import DrawerNavigator from './DrawerNavigator';
import LoginStack from './LoginStack';

enableScreens();

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <DrawerNavigator /> : <LoginStack />}
    </NavigationContainer>
  );
};

export default Routes;

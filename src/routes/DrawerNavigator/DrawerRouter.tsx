import React from 'react';
import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../../components/MainComponents/Dashboard';
import WelcomeScreen from '../../pages/WelcomeScreen';
import {
  DrawerRouterScreenProps,
  AuthenticatedAppScreens,
} from '../../types/routes';

type DrawerNavigationProps = DrawerNavigationProp<AuthenticatedAppScreens>;

const { Screen, Navigator } = createStackNavigator<AuthenticatedAppScreens>();

const DrawerRouter = (props: DrawerRouterScreenProps): JSX.Element => {
  const { style } = props;

  const { openDrawer } = useNavigation<DrawerNavigationProps>();

  const { Button } = Feather;

  return (
    <Animated.View style={StyleSheet.flatten([styles.container, style])}>
      <Navigator
        screenOptions={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#000',
            elevation: 0,
          },
          headerLeft: () => (
            <Button
              name="menu"
              onPress={() => openDrawer()}
              style={{ backgroundColor: '#000', borderWidth: 0 }}
              color="#f6f6f6"
              activeOpacity={0.6}
            />
          ),
        }}
      >
        <Screen name="Dashboard">
          {screenProps => <Dashboard {...screenProps} />}
        </Screen>
        <Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Navigator>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 18,
    },
    shadowRadius: 10.32,
    elevation: 5,
    backgroundColor: '#3a3a3a',
    overflow: 'hidden',
  },
});

export default DrawerRouter;

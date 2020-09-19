import { StyleProp, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootDrawerScreensList = {
  RootDrawerScreen: undefined;
};

export type AuthenticatedAppScreens = {
  Dashboard: undefined;
  WelcomeScreen: undefined;
};

export type DrawerRouterScreenProps = {
  route: RouteProp<RootDrawerScreensList, 'RootDrawerScreen'>;

  navigation: StackNavigationProp<RootDrawerScreensList, 'RootDrawerScreen'>;

  style?: StyleProp<Animated.AnimateStyle<ViewStyle>>;
};

export type ScreenRouteProps<T extends keyof AuthenticatedAppScreens> = {
  route: RouteProp<AuthenticatedAppScreens, T>;

  navigation: StackNavigationProp<AuthenticatedAppScreens, T>;
};

export type AppRoutesScreenNavigationProps = DrawerNavigationProp<
  RootDrawerScreensList,
  'RootDrawerScreen'
>;

export type StackNavigatorInsideDrawer = CompositeNavigationProp<
  StackNavigationProp<AuthenticatedAppScreens, 'Dashboard'>,
  StackNavigationProp<AuthenticatedAppScreens, 'WelcomeScreen'>
>;

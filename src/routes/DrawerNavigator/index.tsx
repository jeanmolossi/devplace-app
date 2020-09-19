import React, { useState } from 'react';
import Animated from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerScreensList } from '../../types/routes';
import DrawerContent from './DrawerContent';
import DrawerRouter from './DrawerRouter';

const {
  Screen: DrawerScreen,
  Navigator: RNDrawerNavigator,
} = createDrawerNavigator<RootDrawerScreensList>();

const DrawerNavigator = (): JSX.Element => {
  const animatedNode = new Animated.Value<number>(0);

  const [progress, setProgress] = useState(animatedNode);

  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, -50],
  });

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyles = {
    borderRadius,

    transform: [{ scale, translateX }],
  };

  return (
    <RNDrawerNavigator
      drawerType="slide"
      overlayColor="transparent"
      drawerStyle={{ flex: 1, backgroundColor: '#3A3A3A' }}
      backBehavior="history"
      drawerContent={props => {
        setProgress(props.progress as Animated.Value<number>);
        return <DrawerContent {...props} />;
      }}
      sceneContainerStyle={{ backgroundColor: 'transparent' }}
    >
      <DrawerScreen name="RootDrawerScreen">
        {props => <DrawerRouter {...props} style={animatedStyles} />}
      </DrawerScreen>
    </RNDrawerNavigator>
  );
};

export default DrawerNavigator;

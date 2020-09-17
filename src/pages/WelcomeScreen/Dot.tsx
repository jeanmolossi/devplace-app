import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
  style?: StyleProp<ViewStyle>;
}

const Dot = ({ index, currentIndex, style }: DotProps): JSX.Element => {
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.2, 1, 0.2],
    extrapolate: Extrapolate.CLAMP,
  });

  const width = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [8, 24, 8],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{
        width,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal: 4,
        opacity,
      }}
      {...style}
    />
  );
};

export default Dot;

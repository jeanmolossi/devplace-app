import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

interface DotProps {
  index: number;
  currentIndex: Animated.Node<number>;
  style?: StyleProp<ViewStyle>;
}

const Dot = ({ index, currentIndex, style }: DotProps) => {
  return (
    <Animated.View
      style={{
        width: 8,
        height: 8,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginHorizontal: 4,
        opacity: 0.6,
      }}
      {...style}
    />
  );
};

export default Dot;

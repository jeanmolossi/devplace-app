import React, { useCallback } from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextProps,
  ViewStyle,
  Animated,
} from 'react-native';
import { timing, Easing } from 'react-native-reanimated';
import { interpolateColor, useValue } from 'react-native-redash';
import { Feather } from '@expo/vector-icons';
import { Button } from '../Button/styles';
import { Container, Input, LabelText } from './styles';

interface TextInputProps extends RNTextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  labelProps?: TextProps;
  label?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  labelProps,
  containerStyle,
  placeholder,
  secureTextEntry,
  value,
  ...rest
}) => {
  const animationProgress = new Animated.Value(0);
  const colorInterpolation = useValue(0);

  const handleAnimateLabel = useCallback(() => {
    return {
      top: animationProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [5, -32],
      }),
      left: animationProgress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -10],
      }),
    };
  }, [animationProgress]);

  const handleAnimateLabelColor = useCallback(() => {
    return {
      color: interpolateColor(colorInterpolation, {
        inputRange: [0, 1],
        outputRange: ['#000', '#fff'],
      }),
    };
  }, [colorInterpolation]);

  const onFocus = useCallback(() => {
    Animated.timing(animationProgress, {
      toValue: Number(!!value) || 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    timing(colorInterpolation, {
      toValue: Number(!!value) || 1,
      duration: 200,
      easing: Easing.inOut(Easing.bounce),
    }).start();
  }, []);

  const onBlur = useCallback(() => {
    Animated.timing(animationProgress, {
      toValue: Number(!!value) || 0,
      duration: 200,
      useNativeDriver: false,
    }).start();

    timing(colorInterpolation, {
      toValue: Number(!!value) || 0,
      duration: 100,
      easing: Easing.inOut(Easing.bounce),
    }).start();
  }, []);

  return (
    <Container style={containerStyle}>
      {placeholder && (
        <Animated.View style={[handleAnimateLabel()]}>
          <LabelText style={[handleAnimateLabelColor()]} {...labelProps}>
            {placeholder}:
          </LabelText>
        </Animated.View>
      )}
      <Input {...{ onFocus, onBlur, secureTextEntry }} {...rest} />
      {secureTextEntry && (
        <Button>
          <Feather name="eye" color="#000" size={18} />
        </Button>
      )}
    </Container>
  );
};

export default TextInput;

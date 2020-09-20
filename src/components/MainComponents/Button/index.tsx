import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { Button as ButtonComponent, TextButton } from './styles';

type Variants = 'solid' | 'outline' | 'black' | 'gray';

export interface ButtonProps extends TouchableOpacityProps {
  variant?: Variants;
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  variant = 'solid',
  style,
  textStyle,
  ...rest
}) => {
  return (
    <ButtonComponent {...{ variant, style }} {...rest}>
      {text ? (
        <TextButton {...{ variant, style: textStyle }}>{text}</TextButton>
      ) : (
        <>{children}</>
      )}
    </ButtonComponent>
  );
};

export default Button;

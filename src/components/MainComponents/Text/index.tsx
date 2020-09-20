import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import { Text } from './styles';

export interface TextProps extends RNTextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  small?: boolean;
  code?: boolean;
}

const MainComponents: React.FC<TextProps> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

export default MainComponents;

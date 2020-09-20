import React, { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Container } from './styles';

type DefaultLayoutProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const DefaultLayout = ({
  children,
  ...rest
}: DefaultLayoutProps): JSX.Element => {
  return <Container {...rest}>{children}</Container>;
};

export default DefaultLayout;

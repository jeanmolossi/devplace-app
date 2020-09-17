import React from 'react';
import { Container } from './styles';

const DefaultLayout: React.FC = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

export default DefaultLayout;

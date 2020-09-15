import React from 'react';
import { View, TextInputProps } from 'react-native';

import { Container } from './styles';

const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <Container {...rest} />;
};

export default TextInput;

import { TextInputProps } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
  margin-bottom: 16px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 8px;
  position: relative;
`;

export const LabelText = styled(Animated.Text)`
  position: absolute;
  color: #333;
  top: 50%;
  left: 15px;
  transform: translateY(-16px);
  font-size: 16px;
`;

export const Input = styled.TextInput<TextInputProps>`
  flex: 1;
  padding: 12px 16px;
`;

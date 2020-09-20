import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  background-color: #000000;
  flex: 1;
`;

export const SingleSlide = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: ${width}px;
  padding: 125px 46px 46px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: ${width}px;
  padding: 0 24px;
`;

export const OrangeCircle = styled.View`
  position: absolute;
  width: 519px;
  height: 519px;
  background: #fa5805;
  border-radius: 9999px;
  left: 0;
  top: -225px;
  z-index: -1;
`;

export const WhiteCircle = styled.View`
  position: absolute;
  width: 175px;
  height: 175px;
  background: #979797;
  border-radius: 9999px;
  top: 326px;
  right: -90px;
  z-index: -1;
`;

export const InsideWhiteCircle = styled.View`
  position: absolute;
  width: 325px;
  height: 325px;
  background: #979797;
  border-radius: 9999px;
  top: 137px;
  right: 35px;
  z-index: -1;
`;

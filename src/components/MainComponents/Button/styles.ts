import styled, { css } from 'styled-components/native';
import { ButtonProps } from './index';

const textVariants = {
  solid: css`
    color: #fff;
  `,
  outline: css`
    color: #000;
  `,
  black: css`
    color: #fff;
  `,
  gray: css`
    color: #979797;
  `,
};

const variants = {
  solid: css`
    background: #fa5805;
  `,
  outline: css`
    background: transparent;
    border-width: 1px;
    border-color: #979797;
    border-style: solid;
  `,
  black: css`
    background-color: black;
  `,
  gray: css`
    background-color: #3a3a3a;
  `,
};

export const TextButton = styled.Text<Pick<ButtonProps, 'variant'>>`
  font-family: 'Ubuntu_500Medium';
  font-size: 18px;
  line-height: 21px;
  text-align: center;

  ${props => props.variant && textVariants[props.variant || 'solid']}
`;

export const Button = styled.TouchableOpacity<ButtonProps>`
  box-shadow: 0px 4px 16px #00000025;
  border-radius: 8px;
  padding: 14px 16px;

  ${props => props.variant && variants[props.variant || 'solid']};
`;

import styled, { css } from 'styled-components/native';

import { TextProps } from './index';

const defaultTextConfig = {
  h1: css`
    font-family: 'Ubuntu_500Medium';
    font-size: 48px;
  `,
  h2: css`
    font-family: 'Ubuntu_500Medium';
    font-size: 36px;
  `,
  h3: css`
    font-family: 'Ubuntu_500Medium';
    font-size: 24px;
  `,
  h4: css`
    font-family: 'Ubuntu_500Medium';
    font-size: 18px;
  `,
  h5: css`
    font-family: 'Ubuntu_500Medium';
    font-size: 14px;
  `,
  h6: css`
    font-family: 'Ubuntu_500Medium';
    font-size: 12px;
  `,
  small: css`
    font-size: 12px;
    color: #979797;
  `,
  code: css`
    font-family: 'FiraMono_400Regular';
  `,
};

export const Text = styled.Text<TextProps>`
  color: #fff;
  font-family: 'OpenSans_400Regular';
  font-size: 16px;

  ${props => props.code && defaultTextConfig.code}

  ${props => props.small && defaultTextConfig.small}

  ${props =>
    props.h6 && defaultTextConfig.h6}

  ${props =>
    props.h5 && defaultTextConfig.h5}

  ${props =>
    props.h4 && defaultTextConfig.h4}

  ${props =>
    props.h3 && defaultTextConfig.h3}

  ${props =>
    props.h2 && defaultTextConfig.h2}

  ${props =>
    props.h1 && defaultTextConfig.h1}
`;

import React from 'react';
import { Button as Wrapper } from './Button.style';
import { Typography } from '..';

export default function Button(props) {
  const { text, icon, color } = props;

  return (
    <Wrapper color={color} variant="outlined">
      {icon && <img src={icon} alt={`icon-${text}`} />}
      {text && <Typography text={text} color={color} />}
    </Wrapper>
  );
}

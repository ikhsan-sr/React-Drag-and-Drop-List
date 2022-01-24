import React from 'react';
import { Button as Wrapper } from './Button.style';
import { Typography } from '..';

export default function Button(props) {
  const { text, icon, color, bg, variant } = props;

  return (
    <Wrapper color={color} variant={variant} bg={bg} color={color}>
      {icon && <img src={icon} alt={`icon-${text}`} />}
      {text && <Typography text={text} color={color} />}
    </Wrapper>
  );
}

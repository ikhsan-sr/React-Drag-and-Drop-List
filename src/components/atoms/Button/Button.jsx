import React from 'react';
import { Button as Wrapper } from './Button.style';
import { Typography } from '..';

export default function Button(props) {
  const { text, icon, color, bg } = props;

  return (
    <Wrapper color={color} variant="outlined" bg={bg}>
      {icon && <img src={icon} alt={`icon-${text}`} />}
      {text && <Typography text={text} color={color} />}
    </Wrapper>
  );
}

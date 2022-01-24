import React from 'react';
import { Wrapper } from './Icon.style';

export default function Icon(props) {
  const { img, name } = props;

  return (
    <Wrapper>
      <img src={img} alt={`icon-${name}`} />
    </Wrapper>
  );
}

import React from 'react';
import { Button } from './IconButton.style';

export default function IconButton(props) {
  return (
    <Button bg={props.bg}>
      <img src={props.img} alt={`icon-${props.name}`} />
    </Button>
  );
}

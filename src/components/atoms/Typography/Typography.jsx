import React from 'react';
import { Text } from './Typography.style';

export default function Typography(props) {
  // props size = small / medium / big

  const { size, weight, text, color } = props;

  return (
    <>
      <Text size={size} color={color} weight={weight}>
        {text}
      </Text>
    </>
  );
}

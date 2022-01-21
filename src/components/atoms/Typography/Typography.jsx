import React from 'react';
import { Text } from './Typography.style';

export default function Typography(props) {
  // props size = small / medium / big

  return (
    <>
      <Text size="medium" color="#252A3C">
        {props.text}
      </Text>
    </>
  );
}

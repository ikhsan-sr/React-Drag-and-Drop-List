import React from 'react';
import { Wrapper } from './Tab.style';
import { Typography } from '..';

export default function Tab(props) {
  return (
    <Wrapper>
      <Typography text={props.text} size="small" weight={600} color="#6F32D2" />
    </Wrapper>
  );
}

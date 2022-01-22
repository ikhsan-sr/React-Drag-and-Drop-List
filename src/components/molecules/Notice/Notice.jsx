import React from 'react';
import { Typography } from '../../atoms';
import { Wrapper } from './Notice.style';

export default function Notice(props) {
  return (
    <Wrapper>
      <Typography text={props.data} weight={600} size="small" />
    </Wrapper>
  );
}

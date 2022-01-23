import React from 'react';
import { Icon, Typography } from '..';
import { Wrapper } from './IconText.style';

export default function IconText(props) {
  const { icon, text } = props;

  return (
    <span>
      <Wrapper>
        <Icon img={icon} name={text} />
        <Typography text={text} />
      </Wrapper>
    </span>
  );
}

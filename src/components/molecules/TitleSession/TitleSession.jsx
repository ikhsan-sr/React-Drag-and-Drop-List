import React from 'react';
import { Typography, Icon } from '../../atoms';
import { Edit, MenuHorizontal } from '../../../assets/icons';
import { Wrapper, SpaceBetween, Title } from './TitleSession.style.js';

export default function TitleSession(props) {
  const { title } = props;

  return (
    <Wrapper>
      <SpaceBetween>
        <Title>
          <Typography text={title} size="medium" />
          <Icon img={Edit} name="edit" />
        </Title>
        <div>
          <Icon img={MenuHorizontal} name="option" />
        </div>
      </SpaceBetween>
    </Wrapper>
  );
}

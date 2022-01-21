import React from 'react';
import { Typography, Icon } from '../../atoms';
import { Edit, MenuHorizontal } from '../../../assets/icons';

export default function TitleSession(props) {
  const { title } = props;

  return (
    <>
      <Typography text={title} size="medium" />
      <Icon img={Edit} name="edit" />
      <Icon img={MenuHorizontal} name="option" />
    </>
  );
}

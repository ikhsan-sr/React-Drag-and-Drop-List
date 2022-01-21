import React from 'react';
import { Lesson } from './LessonItem.style';
import { Typography, IconButton, Icon } from '../../atoms';
import {
  Drag,
  Camera,
  Location,
  Clock,
  Download,
  MenuVertical,
} from '../../../assets/icons';

export default function LessonItem(props) {
  const { title } = props.data;

  return (
    <Lesson>
      <IconButton img={Camera} />
      <Typography text={title} size="small" />
    </Lesson>
  );
}

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
      <IconButton img={Camera} bg="#F6F8FC" />
      <Typography text={title} size="small" />
    </Lesson>
  );
}

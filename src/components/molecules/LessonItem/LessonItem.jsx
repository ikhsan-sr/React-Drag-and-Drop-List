import React from 'react';
import { Lesson, Wrapper, LessonName } from './LessonItem.style';
import { Typography, IconButton, Icon, IconText } from '../../atoms';
import {
  Drag,
  Camera,
  Location,
  Clock,
  Download,
  MenuVertical,
} from '../../../assets/icons';

export default function LessonItem(props) {
  const { title, isRequired, time1, time2, isDownloadable } = props.data;

  return (
    <Wrapper>
      <Lesson>
        <LessonName>
          <IconButton img={Camera} bg="#F6F8FC" />
          <Typography text={title} size="small" />
          {isRequired && (
            <Typography
              text="Required"
              size="small"
              color="#7800EF"
              weight="600"
            />
          )}
        </LessonName>
        <div>
          <IconText icon={Clock} text={time1} />
          <IconText icon={Clock} text={time2} />
          <IconText icon={Download} text="Downloadable" />
        </div>
      </Lesson>
    </Wrapper>
  );
}

import React from 'react';
import { Typography, IconButton, Icon, IconText } from '../../atoms';
import {
  Lesson,
  Wrapper,
  LessonName,
  Detail,
  Option,
  LinkDownload,
} from './LessonItem.style';
import {
  Camera,
  Location,
  Clock,
  Download,
  Dot,
  MenuVertical,
} from '../../../assets/icons';

export default function LessonItem(props) {
  const { title, isRequired, time1, time2, isDownloadable, isOnsite } =
    props.data;

  return (
    <Wrapper>
      <Lesson>
        <LessonName>
          <IconButton img={isOnsite ? Location : Camera} bg="#F6F8FC" />
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
        <Detail>
          <IconText icon={Clock} text={time1} />
          <Icon img={Dot} />
          <IconText icon={Clock} text={time2} />
          <Icon img={Dot} />
          {isDownloadable && (
            <LinkDownload>
              <IconText icon={Download} text="Downloadable" />
            </LinkDownload>
          )}
          <Option>
            <Icon img={MenuVertical} />
          </Option>
        </Detail>
      </Lesson>
    </Wrapper>
  );
}

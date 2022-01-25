import React, { useState, useEffect } from 'react';
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
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  return (
    <Wrapper>
      {data && (
        <Lesson>
          <LessonName>
            <IconButton img={data.isOnsite ? Location : Camera} bg="#F6F8FC" />
            <Typography text={data.title} size="small" />
            {data.isRequired && (
              <Typography
                text="Required"
                size="small"
                color="#7800EF"
                weight="600"
              />
            )}
          </LessonName>
          <Detail>
            <IconText icon={Clock} text={data.time1} />
            <Icon img={Dot} />
            <IconText icon={Clock} text={data.time2} />
            <Icon img={Dot} />
            {data.isDownloadable && (
              <LinkDownload>
                <IconText icon={Download} text="Downloadable" />
              </LinkDownload>
            )}
            <Option>
              <Icon img={MenuVertical} />
            </Option>
          </Detail>
        </Lesson>
      )}
    </Wrapper>
  );
}

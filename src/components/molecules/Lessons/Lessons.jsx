import React, { useState, useRef, useEffect } from 'react';
import LessonItem from '../LessonItem/LessonItem';
import { Icon } from '../../atoms';
import { Drag } from '../../../assets/icons';
import { Wrapper, TitleWrapper } from './Lessons.style';
import { Dragable } from '../../organisms/Sessions/Sessions.style';
import { AddLesson } from '..';

export default function Lessons(props) {
  const [lessons, setLessons] = useState(props.data);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    if (!position) {
      return false;
    } else {
      dragOverItem.current = position;

      const lessonsCopy = [...lessons];
      const draggingItemContent = lessonsCopy[draggingItem.current];

      lessonsCopy.splice(draggingItem.current, 1);
      lessonsCopy.splice(dragOverItem.current, 0, draggingItemContent);

      draggingItem.current = dragOverItem.current;
      dragOverItem.current = null;

      props.refreshLessons(props.index, lessonsCopy);
      // console.log(lessonsCopy);
      setLessons(lessonsCopy);
    }
  };

  const addLesson = (lesson) => {
    const newLessons = [...lessons];

    newLessons.push(lesson);
    setLessons(newLessons);
  };

  useEffect(() => {}, [props.data]);

  return (
    <>
      {props.data && props.data.length < 1 && (
        <p style={{ textAlign: 'center' }}>Schedule is still empty</p>
      )}

      {props.data &&
        props.data.map((item, index) => (
          <Wrapper key={index} draggable>
            <Dragable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, index)}
            >
              <Icon img={Drag} name="drag" />
            </Dragable>
            <TitleWrapper>
              <LessonItem data={item} />
            </TitleWrapper>
          </Wrapper>
        ))}
      <AddLesson post={addLesson} />
    </>
  );
}

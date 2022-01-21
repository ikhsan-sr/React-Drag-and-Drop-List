import React, { useState, useRef } from 'react';
import LessonItem from '../LessonItem/LessonItem';
import { Icon } from '../../atoms';
import { Drag } from '../../../assets/icons';
import { Wrapper } from './Lessons.style';

export default function Lessons(props) {
  const [lessons, setLessons] = useState(props.data);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;

    const lessonsCopy = [...lessons];
    const draggingItemContent = lessonsCopy[draggingItem.current];

    lessonsCopy.splice(draggingItem.current, 1);
    lessonsCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;

    setLessons(lessonsCopy);
  };

  return (
    <>
      {lessons &&
        lessons.map((item, index) => (
          <Wrapper key={index} draggable>
            <span
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, index)}
            >
              <Icon img={Drag} name="drag" />
            </span>
            <LessonItem data={item} />
          </Wrapper>
        ))}
    </>
  );
}

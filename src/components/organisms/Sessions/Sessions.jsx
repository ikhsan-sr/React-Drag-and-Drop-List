import React, { useState, useRef } from 'react';
import { Dragable, Wrapper } from './Sessions.style';
import { Icon } from '../../atoms';
import { TitleSession, Lessons } from '../../molecules';
import { Drag } from '../../../assets/icons';

export default function Sessions(props) {
  const [sessions, setSessions] = useState(props.data.sessions);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;

    const sessionsCopy = [...sessions];
    const draggingItemContent = sessionsCopy[draggingItem.current];

    sessionsCopy.splice(draggingItem.current, 1);
    sessionsCopy.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;

    setSessions(sessionsCopy);
  };

  return (
    <>
      {sessions &&
        sessions.map((item, index) => (
          <Wrapper key={index} draggable>
            <Dragable>
              <span
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => handleDragEnter(e, index)}
              >
                <Icon img={Drag} name="drag" />
              </span>
            </Dragable>
            <TitleSession title={item.title} />
            <Lessons data={item.lessons} />
          </Wrapper>
        ))}
    </>
  );
}

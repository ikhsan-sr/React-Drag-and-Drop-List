import React, { useState, useRef } from 'react';
import { Wrapper } from './Sessions.style';
import { Typography, Icon } from '../../atoms';
import dragIcon from '../../../assets/icons/drag.svg';
import editIcon from '../../../assets/icons/edit.svg';
import menuIcon from '../../../assets/icons/menu-horizontal.svg';

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
            <span
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, index)}
            >
              <Icon img={dragIcon} name="drag" />
            </span>
            <Typography text={item.title} size="medium" />
            <Icon img={editIcon} name="edit" />
            <Icon img={menuIcon} name="option" />
          </Wrapper>
        ))}
    </>
  );
}

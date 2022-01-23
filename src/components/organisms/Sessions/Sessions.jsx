import React, { useState, useRef } from 'react';
import { Dragable, Wrapper, TitleWrapper } from './Sessions.style';
import { Icon, Button } from '../../atoms';
import { TitleSession, Lessons, Notice } from '../../molecules';
import { Drag, Add } from '../../../assets/icons';

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

  const handleAdd = () => {
    const newSessions = [...sessions];

    newSessions.push({
      title: `Sessions ${newSessions.length + 1}`,
      lessons: [],
    });

    setSessions(newSessions);
  };

  return (
    <>
      {props.data.notice && <Notice data={props.data.notice} />}
      {sessions &&
        sessions.map((item, index) => (
          <Wrapper key={index} draggable>
            <TitleWrapper>
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
            </TitleWrapper>
            <Lessons data={item.lessons} />
          </Wrapper>
        ))}
      <span onClick={handleAdd}>
        <Button
          text="Add Session"
          color="#7800EF"
          variant="contained"
          icon={Add}
          onClick={() => alert('Hello')}
        />
      </span>
    </>
  );
}

import React, { useState, useRef } from 'react';
import { Dragable, Wrapper, TitleWrapper } from './Sessions.style';
import { Icon, Button } from '../../atoms';
import { TitleSession, Lessons, Notice } from '../../molecules';
import { Drag, Add } from '../../../assets/icons';

export default function Sessions(props) {
  const [sessions, setSessions] = useState(props.data.sessions);
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const startDragSession = (e, position) => {
    draggingItem.current = position;
  };

  const enterDragSession = (e, position) => {
    if (!position) {
      return false;
    } else {
      dragOverItem.current = position;

      const newSessions = [...sessions];
      const draggingItemContent = newSessions[draggingItem.current];

      newSessions.splice(draggingItem.current, 1);
      newSessions.splice(dragOverItem.current, 0, draggingItemContent);

      draggingItem.current = dragOverItem.current;
      dragOverItem.current = null;

      setSessions(newSessions);
    }
  };

  const refreshLessons = (index, lessons) => {
    const newSessions = [...sessions];
    newSessions[index].lessons = lessons;

    setSessions(newSessions);
  };

  const addSession = () => {
    const newSessions = [...sessions];

    newSessions.push({
      title: `Sessions ${newSessions.length + 1}`,
      lessons: [],
    });

    setSessions(newSessions);
  };

  const addLesson = (index, lesson) => {
    const newSessions = [...sessions];
    newSessions[index].lessons.push(lesson);

    setSessions(newSessions);
  };

  const editTitle = (index, value) => {
    const newSessions = [...sessions];
    newSessions[index].title = value;

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
                  onDragStart={(e) => startDragSession(e, index)}
                  onDragOver={(e) => e.preventDefault()}
                  onDragEnter={(e) => enterDragSession(e, index)}
                >
                  <Icon img={Drag} name="drag" />
                </span>
              </Dragable>
              <TitleSession index={index} title={item.title} edit={editTitle} />
            </TitleWrapper>
            <Lessons
              data={item.lessons}
              index={index}
              refreshLessons={refreshLessons}
              addLesson={addLesson}
            />
          </Wrapper>
        ))}
      <span onClick={addSession} style={{ float: 'right' }}>
        <Button
          text="Add Session"
          bg="#7800EF"
          color="#FFFFFF"
          variant="contained"
          icon={Add}
        />
      </span>
    </>
  );
}

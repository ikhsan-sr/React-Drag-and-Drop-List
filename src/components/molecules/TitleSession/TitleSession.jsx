import React, { useState } from 'react';
import { Typography, Icon } from '../../atoms';
import { Edit, MenuHorizontal } from '../../../assets/icons';
import { Wrapper, SpaceBetween, Title, Input } from './TitleSession.style.js';
import Checkmark from '../../../assets/icons/checkmark.png';

export default function TitleSession(props) {
  const [title, setTitle] = useState(props.title);
  const [editTitle, setEditTitle] = useState(false);

  const handleSave = () => {
    setEditTitle(false);
  };

  const handleChange = (value) => {
    setTitle(value);
  };

  return (
    <Wrapper>
      <SpaceBetween>
        <Title>
          {!editTitle && (
            <>
              <Typography text={title} size="medium" />
              <div onClick={() => setEditTitle(true)}>
                <Icon img={Edit} name="edit" />
              </div>
            </>
          )}
          {editTitle && (
            <>
              <Input
                placeholder="Title Session"
                name="time1"
                defaultValue={title}
                onChange={(e) => handleChange(e.target.value)}
              />
              <img
                src={Checkmark}
                alt=""
                width={22}
                height={22}
                onClick={handleSave}
              />
            </>
          )}
        </Title>
        <div>
          <Icon img={MenuHorizontal} name="option" />
        </div>
      </SpaceBetween>
    </Wrapper>
  );
}

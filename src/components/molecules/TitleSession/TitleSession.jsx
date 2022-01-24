import React, { useState, useRef, useEffect } from 'react';
import { Typography, Icon } from '../../atoms';
import { Edit, MenuHorizontal } from '../../../assets/icons';
import {
  Wrapper,
  SpaceBetween,
  Title,
  Input,
  SaveIcon,
  EditIcon,
  Option,
} from './TitleSession.style.js';
import Checkmark from '../../../assets/icons/checkmark.png';

export default function TitleSession(props) {
  const [newTitle, setNewTitle] = useState(props.title);
  const [editTitle, setEditTitle] = useState(false);
  const inputElement = useRef(null);

  const handleSave = () => {
    props.edit(props.index, newTitle);
    setEditTitle(false);
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleChange = (value) => {
    setNewTitle(value);
  };

  const handleEdit = () => {
    setEditTitle(true);
  };

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement]);

  return (
    <Wrapper>
      <SpaceBetween>
        <Title>
          {!editTitle && (
            <>
              <Typography text={props.title} size="medium" />
              <EditIcon onClick={handleEdit}>
                <Icon img={Edit} name="edit" />
              </EditIcon>
            </>
          )}
          {editTitle && (
            <>
              <Input
                placeholder="Title Session"
                name="time1"
                defaultValue={props.title}
                onChange={(e) => handleChange(e.target.value)}
                ref={inputElement}
                onKeyPress={handleEnter}
              />
              <SaveIcon src={Checkmark} alt="save" onClick={handleSave} />
            </>
          )}
        </Title>
        <Option>
          <Icon img={MenuHorizontal} name="option" />
        </Option>
      </SpaceBetween>
    </Wrapper>
  );
}

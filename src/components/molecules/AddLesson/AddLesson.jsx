import React, { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';
import {
  StyledModal,
  FadingBackground,
  TitleModal,
  Form,
  Input,
  CTA,
} from './AddLesson.style';
import { Typography } from '../../atoms';

export default function AddLesson(props) {
  const [inputs, setInputs] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.post(inputs);
  };

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <div onClick={toggleModal}>Add Lesson Material</div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <TitleModal>
          <Typography text="Add Lesson" size="medium" weight="600" />
        </TitleModal>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Lesson Title"
            name="title"
            onChange={handleChange}
          />
          <Input placeholder="Schedule" name="time1" onChange={handleChange} />
          <Input placeholder="Duration" name="time2" onChange={handleChange} />
          <Input
            placeholder="Link Download"
            name="downloadLink"
            onChange={handleChange}
          />
          <CTA>
            <input type="submit" />

            <button onClick={toggleModal}>Save</button>
            <button onClick={toggleModal}>Close me</button>
          </CTA>
        </Form>
      </StyledModal>
    </ModalProvider>
  );
}

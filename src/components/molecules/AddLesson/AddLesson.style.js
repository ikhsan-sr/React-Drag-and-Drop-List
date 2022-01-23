import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 50rem;
  height: 40rem;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius: 1rem;`
;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const TitleModal = styled.div`
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
  border-bottom: 1px solid #DFDFDF;
`;

export const Form = styled.form`
  padding: 1rem 4rem;
`;

export const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "12px",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 8px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

export const CTA = styled.div`
  padding: 1rem;
  bottom: 0;
  `;
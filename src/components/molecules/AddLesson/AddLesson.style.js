import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 40rem;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius: 1rem;
  text-align: center;
`;

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
  type: "text",
  size: props.size || "12px",
}))`
  color: #7800EF;
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

export const IconPlus = styled.div`
  padding: 3px;
  background: #7800EF;
  border-radius: 8px;
  width: 23px;
  text-align: center;
  cursor: pointer;
`;

export const AddNewLesson = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  // justify-content: center;
`;

export const IconAdd = styled.img`
  width: 13px;
  cursor: pointer;
`;

export const BtnText = styled.span`
  cursor: pointer;
`;

export const Save = styled.button`
  padding: 10px 36px;
  margin-top: 1rem;
  border-radius: 8px;
  cursor: pointer;
  outline: inherit;
  background-color: #7800EF;
  border: solid 1px #7800EF;
  color: #FFFFFF;
`;
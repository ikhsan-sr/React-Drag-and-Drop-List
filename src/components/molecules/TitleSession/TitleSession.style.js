import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "6px",
}))`
  color: ; #252A3C;
  font-size: 1em;
  border: 1px solid #7800EF;
  border-radius: 8px;
  
  /* here we use the dynamically computed prop */
  padding: ${props => props.size};
  
  &:focus {
    outline: none;
  }
`;

export const SaveIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-top: 3px;
  cursor: pointer;
`;

export const EditIcon = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;

export const Option = styled.div`
  background-color: #F6F8FC;
  border-radius: 8px;
  width: 32px;
  text-align: center;
  cursor: pointer;
`;
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.bg || '#FFFFFF'};
  // padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 8px
`
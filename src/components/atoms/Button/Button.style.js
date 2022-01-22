import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
	outline: inherit;
  border: solid 1px ${props => props.color};
  background-color: ${props => (props.variant === 'contained' && props.bg) ? props.bg : '#FFFFFF'};
`;
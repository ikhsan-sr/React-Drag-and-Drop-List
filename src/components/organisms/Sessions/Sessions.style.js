import styled from 'styled-components';

export const Wrapper = styled.div`
  border-radius: 8px;
  padding: 16px 24px 16px 24px;
  border: solid 1px;
  margin: 1rem;
  background: #FFFFFF;
  /* Basic / 80 */

  border: 1px solid #DFE5EE;
  box-sizing: border-box;
  box-shadow: inset 0px 0px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
`;

export const Dragable = styled.span`
  cursor: -webkit-grab;
  cursor: grab;
  
  &:active {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
`
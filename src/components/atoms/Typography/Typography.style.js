import styled from 'styled-components';

export const Text = styled.span`
  color: ${props =>  props.color || '#252A3C' };
  font-size: ${props => {
    switch(props.size) {
      case 'small':
        return '16px';
      case 'medium':
        return '24px';
      case 'big':
        return '32px'
      default:
        return '14px';
    }
  }};
  weight: 500;
`
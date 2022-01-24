import React from 'react';
import { Wrapper, BorderRight, Container } from './Navbar.style';
import { Typography, IconButton } from '../../atoms';
import { Back } from '../../../assets/icons';

export default function Navbar() {
  return (
    <Wrapper>
      <Container>
        <BorderRight>
          <IconButton img={Back} />
        </BorderRight>
        <Typography size="small" text="Event" weight="700" />
      </Container>
    </Wrapper>
  );
}

import React from 'react';
import { Wrapper } from './TabBar.style';
import { Tab } from '../../atoms';

export default function TabBar() {
  return (
    <Wrapper>
      {/* Loop Tab here */}
      <Tab text="Curriculum" />
    </Wrapper>
  );
}

import React from 'react';
import { TitleBar, Navbar, Sessions } from '../../components/organisms';
import { Container } from '../../Global.style';
import CoursesData from '../../dummy.json';

export default function Courses() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleBar />
        <Sessions data={CoursesData} />
      </Container>
    </>
  );
}

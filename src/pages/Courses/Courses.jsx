import React from 'react';
import { TitleBar, Navbar, Sessions, TabBar } from '../../components/organisms';
import { Container } from '../../Global.style';
import CoursesData from '../../dummy.json';

export default function Courses() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleBar />
        <TabBar />
        <Sessions data={CoursesData} />
      </Container>
    </>
  );
}

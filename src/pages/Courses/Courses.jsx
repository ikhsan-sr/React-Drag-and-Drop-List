import React from 'react';
import { TitleBar, Navbar, Sessions } from '../../components/organisms';
import CoursesData from '../../dummy.json';

export default function Courses() {
  return (
    <>
      <Navbar />
      <TitleBar />
      <Sessions data={CoursesData} />
    </>
  );
}

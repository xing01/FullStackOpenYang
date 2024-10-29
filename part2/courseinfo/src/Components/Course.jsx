// components/Course.jsx
import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} /> {/* Renderiza el nombre del curso */}
      <Content parts={course.parts} /> {/* Renderiza las partes del curso */}
    </div>
  );
};

export default Course;

import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {

    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <Header title={course.name} />
            <Content parts={course.parts} />
            <p><strong>Total of {totalExercises} exercises</strong></p>
        </div>
    );
};

export default Course;

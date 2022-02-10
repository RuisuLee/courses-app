import { useState } from 'react';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';

import { ADD_NEW_COURSE_BUTTON_TEXT, mockedCoursesList } from '../../constants';
import { isSubStrInString } from '../../helpers/common';
import { ICourse } from '../../models/Course';

import './Courses.scss';

interface ICoursesProps {
  addNewCourse: () => void;
}

export function Courses({ addNewCourse }: ICoursesProps) {
  const [courses, setCourses] = useState<Array<ICourse>>(mockedCoursesList);

  const onSearch = (value: string) => {
    if (!value) {
      setCourses(mockedCoursesList);
      return;
    }

    const findedCourses = mockedCoursesList.filter(
      (course) =>
        isSubStrInString(course.id, value) ||
        isSubStrInString(course.title, value)
    );

    setCourses(findedCourses);
  };
  return (
    <section className='courses'>
      <nav className='search-bar'>
        <SearchBar search={onSearch} />
        <Button
          className='search-bar__button'
          buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
          buttonType='button'
          onClick={addNewCourse}
        />
      </nav>
      <main>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </main>
    </section>
  );
}

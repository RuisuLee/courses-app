import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';

import {
  ADD_NEW_COURSE_BUTTON_TEXT,
  mockedCoursesList,
  ROUTES,
} from '../../constants';
import { isSubStrInString } from '../../helpers/common';
import { ICourse } from '../../models/Course';

import './Courses.scss';

export function Courses() {
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

  const navigate = useNavigate();
  return (
    <section className='courses'>
      <nav className='search-bar'>
        <SearchBar search={onSearch} />
        <Button
          className='search-bar__button'
          buttonText={ADD_NEW_COURSE_BUTTON_TEXT}
          buttonType='button'
          onClick={() => {
            navigate(ROUTES.addCourse);
          }}
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

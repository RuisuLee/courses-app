import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';

import { ADD_NEW_COURSE_BUTTON_TEXT, ROUTES } from '../../constants';

import './Courses.scss';
import { selectCourses } from '../../store/courses/coursesSelector';
import { useCourses } from '../../hooks/useCourses';
import { useState } from 'react';
import { ICourse } from '../../models/Course';
import { isSubStrInString } from '../../helpers/common';

export function Courses() {
  useCourses();
  const navigate = useNavigate();
  const storeCourses = useSelector(selectCourses);
  const [courses, setCourses] = useState<Array<ICourse> | null>(storeCourses);

  function onSearch(value: string) {
    if (!value) {
      setCourses(storeCourses);
      return;
    }

    const findedCourses = storeCourses?.filter(
      (course) =>
        isSubStrInString(course.id, value) ||
        isSubStrInString(course.title, value)
    );

    if (findedCourses) {
      setCourses(findedCourses);
    } else {
      setCourses(null);
    }
  }

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
        {courses ? (
          courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <h1>No active courses found</h1>
        )}
      </main>
    </section>
  );
}

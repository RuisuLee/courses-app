import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from '../../common/Button/Button';
import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';

import { ADD_NEW_COURSE_BUTTON_TEXT, ROUTES } from '../../constants';

import './Courses.scss';
import { selectCourses } from '../../store/courses/coursesSelector';
import { courseFound } from '../../store/courses/coursesActions';
import { useCourses } from '../../hooks/useCourses';

export function Courses() {
  useCourses();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);

  function onSearch(value: string) {
    dispatch(courseFound(value));
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

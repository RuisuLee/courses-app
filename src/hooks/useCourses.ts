import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COURSES_URL } from '../constants';
import { makeRequest } from '../helpers/makeRequest';
import { ICourse } from '../models/Course';

import { coursesLoaded } from '../store/courses/coursesActions';
import { selectCourses } from '../store/courses/coursesSelector';

interface ICoursesResponse {
  successful: boolean;
  result: Array<ICourse>;
}

export const useCourses = () => {
  const courses = useSelector(selectCourses);
  const dispatch = useDispatch();

  useEffect(() => {
    if (courses) {
      dispatch(coursesLoaded(courses));
    }
  }, [courses]);

  useEffect(() => {
    makeRequest<ICoursesResponse>(COURSES_URL).then((resp) => {
      if (resp.successful) {
        dispatch(coursesLoaded(resp.result));
      } else {
        dispatch(coursesLoaded([]));
      }
    });
  }, []);
};

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses } from '../store/courses/coursesSelector';
import { loadCourses } from '../store/courses/thunk';

export const useCourses = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const courses = useSelector(selectCourses);
  useEffect(() => {
    dispatch(loadCourses(courses));
    setLoading(false);
  }, []);

  return loading;
};

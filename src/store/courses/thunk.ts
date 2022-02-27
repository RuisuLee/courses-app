import { COURSES_URL } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { getUserToken } from '../../helpers/userData';
import { ICourse } from '../../models/Course';
import { courseDeleted, coursesLoaded } from './coursesActions';

interface ICoursesResponse {
  successful: boolean;
  result: Array<ICourse>;
}

export const loadCourses =
  (courses: Array<ICourse> | null) => async (dispatch: any) => {
    if (courses) {
      dispatch(coursesLoaded(courses));
    } else {
      makeRequest<ICoursesResponse>(COURSES_URL).then(
        (resp: ICoursesResponse) => {
          if (resp.successful) {
            dispatch(coursesLoaded(resp.result));
          }
        }
      );
    }
  };

export const deleteCourse = (courseId: string) => async (dispatch: any) => {
  const token = getUserToken();
  makeRequest<string>(`/courses/${courseId}`, {
    method: 'DELETE',
    headers: {
      Authorization: token || '',
    },
  }).then((resp) => {
    if (resp === 'OK') {
      dispatch(courseDeleted(courseId));
    }
  });
};

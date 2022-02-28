import {
  COURSES_URL,
  CREATE_COURSE_URL,
  DELETE_COURSE_URL,
} from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { getUserToken } from '../../helpers/userData';
import { ICourse, INewCourse } from '../../models/Course';
import { courseAdded, courseDeleted, coursesLoaded } from './coursesActions';

interface ICoursesResponse {
  successful: boolean;
  result: Array<ICourse>;
}

interface ICourseDeleteResponse {
  successful: boolean;
  result: string;
}

interface ICourseCreateResponse {
  successful: boolean;
  result: ICourse;
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
  makeRequest<ICourseDeleteResponse>(DELETE_COURSE_URL(courseId), {
    method: 'DELETE',
    headers: {
      Authorization: token || '',
    },
  }).then((resp) => {
    if (resp.successful) {
      dispatch(courseDeleted(courseId));
    }
  });
};

export const createCourse = (course: INewCourse) => async (dispatch: any) => {
  const token = getUserToken();
  makeRequest<ICourseCreateResponse>(CREATE_COURSE_URL, {
    method: 'POST',
    headers: {
      Authorization: token || '',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(course),
  }).then((resp) => {
    if (resp.successful) {
      dispatch(courseAdded(resp.result));
    }
  });
};

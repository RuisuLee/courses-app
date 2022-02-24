import { ICourse } from '../../models/Course';
import {
  courseAdded,
  courseDeleted,
  CoursesActions,
  coursesLoaded,
} from './coursesActions';

export type CoursesState = Array<ICourse> | null;

export function coursesReducer(
  state: CoursesState = null,
  action: CoursesActions
): CoursesState {
  switch (action.type) {
    case coursesLoaded.type:
      return action.payload;
    case courseAdded.type:
      const nonEmptyState = state || [];
      return [action.payload, ...nonEmptyState];
    case courseDeleted.type:
      if (!state || !action.payload) {
        return state;
      }
      const filteredCoursesList = state.filter(
        (course) => course.id !== action.payload
      );
      return filteredCoursesList;
    default:
      return state;
  }
}

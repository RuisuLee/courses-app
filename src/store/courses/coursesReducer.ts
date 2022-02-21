import { ICourse } from '../../models/Course';
import { courseDeleted, CoursesActions, coursesLoaded } from './coursesActions';

export function coursesReducer(
  state: Array<ICourse>,
  action: CoursesActions
): Array<ICourse> {
  switch (action.type) {
    case coursesLoaded.type:
      return action.payload;
    case courseDeleted.type:
      return state.filter((course) => course.id !== action.payload);
    default:
      return state;
  }
}

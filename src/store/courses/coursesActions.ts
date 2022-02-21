import { createActionFactory } from '..';
import { ICourse } from '../../models/Course';

export const coursesLoaded =
  createActionFactory('courses_loaded')<Array<ICourse>>();
export const courseDeleted = createActionFactory('course_deleted')<string>();

export type CoursesActions =
  | ReturnType<typeof coursesLoaded>
  | ReturnType<typeof courseDeleted>;

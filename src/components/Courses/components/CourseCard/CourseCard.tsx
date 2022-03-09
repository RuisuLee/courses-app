import { useNavigate, generatePath, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../../common/Button/Button';

import {
  COURSE_CARD_AUTHORS,
  COURSE_CARD_CREATED,
  COURSE_CARD_DURATION,
  ROUTES,
  SHOW_COURSE_BUTTON_TEXT,
} from '../../../../constants';

import { getAuthors } from '../../../../helpers/authors';
import { getFormattedDate } from '../../../../helpers/dateGenerator';
import { getFormattedDuration } from '../../../../helpers/pipeDuration';

import { ICourse } from '../../../../models/Course';
import { selectAuthors } from '../../../../store/authors/authorsSelector';

import './CourseCard.scss';
import { selectUser } from '../../../../store/user/userSelector';
import { deleteCourse } from '../../../../store/courses/thunk';
import { UserRole } from '../../../../helpers/userData';

interface ICourseProps {
  course: ICourse;
}

export function CourseCard({ course }: ICourseProps) {
  const navigate = useNavigate();
  const authors = useSelector(selectAuthors);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const deleteCourseHandler = (id: string) => {
    dispatch(deleteCourse(id));
  };

  return (
    <div className='course-card' data-testid='courseCard'>
      <section className='course-card__title-section'>
        <h2 data-testid='title'>{course.title}</h2>
        <p data-testid='description'>{course.description}</p>
      </section>
      <section className='course-card__additional-info'>
        <div className='course-card__additional-info-content'>
          <span className='course-card__authors'>
            <b>{COURSE_CARD_AUTHORS}</b>
            <span data-testid='authors'>
              {getAuthors(course.authors, authors)}
            </span>
          </span>
          <span>
            <b>{COURSE_CARD_DURATION}</b>
            <span data-testid='duration'>
              {getFormattedDuration(course.duration)}
            </span>
          </span>
          <span>
            <b>{COURSE_CARD_CREATED}</b>
            <span data-testid='creationDate'>
              {getFormattedDate(course.creationDate)}
            </span>
          </span>
        </div>
        <div className='course-card__buttons-wrapper'>
          <Button
            className='course-card__additional-info-button'
            buttonText={SHOW_COURSE_BUTTON_TEXT}
            buttonType='button'
            onClick={() => {
              const path = generatePath(ROUTES.course, {
                courseId: course.id,
              });
              navigate(path);
            }}
          />
          {user?.role === UserRole.admin ? (
            <>
              <Link
                className='course-card__edit-button'
                to={generatePath(ROUTES.updateCourse, {
                  courseId: course.id,
                })}
              ></Link>
              <Button
                className='course-card__delete-button'
                buttonText=''
                buttonType='button'
                onClick={() => {
                  deleteCourseHandler(course.id);
                }}
              />
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}

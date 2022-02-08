import { Button } from '../../../../common/Button/Button';

import {
  COURSE_CARD_AUTHORS,
  COURSE_CARD_CREATED,
  COURSE_CARD_DURATION,
  SHOW_COURSE_BUTTON_TEXT,
} from '../../../../constants';

import { getAuthors } from '../../../../helpers/authors';
import { getFormattedDate } from '../../../../helpers/dateGenerator';
import { getFormattedDuration } from '../../../../helpers/pipeDuration';

import { ICourse } from '../../../../models/Course';

import './CourseCard.scss';

export function CourseCard({
  title,
  description,
  authors,
  duration,
  creationDate,
}: ICourse) {
  const showCourse = () => {};
  return (
    <div className='course-card'>
      <section className='course-card__title-section'>
        <h2>{title}</h2>
        <p>{description}</p>
      </section>
      <section className='course-card__additional-info'>
        <div className='course-card__additional-info-content'>
          <span className='course-card__authors'>
            <b>{COURSE_CARD_AUTHORS}</b>
            {getAuthors(authors)}
          </span>
          <span>
            <b>{COURSE_CARD_DURATION}</b>
            {getFormattedDuration(duration)}
          </span>
          <span>
            <b>{COURSE_CARD_CREATED}</b>
            {getFormattedDate(creationDate)}
          </span>
        </div>
        <Button
          className='course-card__additional-info-button'
          buttonText={SHOW_COURSE_BUTTON_TEXT}
          buttonType='button'
          onClick={showCourse}
        />
      </section>
    </div>
  );
}

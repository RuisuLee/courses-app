import { Formik } from 'formik';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import {
  ADD_AUTHOR_BUTTON_TEXT,
  COURSE_AUTHORS_LIST_IS_EMPTY,
  COURSE_AUTHORS_LIST_TITLE,
  CREATE_AUTHOR_BUTTON_TEXT,
  CREATE_COURSE_ADD_AUTHOR_LABEL_TEXT,
  CREATE_COURSE_ADD_AUTHOR_PLACEHOLDER_TEXT,
  CREATE_COURSE_ADD_AUTHOR_TITLE,
  CREATE_COURSE_AUTHORS_LIST_TITLE,
  CREATE_COURSE_BUTTON_TEXT,
  CREATE_COURSE_DESCRIPTION_LABEL_TEXT,
  CREATE_COURSE_DESCRIPTION_PLACEHOLDER_TEXT,
  CREATE_COURSE_DURATION_PLACEHOLDER_TEXT,
  CREATE_COURSE_DURATION_TITLE,
  CREATE_COURSE_TITLE_LABEL_TEXT,
  CREATE_COURSE_TITLE_PLACEHOLDER_TEXT,
} from '../../constants';

import { getFormattedDuration } from '../../helpers/pipeDuration';

import './CreateCourse.scss';

export function CreateCourse() {
  const onSubmit = () => {};
  return (
    <>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        {(props) => (
          <form className='create-course-form' onSubmit={props.handleSubmit}>
            <section>
              <div>
                <div className='title'>
                  <Input
                    name='titleInput'
                    labelText={CREATE_COURSE_TITLE_LABEL_TEXT}
                    placeholdetText={CREATE_COURSE_TITLE_PLACEHOLDER_TEXT}
                  />
                  <Button
                    buttonText={CREATE_COURSE_BUTTON_TEXT}
                    buttonType='submit'
                  />
                </div>
                <div className='description'>
                  <label>{CREATE_COURSE_DESCRIPTION_LABEL_TEXT}</label>
                  <textarea
                    placeholder={CREATE_COURSE_DESCRIPTION_PLACEHOLDER_TEXT}
                  ></textarea>
                </div>
              </div>
            </section>
            <section className='course-additional-info'>
              <div className='course-additional-info--left'>
                <div className='course-additional-info__add-author'>
                  <h3 className='course-additional-info__add-author-title'>
                    {CREATE_COURSE_ADD_AUTHOR_TITLE}
                  </h3>
                  <Input
                    name='authorName'
                    className='course-additional-info__input'
                    labelText={CREATE_COURSE_ADD_AUTHOR_LABEL_TEXT}
                    placeholdetText={CREATE_COURSE_ADD_AUTHOR_PLACEHOLDER_TEXT}
                  />
                  <Button
                    className='course-additional-info__button'
                    buttonText={CREATE_AUTHOR_BUTTON_TEXT}
                    buttonType='button'
                  />
                </div>
                <div className='course-additional-info__duration'>
                  <h3 className='course-additional-info__duration-title'>
                    {CREATE_COURSE_DURATION_TITLE}
                  </h3>
                  <Input
                    name='duration'
                    className='course-additional-info__input'
                    labelText={CREATE_COURSE_DURATION_TITLE}
                    placeholdetText={CREATE_COURSE_DURATION_PLACEHOLDER_TEXT}
                  />
                  <p>
                    {CREATE_COURSE_DURATION_TITLE}: {getFormattedDuration(60)}
                  </p>
                </div>
              </div>
              <div className='course-additional-info--right'>
                <div className='course-additional-info__author-list'>
                  <h3>{CREATE_COURSE_AUTHORS_LIST_TITLE}</h3>
                  <div>
                    <div className='course-additional-info__author-list-item'>
                      <span>Hardcoded name....</span>{' '}
                      <Button
                        buttonText={ADD_AUTHOR_BUTTON_TEXT}
                        buttonType='button'
                      />
                    </div>
                  </div>
                </div>
                <div className='course-additional-info__author-list'>
                  <h3>{COURSE_AUTHORS_LIST_TITLE}</h3>
                  <div>{COURSE_AUTHORS_LIST_IS_EMPTY}</div>
                </div>
              </div>
            </section>
          </form>
        )}
      </Formik>
    </>
  );
}

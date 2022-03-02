import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { useCourse } from '../../hooks/useCourse';
import { IUpdatedCourse } from '../../models/Course';
import { updateCourse } from '../../store/courses/thunk';
import {
  CreateCourseForm,
  ICreateCourseFormValues,
} from '../CreateCourse/components/CreateCourseForm/CourseForm';
import { CourseFormSchema } from '../CreateCourse/CreateCourse';

export function UpdateCourse() {
  const { courseId } = useParams();
  const { loading, course } = useCourse(courseId);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (inputCourse: ICreateCourseFormValues) => {
    const course: IUpdatedCourse = {
      title: inputCourse.titleInput,
      description: inputCourse.description,
      duration: parseInt(inputCourse.duration),
      authors: inputCourse.authors.map((author) => {
        return author.id;
      }),
    };
    dispatch(updateCourse(course, courseId));

    navigate(ROUTES.courses);
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Formik
          initialValues={course}
          onSubmit={onSubmit}
          validationSchema={CourseFormSchema}
        >
          {(props) => <CreateCourseForm {...props} />}
        </Formik>
      )}
    </>
  );
}

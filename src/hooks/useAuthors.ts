import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORS_URL } from '../constants';
import { makeRequest } from '../helpers/makeRequest';
import { ICourse } from '../models/Course';
import { authorsLoaded } from '../store/authors/authorsActions';
import { selectAuthors } from '../store/authors/authorsSelector';

interface ICoursesResponse {
  successful: boolean;
  result: Array<ICourse>;
}

export const useAuthors = () => {
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authors) {
      dispatch(authorsLoaded(authors));
    } else {
      makeRequest(AUTHORS_URL).then((resp: any) => {
        if (resp.successful) {
          dispatch(authorsLoaded(resp.result));
        } else {
          dispatch(authorsLoaded([]));
        }
      });
    }
  }, []);
};

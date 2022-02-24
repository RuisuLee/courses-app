import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AUTHORS_URL } from '../constants';
import { makeRequest } from '../helpers/makeRequest';
import { IAuthor } from '../models/Author';
import { authorsLoaded } from '../store/authors/authorsActions';
import { selectAuthors } from '../store/authors/authorsSelector';

interface IAuthorsResponse {
  successful: boolean;
  result: Array<IAuthor>;
}

export const useAuthors = () => {
  const authors = useSelector(selectAuthors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authors) {
      dispatch(authorsLoaded(authors));
    } else {
      makeRequest<IAuthorsResponse>(AUTHORS_URL).then((resp) => {
        if (resp.successful) {
          dispatch(authorsLoaded(resp.result));
        } else {
          dispatch(authorsLoaded([]));
        }
      });
    }
  }, []);
};

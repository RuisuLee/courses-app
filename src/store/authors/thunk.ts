import { AUTHORS_URL } from '../../constants';
import { makeRequest } from '../../helpers/makeRequest';
import { IAuthor } from '../../models/Author';
import { authorsLoaded } from './authorsActions';

interface IAuthorsResponse {
  successful: boolean;
  result: Array<IAuthor>;
}

export const loadAuthors =
  (authors: Array<IAuthor> | null) => async (dispatch: any) => {
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
  };

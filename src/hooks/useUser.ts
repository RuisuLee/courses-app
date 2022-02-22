import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserToken, IUser } from '../helpers/userData';
import { makeRequest } from '../helpers/makeRequest';
import { ROUTES, USER } from '../constants';
import { login } from '../store/user/userActions';

interface IUserResponse {
  successful: boolean;
  result: IUser;
}

export const useUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = getUserToken();
    if (token) {
      makeRequest<IUserResponse>(USER, {
        headers: {
          Authorization: token,
        },
      }).then((resp) => {
        const user = {
          ...resp.result,
          token,
        };
        dispatch(login(user));
      });
    }
  }, []);
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { putUserToken } from '../helpers/userData';
import { userLoaded } from '../store/user/userActions';
import { selectUser } from '../store/user/userSelector';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user.token) {
      putUserToken(user);
    }
  }, [user]);

  useEffect(() => {
    dispatch(userLoaded(user));
  }, []);
};

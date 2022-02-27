import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from '../store/user/thunk';

export const useUser = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
    setLoading(false);
  }, []);

  return loading;
};

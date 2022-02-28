import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { selectUser } from '../../store/user/userSelector';

export function PrivateRouter({ children }: any) {
  const user = useSelector(selectUser);
  return user?.role === 'admin' ? children : <Navigate to={ROUTES.courses} />;
}

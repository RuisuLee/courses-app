import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { ROUTES } from '../../constants';
import { selectUser } from '../../store/user/userSelector';
import { CreateCourse } from '../CreateCourse/CreateCourse';

export function PrivateRouter() {
  const user = useSelector(selectUser);
  return user?.role === 'admin' ? (
    <>
      <Route path={ROUTES.addCourse} element={<CreateCourse />} />
    </>
  ) : (
    <Navigate to={ROUTES.courses} />
  );
}

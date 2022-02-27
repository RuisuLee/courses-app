import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';

import { Courses } from './components/Courses/Courses';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

import './App.scss';

import { ROUTES } from './constants';
import { configureStore } from './store';
import { selectUser } from './store/user/userSelector';
import { useUser } from './hooks/useUser';
import { PrivateRouter } from './components/PrivateRouter/PrivateRouter';

function App() {
  const store = useMemo(() => {
    return configureStore();
  }, []);

  return (
    <div className='App'>
      <Provider store={store}>
        <AppInner></AppInner>
      </Provider>
    </div>
  );
}

function AppInner() {
  const user = useSelector(selectUser);
  const loading = useUser();
  return (
    <Router>
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          {user ? (
            <>
              <Route path='/' element={<PrivateRouter />}>
                <Route path='/' element={<Navigate to={ROUTES.courses} />} />
                <Route path={ROUTES.course} element={<CourseInfo />} />
              </Route>
              <Route path={ROUTES.courses} element={<Courses />} />
              <Route path='*' element={<ErrorPage />} />
            </>
          ) : (
            <>
              <Route path='/' element={<Navigate to={ROUTES.login} />} />
              <Route path={ROUTES.registration} element={<Registration />} />
              <Route path={ROUTES.login} element={<Login />} />
              <Route path='*' element={<ErrorPage />} />
            </>
          )}
        </Routes>
      )}
    </Router>
  );
}

export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useMemo } from 'react';
import { Provider } from 'react-redux';

import { Courses } from './components/Courses/Courses';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

import './App.scss';

import { ROUTES } from './constants';
import { configureStore } from './store';
import { useUser } from './hooks/useUser';
import { PrivateRouter } from './components/PrivateRouter/PrivateRouter';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { UpdateCourse } from './components/UpdateCourse/UpdateCourse';

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
  const { loading, user } = useUser();

  return (
    <Router>
      <Header />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Routes>
          {user ? (
            <>
              <Route path='/' element={<Navigate to={ROUTES.courses} />} />
              <Route path={ROUTES.course} element={<CourseInfo />} />
              <Route path={ROUTES.courses} element={<Courses />} />
              <Route
                path={ROUTES.addCourse}
                element={
                  <PrivateRouter>
                    <CreateCourse />
                  </PrivateRouter>
                }
              />
              <Route
                path={ROUTES.updateCourse}
                element={
                  <PrivateRouter>
                    <UpdateCourse />
                  </PrivateRouter>
                }
              />
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

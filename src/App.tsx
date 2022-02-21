import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useMemo } from 'react';
import { Provider, useSelector } from 'react-redux';

import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

import './App.scss';

import { ROUTES } from './constants';
import { configureStore } from './store';
import { selectUser } from './store/user/userSelector';

function App() {
  const store = useMemo(() => {
    return configureStore();
  }, []);
  const user = useSelector(selectUser);

  return (
    <div className='App'>
      <Router>
        <Header />
        {store && (
          <Provider store={store}>
            <Routes>
              {user.token ? (
                <>
                  <Route path='/' element={<Navigate to={ROUTES.courses} />} />
                  <Route path={ROUTES.courses} element={<Courses />} />
                  <Route path={ROUTES.course} element={<CourseInfo />} />
                  <Route path={ROUTES.addCourse} element={<CreateCourse />} />
                  <Route path='*' element={<ErrorPage />} />
                </>
              ) : (
                <>
                  <Route path='/' element={<Navigate to={ROUTES.login} />} />
                  <Route
                    path={ROUTES.registration}
                    element={<Registration />}
                  />
                  <Route path={ROUTES.login} element={<Login />} />
                  <Route path='*' element={<ErrorPage />} />
                </>
              )}
            </Routes>
          </Provider>
        )}
      </Router>
    </div>
  );
}

export default App;

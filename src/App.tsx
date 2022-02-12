import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

import { UserContext } from './contexts/userContext';
import { getUserData, IUser } from './helpers/userData';

import './App.scss';
import { ROUTES } from './constants';

function App() {
  const [user, setUser] = useState<IUser | undefined>({ name: '', token: '' });

  useEffect(() => {
    const user = getUserData();
    setUser(user);
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            {user?.token ? (
              <>
                <Route
                  path='/'
                  element={<Navigate to={ROUTES.courses} />}
                ></Route>
                <Route path={ROUTES.courses} element={<Courses />}></Route>
                <Route
                  path={`${ROUTES.courses}/:courseId`}
                  element={<CourseInfo />}
                ></Route>
                <Route
                  path={ROUTES.addCourse}
                  element={<CreateCourse />}
                ></Route>
                <Route path='*' element={<ErrorPage />}></Route>
              </>
            ) : (
              <>
                <Route
                  path={ROUTES.registration}
                  element={<Registration />}
                ></Route>
                <Route path={ROUTES.login} element={<Login />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
              </>
            )}
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;

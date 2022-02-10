import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { ErrorPage } from './components/ErrorPage/ErrorPage';
import { Header } from './components/Header/Header';
import { Registration } from './components/Registration/Registration';

import './App.scss';
import { Login } from './components/Login/Login';
import { CourseInfo } from './components/CourseInfo/CourseInfo';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to='/courses' />}></Route>
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
          <Route path='/courses/:courseId' element={<CourseInfo />}></Route>
          <Route path='/courses/add' element={<CreateCourse />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

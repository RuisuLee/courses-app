import { useState } from 'react';

import { Courses } from './components/Courses/Courses';
import { CreateCourse } from './components/CreateCourse/CreateCourse';
import { Header } from './components/Header/Header';

import './App.scss';

function App() {
  const [isCreateCourse, setIsCreateCourse] = useState(false);

  const onAddNewCourse = () => {
    setIsCreateCourse(true);
  };

  const onCreateNewCourse = () => {
    setIsCreateCourse(false);
  };

  return (
    <div className='App'>
      <Header />
      {isCreateCourse ? (
        <CreateCourse createNewCourse={onCreateNewCourse} />
      ) : (
        <Courses addNewCourse={onAddNewCourse} />
      )}
    </div>
  );
}

export default App;

import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './Registration.scss';

const init = {
  name: '',
  email: '',
  password: '',
};

export function Registration() {
  const onSubmit = () => {};
  return (
    <section className='registration-wrapper'>
      <h1>Registration</h1>
      <Formik initialValues={init} onSubmit={onSubmit}>
        {(props) => (
          <form onSubmit={props.handleSubmit} className='registration'>
            <Input
              name='name'
              labelText='Name'
              placeholdetText='Enter name'
              className='registration__input'
            ></Input>
            <Input
              name='email'
              labelText='Email'
              placeholdetText='Enter email'
              className='registration__input'
            ></Input>
            <Input
              name='password'
              labelText='Password'
              placeholdetText='Enter password'
              className='registration__input'
            ></Input>
            <Button
              buttonText='Registration'
              buttonType='submit'
              className='registration__button'
            ></Button>
          </form>
        )}
      </Formik>
      <p>
        If you have an account you can <Link to='/login'>Login</Link>
      </p>
    </section>
  );
}

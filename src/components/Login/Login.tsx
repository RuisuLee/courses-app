import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import './Login.scss';

const init = {
  email: '',
  password: '',
};

export function Login() {
  const onSubmit = () => {};
  return (
    <section className='login-wrapper'>
      <h1>Login</h1>
      <Formik initialValues={init} onSubmit={onSubmit}>
        {(props) => (
          <form onSubmit={props.handleSubmit} className='login'>
            <Input
              name='email'
              labelText='Email'
              placeholdetText='Enter email'
              className='login__input'
            ></Input>
            <Input
              name='password'
              labelText='Password'
              placeholdetText='Enter password'
              className='login__input'
            ></Input>
            <Button
              buttonText='Login'
              buttonType='submit'
              className='login__button'
            ></Button>
          </form>
        )}
      </Formik>
      <p>
        If you not have an account you can{' '}
        <Link to='/registration'>Register</Link>
      </p>
    </section>
  );
}

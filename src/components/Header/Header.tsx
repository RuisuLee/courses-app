import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSelector';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import { LOGOUT_BUTTON_TEXT, ROUTES } from '../../constants';

import './Header.scss';
import { logout } from '../../store/user/userActions';

export function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout(user));
    navigate(ROUTES.login);
  };

  return (
    <header className='header'>
      <Logo />
      {user ? (
        <div className='user-bar'>
          <div className='user-bar__username'>{user.name}</div>
          <Button
            className='user-bar__button'
            buttonText={LOGOUT_BUTTON_TEXT}
            buttonType='button'
            onClick={logoutHandler}
          />
        </div>
      ) : null}
    </header>
  );
}

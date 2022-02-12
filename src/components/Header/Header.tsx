import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import { LOGOUT_BUTTON_TEXT, ROUTES } from '../../constants';
import { UserContext } from '../../contexts/userContext';

import './Header.scss';
import { clearUserData } from '../../helpers/userData';

export function Header() {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    clearUserData();
    navigate(ROUTES.login);
  };

  return (
    <header className='header'>
      <Logo />
      {userContext ? (
        <div className='user-bar'>
          <div className='user-bar__username'>{userContext.name}</div>
          <Button
            className='user-bar__button'
            buttonText={LOGOUT_BUTTON_TEXT}
            buttonType='button'
            onClick={logout}
          />
        </div>
      ) : null}
    </header>
  );
}

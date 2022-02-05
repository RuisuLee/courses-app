import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';

import { LOGOUT_BUTTON_TEXT } from '../../constants';

import './Header.scss';

export function Header() {
  const logout = () => {};
  return (
    <header className='header'>
      <Logo />
      <div className='user-bar'>
        <div className='user-bar__username'>Hardcoded user name</div>
        <Button
          className='user-bar__button'
          buttonText={LOGOUT_BUTTON_TEXT}
          buttonType='button'
          onClick={logout}
        />
      </div>
    </header>
  );
}

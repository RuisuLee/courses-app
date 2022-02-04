import { Button } from '../../common/Button/Button';
import { Logo } from './components/Logo/Logo';
import './Header.scss';

export function Header() {
  const logout = () => {};
  return (
    <header className='header'>
      <Logo />
      <div className='user-bar'>
        <div className='user-bar__username'>User name</div>
        <Button
          className='user-bar__button'
          buttonText='Logout'
          buttonType='button'
          onClick={logout}
        />
      </div>
    </header>
  );
}

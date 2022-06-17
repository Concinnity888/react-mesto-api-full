import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header({ email }) {
  const location = useLocation();

  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Место' />

      <div className='header__links'>
        {location.pathname === '/signin' && (
          <Link to='/signup' className='header__link'>
            Регистрация
          </Link>
        )}

        {location.pathname === '/signup' && (
          <Link to='/signin' className='header__link'>
            Войти
          </Link>
        )}

        {location.pathname === '/' && (
          <>
            {email && <span className='header__email'>{email}</span>}{' '}
            <Link to='/signin' className='header__link header__link_color_gray'>
              Выйти
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;

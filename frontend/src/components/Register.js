import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onRegister({ email, password });
  };

  return (
    <div className='auth'>
      <h2 className='auth__title'>Регистрация</h2>

      <form className='auth__form' name='form-auth' onSubmit={handleSubmit}>
        <div className='auth__field-wrap'>
          <input
            className='auth__field'
            type='email'
            name='email'
            id='email'
            minLength='2'
            maxLength='40'
            placeholder='Email'
            required
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='auth__field-wrap'>
          <input
            className='auth__field'
            type='password'
            name='password'
            id='password'
            minLength='2'
            maxLength='40'
            placeholder='Пароль'
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className='auth__btn-submit'
          type='submit'
          aria-label='Зарегистрироваться'
        >
          Зарегистрироваться
        </button>
        <p className='auth__text'>
          Уже зарегистрированы?
          <Link className='auth__link' to='./signin'>
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;

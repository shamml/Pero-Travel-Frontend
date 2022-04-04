import React, { useEffect, useState } from 'react';
import { authorization } from '../../../redux/features/application';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

const SigninPage = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [loginError, setLoginError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым',
  );

  const [formValid, setFormValid] = useState(false);

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    let res =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!res.test(String(e.target.value).toLowerCase())) {
      setLoginError('Неправильный логин');
    } else {
      setLoginError('');
    }
    if (!e.target.value) {
      setLoginError('Логин не может быть пустым');
    }
  };

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Некорректный пароль');
    } else {
      setPasswordError('');
    }
    if (!e.target.value) {
      setPasswordError('Пароль не может быть пустым');
    }
  }

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [loginError, passwordError]);

  function handleClickLogin(e) {
    dispatch(authorization(login, password));
    setLogin('');
    setPassword('');
  }
  return (
    <div className={styles.containerSignIn}>
      <div className={styles.signIn}>
        <form>
          <h1>Авторизация</h1>
          <input
            name="login"
            type="text"
            value={login}
            onChange={handleChangeLogin}
            placeholder="Enter your email.."
            onBlur={handleBlur}
          />
          {loginDirty && loginError && (
            <div style={{ color: 'red' }}>{loginError}</div>
          )}
          <input
            name="password"
            type="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Enter your password.."
            onBlur={handleBlur}
          />
          {passwordDirty && passwordError && (
            <div style={{ color: 'red' }}>{passwordError}</div>
          )}
          <Link to="/">
            <button
              onClick={handleClickLogin}
              type="submit"
              disabled={formValid}
            >
              Войти
            </button>
          </Link>
        </form>
        <Link to="/signup">
          <button>Зарегистрироваться</button>
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;

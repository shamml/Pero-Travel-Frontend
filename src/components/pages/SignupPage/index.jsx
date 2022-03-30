import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../../redux/features/application';
import styles from './styles.module.css';
const SignupPage = () => {
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

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    let registrationLogin =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!registrationLogin.test(String(e.target.value).toLowerCase())) {
      setLoginError('Некорректный логин');
    } else {
      setLoginError('');
    }
    if (!e.target.value) {
      setLoginError('Логин не может быть пустым');
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setPasswordError('Пароль должен быть длинее 3 и меньше 9');
    } else {
      setPasswordError('');
    }
    if (!e.target.value) {
      setPasswordError('Пароль не может быть пустым');
    }
  };
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

  const handleClickRegistration = () => {
    dispatch(registration(login, password));
  };

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  return (
    <div>
      <div className={styles.containerSignUp}>
        <div className={styles.signUp}>
          <form>
            <h1>Регистрация</h1>
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
            <Link to="/signin">
              <button
                onClick={handleClickRegistration}
                disabled={!formValid}
                type="submit"
              >
                Регистрация
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;

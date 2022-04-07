import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registration } from '../../../redux/features/application';
import styles from './styles.module.css';
const SignupPage = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [age, setAge] = useState('');
  const [ageError, setAgeError] = useState('Введите пожалуйста возраст');
  const [ageDirty, setAgeDirty] = useState(false);
  const [firstNameError, setFirstNameError] = useState(
    'Имя не может быть пустым',
  );
  const [lastNameError, setLastNameError] = useState(
    'Имя не может быть пустым',
  );

  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [loginError, setLoginError] = useState('Логин не может быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым',
  );

  const [formValid, setFormValid] = useState(false);

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
    if (typeof e.target.value === 'number') {
      setFirstNameError('Имя не может иметь числа');
    } else {
      setFirstNameError('');
    }
    if (!e.target.value) {
      setFirstNameError('Имя не может быть пустым');
    }
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
    if (typeof e.target.value === 'number') {
      setLastNameError('Фамилия не может иметь числа');
    } else {
      setLastNameError('');
    }
    if (!e.target.value) {
      setLastNameError('Фамилия не может быть пустым');
    }
  };

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

  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleClickRegistration = () => {
    dispatch(registration(login, password, firstName, lastName, age));
  };

  useEffect(() => {
    if (
      loginError ||
      passwordError ||
      firstNameError ||
      lastNameError
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [loginError, passwordError, firstNameError, lastNameError]);

  return (
    <div>
      <div className={styles.containerSignUp}>
        <div className={styles.signUp}>
          <form>
            <h1>Регистрация</h1>
            <input
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleChangeFirstName}
              placeholder="Enter your firstname.."
              onBlur={handleBlur}
            />
            {firstNameDirty && firstNameError && (
              <div style={{ color: 'red' }}>{firstNameError}</div>
            )}
            <input
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
              placeholder="Enter your lastname.."
              onBlur={handleBlur}
            />
            {lastNameDirty && lastNameError && (
              <div style={{ color: 'red' }}>{lastNameError}</div>
            )}
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
            <input
              name="age"
              type="number"
              value={age}
              onChange={handleChangeAge}
              placeholder="Enter your age.."
              onBlur={handleBlur}
            />
            {ageDirty && ageError && (
              <div style={{ color: 'red' }}>{ageError}</div>
            )}
            <Link to="/signin">
              <button
                onClick={handleClickRegistration}
                disabled={formValid}
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

import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/homepage/Logo.svg';
import styles from './styles.module.css';

const Header = () => {
  const token = useSelector((state) => state.application.token);
  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
          <img className={styles.logoImage} src={logo} alt="pictur" />
        </Link>
        <nav>
          <NavLink to="/">
            <p>Главная</p>
          </NavLink>
          <NavLink to="/excursions">
            <p>Экскурсии</p>
          </NavLink>
          {token ? (
            <NavLink to="/profile">
              <p>Личный кабинет</p>
            </NavLink>
          ) : (
            <NavLink to="/signin">
              <p>Войти</p>
            </NavLink>
          )}
        </nav>{' '}
      </div>
    </header>
  );
};

export default Header;

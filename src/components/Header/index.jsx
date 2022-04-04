import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/homepage/Logo.svg';
import styles from './styles.module.css';

const Header = () => {
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
          <NavLink to="/personal">
            <p>Личный кабинет</p>
          </NavLink>
        </nav>{' '}
      </div>
    </header>
  );
};

export default Header;

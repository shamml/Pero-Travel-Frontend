import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/homepage/Logo.svg';
import styles from './styles.module.css';
import { motion } from "framer-motion";

const Header = () => {
  const token = useSelector((state) => state.application.token);
  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
        <motion.img
            className={styles.logoImage}
            src={logo}
            alt="pictur"
            initial={{
              scale: 1,
              x: -1000
            }}
            animate={{ 
              rotate: 720, 
              scale: 1.2,
              x: 0
            }}
            transition={{
              delay: 1,
              duration: 1,
              repeatDelay: 5,
              repeatType: "loop",
              type: 'spring',
            }}
          />
        </Link>
        <motion.nav
          initial={{
            x: 1000,
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
            type: 'spring',
          }}
        >
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
        </motion.nav>{' '}
      </div>
    </header>
  );
};

export default Header;

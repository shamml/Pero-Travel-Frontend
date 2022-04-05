import React from 'react';
import styles from './styles.module.css';
import photo from '../../../assets/profile/1.jpg';
import exitLogo from '../../../assets/another/exit.png'
import { useDispatch, useSelector } from 'react-redux';
import Admin from '../AdminPage';
import { exit } from '../../../redux/features/application';
import { Link } from 'react-router-dom';


const TestProfile = () => {

  const dispatch = useDispatch()

  const role = useSelector(state => state.application.role)
  console.log(role);
  
  if(role === 'admin') {
    return <Admin/>
  }

  const exitUser = () => {
    dispatch(exit())
  }
  return (
    <div className={styles.profileMain}>
      <div className={styles.profileBlock}>
        <div className={styles.manBlock}>
          <div>
            <div className={styles.profileImage}>
              <img src={photo} alt="#" />
            </div>
          </div>

          <div className={styles.profileDatas}>
            <div className={styles.dataTitle}>Личные данные</div>
            <div className={styles.profileId}>
              <div className={styles.profileName}>
                <div>
                  <b>Name:</b> James
                </div>
              </div>
              <div className={styles.profileLastName}>
                <b>Lastname:</b> Jons
              </div>
              <div className={styles.profileAge}>
                <b>Age:</b> 24
              </div>
            </div>
          </div>
        </div>
        <div className={styles.orders}>
          <h3 style={{ width: '150px', margin: '0 auto 40px' }}>Мои заказы</h3>
          <div className={styles.ordersBlock}>
            <div className={styles.orderRow}>
              <div className={styles.orderAddress}>Место: Бангладеш</div>
              <div className={styles.orderDate}>Дата: 28 марта</div>
              <div className={styles.countPeople}>Человек: 8</div>
              <div className={styles.allPrice}>Цена: 25 000</div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
      <div style={{cursor:"pointer"}} onClick={exitUser} className={styles.exit}>
          <img src={exitLogo} alt="" />
      </div>
      </Link>
      
    </div>
  );
};

export default TestProfile;

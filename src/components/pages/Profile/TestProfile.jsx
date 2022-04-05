import React from 'react';
import styles from './styles.module.css';
import photo from '../../../assets/profile/1.jpg';
import { useSelector } from 'react-redux';
import Admin from '../AdminPage';
const TestProfile = () => {
  const role = useSelector(state => state.application.role)
  console.log(role);
  if(role === 'admin') {
    return <Admin/>
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
    </div>
  );
};

export default TestProfile;

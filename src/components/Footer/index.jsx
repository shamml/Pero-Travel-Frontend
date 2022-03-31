import React from 'react';
import styles from './styles.module.css';
import logo from '../../assets/footer/logo.svg';
import wa from '../../assets/footer/wa.svg';
import vk from '../../assets/footer/vk.svg';
import inst from '../../assets/footer/inst.svg';
import face from '../../assets/footer/face.svg';
import message from '../../assets/footer/message.svg';
import tg from '../../assets/footer/tg.svg';

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <div className={styles.footerBlock}>
          <div className={styles.footerLeftSide}>
            <div className={styles.footerImage}>
              <img src={logo} alt="" srcset="" />
            </div>
            <div className={styles.footerNavigate}>
              <div>Главная</div>
              <div>Экскурсии</div>
              <div>Личный кабинет</div>
            </div>
          </div>
          <div className={styles.footerRightSide}>
            <div className={styles.contacts}>

              <span>
                <img src={wa} alt="" srcset="" /> +7 964 944 18 74
              </span>
              <span>
                <img src={tg} alt="" srcset="" /> +7 918 919 98 28
              </span>
              <span>
                <img src={tg} alt="" srcset="" /> Телеграм-бот PeroTravel
              </span>
            </div>
            <div className={styles.round}>
              <div className={styles.email}>
                <span>
                  <img src={message} alt="" srcset="" /> office@perotravel.ru
                </span>
                
              </div>
              <div className={styles.rounds}>
                <span>
                  <img style={{"padding-bottom": "3px"}} src={vk} alt="" srcset="" />
                </span>
                <span>
                  <img src={inst} alt="" srcset="" />
                </span>
                <span>
                  <img style={{"padding-bottom": "3px"}} src={face} alt="" srcset="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

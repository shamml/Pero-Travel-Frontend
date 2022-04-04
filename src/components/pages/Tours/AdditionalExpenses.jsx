import React from 'react'
import styles from './styles.module.css'
import circle from '../../../assets/Tours/Ellipse 17.png'
import old from '../../../assets/Tours/Rectangle 41.png'
import Frame from '../../../assets/Tours/Frame 1.png'

const AdditionalExpenses = () => {
  return (
    <div className={styles.additionalExpenses}>
      <h1>Дополнительные расходы (по желанию)</h1>
      <div className={styles.additionalBlock}>
        <div className={styles.additionalPrice}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>200 ₽</span>
              <div>Дача Сталина</div>
            </div>
          </div>
        </div>
        <div className={styles.additionalPrice}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>200 ₽</span>
              <div>Водопад</div>
            </div>
          </div>
        </div>
        <div className={styles.additionalPrice}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>500 ₽</span>
              <div>Пещера</div>
            </div>
          </div>
        </div>
        <div className={styles.additionalPrice}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>500 ₽</span>
              <div>Источник</div>
            </div>
          </div>
        </div>
        <div className={styles.additionalPrice}>
          <div>
            <img src={circle} alt="#" />
          </div>
          <div className={styles.coinImage}>
            <div>
              <img src={old} alt="#" />
            </div>
            <div className={styles.frame}>
              <img src={Frame} alt="#" /> <span>500 ₽</span>
              <div>Обед</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdditionalExpenses
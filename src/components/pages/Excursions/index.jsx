import React from 'react';
import styles from './styles.module.css';
import location from '../../../assets/excursions/location.png';
import data from '../../../assets/excursions/data.png';
import contacts from '../../../assets/excursions/contacts.png';
import plus from '../../../assets/excursions/plus.svg';
import adlerTour from '../../../assets/excursions/adlerTour.jpg';
import price from '../../../assets/excursions/price.svg';
import time from '../../../assets/excursions/time.svg';
import heart from '../../../assets/excursions/heart.svg';
import { Link } from 'react-router-dom'

const Excursions = () => {
  return (
    <div className={styles.mainExcursions}>
      <div className={styles.ourExcursions}>НАШИ ЭКСКУРСИИ</div>
      <div className={styles.menuExcursions}>
        <div className={styles.typeExcursions}>
          <a href="#">АВТОБУСНЫЙ ТУР</a>
          <a href="#">ДЖИППИНГ</a>
          <a href="#">ЯХТИНГ</a>
          <a href="#">КАНЬОНИНГ</a>
        </div>
        <div className={styles.buttonsExcursions}>
          <div className={styles.buttonExcursion}>
            Абхазия
            <img src={location} alt="no" />
          </div>
          <div className={styles.buttonExcursion}>
            10 ноября 2021 <img src={data} alt="no" />
          </div>
          <div className={styles.buttonExcursion}>
            5 человек <img src={contacts} alt="no" />
          </div>
          <div className={styles.buttonExcursionShow}>Показать</div>
        </div>
      </div>
      <div className={styles.contentExcursions}>
        <div className={styles.filterExcursions}>
          <div
            style={{ color: '#0499DD', fontSize: '14px', fontWeight: 'bold' }}
          >
            Фильтры
          </div>
          <div className={styles.priceExcursions}>
            <div className={styles.titleExcursion}>
              Стоимость<div className={styles.line}></div>
            </div>
            <div className={styles.inputsPriceExcursion}>
              <input className={styles.inputPriceExcursion} />
              <input className={styles.inputPriceExcursion} />
            </div>
            <div className={styles.inputTypeRangeExcursion}>
              <input type="range" min="0" max="100" step="1" value="50"></input>
            </div>
          </div>
          <div className={styles.lineBorder}></div>
          <div className={styles.amountPeople}>
            <div className={styles.titleExcursion}>
              Количество человек<div className={styles.line}></div>
            </div>
            <div className={styles.amountButtons}>
              <div className={styles.buttonMan}>1 чел.</div>
              <div className={styles.buttonMan}>2 чел.</div>
              <div className={styles.buttonMan}>3 чел.</div>
              <div className={styles.buttonMan}>4 чел.</div>
              <div className={styles.buttonMan}>5 чел.</div>
              <div className={styles.buttonMan}>6 чел.</div>
              <div className={styles.buttonMan}>7 чел.</div>
              <div className={styles.buttonMan}>8 чел.</div>
              <div className={styles.buttonMan}>9 чел.</div>
              <div className={styles.buttonMan}>10 чел.</div>
              <div className={styles.buttonMan10}>Больше 10 чел.</div>
            </div>
          </div>
          <div className={styles.lineBorder}></div>
          <div className={styles.placeExcursions}>
            <div className={styles.titleExcursion}>
              Место<div className={styles.line}></div>
            </div>
            <div className={styles.inputCountryExcursions}>
              <p className={styles.radioCountry}>
                <input type="radio" value="Abhazia" name="country" />
                Абхазия
              </p>
              <p className={styles.radioCountry}>
                <input type="radio" value="Polyana" name="country" />
                Красная Поляна
              </p>
              <p className={styles.radioCountry}>
                <input type="radio" value="Sochi" name="country" />
                Сочи
              </p>
              <p className={styles.radioCountry}>
                <input type="radio" value="Adler" name="country" />
                Адлер
              </p>
            </div>
          </div>
          <div className={styles.lineBorder}></div>
          <div className={styles.durationExcursion}>
            <div className={styles.titleExcursion}>
              Длительность
              <div className={styles.incrementExcursion}>
                <img src={plus} alt="no" />
              </div>
            </div>
          </div>
          <div className={styles.lineBorder}></div>
          <div className={styles.dataExcursions}>
            <div className={styles.titleExcursion}>
              Дата
              <div className={styles.incrementExcursion}>
                <img src={plus} alt="no" />
              </div>
            </div>
          </div>
          <div className={styles.lineBorder}></div>
          <div className={styles.showFilterExcursions}>
            <div className={styles.showFilterButton}>Показать</div>
          </div>
          <div className={styles.resetFilters}>
            <div className={styles.resetX}>X</div>
            <div>Сбросить фильтры</div>
          </div>
        </div>
        <div className={styles.ourToursContent}>
          <div className={styles.toursTitleExcursion}>Наши Туры</div>
          <div className={styles.ourToursCard}>
            <img src={adlerTour} alt="no" />
            <div className={styles.descriptionExcursion}>
              <div className={styles.typeOfTourExcursion}>Автобусный тур</div>
              <div className={styles.placeTourExcursion}>
                Золотое кольцо Абхазии (из Адлера)
              </div>
              <div className={styles.tripTourExcursion}>
                <div className={styles.tripPrice}>
                  <div className={styles.onePriceTrip}>
                    <img src={price} alt="no" />
                    <div className={styles.priceBiletTour}>1 618₽</div>
                  </div>
                  <div className={styles.ageBilet}>Взрослый билет</div>
                </div>
                <div className={styles.tripPrice}>
                  <div className={styles.onePriceTrip}>
                    <img src={price} alt="no" />
                    <div className={styles.priceBiletTour}>1 418₽</div>
                  </div>
                  <div className={styles.ageBilet}>Детский билет</div>
                </div>
                <div className={styles.timeTourExcursion}>
                  <div className={styles.onePriceTrip}>
                    <img src={time} alt="no" />
                    <div className={styles.timeDescriptionTour}>2,5 часа</div>
                  </div>
                </div>
              </div>
              <div className={styles.descriptionPlaceTour}>
                <div className={styles.verticalLine}>
                  <div className={styles.textPlaceTour}>
                    Вас ждет путешествие по "Золотому Кольцу Абхазии" на
                    Мерседес Спринтер (20 мест). По маршруту вас будет
                    сопровождать профессиональный гид. Посадка на экскурсию
                    осуществляется с вашего отеля или ближайшей автобусной
                    остановки. Пересечение границы без пересадок...
                  </div>
                </div>
              </div>
              <div className={styles.buttonsDescriptionTour}>
                <Link to="/tours">
                  <div className={styles.moreTourButton}>Подробнее</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excursions;

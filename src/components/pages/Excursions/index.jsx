import React, { useState } from 'react';
import styles from './styles.module.css';
import data from '../../../assets/excursions/data.png';
import plus from '../../../assets/excursions/plus.svg';
import minus from '../../../assets/excursions/minus.svg';
import adlerTour from '../../../assets/excursions/adlerTour.jpg';
import price from '../../../assets/excursions/price.svg';
import time from '../../../assets/excursions/time.svg';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';

const Excursions = () => {
  const [priceBlock, setPriceBlock] = useState(false);
  const handlePriceBlock = () => {
    setPriceBlock(!priceBlock);
  };

  const [amountBlock, setAmountBlock] = useState(false);
  const handleAmountBlock = () => {
    setAmountBlock(!amountBlock);
  };

  const [placeBlock, setPlaceBlock] = useState(false);
  const handlePlaceBlock = () => {
    setPlaceBlock(!placeBlock);
  };

  const [durationBlock, setDurationBlock] = useState(false);
  const handleDurationBlock = () => {
    setDurationBlock(!durationBlock);
  };

  const [dateBlock, setDateBlock] = useState(false);
  const handleDateBlock = () => {
    setDateBlock(!dateBlock);
  };

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
          {/* <div className={styles.buttonExcursion}>
            Абхазия
            <img src={location} alt="no" />
          </div> */}
          <select className={styles.selectPlace} name="place" id="place">
            <option value="">Абхазия</option>
            <option value="">Красная поляна</option>
            <option value="">Сочи</option>
            <option value="">Адлер</option>
          </select>
          <div className={styles.buttonExcursion}>
            10 ноября 2021 <img src={data} alt="no" />
          </div>
          {/* <div className={styles.buttonExcursion}>
            5 человек <img src={contacts} alt="no" />
          </div> */}
          <select className={styles.selectMansCount} name="place" id="place">
            <option value={1}>1 человек</option>
            <option value={2}>2 человека</option>
            <option value={3}>3 человека</option>
            <option value={4}>4 человека</option>
            <option value={5}>5 человек</option>
          </select>
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

          {/* СТОИМОСТЬ */}

          <div className={styles.priceExcursions}>
            <div className={styles.titleExcursion}>
              Стоимость
              {priceBlock ? (
                <div
                  onClick={handlePriceBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={handlePriceBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>
            {priceBlock && (
              <>
                <div className={styles.inputsPriceExcursion}>
                  <input className={styles.inputPriceExcursion} />
                  <input className={styles.inputPriceExcursion} />
                </div>
                {/* <div className={styles.inputTypeRangeExcursion}>
              <input type="range" min="0" max="100" step="1" value="50"></input>
            </div> */}
                <Slider
                  getAriaLabel={() => 'Temperature range'}
                  // value={value}
                  // onChange={handleChange}
                  valueLabelDisplay="auto"
                  // getAriaValueText={valuetext}
                  max={10000}
                  min={0}
                />
              </>
            )}
          </div>
          <div className={styles.lineBorder}></div>

          {/* КОЛИЧЕСТВО ЧЕЛОВЕК */}

          <div className={styles.amountPeople}>
            <div className={styles.titleExcursion}>
              Количество человек
              {amountBlock ? (
                <div
                  onClick={handleAmountBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={handleAmountBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>
            {amountBlock && (
              <>
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
              </>
            )}
          </div>
          <div className={styles.lineBorder}></div>

          {/* МЕСТО */}

          <div className={styles.placeExcursions}>
            <div className={styles.titleExcursion}>
              Место
              {placeBlock ? (
                <div
                  onClick={handlePlaceBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={handlePlaceBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>
            {placeBlock && (
              <>
                <div className={styles.inputCountryExcursions}>
                  <input
                    type="radio"
                    value="Abhazia"
                    name="country"
                    id="Abhazia"
                  />{' '}
                  <label className={styles.radioCountry} htmlFor="Abhazia">
                    Абхазия
                  </label>{' '}
                  <br />
                  <input
                    type="radio"
                    value="Polyana"
                    name="country"
                    id="Polyana"
                  />{' '}
                  <label className={styles.radioCountry} htmlFor="Polyana">
                    Красная Поляна
                  </label>{' '}
                  <br />
                  <input
                    type="radio"
                    value="Sochi"
                    name="country"
                    id="Sochi"
                  />{' '}
                  <label className={styles.radioCountry} htmlFor="Sochi">
                    Сочи
                  </label>{' '}
                  <br />
                  <input
                    type="radio"
                    value="Adler"
                    name="country"
                    id="Adler"
                  />{' '}
                  <label className={styles.radioCountry} htmlFor="Adler">
                    Адлер
                  </label>
                </div>
              </>
            )}
          </div>
          <div className={styles.lineBorder}></div>

          {/* ДЛИТЕЛЬНОСТЬ */}

          <div className={styles.durationExcursion}>
            <div className={styles.titleExcursion}>
              Длительность
              {durationBlock ? (
                <div
                  onClick={handleDurationBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={handleDurationBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>
          </div>
          <div className={styles.lineBorder}></div>

          {/* ДАТА */}

          <div className={styles.dataExcursions}>
            <div className={styles.titleExcursion}>
              Дата
              {dateBlock ? (
                <div
                  onClick={handleDateBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={handleDateBlock}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
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

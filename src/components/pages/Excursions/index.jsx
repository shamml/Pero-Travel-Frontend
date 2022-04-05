import React, { useState } from 'react';
import styles from './styles.module.css';
import data from '../../../assets/excursions/data.png';
import plus from '../../../assets/excursions/plus.svg';
import minus from '../../../assets/excursions/minus.svg';
import Slider from '@mui/material/Slider';
import { CSSTransition } from 'react-transition-group';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OurTour from './OurTours/OurTour';

const Excursions = () => {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
      pero: {
        main: '#0499dd',
        contrastText: '#fff',
      },
    },
  });

  const [priceBlock, setPriceBlock] = useState(false);
  const [amountBlock, setAmountBlock] = useState(false);
  const [placeBlock, setPlaceBlock] = useState(false);
  const [durationBlock, setDurationBlock] = useState(false);
  const [dateBlock, setDateBlock] = useState(false);

  const [minPrice, setMinPrice] = useState(1000);
  const handleMinimum = (e) => {
    setMinPrice(e.target.value);
  };
  const [maxPrice, setMaxPrice] = useState(2500);
  const handleMaximum = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleChangeRange = (e) => {
    setMinPrice(e.target.value[0]);
    setMaxPrice(e.target.value[1]);
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
                  onClick={() => setPriceBlock(!priceBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={() => setPriceBlock(!priceBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>

            <CSSTransition
              in={priceBlock}
              classNames="alert"
              timeout={300}
              unmountOnExit
            >
              <div>
                <div className={styles.inputsPriceExcursion}>
                  <input
                    type="number"
                    className={styles.inputPriceExcursion}
                    value={minPrice}
                    onChange={handleMinimum}
                  />
                  <input
                    type="number"
                    className={styles.inputPriceExcursion}
                    value={maxPrice}
                    onChange={handleMaximum}
                  />
                </div>
                {/* <div className={styles.inputTypeRangeExcursion}>
              <input type="range" min="0" max="100" step="1" value="50"></input>
            </div> */}
              <ThemeProvider theme={theme}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={[minPrice, maxPrice]}
                    onChange={handleChangeRange}
                    valueLabelDisplay="auto"
                    // getAriaValueText={valuetext}
                    max={10000}
                    min={0}
                    defaultValue={[1000, 2500]}
                    color="pero"
                    range
                  />
              </ThemeProvider>
              </div>
            </CSSTransition>
          </div>
          <div className={styles.lineBorder}></div>

          {/* КОЛИЧЕСТВО ЧЕЛОВЕК */}

          <div className={styles.amountPeople}>
            <div className={styles.titleExcursion}>
              Количество человек
              {amountBlock ? (
                <div
                  onClick={() => setAmountBlock(!amountBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={() => setAmountBlock(!amountBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>
            <CSSTransition
              in={amountBlock}
              classNames="alert"
              timeout={300}
              unmountOnExit
            >
              <div>
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
            </CSSTransition>
          </div>
          <div className={styles.lineBorder}></div>

          {/* МЕСТО */}

          <div className={styles.placeExcursions}>
            <div className={styles.titleExcursion}>
              Место
              {placeBlock ? (
                <div
                  onClick={() => setPlaceBlock(!placeBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={() => setPlaceBlock(!placeBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={plus} alt="no" />
                </div>
              )}
            </div>
            <CSSTransition
              in={placeBlock}
              classNames="alert"
              timeout={300}
              unmountOnExit
            >
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
            </CSSTransition>
          </div>
          <div className={styles.lineBorder}></div>

          {/* ДЛИТЕЛЬНОСТЬ */}

          <div className={styles.durationExcursion}>
            <div className={styles.titleExcursion}>
              Длительность
              {durationBlock ? (
                <div
                  onClick={() => setDurationBlock(!durationBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={() => setDurationBlock(!durationBlock)}
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
                  onClick={() => setDateBlock(!dateBlock)}
                  className={styles.incrementExcursion}
                >
                  <img src={minus} alt="no" />
                </div>
              ) : (
                <div
                  onClick={() => setDateBlock(!dateBlock)}
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
          
          {/* map */}
          <OurTour />

        </div>
      </div>
    </div>
  );
};

export default Excursions;

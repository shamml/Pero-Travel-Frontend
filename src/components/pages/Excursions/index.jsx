import React, { useState } from 'react';
import styles from './styles.module.css';
import data from '../../../assets/excursions/data.png';
import plus from '../../../assets/excursions/plus.svg';
import minus from '../../../assets/excursions/minus.svg';
import Slider from '@mui/material/Slider';
import { CSSTransition } from 'react-transition-group';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import OurTour from './OurTour/OurTour';

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

  const [priceBlock, setPriceBlock] = useState(true);
  const [amountBlock, setAmountBlock] = useState(true);
  const [placeBlock, setPlaceBlock] = useState(false);
  const [durationBlock, setDurationBlock] = useState(false);
  const [dateBlock, setDateBlock] = useState(false);

  let tours = [
    {
      type: 'Автобусный тур',
      title: 'Адлер',
      place: 'Adler',
      verticalBG: 'verticallll',
      desc: 'Description Description Description Description Description Description Description Description',
      price: 1200,
      priceForChild: 900,
      duration: 13,
      tickets: 2,
    },
    {
      type: 'Каньонинг',
      title: 'Красная поляна',
      place: 'Polyana',
      verticalBG: 'verticallll',
      desc: 'Description Description Description Description Description Description Description Description',
      price: 3200,
      priceForChild: 900,
      duration: 5,
      tickets: 10,
    },
    {
      type: 'Джиппинг',
      title: 'Сочи',
      place: 'Sochi',
      verticalBG: 'verticallll',
      desc: 'Description Description Description Description Description Description Description Description',
      price: 8200,
      priceForChild: 900,
      duration: 1,
      tickets: 5,
    },
  ];

  const [minPrice, setMinPrice] = useState(1000);
  const handleMinimum = (e) => {
    setMinPrice(e.target.value);
  };
  const [maxPrice, setMaxPrice] = useState(9000);
  const handleMaximum = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleChangeRange = (e) => {
    setMinPrice(e.target.value[0]);
    setMaxPrice(e.target.value[1]);
  };

  const [amount, setAmount] = useState(0);
  const selectCount = (count, e) => {
    setAmount(count);
  };

  const [place, setPlace] = useState('');
  const handlePlace = (e) => {
    setPlace(e.target.value);
  };

  const [duration, setDuration] = useState(0);
  const selectDuration = (dur) => {
    setDuration(dur);
  };

  const [filtered, setFiltered] = useState(tours);
  const handleFilter = () => {
    const result = tours.filter((tour) => {
      return (
        tour.price >= minPrice &&
        tour.price <= maxPrice &&
        tour.tickets >= amount &&
        (tour.place === place || place === '') &&
        (tour.duration <= duration || duration === 0)
      );
    });
    setFiltered(result);
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
          <select className={styles.selectPlace} name="place" id="place">
            <option value="">Абхазия</option>
            <option value="">Красная поляна</option>
            <option value="">Сочи</option>
            <option value="">Адлер</option>
          </select>
          <div className={styles.buttonExcursion}>
            10 ноября 2021 <img src={data} alt="no" />
          </div>
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
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(1)}
                  >
                    1 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(2)}
                  >
                    2 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(3)}
                  >
                    3 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(4)}
                  >
                    4 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(5)}
                  >
                    5 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(6)}
                  >
                    6 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(7)}
                  >
                    7 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(8)}
                  >
                    8 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(9)}
                  >
                    9 чел.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectCount(10)}
                  >
                    10 чел.
                  </div>
                  <div
                    className={styles.buttonMan10}
                    onClick={() => selectCount(11)}
                  >
                    Больше 10 чел.
                  </div>
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
                    onChange={handlePlace}
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
                    onChange={handlePlace}
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
                    onChange={handlePlace}
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
                    onChange={handlePlace}
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
            <CSSTransition
              in={durationBlock}
              classNames="alert"
              timeout={300}
              unmountOnExit
            >
              <div>
                <div className={styles.amountButtons}>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectDuration(3)}
                  >
                    до 3 ч.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectDuration(6)}
                  >
                    до 6 ч.
                  </div>
                  <div
                    className={styles.buttonMan}
                    onClick={() => selectDuration(9)}
                  >
                    до 9 ч.
                  </div>
                </div>
              </div>
            </CSSTransition>
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
            <div className={styles.showFilterButton} onClick={handleFilter}>
              Показать
            </div>
          </div>
          <div className={styles.resetFilters}>
            <div className={styles.resetX}>X</div>
            <div>Сбросить фильтры</div>
          </div>
        </div>
        <div className={styles.ourToursContent}>
          <div className={styles.toursTitleExcursion}>Наши Туры</div>

          {filtered.map((tour) => {
            return (
              <OurTour
                type={tour.type}
                title={tour.title}
                desc={tour.desc}
                price={tour.price}
                priceForChild={tour.priceForChild}
                verticalBG={tour.verticalBG}
                duration={tour.duration}
                // tickets={tour.tickets}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Excursions;

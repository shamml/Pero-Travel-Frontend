import React from 'react';
import photo from '../../../assets/another/1.jpg';
import photo1 from '../../../assets/another/2.jpg';
import yellow from '../../../assets/Tours/yelloww.svg';
import styles from './styles.module.css';

const RouteDescription = () => {
  return (
    <div className={styles.routeDeskMain}>
      <div className={styles.routeDeskBlock}>
        <div>
          <div className={styles.deskTitle}>
            <div style={{ 'font-weight': '700', fontSize: '22px' }}>
              Описание маршрута
            </div>
          </div>
          <div className={styles.wayPoints}>
            <div className={styles.wayPoint}>
              <div className={styles.onePoint}>
                <div className={styles.yellowRound}>
                  <img src={yellow} alt="#" />
                </div>
                <div className={styles.subTitlePoint}>
                  Город Гагра, Колоннада, ресторан "Гагрипш", Парк принца <br />{' '}
                  Ольденбурского;
                </div>
              </div>
              <div className={styles.secondPoint}>
                <div className={styles.yellowRound}>
                  <img src={yellow} alt="#" />
                </div>
                <div className={styles.subTitlePoint}>
                  Смотровая площадка "Прощай Родина", "Чабгарский" карниз,
                  <br /> Подвесной мост через реку "Бзыбь";
                </div>
              </div>
              <div className={styles.thirdPoint}>
                <div className={styles.yellowRound}>
                  <img src={yellow} alt="#" />
                </div>
                <div className={styles.subTitlePoint}>
                  Дегустация сыра, меда, вина, чачи (входит в стоимость
                  экскурсии), <br /> Голубое Озеро, Юпшарский каньон ("Каменный
                  мешок"), Озеро <br /> "Рица", Водопады "Девичьи и мужские
                  слезы".
                </div>
              </div>
            </div>
            <h4
              style={{
                'font-weight': '700',
                fontSize: '22px',
                'margin-top': '20px',
                'margin-bottom': '20px',
              }}
            >
              Далее на выбор:
            </h4>
            <div className={styles.thirdPoint}>
              <div className={styles.yellowRound}>
                <img src={yellow} alt="#" />
              </div>
              <div className={styles.subTitlePoint}>
                Монастырь "Новый Афон", Новоафонская Пещера, "Рукотворный"{' '}
                <br /> водопад, храм "Симона Кананита", Лебединое озеро.
              </div>
            </div>
            <div className={styles.anotherPoint}>
              <div className={styles.yellowRound}>
                <img src={yellow} alt="#" />
              </div>
              <div className={styles.subTitlePoint}>
                Термальный источник в с. Приморское.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.routeDesk}>
          <div id="slider" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#slider"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              />
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  className={styles.carouselImage}
                  src={photo}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  className={styles.carouselImage}
                  src={photo1}
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#slider"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true" />
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#slider"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true" />
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteDescription;

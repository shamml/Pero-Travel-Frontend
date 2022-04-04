import React from 'react';
import styels from './styles.module.css';
import bus from "../../../../assets/homepage/busTour.svg";
import jeep from "../../../../assets/homepage/jeepTour.svg";
import sheep from "../../../../assets/homepage/sheepTour.svg"
import canyon from "../../../../assets/homepage/canyonTour.svg"
import { Link } from 'react-router-dom'

const TypesOf = () => {
  return (
    <div className={styels.TypesOf}>
      <div className={styels.TypesOfContent}>
        <div className={styels.titleExcursionViews}>Виды экскурсий</div>
        <div>
          <div className={styels.contentViewExcursions}>
            <div className={styels.viewTourExcursion}>
              <div>
                <img src={bus} alt="no" />
              </div>
              <div className={styels.tourViewDescription}>
                <p className={styels.titleTourP}>Автобусный тур</p>
                <div className={styels.tourViewDescriptionText}>
                  Один из самых насыщенных впечатлениями, доступных по цене и
                  популярных видов отдыха. Во время одной поездки можно
                  посмотреть достопримечательности сразу нескольких городов,
                  причем обойдется это едва ли не в разы дешевле классического
                  экскурсионного тура с ночевками в отелях.
                </div>
              </div>
            </div>
            <div className={styels.viewTourExcursion}>
              <div>
                <img src={jeep} alt="no" />
              </div>
              <div className={styels.tourViewDescription}>
                <p className={styels.titleTourP}>Джиппинг</p>
                <div className={styels.tourViewDescriptionText}>
                  Это путешествие на автомобилях высокой проходимости с
                  преодолением естественных препятствий, это экстремальный вид
                  спорта и отдыха, представляющий собой прохождение
                  туристического маршрута по бездорожью на автомобилях.
                </div>
              </div>
            </div>
          </div>
          <div className={styels.contentViewExcursions}>
            <div className={styels.viewTourExcursion}>
              <div>
                <img src={sheep} alt="no" />
              </div>
              <div className={styels.tourViewDescription}>
                <p className={styels.titleTourP}>Яхтинг</p>
                <div className={styels.tourViewDescriptionText}>
                  Это то же, что круиз на лайнере или прогулка на пароме, только
                  на яхте больше свободы, размеры судна в разы меньше, нет
                  назойливой команды, можно самостоятельно почувствовать себя
                  капитаном, постоять за штурвалом. Именно здесь вы почувствуете
                  величайшие просторы Черногор моря.
                </div>
              </div>
            </div>
            <div className={styels.viewTourExcursion}>
              <div>
                <img src={canyon} alt="no" />
              </div>
              <div className={styels.tourViewDescription}>
                <p className={styels.titleTourP}>Каньонинг</p>
                <div className={styels.tourViewDescriptionText}>
                  Это экстремально-спортивный вид отдыха, который заключается в
                  преодолении каньонов (обводненных или нет) при помощи
                  альпинистского и иного снаряжения, а иногда и вброд, но без
                  лодок или иных плавсредств.
                </div>
              </div>
            </div>
          </div>
          <div className={styels.selectionTourView}>
            <div className={styels.descriptionTextTour}>
              Выбирайте на нашем сайте экскурсию, которая подходит именно вам и
              записывайтесь онлайн без очередей, просто и быстро!
            </div>
            <Link to="/excursions">
              <button style={{cursor: "pointer"}} className={styels.buttonSelectionTour}>
                К экскурсиям →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypesOf;

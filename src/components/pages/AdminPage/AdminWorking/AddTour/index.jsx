import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './styles.module.css';
import { addTour } from '../../../../../redux/features/admin';

const AddTour = () => {
  const dispatch = useDispatch();

  const [styleFetchTour, setStyleFetchTour] = useState(styles.toursContainer);
  const [styleAddTour, setStyleAddTour] = useState(styles.tour);

  function handleClickOpenAddTour() {
    if (styleAddTour === styles.tour) {
      setStyleAddTour(styles.tourOpacity);
    } else {
      setStyleAddTour(styles.tour);
    }
    setStyleFetchTour(styles.toursContainer);
  }

  const [tour, setTour] = useState('');
  const [place, setPlace] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [priceForChild, setPriceForChild] = useState('');
  const [duration, setDuration] = useState('');
  const [bgImage, setBgImage] = useState('');
  const [tickets, setTickets] = useState('');

  function handleChangeTour(e) {
    setTour(e.target.value);
  }

  function handleChangePlace(e) {
    setPlace(e.target.value);
  }

  function handleChangeTitle(e) {
    setTitle(e.target.value);
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleChangePrice(e) {
    if (e.target.value >= 0) {
      setPrice(e.target.value);
    }
  }

  function handleChangePriceForChild(e) {
    if (e.target.value >= 0) {
      setPriceForChild(e.target.value);
    }
  }

  function handleChangeDuration(e) {
    if (e.target.value >= 0) {
      setDuration(e.target.value);
    }
  }

  function handleChangeBgImage(e) {
    setBgImage(e.target.files[0]);
  }

  function handleChangeTickets(e) {
    setTickets(e.target.value);
  }

  function handleClickAddTour() {
    dispatch(
      addTour(
        tour,
        place,
        title,
        desc,
        price,
        priceForChild,
        duration,
        bgImage,
        tickets,
      ),
      setTour(''),
      setPlace(''),
      setTitle(''),
      setDesc(''),
      setPrice(''),
      setPriceForChild(''),
      setDuration(''),
      setBgImage(''),
      setStyleAddTour(styles.tour),
      setStyleFetchTour(styles.toursContainerOpacity),
      setTickets(''),
    );
  }

  return (
    <div className={styles.addTour}>
      <div className={styleAddTour}>
        <div className={styles.inputField}>Тип тура</div>
        <input
          value={tour}
          onChange={handleChangeTour}
          type="text"
          name="Tour"
          placeholder="Enter tour.."
        />
        <div className={styles.inputField}>Место</div>
        <input
          value={place}
          onChange={handleChangePlace}
          type="text"
          name="Place"
          placeholder="Enter place.."
        />
        <div className={styles.inputField}>Название</div>
        <input
          value={title}
          onChange={handleChangeTitle}
          type="text"
          name="Title"
          placeholder="Enter title.."
        />
        <div className={styles.inputField}>Количество билетов</div>
        <input
          value={tickets}
          onChange={handleChangeTickets}
          type="number"
          name="Tickets"
          placeholder="Enter tickets.."
        />
        <div className={styles.inputField}>Описание</div>
        <textarea
          value={desc}
          onChange={handleChangeDesc}
          placeholder="Enter desc.."
        />
        <div className={styles.inputField}>Цена для взрослого</div>
        <input
          value={price}
          onChange={handleChangePrice}
          type="number"
          name="Price"
          placeholder="Enter price.."
        />
        <div className={styles.inputField}>Цена для ребенка</div>
        <input
          value={priceForChild}
          onChange={handleChangePriceForChild}
          type="number"
          name="Price for child"
          placeholder="Enter price for child.."
        />
        <div className={styles.inputField}>Длительность</div>
        <input
          value={duration}
          onChange={handleChangeDuration}
          type="number"
          name=""
          placeholder="Enter duration.."
        />
        <div className={styles.backgroundImage}>
          <div className={styles.inputField}>
            Добавление фонового рисунка
            <input onChange={handleChangeBgImage} type="file" />
          </div>
          
        </div>
        <div className={styles.carouselButton}>
            <button disabled={!bgImage} onClick={handleClickAddTour}>
              Добавить тур
            </button>
          </div>
      </div>
    </div>
  );
};

export default AddTour;

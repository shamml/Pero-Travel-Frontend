import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOptionalToTour,
  addTour,
  deleteTour,
  editTour,
  fetchTours,
} from '../../../redux/features/admin';
import { Link } from 'react-router-dom';
import exitLogo from '../../../assets/another/exit.png';

import styles from './styles.module.css';
import { exit } from '../../../redux/features/application';

function Admin() {
  const dispatch = useDispatch();

  // ---------------------------- Фунция выхода
  const exitUser = () => {
    dispatch(exit())
  }
  {
    /* // { *===================== Добавление туров =========================* } // */
  }

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

  function handleClickOpenFetchTour() {
    if (styleFetchTour === styles.toursContainer) {
      setStyleFetchTour(styles.toursContainerOpacity);
    } else {
      setStyleFetchTour(styles.toursContainer);
    }
    setStyleAddTour(styles.tour);
  }

  const [tour, setTour] = useState('');
  const [place, setPlace] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [priceForChild, setPriceForChild] = useState('');
  const [duration, setDuration] = useState('');
  const [bgImage, setBgImage] = useState('');

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
    );
  }

  {
    /* // { *===================== Просмотр всех туров =========================* } // */
  }

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);

  const tours = useSelector((state) => state.admin.tours);

  {
    /* // { *===================== Удаление тура =========================* } // */
  }

  function handleClickDeleteTour(id) {
    dispatch(deleteTour(id));
  }

  {
    /* // { *===================== Изменение тура =========================* } // */
  }

  const [modalEditWindowToChange, setModalEditWindowToChange] = useState(false);
  const [id, setId] = useState('');
  const [tourEdit, setTourEdit] = useState('');
  const [placeEdit, setPlaceEdit] = useState('');
  const [titleEdit, setTitleEdit] = useState('');
  const [descEdit, setDescEdit] = useState('');
  const [priceEdit, setPriceEdit] = useState('');
  const [priceForChildEdit, setPriceForChildEdit] = useState('');
  const [durationEdit, setDurationEdit] = useState('');
  const [bgImageEdit, setBgImageEdit] = useState('');

  const toursEdit = useSelector((state) => state.admin.tours);

  function handleClickOpenEditTour(id) {
    setModalEditWindowToChange(!modalEditWindowToChange);
    setId(id);
    setStyleAddTour(styles.tour);
    const filterToursEdit = toursEdit.find((tour) => tour._id === id);
    setTourEdit(filterToursEdit.typeTour);
    setPlaceEdit(filterToursEdit.place);
    setTitleEdit(filterToursEdit.title);
    setDescEdit(filterToursEdit.desc);
    setPriceEdit(filterToursEdit.price);
    setPriceForChildEdit(filterToursEdit.priceForChild);
    setDurationEdit(filterToursEdit.duration);
    setBgImageEdit(filterToursEdit.bgImage);
  }

  function handleChangeTourEdit(e) {
    setTourEdit(e.target.value);
  }

  function handleChangePlaceEdit(e) {
    setPlaceEdit(e.target.value);
  }

  function handleChangeTitleEdit(e) {
    setTitleEdit(e.target.value);
  }

  function handleChangeDescEdit(e) {
    setDescEdit(e.target.value);
  }

  function handleChangePriceEdit(e) {
    setPriceEdit(e.target.value);
  }

  function handleChangePriceForChildEdit(e) {
    setPriceForChildEdit(e.target.value);
  }

  function handleChangeDurationEdit(e) {
    setDurationEdit(e.target.value);
  }

  function handleChangeBgImageEdit(e) {
    setBgImageEdit(e.target.files[0]);
  }

  function handleClickEditTour() {
    dispatch(
      editTour(
        id,
        tourEdit,
        placeEdit,
        titleEdit,
        descEdit,
        bgImageEdit,
        priceEdit,
        priceForChildEdit,
        durationEdit,
      ),
      setTourEdit(''),
      setPlaceEdit(''),
      setTitleEdit(''),
      setDescEdit(''),
      setBgImageEdit(''),
      setPriceEdit(''),
      setPriceForChildEdit(''),
      setDurationEdit(''),
      setModalEditWindowToChange(false),
    );
  }

  {
    /* // { *===================== Добавление Optionals к туру =========================* } // */
  }

  const [optionalTitle, setOptionalTitle] = useState('');
  const [optionalPrice, setOptionalPrice] = useState('');
  const [idTourOptional, setIdTourOptional] = useState('');

  const [modalOptionalWindowToChange, setModalOptionalWindowToChange] =
    useState(false);

  function handleClickOpenAddOptionalToTour(optionalTourId) {
    setModalOptionalWindowToChange(!modalOptionalWindowToChange);
    setIdTourOptional(optionalTourId);
  }

  function handleChangeOptionalTitle(e) {
    setOptionalTitle(e.target.value);
  }

  function handleChangeOptionalPrice(e) {
    setOptionalPrice(e.target.value);
  }

  console.log(idTourOptional);
  function handleClickAddOptionalToTour() {
    dispatch(addOptionalToTour(idTourOptional, optionalTitle, optionalPrice));
    setOptionalTitle('');
    setOptionalPrice('');
    setModalOptionalWindowToChange(false);
  }

  return (
    <div className={styles.adminka}>
      {/* // { *===================================================================* } // */}
      <div className={styles.addTour}>
        <button onClick={handleClickOpenAddTour}>Add Tour</button>
        <div className={styleAddTour}>
          <input
            value={tour}
            onChange={handleChangeTour}
            type="text"
            name="Tour"
            placeholder="Enter tour.."
          />
          <input
            value={place}
            onChange={handleChangePlace}
            type="text"
            name="Place"
            placeholder="Enter place.."
          />
          <input
            value={title}
            onChange={handleChangeTitle}
            type="text"
            name="Title"
            placeholder="Enter title.."
          />
          <textarea
            value={desc}
            onChange={handleChangeDesc}
            placeholder="Enter desc.."
          ></textarea>
          <input
            value={price}
            onChange={handleChangePrice}
            type="number"
            name="Price"
            placeholder="Enter price.."
          />
          <input
            value={priceForChild}
            onChange={handleChangePriceForChild}
            type="number"
            name="Price for child"
            placeholder="Enter price for child.."
          />
          <input
            value={duration}
            onChange={handleChangeDuration}
            type="number"
            name=""
            placeholder="Enter duration.."
          />
          <input onChange={handleChangeBgImage} type="file" />
          <button onClick={handleClickAddTour}>Add</button>
        </div>
      </div>
      {/* // { *===================================================================* } // */}
      <div className={styles.fetchTour}>
        <button onClick={handleClickOpenFetchTour}>Fetch Tours</button>
        <div className={styleFetchTour}>
          {modalOptionalWindowToChange && (
            <div className={styles.modalOptional}>
              <h1>ADD OPTIONALS</h1>
              <div>Ввести название</div>
              <input
                value={optionalTitle}
                onChange={handleChangeOptionalTitle}
                type="text"
                name=""
                id=""
              />
              <div>Ввести цену</div>
              <input
                value={optionalPrice}
                onChange={handleChangeOptionalPrice}
                type="text"
                name=""
                id=""
              />
              <button onClick={handleClickAddOptionalToTour}>Add</button>
            </div>
          )}
          {tours.map((tour) => {
            console.log(tours);
            return (
              <div key={tour._id} className={styles.tourContainer}>
                <div className={styles.adminImage}>
                  <img src={`http://localhost:3030/${tour.bgImage}`} alt="" />
                </div>
                <div>Категория тура: {tour.typeTour}</div>
                <div>Местонахождение: {tour.place}</div>
                <div>Название: {tour.title}</div>
                <div>Описание: {tour.desc}</div>
                <div>Цена: {tour.price}</div>
                <div>Цена для ребенком: {tour.priceForChild}₽</div>
                <div>Длительность тура: {tour.duration} Д</div>
                <div>
                  <img src="" alt="" />
                </div>
                <span
                  style={{ background: 'red' }}
                  onClick={(e) => handleClickDeleteTour(tour._id)}
                >
                  DEL
                </span>
                <span
                  onClick={(e) => handleClickOpenEditTour(tour._id)}
                  style={{ background: 'blue' }}
                >
                  EDIT
                </span>
                <span
                  onClick={(e) => handleClickOpenAddOptionalToTour(tour._id)}
                  style={{ background: 'green' }}
                >
                  ADD OPTIONAL
                </span>
              </div>
            );
          })}
          {modalEditWindowToChange && (
            <div className={styles.modalWindowEdit}>
              <h1>EDIT TOUR</h1>
              <input
                value={tourEdit}
                onChange={handleChangeTourEdit}
                type="text"
                name="Tour"
                placeholder="Enter tour.."
              />
              <input
                value={placeEdit}
                onChange={handleChangePlaceEdit}
                type="text"
                name="Place"
                placeholder="Enter place.."
              />
              <input
                value={titleEdit}
                onChange={handleChangeTitleEdit}
                type="text"
                name="Title"
                placeholder="Enter title.."
              />
              <textarea
                style={{ width: '500px' }}
                value={descEdit}
                onChange={handleChangeDescEdit}
                placeholder="Enter desc.."
              ></textarea>
              <input
                value={priceEdit}
                onChange={handleChangePriceEdit}
                type="number"
                name="Price"
                placeholder="Enter price.."
              />
              <input
                value={priceForChildEdit}
                onChange={handleChangePriceForChildEdit}
                type="number"
                name="Price for child"
                placeholder="Enter price for child.."
              />
              <input
                value={durationEdit}
                onChange={handleChangeDurationEdit}
                type="number"
                name=""
                placeholder="Enter duration.."
              />
              <input onChange={handleChangeBgImageEdit} type="file" />
              <button onClick={handleClickEditTour}>Save Tour Change</button>
            </div>
          )}
        </div>
      </div>
      <Link to="/">
        <div
          style={{ cursor: 'pointer' }}
          onClick={exitUser}
          className={styles.exit}
        >
          <img src={exitLogo} alt="" />
        </div>
      </Link>
    </div>
  );
}

export default Admin;

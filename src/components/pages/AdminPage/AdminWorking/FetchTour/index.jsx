import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addOptionalToTour,
  deleteTour,
  editTour,
  editTourGallery,
  fetchTours,
} from '../../../../../redux/features/admin';
import styles from './styles.module.css';

const FetchTour = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(fetchTours());
  }, [dispatch]);

  const tours = useSelector((state) => state.admin.tours);

  /* // { *===================== Удаление тура =========================* } // */

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

  function handleClickAddOptionalToTour() {
    dispatch(addOptionalToTour(idTourOptional, optionalTitle, optionalPrice));
    setOptionalTitle('');
    setOptionalPrice('');
    setModalOptionalWindowToChange(false);
  }

  /* // { *===================== Добавление фоток в Gallery =========================* } // */

  const [galleryModal, setGalleryModal] = useState(false);
  const [drag, setDrag] = useState(false);
  const [idEditTour, setIdEditTour] = useState('');
  const [gallery, setGallery] = useState('');

  function handleGalleryModal(id) {
    setGalleryModal(!galleryModal);
    setIdEditTour(id);
  }

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }

  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }

  function onDropHandler(e) {
    e.preventDefault();
    let array = [...e.dataTransfer.files];
    setGallery(array);
  }

  function handleClickSendGallery() {
    dispatch(editTourGallery(idEditTour, gallery));
    setIdEditTour('');
    setGallery('');
    setGalleryModal(false);
  }

  return (
    <>
      {/* -------------------------------------OPTIONALS- */}
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
          <div className={styles.carouselButtonGreen}>
            <button onClick={handleClickOpenAddOptionalToTour}>ADD</button>
          </div>
        </div>
      )}
      {/* -------------------------------------//GALLERY */}
      {galleryModal && (
        <div className={styles.gallery}>
          <h1>ADD GALLERY</h1>
          {drag ? (
            <div
              className={styles.dropArea}
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
              onDrop={(e) => onDropHandler(e)}
            >
              Отпустите файлы, чтобы загрузить их
            </div>
          ) : (
            <div
              className={styles.dropArea}
              onDragStart={(e) => dragStartHandler(e)}
              onDragLeave={(e) => dragLeaveHandler(e)}
              onDragOver={(e) => dragStartHandler(e)}
            >
              Перетащите файлы, чтобы загрузить их
            </div>
          )}
          <button onClick={handleClickSendGallery}>SEND GALLERY</button>
        </div>
      )}

      {/* -------------------------//EDIT--------------------------------- */}
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
            style={{ width: '500px', height: '250px' }}
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
          <div className={styles.backgroundImage}>
            <div>
              Изменение фонового рисунка
              <input onChange={handleChangeBgImageEdit} type="file" />
            </div>

            <div className={styles.carouselButton}>
              <button onClick={handleClickEditTour}>Save Tour Change</button>
            </div>
          </div>
        </div>
      )}

      {/* --------------------------------------------FETCH TOURS */}
      {tours.map((tour) => {
        return (
          <div key={tour._id} className={styles.tourContainer}>
            <div className={styles.tourBlock}>
              <div className={styles.adminImage}>
                <img src={`http://localhost:3030/${tour.bgImage}`} alt="" />
              </div>
              <div className={styles.tourDeskr}>
                <div>
                  <b>Категория тура:</b> {tour.typeTour}
                </div>
                <div>
                  <b>Местонахождение:</b> {tour.place}
                </div>
                <div>
                  <b>Название:</b> {tour.title}
                </div>
                <div>
                  <b>Описание:</b> {tour.desc}
                </div>
                <div>
                  <b>Всего билетов::</b> {tour.tickets}
                </div>
                <div>
                  <b>Цена:</b> {tour.price}
                </div>
                <div>
                  <b>Цена для ребенком:</b> {tour.priceForChild}₽
                </div>
                <div>
                  <b>Длительность тура:</b> {tour.duration} Д
                </div>
                <div className={styles.tourButtons}>
                  <div className={styles.carouselButtonRed}>
                    <button onClick={(e) => handleClickDeleteTour(tour._id)}>
                      DEL
                    </button>
                  </div>
                  <div className={styles.carouselButtonBlue}>
                    <button onClick={(e) => handleClickOpenEditTour(tour._id)}>
                      EDIT
                    </button>
                  </div>

                  <div className={styles.carouselButtonGreen}>
                    <button onClick={handleClickOpenAddOptionalToTour}>
                      Optionals
                    </button>
                  </div>
                  <div className={styles.carouselButtonBrownGallery}>
                    <button onClick={(e) => handleGalleryModal(tour._id)}>
                      ADD GALLERY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FetchTour;
